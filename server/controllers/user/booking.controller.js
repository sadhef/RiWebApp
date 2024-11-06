// server/controllers/user/booking.controller.js

import User from "../../models/user.model.js";
import Turf from "../../models/turf.model.js";
import Booking from "../../models/booking.model.js";
import TimeSlot from "../../models/timeSlot.model.js";
import generateQRCode from "../../utils/generateQRCode.js";
import generateEmail, { generateHTMLContent } from "../../utils/generateEmail.js";
import { format, parseISO } from "date-fns";
import chalk from "chalk";
import razorpay from "../../config/razorpay.js";
import crypto from "crypto";

export const verifyPayment = async (req, res) => {
  try {
    // Log request details
    console.log("Payment verification request received:", {
      body: req.body,
      user: req.user
    });

    const {
      id: turfId,
      startTime,
      endTime,
      selectedTurfDate,
      totalPrice,
      paymentId,
      orderId,
      razorpay_signature
    } = req.body;

    // Basic validation
    if (!turfId || !startTime || !endTime || !selectedTurfDate || !paymentId || !orderId || !razorpay_signature) {
      return res.status(400).json({
        success: false,
        message: "Missing required payment fields"
      });
    }

    // Verify Razorpay signature
    try {
      const secret = process.env.RAZORPAY_KEY_SECRET;
      const generated_signature = crypto
        .createHmac('sha256', secret)
        .update(`${orderId}|${paymentId}`)
        .digest('hex');

      if (generated_signature !== razorpay_signature) {
        console.error("Signature verification failed");
        return res.status(400).json({
          success: false,
          message: "Invalid payment signature"
        });
      }
    } catch (signatureError) {
      console.error("Signature verification error:", signatureError);
      return res.status(400).json({
        success: false,
        message: "Payment signature verification failed"
      });
    }

    // Verify payment status with Razorpay
    try {
      const payment = await razorpay.payments.fetch(paymentId);
      if (payment.status !== 'captured') {
        return res.status(400).json({
          success: false,
          message: "Payment not completed"
        });
      }
    } catch (paymentError) {
      console.error("Payment verification error:", paymentError);
      return res.status(400).json({
        success: false,
        message: "Failed to verify payment status"
      });
    }

    // Get user and turf details
    const userId = req.user.user;
    let user, turf;

    try {
      [user, turf] = await Promise.all([
        User.findById(userId),
        Turf.findById(turfId)
      ]);

      if (!user || !turf) {
        throw new Error(!user ? "User not found" : "Turf not found");
      }
    } catch (fetchError) {
      console.error("Error fetching user/turf:", fetchError);
      return res.status(404).json({
        success: false,
        message: fetchError.message
      });
    }

    // Format dates and generate QR code
    let formattedStartTime, formattedEndTime, formattedDate, QRcode;
    try {
      formattedStartTime = format(parseISO(startTime), "hh:mm a");
      formattedEndTime = format(parseISO(endTime), "hh:mm a");
      formattedDate = format(parseISO(selectedTurfDate), "d MMM yyyy");

      QRcode = await generateQRCode(
        totalPrice,
        formattedStartTime,
        formattedEndTime,
        formattedDate,
        turf.name,
        turf.location
      );
    } catch (formatError) {
      console.error("Error formatting dates or generating QR code:", formatError);
      return res.status(500).json({
        success: false,
        message: "Error processing booking details"
      });
    }

    // Create time slot and booking
    let timeSlot, booking;
    try {
      timeSlot = await TimeSlot.create({
        turf: turfId,
        startTime: parseISO(startTime),
        endTime: parseISO(endTime),
        isBooked: true
      });

      booking = await Booking.create({
        user: userId,
        turf: turfId,
        timeSlot: timeSlot._id,
        totalPrice,
        qrCode: QRcode,
        payment: {
          orderId,
          paymentId,
          status: 'completed'
        },
        status: 'confirmed'
      });

      await User.findByIdAndUpdate(userId, {
        $push: { bookings: booking._id }
      });
    } catch (bookingError) {
      console.error("Error creating booking:", bookingError);
      if (timeSlot && timeSlot._id) {
        await TimeSlot.findByIdAndDelete(timeSlot._id);
      }
      return res.status(500).json({
        success: false,
        message: "Failed to create booking"
      });
    }

    // Send email confirmation
    try {
      const htmlContent = generateHTMLContent(
        turf.name,
        turf.location,
        formattedDate,
        formattedStartTime,
        formattedEndTime,
        totalPrice,
        QRcode
      );

      await generateEmail(
        user.email,
        "RiField - Booking Confirmation",
        htmlContent
      );
    } catch (emailError) {
      console.error("Email sending failed:", emailError);
      // Don't fail the booking if email fails
    }

    // Return success response
    return res.status(200).json({
      success: true,
      message: "Booking confirmed successfully!",
      data: {
        bookingId: booking._id,
        qrCode: QRcode,
        startTime: formattedStartTime,
        endTime: formattedEndTime,
        date: formattedDate,
        turfName: turf.name,
        amount: totalPrice
      }
    });

  } catch (error) {
    console.error("Payment verification error:", error);
    return res.status(500).json({
      success: false,
      message: "Payment verification failed",
      error: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error'
    });
  }
};

export const createOrder = async (req, res) => {
  try {
    console.log("Create order request received:", req.body);

    const { totalPrice } = req.body;
    if (!totalPrice) {
      return res.status(400).json({
        success: false,
        message: "Total price is required"
      });
    }

    const userId = req.user.user;
    const user = await User.findById(userId).select("name email");
    
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found"
      });
    }

    const options = {
      amount: Math.round(totalPrice * 100),
      currency: "INR",
      receipt: `receipt_${Date.now()}`,
      notes: {
        userId: userId.toString(),
        userEmail: user.email
      }
    };

    console.log("Creating Razorpay order with options:", options);

    const order = await razorpay.orders.create(options);
    console.log("Razorpay order created:", order);

    return res.status(200).json({
      success: true,
      order,
      user: {
        name: user.name,
        email: user.email
      }
    });
  } catch (error) {
    console.error("Order creation error:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to create order",
      error: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error'
    });
  }
};

export const getBookings = async (req, res) => {
  try {
    const userId = req.user.user;
    const bookings = await Booking.find({ user: userId })
      .sort({ createdAt: -1 })
      .populate('turf', 'name location')
      .populate('timeSlot', 'startTime endTime');

    return res.status(200).json({
      success: true,
      data: bookings
    });
  } catch (error) {
    console.error("Error fetching bookings:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to fetch bookings"
    });
  }
};