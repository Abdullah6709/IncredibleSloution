import React, { useState } from 'react';
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
  Stack,
  Alert,
  CircularProgress
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import ReplayIcon from '@mui/icons-material/Replay';
import { sendEnquiryEmail } from '../services/emailService';

export default function QuoteConfirmationModal({ open, data, emailStatus, onClose }) {
  const [resending, setResending] = useState(false);
  const [currentStatus, setCurrentStatus] = useState(null);

  if (!data) return null;

  const statusToDisplay = currentStatus || emailStatus || { success: true };

  const handleWhatsAppDispatch = () => {
    const waNumber = '919891916223';
    const text = `Hi Incredible Solution, I submitted an Online UPS Enquiry:
- Name: ${data.name}
- Mobile: ${data.mobile}
- Email: ${data.email || 'N/A'}
- City: ${data.city || 'N/A'}
- Capacity Required: ${data.capacity}`;

    const url = `https://wa.me/${waNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
    onClose();
  };

  const handleResendDirectEmail = async () => {
    setResending(true);
    const result = await sendEnquiryEmail(data);
    setCurrentStatus(result);
    setResending(false);
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle sx={{ pr: 2 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Stack direction="row" spacing={1} alignItems="center">
            <CheckCircleIcon color="success" fontSize="large" />
            <Typography variant="h6" sx={{ fontWeight: 800, color: 'primary.main' }}>
              Enquiry Submitted Directly!
            </Typography>
          </Stack>
          <IconButton onClick={onClose} size="small">
            <CloseIcon />
          </IconButton>
        </Box>
        <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block', mt: 0.5 }}>
          Your enquiry has been transmitted directly to <strong>raturiincredible@gmail.com</strong>.
        </Typography>
      </DialogTitle>

      <DialogContent dividers>
        <Stack spacing={2}>
          {statusToDisplay.success ? (
            <Alert severity="success" sx={{ borderRadius: 2 }}>
              <strong>Email Sent Successfully!</strong> Our sales & engineering team will contact you shortly on <strong>{data.mobile}</strong>.
            </Alert>
          ) : (
            <Alert severity="warning" sx={{ borderRadius: 2 }}>
              {statusToDisplay.error || 'Direct email transmission encountered an issue.'}
            </Alert>
          )}

          <Paper elevation={0} sx={{ p: 2.5, bgcolor: '#eef5ff', border: '1px solid #0056b3', borderRadius: 2 }}>
            <Typography variant="subtitle2" sx={{ fontWeight: 800, color: 'primary.main', mb: 1 }}>
              Submitted Requirement Details:
            </Typography>
            <Typography variant="body2" sx={{ mb: 0.8 }}><strong>Name:</strong> {data.name}</Typography>
            <Typography variant="body2" sx={{ mb: 0.8 }}><strong>Mobile:</strong> {data.mobile}</Typography>
            <Typography variant="body2" sx={{ mb: 0.8 }}><strong>Email:</strong> {data.email || 'Not provided'}</Typography>
            <Typography variant="body2" sx={{ mb: 0.8 }}><strong>City:</strong> {data.city || 'N/A'}</Typography>
            <Typography variant="body2" sx={{ mb: 0.8 }}><strong>Capacity Req.:</strong> {data.capacity}</Typography>
            {data.message && (
              <Typography variant="body2"><strong>Note:</strong> {data.message}</Typography>
            )}
          </Paper>
        </Stack>
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
          Also Chat on WhatsApp (+91 9891916223)
        </Button>

        <Button
          fullWidth
          variant="outlined"
          startIcon={resending ? <CircularProgress size={18} color="inherit" /> : <ReplayIcon />}
          onClick={handleResendDirectEmail}
          disabled={resending}
          sx={{ py: 1.2, fontWeight: 700 }}
        >
          {resending ? 'Resending...' : 'Resend Email Directly'}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
