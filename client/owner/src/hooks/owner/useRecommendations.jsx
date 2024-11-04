// client/owner/src/hooks/owner/useRecommendations.jsx
import { useState, useEffect } from 'react';
import axiosInstance from '../useAxiosInstance';

const useRecommendations = () => {
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchRecommendations = async (userId) => {
    setLoading(true);
    try {
      const response = await axiosInstance.get(`/api/owner/analytics/recommendations/${userId}`);
      setRecommendations(response.data);
    } catch (err) {
      setError(err.response?.data?.message || 'Error fetching recommendations');
    } finally {
      setLoading(false);
    }
  };

  const generatePersonalizedRecommendations = async (userData) => {
    try {
      const response = await axiosInstance.post('/api/owner/analytics/recommendations/generate', userData);
      return response.data;
    } catch (err) {
      setError(err.response?.data?.message || 'Error generating recommendations');
      throw err;
    }
  };

  return {
    recommendations,
    loading,
    error,
    fetchRecommendations,
    generatePersonalizedRecommendations
  };
};

export default useRecommendations;