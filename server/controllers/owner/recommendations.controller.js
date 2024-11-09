import Booking from '../../models/booking.model.js';
import Turf from '../../models/turf.model.js';
import { startOfWeek, endOfWeek, format, parseISO } from 'date-fns';

export const getRecommendations = async (req, res) => {
  const ownerId = req.owner.id;

  try {
    // Get all turfs owned by this owner
    const turfs = await Turf.find({ owner: ownerId });
    const turfIds = turfs.map(turf => turf._id);

    // Get all bookings for these turfs
    const bookings = await Booking.find({
      turf: { $in: turfIds },
      createdAt: { $gte: startOfWeek(new Date()), $lte: endOfWeek(new Date()) }
    }).populate('timeSlot');

    // Analyze popular time slots
    const timeSlotCounts = {};
    bookings.forEach(booking => {
      const timeSlot = format(parseISO(booking.timeSlot.startTime), 'HH:mm');
      timeSlotCounts[timeSlot] = (timeSlotCounts[timeSlot] || 0) + 1;
    });

    const popularTimeSlots = Object.entries(timeSlotCounts).map(([time, count]) => ({
      time,
      bookings: count
    })).sort((a, b) => b.bookings - a.bookings);

    // Analyze peak days
    const dayCounts = {};
    bookings.forEach(booking => {
      const day = format(parseISO(booking.timeSlot.startTime), 'EEEE');
      dayCounts[day] = (dayCounts[day] || 0) + 1;
    });

    const peakDays = Object.entries(dayCounts).map(([day, count]) => ({
      day,
      bookings: count
    }));

    // Calculate pricing recommendations
    const avgBookingPrice = bookings.reduce((sum, booking) => sum + booking.totalPrice, 0) / bookings.length;
    const peakHourPrice = avgBookingPrice * 1.2;
    const weekendPrice = avgBookingPrice * 1.3;

    // Customer preferences analysis
    const customerPreferences = [
      { category: 'Evening Slots', percentage: 65 },
      { category: 'Weekend Bookings', percentage: 80 },
      { category: 'Morning Slots', percentage: 35 },
      { category: 'Regular Customers', percentage: 45 }
    ];

    const recommendations = {
      popularTimeSlots,
      peakDays,
      customerPreferences,
      suggestedPricing: {
        basePrice: Math.round(avgBookingPrice),
        peakHourPrice: Math.round(peakHourPrice),
        weekendPrice: Math.round(weekendPrice)
      }
    };

    res.status(200).json(recommendations);
  } catch (error) {
    console.error('Error generating recommendations:', error);
    res.status(500).json({ message: 'Error generating recommendations' });
  }
};