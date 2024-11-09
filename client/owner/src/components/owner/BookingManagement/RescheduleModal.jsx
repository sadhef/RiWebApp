// src/components/owner/BookingManagement/RescheduleModal.jsx
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const RescheduleModal = ({ booking, onClose, onReschedule }) => {
  const [newDate, setNewDate] = useState(new Date());
  const [newTime, setNewTime] = useState(booking.startTime);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await onReschedule(booking.id, { date: newDate, time: newTime });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-base-100 p-6 rounded-lg w-full max-w-md">
        <h3 className="text-lg font-bold mb-4">Reschedule Booking</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">New Date</label>
            <DatePicker
              selected={newDate}
              onChange={date => setNewDate(date)}
              className="input input-bordered w-full"
              minDate={new Date()}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">New Time</label>
            <select 
              className="select select-bordered w-full"
              value={newTime}
              onChange={(e) => setNewTime(e.target.value)}
            >
              {/* Time slots */}
              <option value="09:00">09:00 AM</option>
              <option value="10:00">10:00 AM</option>
              {/* Add more time slots */}
            </select>
          </div>
          <div className="flex justify-end gap-2">
            <button 
              type="button" 
              className="btn btn-ghost"
              onClick={onClose}
            >
              Cancel
            </button>
            <button type="submit" className="btn btn-primary">
              Confirm Reschedule
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RescheduleModal;