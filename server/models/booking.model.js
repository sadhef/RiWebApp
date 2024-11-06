// server/controllers/user/booking.controller.js

import adjustTime from "../../utils/adjustTime.js";
import razorpay from "../../config/razorpay.js";
import crypto from "crypto";
import Booking from "../../models/booking.model.js";
import TimeSlot from "../../models/timeSlot.model.js";
import generateQRCode from "../../utils/generateQRCode.js";
import Turf from "../../models/turf.model.js";
import generateEmail, { generateHTMLContent } from "../../utils/generateEmail.js";
import User from "../../models/user.model.js";
import { format, parseISO } from "date-fns";
import chalk from "chalk";

export const verifyPayment = async (req, res) => {
  const userId = req.user.user;

  try {
    console.log("Request body:", req.body); // Debug log

    const {
      id: turfId,
      duration,
      startTime,
      endTime,
      selectedTurfDate,
      totalPrice,
      paymentId,
      orderId,
      razorpay_signature,
    } = req.body;

    // Validate required fields
    if (!turfId || !startTime || !endTime || !selectedTurfDate || !paymentId || !orderId || !razorpay_signature) {
      return res.status(400).json({
        success: false,
        message: "Missing required fields"
      });
    }

    // Format times
    const formattedStartTime = format(parseISO(startTime), "hh:mm a");
    const formattedEndTime = format(parseISO(endTime), "hh:mm a");
    const formattedDate = format(parseISO(selectedTurfDate), "d MMM yyyy");

    // Payment Verification
    try {
      const hmac = crypto.createHmac("sha256", process.env.RAZORPAY_KEY_SECRET);
      hmac.update(orderId + "|" + paymentId);
      const generated_signature = hmac.digest("hex");

      if (generated_signature !== razorpay_signature) {
        console.log("Signature verification failed");
        return res.status(400).json({
          success: false,
          message: "Payment verification failed"
        });
      }
    } catch (verificationError) {
      console.error("Payment verification error:", verificationError);
      return res.status(400).json({
        success: false,
        message: "Payment verification error"
      });
    }

    // Fetch User and Turf
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

    // Generate QR Code
    let QRcode;
    try {
      QRcode = await generateQRCode(
        totalPrice,
        formattedStartTime,
        formattedEndTime,
        formattedDate,
        turf.name,
        turf.location
      );
    } catch (qrError) {
      console.error("QR Code generation error:", qrError);
      return res.status(500).json({
        success: false,
        message: "Failed to generate QR code"
      });
    }

    // Create TimeSlot
    let timeSlot;
    try {
      const adjustedStartTime = adjustTime(startTime, selectedTurfDate);
      const adjustedEndTime = adjustTime(endTime, selectedTurfDate);

      timeSlot = await TimeSlot.create({
        turf: turfId,
        startTime: adjustedStartTime,
        endTime: adjustedEndTime
      });
    } catch (timeSlotError) {
      console.error("Time slot creation error:", timeSlotError);
      return res.status(500).json({
        success: false,
        message: "Failed to create time slot"
      });
    }

    // Create Booking
    let booking;
    try {
      booking = await Booking.create({
        user: userId,
        turf: turfId,
        timeSlot: timeSlot._id,
        totalPrice,
        qrCode: QRcode,
        payment: {
          orderId,
          paymentId,
          amount: totalPrice,
          status: 'completed'
        },
        status: "confirmed"
      });

      // Update user's bookings
      await User.findByIdAndUpdate(userId, {
        $push: { bookings: booking._id }
      });
    } catch (bookingError) {
      console.error("Booking creation error:", bookingError);
      // Cleanup created time slot if booking fails
      if (timeSlot) {
        await TimeSlot.findByIdAndDelete(timeSlot._id);
      }
      return res.status(500).json({
        success: false,
        message: "Failed to create booking"
      });
    }

    // Send Confirmation Email
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
      console.error("Email sending error:", emailError);
      // Don't fail the booking if email fails
    }

    // Return success response
    return res.status(200).json({
      success: true,
      message: "Booking confirmed successfully!",
      data: {
        bookingId: booking._id,
        turfName: turf.name,
        date: formattedDate,
        time: `${formattedStartTime} - ${formattedEndTime}`,
        amount: totalPrice,
        qrCode: QRcode
      }
    });

  } catch (error) {
    console.error("Verification error:", error);
    return res.status(500).json({
      success: false,
      message: "An error occurred during payment verification",
      error: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error'
    });
  }
};

export const createOrder = async (req, res) => {
  const userId = req.user.user;
  try {
    const { totalPrice } = req.body;

    if (!totalPrice) {
      return res.status(400).json({
        success: false,
        message: "Total price is required"
      });
    }

    const user = await User.findById(userId).select("name email");
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found"
      });
    }

    const options = {
      amount: Math.round(totalPrice * 100), // Convert to smallest currency unit
      currency: "INR",
      receipt: `receipt_${Date.now()}`,
      notes: {
        userId: userId,
        userEmail: user.email
      }
    };

    const order = await razorpay.orders.create(options);

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
  const userId = req.user.user;
  try {
    const bookings = await Booking.find({ user: userId })
      .sort({ createdAt: -1 })
      .populate("turf", "name location")
      .populate("timeSlot", "startTime endTime");

    return res.status(200).json({
      success: true,
      data: bookings
    });
  } catch (error) {
    console.error("Error fetching bookings:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to fetch bookings",
      error: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error'
    });
  }
};