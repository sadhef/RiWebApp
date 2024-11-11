import Booking from '../../models/booking.model.js';

export const getRevenueAnalytics = async (req, res) => {
  try {
    const { timeframe } = req.query;
    const ownerId = req.owner.id;

    let dateFilter;
    const now = new Date();

    switch (timeframe) {
      case 'week':
        dateFilter = new Date(now.setDate(now.getDate() - 7));
        break;
      case 'month':
        dateFilter = new Date(now.setMonth(now.getMonth() - 1));
        break;
      case 'year':
        dateFilter = new Date(now.setFullYear(now.getFullYear() - 1));
        break;
      default:
        dateFilter = new Date(now.setDate(now.getDate() - 7));
    }

    const bookings = await Booking.aggregate([
      {
        $match: {
          createdAt: { $gte: dateFilter },
          owner: mongoose.Types.ObjectId(ownerId)
        }
      },
      {
        $group: {
          _id: { $dateToString: { format: "%Y-%m-%d", date: "$createdAt" } },
          revenue: { $sum: "$totalPrice" }
        }
      },
      {
        $sort: { _id: 1 }
      }
    ]);

    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};