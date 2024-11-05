import toast from "react-hot-toast";
import axiosInstance from "../hooks/useAxiosInstance";

export const createOrder = async (totalPrice) => {
  try {
    const response = await axiosInstance.post("/api/user/booking/create-order", {
      totalPrice,
    });
    return response.data;
  } catch (error) {
    console.error("Error creating order:", error);
    toast.error("Failed to create order. Please try again.");
    throw error;
  }
};

export const handlePayment = async (order, user) => {
  // Check if Razorpay SDK is available
  if (!window.Razorpay) {
    toast.error("Razorpay SDK not found. Please refresh the page or try again.");
    return;
  }

  return new Promise((resolve, reject) => {
    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY_ID,
      amount: order.amount,
      currency: order.currency,
      order_id: order.id,
      name: "RiField",
      description: "Book a spot for your next adventure",
      handler: function (response) {
        if (response.error) {
          console.error("Payment error:", response.error);
          toast.error(response.error.description || response.error.message);
          reject(response.error);
        } else {
          console.log("Payment successful:", response);
          resolve(response);
        }
      },
      prefill: {
        name: user.name || "Guest",
        email: user.email || "",
        contact: user.contact || "", // Provide contact if available
      },
      theme: {
        color: "#3399cc", // Optional: customize the theme color
      },
    };

    const rzp1 = new window.Razorpay(options);
    rzp1.on('payment.failed', function (response) {
      console.error("Payment failed:", response.error);
      toast.error("Payment failed. Please try again.");
    });

    rzp1.open();
  });
};
