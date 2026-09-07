import React from 'react';
import { Fab, Tooltip } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export default function FloatingWhatsapp() {
  return (
    <Tooltip title="Chat on WhatsApp (+91 9891916223)" placement="left">
      <Fab
        color="success"
        aria-label="whatsapp"
        component="a"
        href="https://wa.me/919891916223?text=Hi%20Incredible%20Solutions,%20I%20would%20like%20to%20enquire%20about%20Online%20UPS%20and%20Batteries."
        target="_blank"
        className="pulse-wa"
        sx={{
          position: 'fixed',
          bottom: 25,
          right: 25,
          width: 60,
          height: 60,
          bgcolor: '#25d366',
          color: 'white',
          boxShadow: '0 8px 25px rgba(37, 211, 102, 0.4)',
          '&:hover': {
            bgcolor: '#1ebc57',
            transform: 'scale(1.1)'
          },
          zIndex: 1000
        }}
      >
        <WhatsAppIcon sx={{ fontSize: 34 }} />
      </Fab>
    </Tooltip>
  );
}
