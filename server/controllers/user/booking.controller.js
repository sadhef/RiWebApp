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

export const createOrder = async (req, res) => {
  const userId = req.user.user;
  try {
    const { totalPrice } = req.body;
    // select only name and contact and email
    const user = await User.findById(userId).select("name  email");
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }
    const options = {
      amount: totalPrice * 100,
      currency: "INR",
      receipt: `receipt${Date.now()}`,
    };
    const order = await razorpay.orders.create(options);
    return res.status(200).json({ order, user });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

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
    const formattedStartTime = format(parseISO(startTime), "hh:mm a");
    const formattedEndTime = format(parseISO(endTime), "hh:mm a");
    const formattedDate = format(parseISO(selectedTurfDate), "d MMM yyyy");

    // Verify signature
    const hmac = crypto.createHmac("sha256", process.env.RAZORPAY_KEY_SECRET);
    hmac.update(`${orderId}|${paymentId}`);
    const generatedSignature = hmac.digest("hex");
    
    if (generatedSignature !== razorpay_signature) {
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
      payment: { orderId, paymentId },
    });

    // Update user's bookings
    await User.findByIdAndUpdate(userId, { 
      $push: { bookings: booking._id } 
    });

    // Generate and send email
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
      // Don't throw error here - booking was successful
    }

    return res.status(200).json({
      success: true,
      message: "Booking successful! Check your email for confirmation.",
    });

  } catch (error) {
    console.error(chalk.red("Error in verifyPayment:", error));
    return res.status(500).json({
      success: false,
      message: "An error occurred during booking verification",
    });
  }
};