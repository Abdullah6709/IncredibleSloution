import React from 'react';
import { Container, Grid, Typography, Paper, Box, Avatar } from '@mui/material';
import VerifiedIcon from '@mui/icons-material/Verified';
import PowerIcon from '@mui/icons-material/Power';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import BuildIcon from '@mui/icons-material/Build';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';

const features = [
  { icon: <VerifiedIcon />, title: 'Authorized Manufacturer & Supplier' },
  { icon: <PowerIcon />, title: 'Wide Range (1 kVA to 1000+ kVA)' },
  { icon: <AttachMoneyIcon />, title: 'Competitive Pricing' },
  { icon: <BuildIcon />, title: 'Installation & Commissioning' },
  { icon: <HeadsetMicIcon />, title: 'AMC & After-Sales Service' },
  { icon: <LocalShippingIcon />, title: 'Pan-India Delivery' },
];

export default function WhyChooseUs() {
  return (
    <Box id="why-us" sx={{ py: 4, bgcolor: 'white', borderBottom: '1px solid #e2e8f0' }}>
      <Container maxWidth="xl">
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} lg={3}>
            <Typography variant="h5" sx={{ color: 'primary.main', fontWeight: 800, lineHeight: 1.2 }}>
              Why Choose <br />
              <Box component="span" sx={{ color: 'secondary.main' }}>
                Incredible Solution?
              </Box>
            </Typography>
          </Grid>

          <Grid item xs={12} lg={9}>
            <Grid container spacing={2}>
              {features.map((item, idx) => (
                <Grid item xs={6} sm={4} md={2} key={idx}>
                  <Paper
                    elevation={0}
                    sx={{
                      p: 2,
                      textAlign: 'center',
                      bgcolor: '#f8fafc',
                      border: '1px solid #e2e8f0',
                      borderRadius: 2.5,
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        bgcolor: 'white',
                        borderColor: 'secondary.main',
                        boxShadow: '0 8px 20px rgba(0,86,179,0.1)'
                      }
                    }}
                  >
                    <Avatar
                      sx={{
                        width: 44,
                        height: 44,
                        bgcolor: '#eef5ff',
                        color: 'secondary.main',
                        mb: 1
                      }}
                    >
                      {item.icon}
                    </Avatar>
                    <Typography variant="caption" sx={{ fontWeight: 700, color: 'primary.main', fontSize: '0.78rem', lineHeight: 1.2 }}>
                      {item.title}
                    </Typography>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
