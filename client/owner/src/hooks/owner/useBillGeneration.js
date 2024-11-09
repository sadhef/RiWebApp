import { useState } from 'react';
import axiosInstance from '../hooks/useAxiosInstance';
import toast from 'react-hot-toast';

const useBillGeneration = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const generateBill = async (bookingId) => {
    setLoading(true);
    try {
      const response = await axiosInstance.post(`/api/owner/bills/generate/${bookingId}`);
      const bill = response.data;
      toast.success('Bill generated successfully');
      return bill;
    } catch (err) {
      setError(err.response?.data?.message || 'Error generating bill');
      toast.error(err.response?.data?.message || 'Error generating bill');
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