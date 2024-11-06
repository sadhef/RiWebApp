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

// Create order for payment
export const createOrder = async (req, res) => {
  try {
    const { totalPrice } = req.body;
    const userId = req.user.user;

    const user = await User.findById(userId).select("name email");
    if (!user) {
      return res.status(404).json({ 
        success: false, 
        message: "User not found" 
      });
    }

    const options = {
      amount: Math.round(totalPrice * 100), // amount in paisa
      currency: "INR",
      receipt: `receipt_${Date.now()}`,
      notes: {
        userId: userId.toString()
      }
    };

    console.log("Creating order with options:", options);

    const order = await razorpay.orders.create(options);
    
    console.log("Order created:", order);

    return res.status(200).json({ 
      success: true, 
      order, 
      user 
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

// Verify payment and create booking
export const verifyPayment = async (req, res) => {
  try {
    const userId = req.user.user;
    
    console.log("Received verify payment request for user:", userId);
    console.log("Request body:", req.body);

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

    // Verify signature
    const hmac = crypto.createHmac('sha256', process.env.RAZORPAY_KEY_SECRET);
    const data = `${orderId}|${paymentId}`;
    hmac.update(data);
    const generatedSignature = hmac.digest('hex');

    if (generatedSignature !== razorpay_signature) {
      console.log("Signature verification failed");
      return res.status(400).json({
        success: false,
        message: "Payment signature verification failed"
      });
    }

    // Format dates
    const formattedStartTime = format(parseISO(startTime), "hh:mm a");
    const formattedEndTime = format(parseISO(endTime), "hh:mm a");
    const formattedDate = format(parseISO(selectedTurfDate), "d MMM yyyy");

    // Get user and turf details
    const [user, turf] = await Promise.all([
      User.findById(userId),
      Turf.findById(turfId)
    ]);

    if (!user || !turf) {
      throw new Error(!user ? "User not found" : "Turf not found");
    }

    // Generate QR Code
    const QRcode = await generateQRCode(
      totalPrice,
      formattedStartTime,
      formattedEndTime,
      formattedDate,
      turf.name,
      turf.location
    );

    // Create time slot
    const timeSlot = await TimeSlot.create({
      turf: turfId,
      startTime: parseISO(startTime),
      endTime: parseISO(endTime)
    });

    // Create booking
    const booking = await Booking.create({
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

    // Update user's bookings
    await User.findByIdAndUpdate(userId, {
      $push: { bookings: booking._id }
    });

    // Send confirmation email
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
      // Continue as booking was successful
    }

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

// Get user's bookings
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