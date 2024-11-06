// server/models/timeSlot.model.js

import mongoose from "mongoose";

const timeSlotSchema = new mongoose.Schema({
  turf: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Turf',
    required: true
  },
  startTime: {
    type: Date,
    required: true
  },
  endTime: {
    type: Date,
    required: true
  },
  isBooked: {
    type: Boolean,
    default: false
  }
}, { timestamps: true });

// Add index for better query performance
timeSlotSchema.index({ turf: 1, startTime: 1, endTime: 1 });

const TimeSlot = mongoose.model("TimeSlot", timeSlotSchema);

export default TimeSlot;