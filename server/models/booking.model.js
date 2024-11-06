// server/models/booking.model.js
import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  turf: { type: mongoose.Schema.Types.ObjectId, ref: "Turf" },
  timeSlot: { type: mongoose.Schema.Types.ObjectId, ref: "TimeSlot" },
  totalPrice: { type: Number, required: true },
  status: { 
    type: String, 
    enum: ["confirmed", "cancelled", "rescheduled", "completed"],
    default: "confirmed"
  },
  cancellationReason: { type: String },
  rescheduledFrom: { type: Date },
  qrCode: { type: String, required: true },
  payment: {
    orderId: { type: String, required: true },
    paymentId: { type: String, required: true },
    refunded: { type: Boolean, default: false }
  },
}, { timestamps: true });

export default mongoose.model("Booking", bookingSchema);