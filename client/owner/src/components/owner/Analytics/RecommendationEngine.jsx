// src/components/owner/Analytics/RecommendationEngine.jsx
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const RecommendationEngine = () => {
  const [recommendations, setRecommendations] = useState([]);
  const user = useSelector(state => state.auth.user);

  useEffect(() => {
    generateRecommendations();
  }, [user]);

  const generateRecommendations = async () => {
    try {
      const response = await fetch(`/api/recommendations/${user.id}`);
      const data = await response.json();
      setRecommendations(data);
    } catch (error) {
      console.error('Error generating recommendations:', error);
    }
  };

  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">Recommended for You</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          {recommendations.map((item) => (
            <div key={item.id} className="card bg-base-200">
              <div className="card-body">
                <h3 className="font-bold">{item.name}</h3>
                <p>{item.description}</p>
                <p className="text-primary">Match Score: {item.matchScore}%</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecommendationEngine;