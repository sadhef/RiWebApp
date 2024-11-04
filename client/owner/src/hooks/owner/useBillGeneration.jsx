// client/owner/src/hooks/owner/useBillGeneration.jsx
import { useState } from 'react';
import axiosInstance from '../useAxiosInstance';

const useBillGeneration = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const generateBill = async (bookingId) => {
    setLoading(true);
    try {
      const response = await axiosInstance.post(`/api/owner/bills/generate/${bookingId}`);
      const bill = response.data;
      return bill;
    } catch (err) {
      setError(err.response?.data?.message || 'Error generating bill');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const previewBill = async (bookingId) => {
    try {
      const response = await axiosInstance.get(`/api/owner/bills/preview/${bookingId}`);
      return response.data;
    } catch (err) {
      setError(err.response?.data?.message || 'Error previewing bill');
      throw err;
    }
  };

  return {
    generateBill,
    previewBill,
    loading,
    error
  };
};

export default useBillGeneration;