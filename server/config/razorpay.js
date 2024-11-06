// server/config/razorpay.js

import Razorpay from "razorpay";
import dotenv from "dotenv";

dotenv.config();

if (!process.env.RAZORPAY_KEY_ID || !process.env.RAZORPAY_KEY_SECRET) {
  throw new Error('RAZORPAY_KEY_ID and RAZORPAY_KEY_SECRET must be provided');
}

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET
});

// Verify Razorpay is properly initialized
try {
  razorpay.orders.all({ count: 1 })
    .then(() => console.log('Razorpay initialized successfully'))
    .catch(err => console.error('Razorpay initialization error:', err));
} catch (error) {
  console.error('Error testing Razorpay connection:', error);
}

export default razorpay;