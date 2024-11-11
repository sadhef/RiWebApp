import React, { useState, useEffect } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';
import axiosInstance from '../../../hooks/useAxiosInstance';

const RevenueAnalytics = () => {
  const [revenueData, setRevenueData] = useState([]);
  const [timeframe, setTimeframe] = useState('week');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchRevenueData();
  }, [timeframe]);

  const fetchRevenueData = async () => {
    setLoading(true);
    try {
      const response = await axiosInstance.get(`/api/owner/analytics/revenue?timeframe=${timeframe}`);
      setRevenueData(response.data);
    } catch (error) {
      console.error('Error fetching revenue data:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">Revenue Analytics</h2>
        
        <div className="flex gap-2 mb-4">
          <select 
            className="select select-bordered"
            value={timeframe}
            onChange={(e) => setTimeframe(e.target.value)}
          >
            <option value="week">Last Week</option>
            <option value="month">Last Month</option>
            <option value="year">Last Year</option>
          </select>
        </div>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <span className="loading loading-spinner loading-lg"></span>
          </div>
        ) : (
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line 
                type="monotone" 
                dataKey="revenue" 
                stroke="#8884d8" 
                name="Revenue" 
              />
            </LineChart>
          </ResponsiveContainer>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          <div className="stat bg-base-200 rounded-box p-4">
            <div className="stat-title">Total Revenue</div>
            <div className="stat-value">
              ₹{revenueData.reduce((sum, item) => sum + item.revenue, 0)}
            </div>
          </div>
          <div className="stat bg-base-200 rounded-box p-4">
            <div className="stat-title">Average Revenue</div>
            <div className="stat-value">
              ₹{Math.round(revenueData.reduce((sum, item) => sum + item.revenue, 0) / revenueData.length)}
            </div>
          </div>
          <div className="stat bg-base-200 rounded-box p-4">
            <div className="stat-title">Peak Revenue</div>
            <div className="stat-value">
              ₹{Math.max(...revenueData.map(item => item.revenue))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevenueAnalytics;