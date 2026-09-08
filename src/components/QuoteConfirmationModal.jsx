import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Box,
  IconButton,
  Paper,
  Stack
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';

export default function QuoteConfirmationModal({ open, data, onClose }) {
  if (!data) return null;

  const handleWhatsAppDispatch = () => {
    const waNumber = '919891916223';
    const text = `Hi Incredible Solution, I am interested in an Online UPS Enquiry:
- Name: ${data.name}
- Mobile: ${data.mobile}
- Email: ${data.email || 'N/A'}
- City: ${data.city || 'N/A'}
- Capacity Required: ${data.capacity}`;

    const url = `https://wa.me/${waNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
    onClose();
  };

  const handleEmailDispatch = () => {
    const mailEmail = 'raturiincredible@gmail.com';
    const subject = `Online UPS Enquiry from ${data.name}`;
    const body = `Hi Incredible Solution Team,

I would like to request a quote / consultation for Online UPS systems:

Name: ${data.name}
Mobile: ${data.mobile}
Email: ${data.email || 'N/A'}
City: ${data.city || 'N/A'}
UPS Capacity Requirement: ${data.capacity}

Message / Requirement details:
${data.message || 'Please contact me with price catalog.'}

Thanks & Regards,
${data.name}`;

    const mailtoUrl = `mailto:${mailEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle sx={{ pr: 2 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Stack direction="row" spacing={1} alignItems="center">
            <CheckCircleIcon color="success" fontSize="large" />
            <Typography variant="h6" sx={{ fontWeight: 800, color: 'primary.main' }}>
              Enquiry Prepared!
            </Typography>
          </Stack>
          <IconButton onClick={onClose} size="small">
            <CloseIcon />
          </IconButton>
        </Box>
        <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block', mt: 0.5 }}>
          Choose how you would like to submit your enquiry to Incredible Solution:
        </Typography>
      </DialogTitle>

      <DialogContent dividers>
        <Paper elevation={0} sx={{ p: 2.5, bgcolor: '#eef5ff', border: '1px solid #0056b3', borderRadius: 2 }}>
          <Typography variant="body2" sx={{ mb: 1 }}><strong>Name:</strong> {data.name}</Typography>
          <Typography variant="body2" sx={{ mb: 1 }}><strong>Mobile:</strong> {data.mobile}</Typography>
          <Typography variant="body2" sx={{ mb: 1 }}><strong>Email:</strong> {data.email || 'N/A'}</Typography>
          <Typography variant="body2" sx={{ mb: 1 }}><strong>City:</strong> {data.city || 'N/A'}</Typography>
          <Typography variant="body2" sx={{ mb: 1 }}><strong>Capacity Req.:</strong> {data.capacity}</Typography>
          {data.message && (
            <Typography variant="body2"><strong>Note:</strong> {data.message}</Typography>
          )}
        </Paper>
      </DialogContent>

      <DialogActions sx={{ p: 2, flexDirection: 'column', gap: 1.5 }}>
        <Button
          fullWidth
          variant="contained"
          color="success"
          startIcon={<WhatsAppIcon />}
          onClick={handleWhatsAppDispatch}
          sx={{ py: 1.5, fontWeight: 800 }}
        >
          Send Directly via WhatsApp (+91 9891916223)
        </Button>

        <Button
          fullWidth
          variant="contained"
          startIcon={<EmailIcon />}
          onClick={handleEmailDispatch}
          sx={{ py: 1.5, fontWeight: 800, bgcolor: '#ea4335', '&:hover': { bgcolor: '#c53428' } }}
        >
          Send via Email (raturiincredible@gmail.com)
        </Button>
      </DialogActions>
    </Dialog>
  );
}
