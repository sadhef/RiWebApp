import Booking from '../../models/booking.model.js';
import Refund from '../../models/refund.model.js';
import razorpay from '../../config/razorpay.js';
import generateEmail from '../../utils/generateEmail.js';

export const processRefund = async (req, res) => {
  try {
    const { bookingId } = req.params;
    const { reason, amount } = req.body;

    const booking = await Booking.findById(bookingId)
      .populate('user')
      .populate('turf');

    if (!booking) {
      return res.status(404).json({ message: 'Booking not found' });
    }

    // Process refund through Razorpay
    const refund = await razorpay.payments.refund(booking.payment.paymentId, {
      amount: amount * 100, // Convert to paise
      notes: {
        reason: reason,
        bookingId: bookingId
      }
    });

    // Create refund record
    const refundRecord = await Refund.create({
      booking: bookingId,
      amount: amount,
      reason: reason,
      razorpayRefundId: refund.id,
      status: 'processed'
    });

    // Update booking status
    booking.status = 'refunded';
    booking.refund = refundRecord._id;
    await booking.save();

    // Send email notification
    const emailContent = `
      <h1>Refund Processed</h1>
      <p>Your refund of ₹${amount} has been processed for booking #${bookingId}.</p>
      <p>Reason: ${reason}</p>
      <p>You should receive the refund in 5-7 business days.</p>
    `;

    await generateEmail(
      booking.user.email,
      'Refund Processed for Your Booking',
      emailContent
    );

    res.status(200).json({
      message: 'Refund processed successfully',
      refund: refundRecord
    });
  } catch (error) {
    console.error('Error processing refund:', error);
    res.status(500).json({
      message: 'Error processing refund',
      error: error.message
    });
  }
};
