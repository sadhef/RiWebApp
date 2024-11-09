import React, { useState } from 'react';
import { Calculator } from 'lucide-react';
import TaxCalculator from '@/utils/taxCalculator';

const BillGenerator = () => {
  const [billData, setBillData] = useState({
    customerName: '',
    turfName: '',
    bookingDate: '',
    duration: '',
    baseAmount: '',
    gstRate: '18',
    additionalCharges: '0'
  });

  const [calculatedBill, setCalculatedBill] = useState(null);

  const calculateBill = () => {
    const { baseAmount, gstRate, additionalCharges } = billData;
    const result = TaxCalculator.calculateBreakdown(baseAmount, gstRate);
    
    setCalculatedBill({
      subTotal: result.baseAmount,
      gst: result.totalGST,
      additionalCharges: parseFloat(additionalCharges) || 0,
      total: result.finalAmount + (parseFloat(additionalCharges) || 0)
    });
  };

  const handleInputChange = (e) => {
    setBillData({
      ...billData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Bill Generator</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Customer Name</span>
              </label>
              <input
                type="text"
                name="customerName"
                value={billData.customerName}
                onChange={handleInputChange}
                placeholder="Enter customer name"
                className="input input-bordered"
              />
            </div>
            
            <div className="form-control">
              <label className="label">
                <span className="label-text">Turf Name</span>
              </label>
              <input
                type="text"
                name="turfName"
                value={billData.turfName}
                onChange={handleInputChange}
                placeholder="Enter turf name"
                className="input input-bordered"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Booking Date</span>
              </label>
              <input
                type="date"
                name="bookingDate"
                value={billData.bookingDate}
                onChange={handleInputChange}
                className="input input-bordered"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Duration (hours)</span>
              </label>
              <input
                type="number"
                name="duration"
                value={billData.duration}
                onChange={handleInputChange}
                placeholder="Enter duration"
                className="input input-bordered"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Base Amount (₹)</span>
              </label>
              <input
                type="number"
                name="baseAmount"
                value={billData.baseAmount}
                onChange={handleInputChange}
                placeholder="Enter base amount"
                className="input input-bordered"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">GST Rate (%)</span>
              </label>
              <input
                type="number"
                name="gstRate"
                value={billData.gstRate}
                onChange={handleInputChange}
                className="input input-bordered"
              />
            </div>
          </div>

          <div className="flex justify-end gap-4">
            <button 
              onClick={calculateBill}
              className="btn btn-primary"
            >
              <Calculator className="w-4 h-4 mr-2" />
              Calculate Bill
            </button>
          </div>

          {calculatedBill && (
            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-4">Bill Summary</h3>
              <div className="grid gap-2">
                <div className="flex justify-between py-2 border-b">
                  <span>Base Amount:</span>
                  <span>₹{calculatedBill.subTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span>GST ({billData.gstRate}%):</span>
                  <span>₹{calculatedBill.gst.toFixed(2)}</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span>Additional Charges:</span>
                  <span>₹{calculatedBill.additionalCharges.toFixed(2)}</span>
                </div>
                <div className="flex justify-between py-2 font-bold">
                  <span>Total Amount:</span>
                  <span>₹{calculatedBill.total.toFixed(2)}</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BillGenerator;