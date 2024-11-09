import React, { useState } from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Input, Select, Button, Alert } from '@/components/ui/form';
import { Calculator, Download, Save } from 'lucide-react';
import TaxCalculator from './TaxCalculator';

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
    const base = parseFloat(baseAmount) || 0;
    const gst = (base * (parseFloat(gstRate) / 100)) || 0;
    const additional = parseFloat(additionalCharges) || 0;
    
    const total = base + gst + additional;

    setCalculatedBill({
      subTotal: base,
      gst,
      additionalCharges: additional,
      total
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
      <Card>
        <CardHeader>
          <CardTitle>Bill Generator</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <label className="text-sm font-medium">Customer Name</label>
              <Input
                name="customerName"
                value={billData.customerName}
                onChange={handleInputChange}
                placeholder="Enter customer name"
              />
            </div>
            <div>
              <label className="text-sm font-medium">Turf Name</label>
              <Input
                name="turfName"
                value={billData.turfName}
                onChange={handleInputChange}
                placeholder="Enter turf name"
              />
            </div>
            <div>
              <label className="text-sm font-medium">Booking Date</label>
              <Input
                type="date"
                name="bookingDate"
                value={billData.bookingDate}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label className="text-sm font-medium">Duration (hours)</label>
              <Input
                type="number"
                name="duration"
                value={billData.duration}
                onChange={handleInputChange}
                placeholder="Enter duration"
              />
            </div>
            <div>
              <label className="text-sm font-medium">Base Amount (₹)</label>
              <Input
                type="number"
                name="baseAmount"
                value={billData.baseAmount}
                onChange={handleInputChange}
                placeholder="Enter base amount"
              />
            </div>
            <div>
              <label className="text-sm font-medium">GST Rate (%)</label>
              <Input
                type="number"
                name="gstRate"
                value={billData.gstRate}
                onChange={handleInputChange}
                placeholder="Enter GST rate"
              />
            </div>
          </div>

          <div className="flex justify-end gap-4">
            <Button 
              onClick={calculateBill}
              className="flex items-center gap-2"
            >
              <Calculator className="w-4 h-4" />
              Calculate Bill
            </Button>
            {calculatedBill && (
              <PDFDownloadLink
                document={<BillPDF data={{...billData, ...calculatedBill}} />}
                fileName={`bill-${billData.customerName.toLowerCase()}.pdf`}
              >
                {({ loading }) => (
                  <Button 
                    disabled={loading}
                    className="flex items-center gap-2"
                  >
                    <Download className="w-4 h-4" />
                    {loading ? 'Generating...' : 'Download PDF'}
                  </Button>
                )}
              </PDFDownloadLink>
            )}
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
        </CardContent>
      </Card>
    </div>
  );
};

export default BillGenerator;