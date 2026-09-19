import React from 'react';
import {
  Container, Grid, Typography, Paper, Button, Box, Stack
} from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import ChatIcon from '@mui/icons-material/Chat';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import VerifiedIcon from '@mui/icons-material/Verified';

const WHATSAPP_NUMBER = '919891916223';
const CALL_NUMBER = '+919891916223';

const WA_PRETEXT = encodeURIComponent(
  'Hi Incredible Solution, I would like to get a quote for an Online UPS. Please help me.'
);

export default function ContactSection() {
  return (
    <Box id="quote" sx={{ py: 8, bgcolor: '#f4f7fa' }}>
      <Container maxWidth="xl">
        {/* Section Heading */}
        <Box textAlign="center" mb={6}>
          <Typography variant="caption" sx={{ color: 'secondary.main', fontWeight: 800, textTransform: 'uppercase', letterSpacing: 1.5 }}>
            GET IN TOUCH
          </Typography>
          <Typography variant="h3" sx={{ color: 'primary.main', mt: 0.5, mb: 1.5 }}>
            Talk to a UPS Expert — Right Now
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary', maxWidth: 560, mx: 'auto' }}>
            Skip the wait. Connect with our team instantly via WhatsApp or phone call and get the right UPS at the best price.
          </Typography>
        </Box>

        <Grid container spacing={4} justifyContent="center">
          {/* WhatsApp Card */}
          <Grid item xs={12} sm={10} md={5}>
            <Paper
              elevation={6}
              sx={{
                p: { xs: 4, md: 5 },
                borderRadius: 4,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                border: '2px solid #25d366',
                transition: 'transform 0.2s, box-shadow 0.2s',
                '&:hover': { transform: 'translateY(-4px)', boxShadow: '0 16px 40px rgba(37,211,102,0.2)' }
              }}
            >
              <Box
                sx={{
                  width: 80, height: 80, borderRadius: '50%',
                  bgcolor: '#25d366', display: 'flex', alignItems: 'center',
                  justifyContent: 'center', mb: 3,
                  boxShadow: '0 8px 24px rgba(37,211,102,0.4)'
                }}
              >
                <WhatsAppIcon sx={{ fontSize: 44, color: 'white' }} />
              </Box>

              <Typography variant="h4" sx={{ fontWeight: 800, color: 'primary.main', mb: 1 }}>
                WhatsApp Inquiry
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary', mb: 1 }}>
                Send us a message and get an instant reply from our UPS specialists.
              </Typography>
              <Typography variant="h6" sx={{ color: '#25d366', fontWeight: 800, mb: 3 }}>
                +91 98919 16223
              </Typography>

              <Stack spacing={1.5} sx={{ width: '100%', mb: 3 }}>
                {[
                  { icon: <AccessTimeIcon fontSize="small" />, text: 'Instant response — usually within minutes' },
                  { icon: <ChatIcon fontSize="small" />, text: 'Share load details, photos, or layout via chat' },
                  { icon: <VerifiedIcon fontSize="small" />, text: 'Verified pricing from certified UPS engineers' },
                ].map(({ icon, text }) => (
                  <Stack key={text} direction="row" spacing={1} alignItems="center">
                    <Box sx={{ color: '#25d366', display: 'flex' }}>{icon}</Box>
                    <Typography variant="body2" sx={{ color: 'text.secondary', textAlign: 'left' }}>{text}</Typography>
                  </Stack>
                ))}
              </Stack>

              <Button
                variant="contained"
                fullWidth
                size="large"
                startIcon={<WhatsAppIcon />}
                component="a"
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WA_PRETEXT}`}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  bgcolor: '#25d366',
                  color: 'white',
                  fontWeight: 800,
                  py: 1.8,
                  fontSize: '1.05rem',
                  borderRadius: 2,
                  '&:hover': { bgcolor: '#1ebe5a' }
                }}
              >
                Chat on WhatsApp
              </Button>
            </Paper>
          </Grid>

          {/* Call Card */}
          <Grid item xs={12} sm={10} md={5}>
            <Paper
              elevation={6}
              sx={{
                p: { xs: 4, md: 5 },
                borderRadius: 4,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                border: '2px solid #0056b3',
                transition: 'transform 0.2s, box-shadow 0.2s',
                '&:hover': { transform: 'translateY(-4px)', boxShadow: '0 16px 40px rgba(0,86,179,0.2)' }
              }}
            >
              <Box
                sx={{
                  width: 80, height: 80, borderRadius: '50%',
                  bgcolor: '#0056b3', display: 'flex', alignItems: 'center',
                  justifyContent: 'center', mb: 3,
                  boxShadow: '0 8px 24px rgba(0,86,179,0.4)'
                }}
              >
                <PhoneIcon sx={{ fontSize: 44, color: 'white' }} />
              </Box>

              <Typography variant="h4" sx={{ fontWeight: 800, color: 'primary.main', mb: 1 }}>
                Call Us Directly
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary', mb: 1 }}>
                Speak directly with our technical sales team for expert guidance on your UPS requirements.
              </Typography>
              <Typography variant="h6" sx={{ color: '#0056b3', fontWeight: 800, mb: 3 }}>
                +91 98919 16223
              </Typography>

              <Stack spacing={1.5} sx={{ width: '100%', mb: 3 }}>
                {[
                  { icon: <HeadsetMicIcon fontSize="small" />, text: 'Speak to a certified UPS engineer directly' },
                  { icon: <AccessTimeIcon fontSize="small" />, text: 'Available Mon–Sat, 9 AM to 7 PM IST' },
                  { icon: <VerifiedIcon fontSize="small" />, text: 'Free consultation — no obligation to buy' },
                ].map(({ icon, text }) => (
                  <Stack key={text} direction="row" spacing={1} alignItems="center">
                    <Box sx={{ color: '#0056b3', display: 'flex' }}>{icon}</Box>
                    <Typography variant="body2" sx={{ color: 'text.secondary', textAlign: 'left' }}>{text}</Typography>
                  </Stack>
                ))}
              </Stack>

              <Button
                variant="contained"
                fullWidth
                size="large"
                startIcon={<PhoneIcon />}
                component="a"
                href={`tel:${CALL_NUMBER}`}
                sx={{
                  bgcolor: '#0056b3',
                  color: 'white',
                  fontWeight: 800,
                  py: 1.8,
                  fontSize: '1.05rem',
                  borderRadius: 2,
                  '&:hover': { bgcolor: '#004494' }
                }}
              >
                Call +91 98919 16223
              </Button>
            </Paper>
          </Grid>
        </Grid>

        {/* Trust Strip */}
        <Paper
          elevation={0}
          sx={{ mt: 6, p: 2.5, bgcolor: '#eef5ff', borderRadius: 3, borderLeft: '4px solid #0056b3', maxWidth: 700, mx: 'auto', textAlign: 'center' }}
        >
          <Typography variant="body2" sx={{ color: 'primary.main', fontWeight: 700 }}>
            🏆 Pan India Service &amp; AMC Support — Rapid response technical support across all major Indian cities.
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
}
