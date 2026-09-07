import React from 'react';
import { Box, Container, Typography, Divider, Stack, Button, Paper, Grid } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export default function Footer() {
  return (
    <Box component="footer" sx={{ bgcolor: '#041021', color: 'white' }}>
      {/* Top Footer Strip */}
      <Box sx={{ bgcolor: '#081c38', py: 4, borderTop: '1px solid rgba(255,255,255,0.1)' }}>
        <Container maxWidth="xl">
          <Grid container spacing={3} alignItems="center" justifyContent="space-between">
            <Grid item xs={12} md={4}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                <Box
                  sx={{
                    width: 44,
                    height: 44,
                    borderRadius: 1.5,
                    background: 'linear-gradient(135deg, #0b2545, #0056b3)',
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 800,
                    fontSize: '1.4rem'
                  }}
                >
                  IS
                </Box>
                <Box>
                  <Typography variant="h6" sx={{ color: 'white', fontWeight: 800, lineHeight: 1.1 }}>
                    Incredible Solutions
                  </Typography>
                  <Typography variant="caption" sx={{ color: '#ffaa00', fontWeight: 700, letterSpacing: 0.5 }}>
                    POWERING A BRIGHTER TOMORROW
                  </Typography>
                </Box>
              </Box>
            </Grid>

            <Grid item xs={12} md={5}>
              <Stack direction="row" spacing={2} flexWrap="wrap" justifyContent={{ xs: 'flex-start', md: 'center' }}>
                <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.8)', fontWeight: 600 }}>✔ Free Consultation</Typography>
                <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.8)', fontWeight: 600 }}>✔ Capacity Recommendation</Typography>
                <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.8)', fontWeight: 600 }}>✔ Competitive Quote</Typography>
                <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.8)', fontWeight: 600 }}>✔ Installation Support</Typography>
              </Stack>
            </Grid>

            <Grid item xs={12} md={3} textAlign={{ xs: 'left', md: 'right' }}>
              <Button
                variant="contained"
                endIcon={<ArrowForwardIcon />}
                component="a"
                href="#quote"
                sx={{
                  bgcolor: '#ffaa00',
                  color: '#081c38',
                  fontWeight: 800,
                  px: 3,
                  py: 1.2,
                  '&:hover': { bgcolor: '#ffb72b' }
                }}
              >
                Request a Quote
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Bottom Bar */}
      <Box sx={{ py: 3, bgcolor: '#041021' }}>
        <Container maxWidth="xl">
          <Grid container spacing={2} alignItems="center" justifyContent="space-between">
            <Grid item xs={12} md={8}>
              <Stack direction="row" spacing={3} flexWrap="wrap" alignItems="center">
                <Stack direction="row" spacing={1} alignItems="center">
                  <CheckCircleIcon sx={{ color: '#ffaa00', fontSize: 18 }} />
                  <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.85)', fontWeight: 600 }}>
                    Trusted UPS Manufacturer & Supplier
                  </Typography>
                </Stack>

                <Stack direction="row" spacing={1} alignItems="center">
                  <VerifiedUserIcon sx={{ color: '#ffaa00', fontSize: 18 }} />
                  <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.85)', fontWeight: 600 }}>
                    Genuine Products
                  </Typography>
                </Stack>

                <Stack direction="row" spacing={1} alignItems="center">
                  <LocalShippingIcon sx={{ color: '#ffaa00', fontSize: 18 }} />
                  <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.85)', fontWeight: 600 }}>
                    Pan India Delivery
                  </Typography>
                </Stack>

                <Stack direction="row" spacing={1} alignItems="center">
                  <SupportAgentIcon sx={{ color: '#ffaa00', fontSize: 18 }} />
                  <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.85)', fontWeight: 600 }}>
                    24x7 Support
                  </Typography>
                </Stack>
              </Stack>
            </Grid>

            <Grid item xs={12} md={4} textAlign={{ xs: 'left', md: 'right' }}>
              <Typography variant="caption" sx={{ fontStyle: 'italic', color: '#ffaa00', fontWeight: 700, fontSize: '0.95rem' }}>
                Your Power Partner...
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}
