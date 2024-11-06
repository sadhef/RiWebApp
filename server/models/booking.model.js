import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema({
  orderId: { 
    type: String, 
    required: true 
  },
  paymentId: { 
    type: String, 
    required: true 
  },
  amount: {
    type: Number,
    required: true
  },
  status: {
    type: String,
    enum: ['pending', 'completed', 'failed', 'refunded'],
    default: 'pending'
  },
  refunded: { 
    type: Boolean, 
    default: false 
  },
  refundReason: {
    type: String
  },
  refundAmount: {
    type: Number
  },
  refundDate: {
    type: Date
  }
}, { _id: false });

const bookingSchema = new mongoose.Schema({
  user: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: "User",
    required: [true, 'User is required']
  },
  turf: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: "Turf",
    required: [true, 'Turf is required']
  },
  timeSlot: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: "TimeSlot",
    required: [true, 'Time slot is required']
  },
  totalPrice: { 
    type: Number, 
    required: [true, 'Total price is required'],
    min: [0, 'Price cannot be negative']
  },
  status: {
    type: String,
    enum: ["confirmed", "cancelled", "rescheduled", "completed"],
    default: "confirmed"
  },
  cancellationReason: { 
    type: String,
    trim: true
  },
  cancellationDate: {
    type: Date
  },
  rescheduledFrom: { 
    type: Date 
  },
  rescheduledTo: { 
    type: Date 
  },
  rescheduledReason: {
    type: String,
    trim: true
  },
  qrCode: { 
    type: String, 
    required: [true, 'QR code is required'] 
  },
  payment: paymentSchema,
  notes: {
    type: String,
    trim: true
  },
  checkedIn: {
    type: Boolean,
    default: false
  },
  checkedInAt: {
    type: Date
  },
  completedAt: {
    type: Date
  }
}, { 
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

// Add indexes for better query performance
bookingSchema.index({ user: 1, createdAt: -1 });
bookingSchema.index({ turf: 1, createdAt: -1 });
bookingSchema.index({ 'payment.orderId': 1 });
bookingSchema.index({ status: 1 });

// Virtual field for booking duration
bookingSchema.virtual('duration').get(function() {
  if (!this.timeSlot) return null;
  return (new Date(this.timeSlot.endTime) - new Date(this.timeSlot.startTime)) / (1000 * 60 * 60); // Returns duration in hours
});

// Pre-save middleware
bookingSchema.pre('save', function(next) {
  // Set completedAt date when status changes to completed
  if (this.isModified('status') && this.status === 'completed' && !this.completedAt) {
    this.completedAt = new Date();
  }

  // Set cancellationDate when status changes to cancelled
  if (this.isModified('status') && this.status === 'cancelled' && !this.cancellationDate) {
    this.cancellationDate = new Date();
  }

  next();
});

// Instance methods
bookingSchema.methods = {
  // Check if booking can be cancelled
  canBeCancelled() {
    return this.status === 'confirmed' && new Date() < new Date(this.timeSlot.startTime);
  },

  // Check if booking can be rescheduled
  canBeRescheduled() {
    return this.status === 'confirmed' && new Date() < new Date(this.timeSlot.startTime);
  },

  // Check if refund is possible
  isRefundEligible() {
    if (this.status !== 'cancelled') return false;
    if (this.payment.refunded) return false;
    
    const bookingTime = new Date(this.timeSlot.startTime);
    const cancellationTime = this.cancellationDate;
    const hoursDifference = (bookingTime - cancellationTime) / (1000 * 60 * 60);
    
    return hoursDifference >= 24; // Eligible if cancelled at least 24 hours before
  },

  // Calculate refund amount based on cancellation time
  calculateRefundAmount() {
    if (!this.isRefundEligible()) return 0;

    const bookingTime = new Date(this.timeSlot.startTime);
    const cancellationTime = this.cancellationDate;
    const hoursDifference = (bookingTime - cancellationTime) / (1000 * 60 * 60);

    if (hoursDifference >= 48) {
      return this.totalPrice; // Full refund if cancelled 48 hours or more before
    } else if (hoursDifference >= 24) {
      return this.totalPrice * 0.5; // 50% refund if cancelled between 24-48 hours before
    }
    return 0; // No refund if cancelled less than 24 hours before
  }
};

// Static methods
bookingSchema.statics = {
  // Get upcoming bookings for a user
  async getUpcomingBookings(userId) {
    return this.find({
      user: userId,
      status: 'confirmed',
      'timeSlot.startTime': { $gt: new Date() }
    })
    .populate('turf', 'name location')
    .populate('timeSlot')
    .sort({ 'timeSlot.startTime': 1 });
  },

  // Get booking statistics for a turf
  async getTurfStatistics(turfId, startDate, endDate) {
    return this.aggregate([
      {
        $match: {
          turf: mongoose.Types.ObjectId(turfId),
          createdAt: {
            $gte: startDate,
            $lte: endDate
          }
        }
      },
      {
        $group: {
          _id: null,
          totalBookings: { $sum: 1 },
          totalRevenue: { $sum: '$totalPrice' },
          completedBookings: {
            $sum: {
              $cond: [{ $eq: ['$status', 'completed'] }, 1, 0]
            }
          },
          cancelledBookings: {
            $sum: {
              $cond: [{ $eq: ['$status', 'cancelled'] }, 1, 0]
            }
          }
        }
      }
    ]);
  }
};

// Query middleware to automatically populate certain fields
bookingSchema.pre('find', function(next) {
  this.populate('user', 'name email')
      .populate('turf', 'name location')
      .populate('timeSlot');
  next();
});

const Booking = mongoose.model("Booking", bookingSchema);

export default Booking;