// src/components/owner/BookingManagement/CancellationModal.jsx
import React, { useState } from 'react';

const CancellationModal = ({ booking, onClose, onCancel }) => {
  const [reason, setReason] = useState('');
  const [isRefundRequired, setIsRefundRequired] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await onCancel(booking.id, { reason, isRefundRequired });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-base-100 p-6 rounded-lg w-full max-w-md">
        <h3 className="text-lg font-bold mb-4">Cancel Booking</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">
              Cancellation Reason
            </label>
            <textarea
              className="textarea textarea-bordered w-full"
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                className="checkbox"
                checked={isRefundRequired}
                onChange={(e) => setIsRefundRequired(e.target.checked)}
              />
              <span>Process Refund</span>
            </label>
          </div>
          <div className="flex justify-end gap-2">
            <button 
              type="button" 
              className="btn btn-ghost"
              onClick={onClose}
            >
              Close
            </button>
            <button type="submit" className="btn btn-error">
              Confirm Cancellation
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CancellationModal;