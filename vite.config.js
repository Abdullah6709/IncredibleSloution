import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

import fs from 'fs';
import path from 'path';

dotenv.config();

function smtpApiPlugin() {
  return {
    name: 'smtp-api-plugin',
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        if (req.url === '/api/send-email' && req.method === 'POST') {
          let body = '';
          req.on('data', chunk => {
            body += chunk.toString();
          });
          req.on('end', async () => {
            try {
              const data = JSON.parse(body || '{}');
              const { name, mobile, email, city, capacity, message } = data;

              if (!name || !mobile) {
                res.statusCode = 400;
                res.setHeader('Content-Type', 'application/json');
                return res.end(JSON.stringify({ success: false, error: 'Name and Mobile number are required.' }));
              }

              // Load fresh configuration from .env dynamically
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
              const user = (envConfig.SMTP_USER || process.env.SMTP_USER || 'raturiincredible@gmail.com').trim();
              const pass = (envConfig.SMTP_PASS || process.env.SMTP_PASS || '').replace(/\s+/g, '');
              const recipientEmail = (envConfig.TO_EMAIL || process.env.TO_EMAIL || 'raturiincredible@gmail.com').trim();

              if (!pass) {
                res.statusCode = 500;
                res.setHeader('Content-Type', 'application/json');
                return res.end(JSON.stringify({
                  success: false,
                  error: 'SMTP_PASS is not configured in .env. Please add your 16-character Gmail App Password.'
                }));
              }

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

              const transporter = nodemailer.createTransport(transportOptions);

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

              const info = await transporter.sendMail(mailOptions);
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({
                success: true,
                message: 'Inquiry email sent successfully via SMTP server!',
                messageId: info.messageId
              }));
            } catch (err) {
              console.error('SMTP Error in Vite plugin:', err);
              res.statusCode = 500;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({
                success: false,
                error: `SMTP Transmission Failed: ${err.message}`
              }));
            }
          });
          return;
        }
        next();
      });
    }
  };
}

export default defineConfig({
  plugins: [react(), smtpApiPlugin()],
  server: {
    port: 3000,
    host: true,
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
        secure: false
      }
    }
  }
});
