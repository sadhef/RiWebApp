import mongoose from "mongoose";

const refundSchema = new mongoose.Schema({
  booking: { type: mongoose.Schema.Types.ObjectId, ref: "Booking" },
  amount: { type: Number, required: true },
  reason: { type: String, required: true },
  razorpayRefundId: { type: String },
  status: {
    type: String,
    enum: ["pending", "processed", "failed"],
    default: "pending"
  },
}, { timestamps: true });

export default mongoose.model("Refund", refundSchema);