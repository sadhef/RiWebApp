// server/controllers/owner/bookingEnhanced.controller.js
import Booking from "../../models/booking.model.js";
import Notification from "../../models/notification.model.js";
import Refund from "../../models/refund.model.js";
import razorpay from "../../config/razorpay.js";
import generateEmail from "../../utils/generateEmail.js";

export const getBookingAnalytics = async (req, res) => {
  try {
    const ownerId = req.owner.id;
    
    // Get bookings for owner's turfs
    const bookings = await Booking.find({
      turf: { $in: await Turf.find({ owner: ownerId }).select('_id') }
    });

    // Calculate analytics
    const analytics = {
      totalBookings: bookings.length,
      totalRevenue: bookings.reduce((sum, booking) => sum + booking.totalPrice, 0),
      cancelledBookings: bookings.filter(b => b.status === "cancelled").length,
      rescheduledBookings: bookings.filter(b => b.status === "rescheduled").length,
    };

    res.status(200).json(analytics);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const rescheduleBooking = async (req, res) => {
  try {
    const { bookingId } = req.params;
    const { newDate, newTime, reason } = req.body;

    const booking = await Booking.findById(bookingId)
      .populate('user')
      .populate('turf');

    if (!booking) {
      return res.status(404).json({ message: "Booking not found" });
    }

    // Store old time for reference
    const oldTime = booking.timeSlot;

    // Update booking status
    booking.status = "rescheduled";
    booking.rescheduledFrom = oldTime;
    
    // Create new time slot
    const newTimeSlot = await TimeSlot.create({
      turf: booking.turf._id,
      startTime: newDate,
      endTime: newTime
    });

    booking.timeSlot = newTimeSlot._id;
    await booking.save();

    // Create notification
    await Notification.create({
      user: booking.user._id,
      title: "Booking Rescheduled",
      message: `Your booking for ${booking.turf.name} has been rescheduled to ${newDate}`,
      type: "reschedule"
    });

    // Send email
    const emailContent = generateHTMLContent(
      "Booking Rescheduled",
      `Your booking has been rescheduled.\nNew Date: ${newDate}\nNew Time: ${newTime}\nReason: ${reason}`
    );
    await generateEmail(booking.user.email, "Booking Rescheduled", emailContent);

    res.status(200).json({ message: "Booking rescheduled successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const processRefund = async (req, res) => {
  try {
    const { bookingId } = req.params;
    const { reason } = req.body;

    const booking = await Booking.findById(bookingId).populate('user');

    if (!booking) {
      return res.status(404).json({ message: "Booking not found" });
    }

    // Create Razorpay refund
    const refund = await razorpay.payments.refund(booking.payment.paymentId, {
      amount: booking.totalPrice * 100, // Convert to paise
      notes: {
        reason: reason,
        bookingId: bookingId
      }
    });

    // Create refund record
    await Refund.create({
      booking: bookingId,
      amount: booking.totalPrice,
      reason: reason,
      status: "processed",
      razorpayRefundId: refund.id
    });

    // Update booking
    booking.payment.refunded = true;
    await booking.save();

    // Create notification
    await Notification.create({
      user: booking.user._id,
      title: "Refund Processed",
      message: `Refund of ₹${booking.totalPrice} has been processed for your booking`,
      type: "refund"
    });

    // Send email
    const emailContent = generateHTMLContent(
      "Refund Processed",
      `Your refund of ₹${booking.totalPrice} has been processed.\nReason: ${reason}`
    );
    await generateEmail(booking.user.email, "Refund Processed", emailContent);

    res.status(200).json({ message: "Refund processed successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};