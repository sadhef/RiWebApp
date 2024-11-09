export const recommendationService = {
    getRecommendations: async () => {
      const response = await axiosInstance.get('/api/owner/recommendations');
      return response.data;
    },
  
    getCustomPreferences: async () => {
      const response = await axiosInstance.get('/api/owner/recommendations/preferences');
      return response.data;
    }
  };