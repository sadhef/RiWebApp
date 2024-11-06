// server/controllers/user/booking.controller.js

import adjustTime from "../../utils/adjustTime.js";
import razorpay from "../../config/razorpay.js";
import crypto from "crypto";
import Booking from "../../models/booking.model.js";
import TimeSlot from "../../models/timeSlot.model.js";
import generateQRCode from "../../utils/generateQRCode.js";
import Turf from "../../models/turf.model.js";
import generateEmail, {
  generateHTMLContent,
} from "../../utils/generateEmail.js";
import User from "../../models/user.model.js";
import { format, parseISO } from "date-fns";
import chalk from "chalk";

// Get all bookings for a user
export const getBookings = async (req, res) => {
  const userId = req.user.user;
  try {
    const bookings = await Booking.find({ user: userId })
      .sort({ createdAt: -1 })
      .select("qrCode totalPrice")
      .populate("timeSlot", "startTime endTime")
      .populate("turf", "name location");
    
    console.log(chalk.green("Successfully fetched bookings for user:", userId));
    return res.status(200).json(bookings);
  } catch (error) {
    console.error(chalk.red("Error fetching bookings:", error));
    return res.status(500).json({ 
      success: false,
      message: "Failed to fetch bookings"
    });
  }
};

// Create a new booking order
export const createOrder = async (req, res) => {
  const userId = req.user.user;
  try {
    const { totalPrice } = req.body;
    
    const user = await User.findById(userId).select("name email");
    if (!user) {
      console.log(chalk.yellow("User not found:", userId));
      return res.status(400).json({ 
        success: false,
        message: "User not found" 
      });
    }

    const options = {
      amount: totalPrice * 100,
      currency: "INR",
      receipt: `receipt_${Date.now()}`,
      notes: {
        userId: userId,
        userEmail: user.email
      }
    };

    const order = await razorpay.orders.create(options);
    console.log(chalk.green("Created Razorpay order:", order.id));

    return res.status(200).json({ 
      success: true,
      order, 
      user 
    });
  } catch (error) {
    console.error(chalk.red("Error creating order:", error));
    return res.status(400).json({ 
      success: false,
      message: "Failed to create order",
      error: error.message 
    });
  }
};

// Verify payment and complete booking
export const verifyPayment = async (req, res) => {
  const userId = req.user.user;

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

  try {
    // Format dates and times
    const formattedStartTime = format(parseISO(startTime), "hh:mm a");
    const formattedEndTime = format(parseISO(endTime), "hh:mm a");
    const formattedDate = format(parseISO(selectedTurfDate), "d MMM yyyy");

    console.log(chalk.blue("Verifying payment for booking:"), {
      turfId,
      startTime: formattedStartTime,
      endTime: formattedEndTime,
      date: formattedDate
    });

    // Verify payment signature
    const hmac = crypto.createHmac("sha256", process.env.RAZORPAY_KEY_SECRET);
    hmac.update(`${orderId}|${paymentId}`);
    const generatedSignature = hmac.digest("hex");
    
    if (generatedSignature !== razorpay_signature) {
      console.log(chalk.red("Payment signature verification failed"));
      return res.status(400).json({ 
        success: false, 
        message: "Payment verification failed" 
      });
    }

    // Get user and turf details
    const [user, turf] = await Promise.all([
      User.findById(userId),
      Turf.findById(turfId),
    ]);

    if (!user || !turf) {
      const errorMessage = !user ? "User not found" : "Turf not found";
      console.log(chalk.yellow(errorMessage));
      throw new Error(errorMessage);
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
    console.log(chalk.green("Generated QR code for booking"));

    // Create time slot and booking
    const adjustedStartTime = adjustTime(startTime, selectedTurfDate);
    const adjustedEndTime = adjustTime(endTime, selectedTurfDate);

    const timeSlot = await TimeSlot.create({
      turf: turfId,
      startTime: adjustedStartTime,
      endTime: adjustedEndTime,
    });

    const booking = await Booking.create({
      user: userId,
      turf: turfId,
      timeSlot: timeSlot._id,
      totalPrice,
      qrCode: QRcode,
      payment: { 
        orderId, 
        paymentId,
        status: 'completed',
        timestamp: new Date()
      },
      status: 'confirmed'
    });

    // Update user's bookings
    await User.findByIdAndUpdate(userId, { 
      $push: { bookings: booking._id } 
    });

    console.log(chalk.green("Created booking:", booking._id));

    // Generate and send confirmation email
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

      console.log(chalk.green(`Confirmation email sent to ${user.email}`));
    } catch (emailError) {
      console.error(chalk.red("Email sending failed:", emailError));
      // Continue as booking was successful
    }

    // Return success response
    return res.status(200).json({
      success: true,
      message: "Booking successful! Check your email for confirmation.",
      booking: {
        id: booking._id,
        turfName: turf.name,
        date: formattedDate,
        time: `${formattedStartTime} - ${formattedEndTime}`,
        amount: totalPrice
      }
    });

  } catch (error) {
    console.error(chalk.red("Error in verifyPayment:", error));
    return res.status(500).json({
      success: false,
      message: "An error occurred during booking verification",
      error: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error'
    });
  }
};

// Get single booking details
export const getBookingDetails = async (req, res) => {
  try {
    const { bookingId } = req.params;
    const userId = req.user.user;

    const booking = await Booking.findOne({ 
      _id: bookingId, 
      user: userId 
    })
    .populate('turf', 'name location')
    .populate('timeSlot', 'startTime endTime');

    if (!booking) {
      return res.status(404).json({
        success: false,
        message: "Booking not found"
      });
    }

    return res.status(200).json({
      success: true,
      booking
    });

  } catch (error) {
    console.error(chalk.red("Error fetching booking details:", error));
    return res.status(500).json({
      success: false,
      message: "Failed to fetch booking details"
    });
  }
};