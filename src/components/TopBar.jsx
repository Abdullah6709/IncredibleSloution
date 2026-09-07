import React from 'react';
import { Box, Container, Typography, Stack, Link } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import VerifiedIcon from '@mui/icons-material/Verified';

export default function TopBar() {
  return (
    <Box
      sx={{
        bgcolor: '#030d1a',
        color: 'rgba(255,255,255,0.85)',
        py: 0.8,
        borderBottom: '1px solid rgba(255,255,255,0.1)',
        fontSize: '0.78rem',
        display: { xs: 'none', sm: 'block' }
      }}
    >
      <Container maxWidth="xl">
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          {/* Left Announcement */}
          <Stack direction="row" spacing={2} alignItems="center">
            <Stack direction="row" spacing={0.5} alignItems="center">
              <VerifiedIcon sx={{ color: '#ffaa00', fontSize: 16 }} />
              <Typography variant="caption" sx={{ fontWeight: 700, color: 'white' }}>
                ISO 9001:2015 Certified & GeM Compliant Manufacturer
              </Typography>
            </Stack>
            <Typography variant="caption" sx={{ opacity: 0.4 }}>|</Typography>
            <Stack direction="row" spacing={0.5} alignItems="center">
              <LocalShippingIcon sx={{ color: '#25d366', fontSize: 16 }} />
              <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.8)' }}>
                Pan-India Free On-Site Delivery & Installation Support
              </Typography>
            </Stack>
          </Stack>

          {/* Right Direct Contacts */}
          <Stack direction="row" spacing={2.5} alignItems="center">
            <Link
              href="tel:+919891916223"
              underline="none"
              sx={{ color: 'white', display: 'flex', alignItems: 'center', gap: 0.5, fontWeight: 700, '&:hover': { color: '#ffaa00' } }}
            >
              <PhoneIcon sx={{ fontSize: 14, color: '#ffaa00' }} />
              Sales & Service: +91 9891916223
            </Link>

            <Typography variant="caption" sx={{ opacity: 0.4 }}>|</Typography>

            <Link
              href="mailto:raturiincredible@gmail.com"
              underline="none"
              sx={{ color: 'white', display: 'flex', alignItems: 'center', gap: 0.5, fontWeight: 600, '&:hover': { color: '#ffaa00' } }}
            >
              <EmailIcon sx={{ fontSize: 14, color: '#ffaa00' }} />
              raturiincredible@gmail.com
            </Link>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
