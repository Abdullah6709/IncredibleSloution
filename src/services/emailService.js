/**
 * Service to handle enquiry email delivery via the local SMTP backend server.
 * Calls POST /api/send-email on the Node/Express server (server.js).
 * The backend uses Nodemailer + Gmail App Password — no third-party activation needed.
 *
 * Run the backend with:  npm run server
 */

const API_URL = 'http://localhost:5000/api/send-email';

export async function sendEnquiryEmail(formData) {
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name:     formData.name,
        mobile:   formData.mobile,
        email:    formData.email    || '',
        city:     formData.city     || '',
        capacity: formData.capacity || '',
        message:  formData.message  || '',
      }),
    });

    const data = await response.json();

    if (response.ok && data.success) {
      return {
        success: true,
        provider: 'SMTP',
        message: 'Your inquiry has been submitted successfully! Our team will contact you shortly.',
      };
    }

    return {
      success: false,
      provider: 'SMTP',
      error: data.error || 'Submission failed. Please try again.',
    };

  } catch (err) {
    console.error('SMTP backend error:', err);

    // Friendly message if the backend server is not running
    if (err instanceof TypeError && err.message.includes('fetch')) {
      return {
        success: false,
        provider: 'SMTP',
        error: 'Could not reach the email server. Please make sure the backend is running (npm run server).',
      };
    }

    return {
      success: false,
      provider: 'SMTP',
      error: 'Network error. Please check your internet connection and try again.',
    };
  }
}
