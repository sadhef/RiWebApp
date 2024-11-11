// src/components/owner/BillGeneration/BillTemplate.jsx
import React from 'react';
import { PDFDownloadLink, Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    padding: 30,
  },
  header: {
    marginBottom: 20,
    textAlign: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
  },
  section: {
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
});

const BillDocument = ({ booking }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.header}>
        <Text style={styles.title}>Booking Invoice</Text>
      </View>
      <View style={styles.section}>
        <Text>Booking ID: {booking.id}</Text>
        <Text>Customer: {booking.user.name}</Text>
        <Text>Date: {booking.date}</Text>
        <Text>Time: {booking.startTime} - {booking.endTime}</Text>
      </View>
      <View style={styles.section}>
        <Text>Amount Details:</Text>
        <View style={styles.row}>
          <Text>Base Amount:</Text>
          <Text>₹{booking.baseAmount}</Text>
        </View>
        <View style={styles.row}>
          <Text>GST (18%):</Text>
          <Text>₹{booking.gstAmount}</Text>
        </View>
        <View style={styles.row}>
          <Text>Total Amount:</Text>
          <Text>₹{booking.totalAmount}</Text>
        </View>
      </View>
    </Page>
  </Document>
);

const BillTemplate = ({ booking }) => {
  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">Bill Generation</h2>
        <div className="mt-4">
          <PDFDownloadLink
            document={<BillDocument booking={booking} />}
            fileName={`invoice-${booking.id}.pdf`}
          >
            {({ loading }) => (
              <button 
                className="btn btn-primary"
                disabled={loading}
              >
                {loading ? 'Generating...' : 'Download Invoice'}
              </button>
            )}
          </PDFDownloadLink>
        </div>
      </div>
    </div>
  );
};

export default BillTemplate;