import React from 'react';
import { PDFDocument, StandardFonts, rgb } from 'pdf-lib';

const BillGenerator = () => {
  const [loading, setLoading] = useState(false);

  const generateBill = async (booking) => {
    setLoading(true);
    try {
      const pdfDoc = await PDFDocument.create();
      const page = pdfDoc.addPage();
      const font = await pdfDoc.embedFont(StandardFonts.Helvetica);

      // Add content to PDF
      page.drawText('TURF BOOKING BILL', {
        x: 50,
        y: 750,
        size: 20,
        font,
      });

      // Add booking details
      page.drawText(`Booking ID: ${booking.id}`, {
        x: 50,
        y: 700,
        size: 12,
        font,
      });

      // Save PDF
      const pdfBytes = await pdfDoc.save();
      
      // Download PDF
      const blob = new Blob([pdfBytes], { type: 'application/pdf' });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `bill-${booking.id}.pdf`;
      link.click();

    } catch (error) {
      console.error('Error generating bill:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4">
      <button 
        className="btn btn-primary"
        onClick={generateBill}
        disabled={loading}
      >
        {loading ? 'Generating...' : 'Generate Bill'}
      </button>
    </div>
  );
};

export default BillGenerator;