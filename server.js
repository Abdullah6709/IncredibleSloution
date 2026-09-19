import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Transporter verification / setup function
function getTransporter() {
  let envConfig = {};
  try {
    const envPath = path.resolve(process.cwd(), '.env');
    if (fs.existsSync(envPath)) {
      envConfig = dotenv.parse(fs.readFileSync(envPath));
    }
  } catch (e) {
    console.warn('Could not reload .env dynamically:', e.message);
  }

  const host = envConfig.SMTP_HOST || process.env.SMTP_HOST || 'smtp.gmail.com';
  const port = parseInt(envConfig.SMTP_PORT || process.env.SMTP_PORT || '587');
  const secure = (envConfig.SMTP_SECURE || process.env.SMTP_SECURE) === 'true';
  const user = (envConfig.SMTP_USER || process.env.SMTP_USER || 'kamleshraturi36@gmail.com').trim();
  const pass = (envConfig.SMTP_PASS || process.env.SMTP_PASS || '').replace(/\s+/g, '');

  const transportOptions = (host === 'smtp.gmail.com' || !host)
    ? {
        service: 'gmail',
        auth: { user, pass }
      }
    : {
        host,
        port,
        secure,
        auth: { user, pass },
        tls: { rejectUnauthorized: false }
      };

  return {
    transporter: nodemailer.createTransport(transportOptions),
    host,
    user,
    pass
  };
}

app.post('/api/send-email', async (req, res) => {
  const { name, mobile, email, city, capacity, message } = req.body;

  if (!name || !mobile) {
    return res.status(400).json({ success: false, error: 'Name and Mobile number are required.' });
  }

  const { transporter, host, user, pass } = getTransporter();

  if (!pass) {
    return res.status(500).json({
      success: false,
      error: 'SMTP_PASS is not configured in .env. Please add your 16-character Gmail App Password in .env file.'
    });
  }

  const recipientEmail = process.env.TO_EMAIL || 'kamleshraturi36@gmail.com';

  const htmlContent = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;">
      <div style="background-color: #0b2545; color: #ffffff; padding: 20px; text-align: center;">
        <h2 style="margin: 0; font-size: 22px;">⚡ New Online UPS Inquiry Received</h2>
        <p style="margin: 5px 0 0 0; color: #ffaa00; font-weight: bold;">Incredible Solution</p>
      </div>
      <div style="padding: 24px; background-color: #f9fbfd;">
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #eee; width: 35%;">Customer Name:</td>
            <td style="padding: 10px; border-bottom: 1px solid #eee;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #eee;">Mobile Number:</td>
            <td style="padding: 10px; border-bottom: 1px solid #eee;"><a href="tel:${mobile}" style="color: #0056b3; font-weight: bold; text-decoration: none;">${mobile}</a></td>
          </tr>
          <tr>
            <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #eee;">Email Address:</td>
            <td style="padding: 10px; border-bottom: 1px solid #eee;">${email || 'Not provided'}</td>
          </tr>
          <tr>
            <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #eee;">City / Location:</td>
            <td style="padding: 10px; border-bottom: 1px solid #eee;">${city || 'N/A'}</td>
          </tr>
          <tr>
            <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #eee;">UPS Capacity Requested:</td>
            <td style="padding: 10px; border-bottom: 1px solid #eee; color: #d32f2f; font-weight: bold;">${capacity}</td>
          </tr>
          <tr>
            <td style="padding: 10px; font-weight: bold; vertical-align: top;">Additional Message:</td>
            <td style="padding: 10px;">${message || 'No additional details.'}</td>
          </tr>
        </table>
      </div>
      <div style="background-color: #f0f4f8; padding: 15px; text-align: center; font-size: 12px; color: #666;">
        <p style="margin: 0;">This email was sent via SMTP Server integration from Incredible Solution website.</p>
      </div>
    </div>
  `;

  const mailOptions = {
    from: `"${name} via Incredible Solution" <${user}>`,
    to: recipientEmail,
    replyTo: email && email !== 'Not provided' ? email : undefined,
    subject: `⚡ Online UPS Inquiry: ${name} (${mobile})`,
    text: `New Online UPS Inquiry:\nName: ${name}\nMobile: ${mobile}\nEmail: ${email}\nCity: ${city}\nCapacity: ${capacity}\nMessage: ${message}`,
    html: htmlContent
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('✅ Email sent via SMTP:', info.messageId);
    return res.json({
      success: true,
      message: 'Inquiry email sent successfully via SMTP server!',
      messageId: info.messageId
    });
  } catch (error) {
    console.error('❌ SMTP Error:', error);
    return res.status(500).json({
      success: false,
      error: `SMTP Transmission Failed: ${error.message}. Please verify your SMTP credentials in .env file.`
    });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 SMTP Email Backend Server running on http://localhost:${PORT}`);
});
