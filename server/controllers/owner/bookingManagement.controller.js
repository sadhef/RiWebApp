// server/controllers/owner/bookingManagement.controller.js
import Booking from '../../models/booking.model.js';
import TimeSlot from '../../models/timeSlot.model.js';
import generateEmail from '../../utils/generateEmail.js';

export const rescheduleBooking = async (req, res) => {
  try {
    const { bookingId } = req.params;
    const { date, time } = req.body;

    const booking = await Booking.findById(bookingId)
      .populate('user')
      .populate('turf');

    if (!booking) {
      return res.status(404).json({ message: 'Booking not found' });
    }

    // Update time slot
    const newTimeSlot = await TimeSlot.create({
      turf: booking.turf._id,
      startTime: new Date(`${date}T${time}`),
      endTime: new Date(`${date}T${time}`), // Add duration
    });

    booking.timeSlot = newTimeSlot._id;
    await booking.save();

    // Send email notification
    const emailContent = `Your booking has been rescheduled to ${date} at ${time}`;
    await generateEmail(booking.user.email, 'Booking Rescheduled', emailContent);

    res.status(200).json({ message: 'Booking rescheduled successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const cancelBooking = async (req, res) => {
  try {
    const { bookingId } = req.params;
    const { reason, isRefundRequired } = req.body;

    const booking = await Booking.findById(bookingId)
      .populate('user')
      .populate('turf');

    if (!booking) {
      return res.status(404).json({ message: 'Booking not found' });
    }

    booking.status = 'cancelled';
    booking.cancellationReason = reason;
    await booking.save();

    if (isRefundRequired) {
      // Implement refund logic here
      // Use Razorpay refund API
    }

    // Send email notification
    const emailContent = `Your booking has been cancelled. Reason: ${reason}`;
    await generateEmail(booking.user.email, 'Booking Cancelled', emailContent);

    res.status(200).json({ message: 'Booking cancelled successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};