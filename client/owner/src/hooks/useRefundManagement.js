import { useState } from 'react';
import axiosInstance from '../useAxiosInstance';
import toast from 'react-hot-toast';

export const useRefundManagement = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const processRefund = async (bookingId, refundData) => {
    setLoading(true);
    try {
      const response = await axiosInstance.post(
        `/api/owner/bookings/${bookingId}/refund`,
        refundData
      );
      
      toast.success('Refund processed successfully');
      return response.data;
    } catch (err) {
      setError(err.response?.data?.message || 'Error processing refund');
      toast.error('Error processing refund');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const calculateRefundAmount = (booking, cancellationTime) => {
    const bookingTime = new Date(booking.bookingDate);
    const timeDifference = bookingTime - cancellationTime;
    const hoursDifference = timeDifference / (1000 * 60 * 60);

    if (hoursDifference >= 24) {
      return booking.amount; // Full refund
    } else if (hoursDifference >= 12) {
      return booking.amount * 0.5; // 50% refund
    }
    return 0; // No refund
  };

  return {
    loading,
    error,
    processRefund,
    calculateRefundAmount,
  };
};