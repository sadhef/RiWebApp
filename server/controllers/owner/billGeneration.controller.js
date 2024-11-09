import { PDFDocument, StandardFonts, rgb } from 'pdf-lib';
import Booking from '../../models/booking.model.js';
import cloudinary from '../../utils/cloudinary.js';
import generateEmail from '../../utils/generateEmail.js';

export const generateBill = async (req, res) => {
  try {
    const { bookingId } = req.params;
    const booking = await Booking.findById(bookingId)
      .populate('user')
      .populate('turf')
      .populate('timeSlot');

    if (!booking) {
      return res.status(404).json({ message: 'Booking not found' });
    }

    // Create PDF document
    const pdfDoc = await PDFDocument.create();
    const page = pdfDoc.addPage();
    const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
    const fontSize = 12;

    // Add content to PDF
    page.drawText('TURF BOOKING BILL', {
      x: 50,
      y: 750,
      size: 20,
      font,
    });

    // Add booking details
    const details = [
      `Booking ID: ${booking._id}`,
      `Customer Name: ${booking.user.name}`,
      `Turf Name: ${booking.turf.name}`,
      `Booking Date: ${new Date(booking.timeSlot.startTime).toLocaleDateString()}`,
      `Duration: ${booking.duration} hours`,
      `Amount: ₹${booking.totalPrice}`,
      `GST (18%): ₹${(booking.totalPrice * 0.18).toFixed(2)}`,
      `Total Amount: ₹${(booking.totalPrice * 1.18).toFixed(2)}`
    ];

    details.forEach((detail, index) => {
      page.drawText(detail, {
        x: 50,
        y: 700 - (index * 30),
        size: fontSize,
        font,
      });
    });

    // Save PDF
    const pdfBytes = await pdfDoc.save();

    // Upload to Cloudinary
    const result = await cloudinary.uploader.upload(pdfBytes, {
      folder: 'bills',
      resource_type: 'raw'
    });

    // Send email to customer
    const emailContent = `
      <h1>Your Booking Bill</h1>
      <p>Thank you for booking with us. Please find your bill attached.</p>
      <p>Bill URL: ${result.secure_url}</p>
    `;

    await generateEmail(
      booking.user.email,
      'Your Turf Booking Bill',
      emailContent
    );

    res.status(200).json({
      message: 'Bill generated successfully',
      billUrl: result.secure_url
    });

  } catch (error) {
    console.error('Error generating bill:', error);
    res.status(500).json({ message: 'Error generating bill' });
  }
};

export const previewBill = async (req, res) => {
  try {
    const { bookingId } = req.params;
    const booking = await Booking.findById(bookingId)
      .populate('user')
      .populate('turf')
      .populate('timeSlot');

    if (!booking) {
      return res.status(404).json({ message: 'Booking not found' });
    }

    const billPreview = {
      bookingId: booking._id,
      customerName: booking.user.name,
      turfName: booking.turf.name,
      bookingDate: booking.timeSlot.startTime,
      duration: booking.duration,
      baseAmount: booking.totalPrice,
      gst: booking.totalPrice * 0.18,
      totalAmount: booking.totalPrice * 1.18
    };

    res.status(200).json(billPreview);
  } catch (error) {
    console.error('Error previewing bill:', error);
    res.status(500).json({ message: 'Error previewing bill' });
  }
};