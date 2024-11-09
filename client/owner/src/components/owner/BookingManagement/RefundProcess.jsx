// client/owner/src/components/owner/BookingManagement/RefundProcess.jsx
import React, { useState } from 'react';
import axiosInstance from '../../../hooks/useAxiosInstance';

const RefundProcess = ({ booking, onRefundComplete }) => {
  const [loading, setLoading] = useState(false);
  const [reason, setReason] = useState('');
  const [refundAmount, setRefundAmount] = useState(booking.amount);

  const handleRefund = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const response = await axiosInstance.post(`/api/owner/bookings/${booking.id}/refund`, {
        reason,
        amount: refundAmount
      });

      if (response.data.success) {
        onRefundComplete(response.data);
      }
    } catch (error) {
      console.error('Error processing refund:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">Process Refund</h2>
        <form onSubmit={handleRefund}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Refund Amount</span>
            </label>
            <input
              type="number"
              className="input input-bordered"
              value={refundAmount}
              onChange={(e) => setRefundAmount(e.target.value)}
              max={booking.amount}
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Reason for Refund</span>
            </label>
            <textarea
              className="textarea textarea-bordered"
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              required
            />
          </div>

          <div className="mt-4">
            <button 
              type="submit" 
              className="btn btn-primary w-full"
              disabled={loading}
            >
              {loading ? (
                <span className="loading loading-spinner loading-sm"></span>
              ) : (
                'Process Refund'
              )}
            </button>
          </div>
        </form>
      </div>
      <div className="mt-4 space-y-4">
        <div className="bg-base-200 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Refund Policy</h3>
          <ul className="list-disc list-inside space-y-1 text-sm">
            <li>Full refund available for cancellations 24 hours before booking</li>
            <li>50% refund for cancellations within 24 hours</li>
            <li>No refund for no-shows or late cancellations</li>
          </ul>
        </div>

        <div className="bg-base-200 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Booking Details</h3>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div>
              <p className="font-medium">Booking ID:</p>
              <p>{booking.id}</p>
            </div>
            <div>
              <p className="font-medium">Customer Name:</p>
              <p>{booking.userName}</p>
            </div>
            <div>
              <p className="font-medium">Booking Date:</p>
              <p>{new Date(booking.bookingDate).toLocaleDateString()}</p>
            </div>
            <div>
              <p className="font-medium">Original Amount:</p>
              <p>₹{booking.amount}</p>
            </div>
          </div>
        </div>

        <div className="bg-base-200 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Refund Summary</h3>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Original Amount:</span>
              <span>₹{booking.amount}</span>
            </div>
            <div className="flex justify-between">
              <span>Refund Amount:</span>
              <span>₹{refundAmount}</span>
            </div>
            <div className="flex justify-between">
              <span>Processing Fee:</span>
              <span>₹{(booking.amount - refundAmount).toFixed(2)}</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <button
            type="button"
            className="btn btn-outline w-full"
            onClick={() => window.history.back()}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

// Add PropTypes validation
RefundProcess.propTypes = {
  booking: PropTypes.shape({
    id: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    userName: PropTypes.string.isRequired,
    bookingDate: PropTypes.string.isRequired,
  }).isRequired,
  onRefundComplete: PropTypes.func.isRequired,
};

export default RefundProcess;