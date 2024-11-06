import nodemailer from "nodemailer";
import chalk from "chalk";

export default async function generateEmail(to, subject, html) {
  try {
    // Create Transporter with secure: true and proper error handling
    const transporter = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
      tls: {
        rejectUnauthorized: false
      }
    });

    const mailOptions = {
      from: `"RiField Booking" <${process.env.EMAIL}>`,
      to: to,
      subject: subject,
      html: html,
    };

    // Add proper logging
    console.log(chalk.blue('Attempting to send email to:', to));
    
    const info = await transporter.sendMail(mailOptions);
    console.log(chalk.green('Email sent successfully:', info.messageId));
    
    return true;
  } catch (error) {
    console.log(chalk.red("Error in generateEmail:"), error);
    throw error; // Propagate error for handling in the booking controller
  }
}

export const generateHTMLContent = (turfName, location, date, startTime, endTime, totalPrice, QRcode) => {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Booking Confirmation</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                line-height: 1.6;
                color: #333;
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
            }
            .header {
                background-color: #4CAF50;
                color: white;
                text-align: center;
                padding: 20px;
                border-radius: 5px 5px 0 0;
            }
            .content {
                background-color: #f9f9f9;
                padding: 20px;
                border-radius: 0 0 5px 5px;
            }
            .info {
                margin: 20px 0;
            }
            .info p {
                margin: 10px 0;
            }
            .qr-code {
                text-align: center;
                margin: 20px 0;
            }
            .qr-code img {
                max-width: 200px;
            }
            .footer {
                text-align: center;
                margin-top: 20px;
                color: #666;
            }
        </style>
    </head>
    <body>
        <div class="header">
            <h1>Booking Confirmation</h1>
        </div>
        <div class="content">
            <p>Your turf booking has been confirmed!</p>
            
            <div class="info">
                <p><strong>Turf Name:</strong> ${turfName}</p>
                <p><strong>Location:</strong> ${location}</p>
                <p><strong>Date:</strong> ${date}</p>
                <p><strong>Time:</strong> ${startTime} - ${endTime}</p>
                <p><strong>Total Amount:</strong> ₹${totalPrice}</p>
            </div>

            <div class="qr-code">
                <p><strong>Your Booking QR Code:</strong></p>
                <img src="${QRcode}" alt="Booking QR Code"/>
                <p>Please show this QR code at the venue</p>
            </div>

            <div class="footer">
                <p>Thank you for choosing RiField!</p>
                <p>If you have any questions, please contact our support team.</p>
            </div>
        </div>
    </body>
    </html>
  `;
};