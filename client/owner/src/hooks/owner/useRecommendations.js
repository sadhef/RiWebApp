import { useState, useEffect } from 'react';
import axiosInstance from '../hooks/useAxiosInstance';
import toast from 'react-hot-toast';

const useRecommendations = () => {
  const [recommendations, setRecommendations] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchRecommendations = async () => {
    try {
      const response = await axiosInstance.get('/api/owner/recommendations');
      setRecommendations(response.data);
    } catch (err) {
      setError(err.response?.data?.message || 'Error fetching recommendations');
      toast.error(err.response?.data?.message || 'Error fetching recommendations');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRecommendations();
  }, []);

  const refreshRecommendations = () => {
    setLoading(true);
    fetchRecommendations();
  };

  return {
    recommendations,
    loading,
    error,
    refreshRecommendations
  };
};

export default useRecommendations;