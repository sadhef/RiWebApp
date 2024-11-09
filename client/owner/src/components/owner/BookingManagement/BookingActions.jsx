// src/components/owner/BookingManagement/BookingActions.jsx
import React, { useState } from 'react';
import RescheduleModal from './RescheduleModal';
import CancellationModal from './CancellationModal';

const BookingActions = ({ booking, onReschedule, onCancel }) => {
  const [isRescheduleModalOpen, setRescheduleModalOpen] = useState(false);
  const [isCancelModalOpen, setCancelModalOpen] = useState(false);

  return (
    <div className="flex gap-2">
      <button 
        className="btn btn-primary btn-sm"
        onClick={() => setRescheduleModalOpen(true)}
      >
        Reschedule
      </button>
      <button 
        className="btn btn-error btn-sm"
        onClick={() => setCancelModalOpen(true)}
      >
        Cancel
      </button>

      {isRescheduleModalOpen && (
        <RescheduleModal
          booking={booking}
          onClose={() => setRescheduleModalOpen(false)}
          onReschedule={onReschedule}
        />
      )}

      {isCancelModalOpen && (
        <CancellationModal
          booking={booking}
          onClose={() => setCancelModalOpen(false)}
          onCancel={onCancel}
        />
      )}
    </div>
  );
};

export default BookingActions;