// src/components/owner/BookingManagement/BookingList.jsx
import React from 'react';
import BookingActions from './BookingActions';

const BookingList = ({ bookings, onReschedule, onCancel }) => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Booking Management</h2>
      <div className="grid gap-4">
        {bookings.map((booking) => (
          <div key={booking.id} className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-bold">{booking.user.name}</h3>
                  <p className="text-sm text-gray-500">{booking.date}</p>
                  <p>Time: {booking.startTime} - {booking.endTime}</p>
                  <p>Amount: ₹{booking.amount}</p>
                </div>
                <BookingActions 
                  booking={booking}
                  onReschedule={onReschedule}
                  onCancel={onCancel}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookingList;