import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Trophy, Users, TrendingUp, Clock } from 'lucide-react';
import axiosInstance from '../../../hooks/useAxiosInstance';

const PersonalizedRecommendations = () => {
  const [recommendations, setRecommendations] = useState({
    popularTimeSlots: [],
    peakDays: [],
    customerPreferences: [],
    suggestedPricing: null
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchRecommendations();
  }, []);

  const fetchRecommendations = async () => {
    try {
      const response = await axiosInstance.get('/api/owner/analytics/recommendations');
      setRecommendations(response.data);
    } catch (error) {
      console.error('Error fetching recommendations:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full p-4">
      <h2 className="text-2xl font-bold mb-6">Smart Recommendations</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Popular Time Slots */}
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h3 className="card-title flex items-center gap-2">
              <Clock className="w-5 h-5" />
              Popular Time Slots
            </h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={recommendations.popularTimeSlots}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="time" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="bookings" fill="#8884d8" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Customer Preferences */}
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h3 className="card-title flex items-center gap-2">
              <Users className="w-5 h-5" />
              Customer Preferences
            </h3>
            <div className="space-y-4">
              {recommendations.customerPreferences.map((pref, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span>{pref.category}</span>
                  <div className="w-2/3 bg-gray-200 rounded-full h-2.5">
                    <div 
                      className="bg-primary h-2.5 rounded-full" 
                      style={{ width: `${pref.percentage}%` }}
                    ></div>
                  </div>
                  <span className="text-sm">{pref.percentage}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Peak Days Analysis */}
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h3 className="card-title flex items-center gap-2">
              <TrendingUp className="w-5 h-5" />
              Peak Days Analysis
            </h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={recommendations.peakDays}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="day" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="bookings" fill="#82ca9d" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Price Optimization */}
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h3 className="card-title flex items-center gap-2">
              <Trophy className="w-5 h-5" />
              Price Optimization
            </h3>
            {recommendations.suggestedPricing && (
              <div className="space-y-4">
                <div className="p-4 bg-base-200 rounded-lg">
                  <p className="text-lg font-semibold">Suggested Base Price</p>
                  <p className="text-3xl font-bold text-primary">
                    ₹{recommendations.suggestedPricing.basePrice}/hr
                  </p>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-base-200 rounded-lg">
                    <p className="text-sm font-medium">Peak Hours</p>
                    <p className="text-lg font-semibold">
                      ₹{recommendations.suggestedPricing.peakHourPrice}/hr
                    </p>
                  </div>
                  <div className="p-4 bg-base-200 rounded-lg">
                    <p className="text-sm font-medium">Weekend Rate</p>
                    <p className="text-lg font-semibold">
                      ₹{recommendations.suggestedPricing.weekendPrice}/hr
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalizedRecommendations;