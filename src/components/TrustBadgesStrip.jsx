import React from 'react';
import { Box, Container, Grid, Typography, Stack, Avatar } from '@mui/material';
import FlagIcon from '@mui/icons-material/Flag';
import VerifiedIcon from '@mui/icons-material/Verified';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';

const badges = [
  { icon: <FlagIcon />, title: 'Make in India', subtitle: 'Heavy Duty B2B Quality' },
  { icon: <VerifiedIcon />, title: 'ISO 9001:2015', subtitle: 'Certified Manufacturing' },
  { icon: <AccountBalanceIcon />, title: 'GeM Approved', subtitle: 'Govt. Authorized Supplier' },
  { icon: <LocalShippingIcon />, title: 'Pan-India SLA', subtitle: 'Free Delivery & Setup' },
  { icon: <SupportAgentIcon />, title: '24x7 Support', subtitle: '4-Hour Emergency Response' },
];

export default function TrustBadgesStrip() {
  return (
    <Box sx={{ bgcolor: '#041021', color: 'white', py: 2.5, borderTop: '1px solid rgba(255,255,255,0.1)', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
      <Container maxWidth="xl">
        <Grid container spacing={2} justifyContent="center" alignItems="center">
          {badges.map((item, idx) => (
            <Grid item xs={6} sm={4} md={2.4} key={idx}>
              <Stack direction="row" spacing={1.5} alignItems="center" justifyContent="center">
                <Avatar sx={{ bgcolor: 'rgba(255,170,0,0.15)', color: '#ffaa00', width: 40, height: 40 }}>
                  {item.icon}
                </Avatar>
                <Box>
                  <Typography variant="body2" sx={{ fontWeight: 800, color: 'white', lineHeight: 1.1 }}>
                    {item.title}
                  </Typography>
                  <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.72rem' }}>
                    {item.subtitle}
                  </Typography>
                </Box>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
