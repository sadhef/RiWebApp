// server/utils/generateQRCode.js

import QRCode from "qrcode";
import cloudinary from "./cloudinary.js";

const generateQRCode = async (
  price,
  startTime,
  endTime,
  date,
  turfName,
  location
) => {
  try {
    const content = `
      Booking Details:
      Turf: ${turfName}
      Location: ${location}
      Date: ${date}
      Time: ${startTime} - ${endTime}
      Amount: ₹${price}
    `;

    const qrCodeDataURL = await QRCode.toDataURL(content);

    const uploadResponse = await cloudinary.uploader.upload(qrCodeDataURL, {
      folder: "RiField/qrcodes",
    });

    return uploadResponse.secure_url;
  } catch (error) {
    console.error("QR Code generation error:", error);
    throw new Error("Failed to generate QR code");
  }
};

export default generateQRCode;