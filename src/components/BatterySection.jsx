import React from 'react';
import { Container, Grid, Typography, Box, Paper, Card, CardMedia, Stack, Avatar } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import HandymanIcon from '@mui/icons-material/Handyman';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';

export default function BatterySection() {
  return (
    <Box id="batteries" sx={{ py: 7, bgcolor: '#f4f7fa' }}>
      <Container maxWidth="xl">
        <Grid container spacing={4} alignItems="stretch">
          {/* Left Column: Batteries */}
          <Grid item xs={12} lg={6}>
            <Paper
              elevation={2}
              sx={{
                p: { xs: 3, sm: 4 },
                height: '100%',
                borderRadius: 4,
                bgcolor: '#081c38',
                color: 'white',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <Box>
                <Typography variant="h3" sx={{ color: 'white', fontWeight: 800, mb: 1 }}>
                  Power Your UPS with <br />
                  <Box component="span" sx={{ color: '#ffaa00' }}>
                    Trusted Batteries
                  </Box>
                </Typography>
                <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.85)', mb: 3 }}>
                  We deal in high-performance batteries to ensure longer backup and reliability.
                </Typography>

                <Card sx={{ borderRadius: 3, overflow: 'hidden', mb: 3, border: '2px solid rgba(255,255,255,0.2)' }}>
                  <CardMedia
                    component="img"
                    height="220"
                    image="/assets/images/ups_batteries.jpg"
                    alt="Exide Powersafe and Quanta UPS Batteries"
                  />
                </Card>
              </Box>

              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Paper sx={{ p: 2, bgcolor: 'rgba(255,255,255,0.1)', color: 'white', borderRadius: 2, textAlign: 'center' }}>
                    <Typography variant="subtitle1" sx={{ color: '#ff4d4d', fontWeight: 800 }}>
                      Exide Powersafe
                    </Typography>
                    <Typography variant="caption" sx={{ opacity: 0.8 }}>
                      (For UPS & Inverter)
                    </Typography>
                  </Paper>
                </Grid>

                <Grid item xs={6}>
                  <Paper sx={{ p: 2, bgcolor: 'rgba(255,255,255,0.1)', color: 'white', borderRadius: 2, textAlign: 'center' }}>
                    <Typography variant="subtitle1" sx={{ color: '#00e676', fontWeight: 800 }}>
                      Quanta Batteries
                    </Typography>
                    <Typography variant="caption" sx={{ opacity: 0.8 }}>
                      (For Critical Applications)
                    </Typography>
                  </Paper>
                </Grid>
              </Grid>
            </Paper>
          </Grid>

          {/* Right Column: AMC of Online UPS */}
          <Grid item xs={12} lg={6} id="amc">
            <Paper
              elevation={2}
              sx={{
                p: { xs: 3, sm: 4 },
                height: '100%',
                borderRadius: 4,
                bgcolor: 'white',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                border: '1px solid #e2e8f0'
              }}
            >
              <Box>
                <Typography variant="h3" sx={{ color: 'primary.main', fontWeight: 800, mb: 1 }}>
                  AMC of Online UPS
                </Typography>
                <Typography variant="subtitle1" sx={{ color: 'secondary.main', fontWeight: 700, mb: 2 }}>
                  Keep Your Business Running, Always!
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', mb: 3, lineHeight: 1.6 }}>
                  Our Annual Maintenance Contract (AMC) ensures your UPS system stays at peak performance, with minimal downtime and maximum reliability.
                </Typography>

                <Stack spacing={1.8} mb={4}>
                  {[
                    'Preventive Maintenance',
                    'Quick Response Time',
                    'Trained Service Engineers',
                    'Genuine Spare Parts',
                    'Flexible AMC Plans'
                  ].map((item, idx) => (
                    <Stack direction="row" spacing={1.5} alignItems="center" key={idx}>
                      <CheckCircleIcon color="success" />
                      <Typography variant="body2" sx={{ fontWeight: 700, color: 'primary.main' }}>
                        {item}
                      </Typography>
                    </Stack>
                  ))}
                </Stack>
              </Box>

              <Paper
                elevation={0}
                sx={{
                  p: 2.5,
                  bgcolor: '#eef5ff',
                  borderRadius: 3,
                  border: '1px solid rgba(0,86,179,0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 2
                }}
              >
                <Avatar sx={{ bgcolor: 'secondary.main', width: 50, height: 50 }}>
                  <HandymanIcon />
                </Avatar>
                <Box>
                  <Typography variant="subtitle2" sx={{ fontWeight: 800, color: 'primary.main' }}>
                    AMC - Annual Maintenance Contract
                  </Typography>
                  <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 600 }}>
                    Extended Life | Better Performance | Peace of Mind
                  </Typography>
                </Box>
              </Paper>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
