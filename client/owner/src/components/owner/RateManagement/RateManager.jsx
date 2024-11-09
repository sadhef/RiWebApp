import React, { useState, useEffect } from 'react';
import axiosInstance from '../../../hooks/useAxiosInstance';

const RateManager = () => {
  const [rates, setRates] = useState({
    baseRate: 0,
    peakHourRate: 0,
    weekendRate: 0
  });

  useEffect(() => {
    fetchRates();
  }, []);

  const fetchRates = async () => {
    try {
      const response = await axiosInstance.get('/api/owner/turf/rates');
      setRates(response.data);
    } catch (error) {
      console.error('Error fetching rates:', error);
    }
  };

  const updateRates = async () => {
    try {
      await axiosInstance.put('/api/owner/turf/rates', rates);
      toast.success('Rates updated successfully');
    } catch (error) {
      toast.error('Error updating rates');
    }
  };

  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">Rate Management</h2>
        
        <div className="form-control">
          <label className="label">Base Rate (per hour)</label>
          <input
            type="number"
            className="input input-bordered"
            value={rates.baseRate}
            onChange={(e) => setRates({...rates, baseRate: e.target.value})}
          />
        </div>

        <div className="form-control">
          <label className="label">Peak Hour Rate (per hour)</label>
          <input
            type="number"
            className="input input-bordered"
            value={rates.peakHourRate}
            onChange={(e) => setRates({...rates, peakHourRate: e.target.value})}
          />
        </div>

        <div className="form-control">
          <label className="label">Weekend Rate (per hour)</label>
          <input
            type="number"
            className="input input-bordered"
            value={rates.weekendRate}
            onChange={(e) => setRates({...rates, weekendRate: e.target.value})}
          />
        </div>

        <button className="btn btn-primary mt-4" onClick={updateRates}>
          Update Rates
        </button>
      </div>
    </div>
  );
};

export default RateManager;