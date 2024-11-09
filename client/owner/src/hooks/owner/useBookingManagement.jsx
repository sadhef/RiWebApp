// src/hooks/owner/useBookingManagement.jsx
import { useState, useCallback } from 'react';
import axiosInstance from '../useAxiosInstance';

const useBookingManagement = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleReschedule = useCallback(async (bookingId, newSchedule) => {
    setLoading(true);
    try {
      await axiosInstance.put(`/api/owner/bookings/reschedule/${bookingId}`, newSchedule);
      setLoading(false);
      return true;
    } catch (err) {
      setError(err.response?.data?.message || 'Error rescheduling booking');
      setLoading(false);
      return false;
    }
  }, []);

  const handleCancel = useCallback(async (bookingId, cancellationDetails) => {
    setLoading(true);
    try {
      await axiosInstance.put(`/api/owner/bookings/cancel/${bookingId}`, cancellationDetails);
      setLoading(false);
      return true;
    } catch (err) {
      setError(err.response?.data?.message || 'Error cancelling booking');
      setLoading(false);
      return false;
    }
  }, []);

  return {
    loading,
    error,
    handleReschedule,
    handleCancel
  };
};

export default useBookingManagement;