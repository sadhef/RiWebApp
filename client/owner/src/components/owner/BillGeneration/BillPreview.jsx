// client/owner/src/components/owner/BillGeneration/BillPreview.jsx
import React from 'react';
import TaxCalculator from './TaxCalculator';

const BillPreview = ({ booking, onGenerate }) => {
  const {
    totalPrice,
    taxes,
    finalAmount
  } = TaxCalculator.calculateTaxes(booking.amount);

  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">Bill Preview</h2>
        <div className="divide-y">
          <div className="py-2">
            <h3 className="font-semibold mb-2">Booking Details</h3>
            <p>Booking ID: {booking.id}</p>
            <p>Customer: {booking.user.name}</p>
            <p>Date: {new Date(booking.date).toLocaleDateString()}</p>
            <p>Time: {booking.startTime} - {booking.endTime}</p>
          </div>
          
          <div className="py-2">
            <h3 className="font-semibold mb-2">Amount Breakdown</h3>
            <div className="flex justify-between mb-1">
              <span>Base Amount:</span>
              <span>₹{totalPrice}</span>
            </div>
            <div className="flex justify-between mb-1">
              <span>CGST (9%):</span>
              <span>₹{taxes.cgst}</span>
            </div>
            <div className="flex justify-between mb-1">
              <span>SGST (9%):</span>
              <span>₹{taxes.sgst}</span>
            </div>
            <div className="flex justify-between font-bold mt-2">
              <span>Total Amount:</span>
              <span>₹{finalAmount}</span>
            </div>
          </div>
        </div>

        <div className="card-actions justify-end mt-4">
          <button 
            className="btn btn-primary"
            onClick={() => onGenerate(booking.id)}
          >
            Generate Bill
          </button>
        </div>
      </div>
    </div>
  );
};

export default BillPreview;