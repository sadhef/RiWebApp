// client/owner/src/components/owner/Analytics/LocationAnalysis.jsx
import React, { useState, useEffect } from 'react';
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker
} from 'react-simple-maps';
import axiosInstance from '../../../hooks/useAxiosInstance';

const LocationAnalysis = () => {
  const [locationData, setLocationData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchLocationData();
  }, []);

  const fetchLocationData = async () => {
    try {
      const response = await axiosInstance.get('/api/owner/analytics/locations');
      setLocationData(response.data);
    } catch (error) {
      console.error('Error fetching location data:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">Location Analysis</h2>
        {loading ? (
          <div className="flex justify-center items-center h-96">
            <span className="loading loading-spinner loading-lg"></span>
          </div>
        ) : (
          <div className="h-96">
            <ComposableMap>
              <Geographies geography="/india.json">
                {({ geographies }) =>
                  geographies.map((geo) => (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      fill="#EAEAEC"
                      stroke="#D6D6DA"
                    />
                  ))
                }
              </Geographies>
              {locationData.map((location) => (
                <Marker
                  key={location.id}
                  coordinates={[location.longitude, location.latitude]}
                >
                  <circle r={5} fill="#F00" />
                </Marker>
              ))}
            </ComposableMap>
          </div>
        )}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          {locationData.map((location) => (
            <div key={location.id} className="stat bg-base-200 rounded-box p-4">
              <div className="stat-title">{location.name}</div>
              <div className="stat-value">{location.bookingCount}</div>
              <div className="stat-desc">Bookings this month</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LocationAnalysis;