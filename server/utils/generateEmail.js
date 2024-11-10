import nodemailer from "nodemailer";
import chalk from "chalk";

export default async function generateEmail(to, subject, html) {
  try {
    // Create reusable transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    // Setup email options with better error handling
    const mailOptions = {
      from: `"RiField" <${process.env.EMAIL}>`,
      to: to,
      subject: subject,
      html: html,
      headers: {
        'X-Priority': '1',
        'X-MSMail-Priority': 'High',
        'Importance': 'high'
      }
    };

    // Send mail with defined transport object
    const info = await transporter.sendMail(mailOptions);
    console.log(chalk.green('✓ Email sent successfully:', info.messageId));
    return true;

  } catch (error) {
    console.error(chalk.red('✖ Error sending email:'), error);
    throw new Error('Failed to send email');
  }
}

export const generateHTMLContent = (turfName, location, date, startTime, endTime, totalPrice, QRcode) => {
  const year = new Date().getFullYear();
  
  return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>RiField Booking Confirmation</title>
    <style>
        :root {
            --primary-color: #22c55e;
            --primary-dark: #16a34a;
            --text-color: #333333;
            --text-light: #666666;
            --background: #ffffff;
            --background-alt: #f8f9fa;
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
            line-height: 1.6;
            color: var(--text-color);
            background-color: #f5f5f5;
        }

        .container {
            max-width: 600px;
            margin: 0 auto;
            background: var(--background);
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .header {
            background: linear-gradient(135deg, var(--primary-color), var(--primary-dark));
            color: white;
            padding: 2rem;
            text-align: center;
        }

        .logo {
            width: 120px;
            height: auto;
            margin-bottom: 1rem;
        }

        .booking-status {
            background: #4CAF50;
            color: white;
            padding: 0.5rem 1rem;
            border-radius: 20px;
            display: inline-block;
            margin: 1rem 0;
            font-weight: 500;
        }

        .content {
            padding: 2rem;
            background: var(--background);
        }

        .booking-details {
            background: var(--background-alt);
            border-radius: 8px;
            padding: 1.5rem;
            margin: 1.5rem 0;
        }

        .detail-row {
            display: flex;
            justify-content: space-between;
            padding: 0.75rem 0;
            border-bottom: 1px solid #eee;
        }

        .detail-row:last-child {
            border-bottom: none;
        }

        .detail-label {
            color: var(--text-light);
            font-weight: 500;
        }

        .detail-value {
            font-weight: 600;
            color: var(--text-color);
        }

        .qr-section {
            text-align: center;
            padding: 2rem;
            background: var(--background-alt);
            border-radius: 8px;
            margin: 1.5rem 0;
        }

        .qr-code {
            width: 200px;
            height: 200px;
            margin: 1rem auto;
            padding: 1rem;
            background: white;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .qr-code img {
            width: 100%;
            height: auto;
        }

        .cta-button {
            display: inline-block;
            background: var(--primary-color);
            color: white;
            text-decoration: none;
            padding: 1rem 2rem;
            border-radius: 6px;
            font-weight: 600;
            margin: 1rem 0;
            text-align: center;
        }

        .support-section {
            background: var(--background-alt);
            padding: 1.5rem;
            border-radius: 8px;
            margin-top: 2rem;
        }

        .footer {
            text-align: center;
            padding: 2rem;
            background: var(--background-alt);
            color: var(--text-light);
            font-size: 0.875rem;
        }

        .social-links {
            margin: 1rem 0;
        }

        .social-link {
            display: inline-block;
            margin: 0 0.5rem;
            color: var(--primary-color);
            text-decoration: none;
        }

        @media (max-width: 600px) {
            .container {
                margin: 0;
                border-radius: 0;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <img src="https://your-logo-url.com/logo.png" alt="RiField Logo" class="logo">
            <h1>Booking Confirmed!</h1>
            <div class="booking-status">Confirmed ✓</div>
        </div>

        <div class="content">
            <p>Hello,</p>
            <p>Your turf booking has been confirmed. Here are your booking details:</p>

            <div class="booking-details">
                <div class="detail-row">
                    <span class="detail-label">Turf Name</span>
                    <span class="detail-value">${turfName}</span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">Location</span>
                    <span class="detail-value">${location}</span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">Date</span>
                    <span class="detail-value">${date}</span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">Time</span>
                    <span class="detail-value">${startTime} - ${endTime}</span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">Total Amount</span>
                    <span class="detail-value">₹${totalPrice}</span>
                </div>
            </div>

            <div class="qr-section">
                <h3>Your Booking QR Code</h3>
                <p>Show this QR code at the venue</p>
                <div class="qr-code">
                    <img src="${QRcode}" alt="Booking QR Code">
                </div>
            </div>

            <a href="https://rifield.com/bookings" class="cta-button">
                View Booking Details
            </a>

            <div class="support-section">
                <h3>Need Help?</h3>
                <p>If you have any questions or need assistance, please don't hesitate to contact our support team:</p>
                <p>📧 sadhef7@gmail.com</p>
            </div>
        </div>

        <div class="footer">
            <div class="social-links">
                <a href="#" class="social-link">Facebook</a>
                <a href="#" class="social-link">Twitter</a>
                <a href="#" class="social-link">Instagram</a>
            </div>
            <p>© ${year} RiField. All rights reserved.</p>
            <p>This is an automated message, please do not reply.</p>
        </div>
    </div>
</body>
</html>
  `;
};

// Additional email templates
export const generateWelcomeEmail = (userName) => {
  // Welcome email template
};

export const generatePasswordResetEmail = (resetLink) => {
  // Password reset email template
};

export const generateBookingReminderEmail = (bookingDetails) => {
  // Booking reminder email template
};