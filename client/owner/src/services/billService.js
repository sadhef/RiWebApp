import axiosInstance from '../hooks/useAxiosInstance';

export const billService = {
  generateBill: async (bookingId) => {
    const response = await axiosInstance.post(`/api/owner/bills/generate/${bookingId}`);
    return response.data;
  },

  previewBill: async (bookingId) => {
    const response = await axiosInstance.get(`/api/owner/bills/preview/${bookingId}`);
    return response.data;
  }
};
