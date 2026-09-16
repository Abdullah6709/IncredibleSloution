import React, { useState } from 'react';
import {
  Container,
  Grid,
  Typography,
  Box,
  Button,
  Paper,
  TextField,
  MenuItem,
  Stack,
  Avatar,
  InputAdornment,
  CircularProgress
} from '@mui/material';
import BoltIcon from '@mui/icons-material/Bolt';
import ShieldIcon from '@mui/icons-material/Shield';
import TimerIcon from '@mui/icons-material/Timer';
import EnergySavingsLeafIcon from '@mui/icons-material/EnergySavingsLeaf';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PersonIcon from '@mui/icons-material/Person';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PowerIcon from '@mui/icons-material/Power';
import NoteAltIcon from '@mui/icons-material/NoteAlt';
import LockIcon from '@mui/icons-material/Lock';
import { sendEnquiryEmail } from '../services/emailService';

const capacities = [
  '1 kVA - 3 kVA Single Phase',
  '5 kVA - 10 kVA Single Phase',
  '10 kVA - 30 kVA Three Phase',
  '40 kVA - 100 kVA Three Phase',
  '100 kVA - 300 kVA Three Phase',
  '300+ kVA Modular Data Center UPS',
  'UPS Batteries (Exide / Quanta)'
];

export default function HeroSection({ onSubmitForm }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [heroForm, setHeroForm] = useState({
    name: '',
    mobile: '',
    city: '',
    capacity: '1 kVA - 3 kVA Single Phase',
    requirement: ''
  });

  const handleChange = (e) => {
    setHeroForm({ ...heroForm, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!heroForm.name || !heroForm.mobile) {
      alert('Please fill in your Name and Mobile Number.');
      return;
    }
    setIsSubmitting(true);
    const payload = {
      name: heroForm.name,
      mobile: heroForm.mobile,
      city: heroForm.city,
      capacity: heroForm.capacity,
      message: heroForm.requirement
    };

    const emailResult = await sendEnquiryEmail(payload);
    setIsSubmitting(false);

    onSubmitForm(payload, emailResult);
  };

  return (
    <Box
      id="home"
      sx={{
        position: 'relative',
        bgcolor: '#081c38',
        color: 'white',
        py: { xs: 4, sm: 6, md: 8 },
        backgroundImage: `linear-gradient(90deg, rgba(8,28,56,0.96) 0%, rgba(8,28,56,0.85) 50%, rgba(8,28,56,0.95) 100%), url('/assets/images/hero_ups.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        overflow: 'hidden'
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={{ xs: 3, md: 4 }} alignItems="center">
          {/* Left Content */}
          <Grid item xs={12} lg={7}>
            <Typography
              variant="subtitle2"
              sx={{
                color: 'rgba(255,255,255,0.85)',
                fontWeight: 800,
                letterSpacing: 1.5,
                fontSize: { xs: '0.72rem', sm: '0.8rem' },
                textTransform: 'uppercase',
                mb: 1
              }}
            >
              RELIABLE | EFFICIENT | FUTURE READY
            </Typography>

            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '1.8rem', sm: '2.8rem', md: '3.6rem' },
                color: 'white',
                lineHeight: 1.15,
                mb: { xs: 1.5, sm: 2 }
              }}
            >
              Online UPS <br />
              <Box component="span" sx={{ color: '#ffaa00' }}>
                Manufacturer & Supplier
              </Box> <br />
              in India
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: 'rgba(255, 255, 255, 0.88)',
                fontSize: { xs: '0.92rem', sm: '1.15rem' },
                mb: { xs: 2, sm: 4 },
                maxWidth: 620,
                lineHeight: 1.45
              }}
            >
              High-Performance Online UPS Systems from 1 kVA to 1000+ kVA for Industrial, Commercial, IT & Critical Power Applications.
            </Typography>

            {/* 4 Badges Grid - Hidden on Extra Small (XS) screens for clean mobile layout */}
            <Grid
              container
              spacing={2}
              sx={{
                mb: 4,
                maxWidth: 600,
                display: { xs: 'none', sm: 'flex' }
              }}
            >
              <Grid item sm={3}>
                <Stack alignItems="center" textAlign="center" spacing={1}>
                  <Avatar sx={{ bgcolor: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.2)', width: 48, height: 48 }}>
                    <BoltIcon sx={{ color: '#ffaa00' }} />
                  </Avatar>
                  <Typography variant="caption" sx={{ fontWeight: 700, fontSize: '0.82rem', lineHeight: 1.2 }}>
                    Pure Sine Wave Output
                  </Typography>
                </Stack>
              </Grid>

              <Grid item sm={3}>
                <Stack alignItems="center" textAlign="center" spacing={1}>
                  <Avatar sx={{ bgcolor: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.2)', width: 48, height: 48 }}>
                    <ShieldIcon sx={{ color: '#ffaa00' }} />
                  </Avatar>
                  <Typography variant="caption" sx={{ fontWeight: 700, fontSize: '0.82rem', lineHeight: 1.2 }}>
                    High Efficiency
                  </Typography>
                </Stack>
              </Grid>

              <Grid item sm={3}>
                <Stack alignItems="center" textAlign="center" spacing={1}>
                  <Avatar sx={{ bgcolor: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.2)', width: 48, height: 48 }}>
                    <TimerIcon sx={{ color: '#ffaa00' }} />
                  </Avatar>
                  <Typography variant="caption" sx={{ fontWeight: 700, fontSize: '0.82rem', lineHeight: 1.2 }}>
                    Zero Transfer Time
                  </Typography>
                </Stack>
              </Grid>

              <Grid item sm={3}>
                <Stack alignItems="center" textAlign="center" spacing={1}>
                  <Avatar sx={{ bgcolor: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.2)', width: 48, height: 48 }}>
                    <EnergySavingsLeafIcon sx={{ color: '#ffaa00' }} />
                  </Avatar>
                  <Typography variant="caption" sx={{ fontWeight: 700, fontSize: '0.82rem', lineHeight: 1.2 }}>
                    Energy Saving
                  </Typography>
                </Stack>
              </Grid>
            </Grid>

            {/* Action Buttons Row - Streamlined for XS view */}
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={{ xs: 1.5, sm: 2 }}
              sx={{ mb: { xs: 2, lg: 0 } }}
            >
              <Button
                variant="contained"
                size="large"
                endIcon={<ArrowForwardIcon />}
                component="a"
                href="#quote"
                sx={{
                  bgcolor: '#ffaa00',
                  color: '#0b2545',
                  fontWeight: 800,
                  py: 1.4,
                  px: 3,
                  fontSize: '0.95rem',
                  display: { xs: 'none', sm: 'inline-flex' },
                  '&:hover': { bgcolor: '#ffb72b' }
                }}
              >
                Get Best Quote
              </Button>

              <Button
                variant="contained"
                size="large"
                startIcon={<PhoneIcon />}
                component="a"
                href="tel:+919891916223"
                sx={{
                  bgcolor: '#0056b3',
                  color: 'white',
                  fontWeight: 800,
                  py: 1.4,
                  px: 3,
                  fontSize: '0.95rem',
                  display: { xs: 'none', sm: 'inline-flex' },
                  '&:hover': { bgcolor: '#004494' }
                }}
              >
                Call Now
              </Button>

              <Button
                variant="contained"
                color="success"
                size="large"
                startIcon={<WhatsAppIcon />}
                component="a"
                href="https://wa.me/919891916223?text=Hi%20Incredible%20Solutions,%20I%20want%20to%20get%20a%20quote%20for%20Online%20UPS"
                target="_blank"
                sx={{
                  fontWeight: 800,
                  py: 1.4,
                  px: 3,
                  fontSize: '0.95rem',
                  width: { xs: '100%', sm: 'auto' }
                }}
              >
                WhatsApp Us
              </Button>
            </Stack>
          </Grid>

          {/* Right Form Card: Embedded "Get Instant Quote" */}
          <Grid item xs={12} lg={5}>
            <Paper
              elevation={8}
              sx={{
                bgcolor: 'white',
                color: 'text.primary',
                p: { xs: 2.5, sm: 4 },
                borderRadius: { xs: 3, sm: 4 },
                boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
                border: '1px solid rgba(255,255,255,0.2)'
              }}
            >
              <Box
                sx={{
                  bgcolor: '#0b2545',
                  color: 'white',
                  m: { xs: -2.5, sm: -4 },
                  mb: { xs: 2.5, sm: 3 },
                  p: { xs: 2, sm: 3 },
                  borderTopLeftRadius: { xs: 12, sm: 16 },
                  borderTopRightRadius: { xs: 12, sm: 16 }
                }}
              >
                <Typography variant="h5" sx={{ fontWeight: 800, color: 'white', mb: 0.5, fontSize: { xs: '1.25rem', sm: '1.5rem' } }}>
                  Get Instant Quote
                </Typography>
                <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.8)', display: 'block', fontSize: { xs: '0.75rem', sm: '0.8rem' } }}>
                  Fill in your details and our UPS experts will get back to you shortly.
                </Typography>
              </Box>

              <form onSubmit={handleSubmit}>
                <Stack spacing={{ xs: 1.5, sm: 2 }}>
                  <TextField
                    fullWidth
                    size="small"
                    name="name"
                    value={heroForm.name}
                    onChange={handleChange}
                    placeholder="Name*"
                    required
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <PersonIcon fontSize="small" sx={{ color: 'text.secondary' }} />
                        </InputAdornment>
                      ),
                    }}
                  />

                  <TextField
                    fullWidth
                    size="small"
                    name="mobile"
                    value={heroForm.mobile}
                    onChange={handleChange}
                    placeholder="Mobile Number*"
                    required
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <PhoneIphoneIcon fontSize="small" sx={{ color: 'text.secondary' }} />
                        </InputAdornment>
                      ),
                    }}
                  />

                  <TextField
                    fullWidth
                    size="small"
                    name="city"
                    value={heroForm.city}
                    onChange={handleChange}
                    placeholder="City"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <LocationOnIcon fontSize="small" sx={{ color: 'text.secondary' }} />
                        </InputAdornment>
                      ),
                    }}
                  />

                  <TextField
                    select
                    fullWidth
                    size="small"
                    name="capacity"
                    value={heroForm.capacity}
                    onChange={handleChange}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <PowerIcon fontSize="small" sx={{ color: 'text.secondary' }} />
                        </InputAdornment>
                      ),
                    }}
                  >
                    {capacities.map((cap) => (
                      <MenuItem key={cap} value={cap}>
                        {cap}
                      </MenuItem>
                    ))}
                  </TextField>

                  <TextField
                    fullWidth
                    size="small"
                    name="requirement"
                    value={heroForm.requirement}
                    onChange={handleChange}
                    placeholder="Your Requirement (Optional)"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <NoteAltIcon fontSize="small" sx={{ color: 'text.secondary' }} />
                        </InputAdornment>
                      ),
                    }}
                  />

                  <Button
                    type="submit"
                    variant="contained"
                    fullWidth
                    size="large"
                    disabled={isSubmitting}
                    endIcon={isSubmitting ? null : <ArrowForwardIcon />}
                    sx={{
                      bgcolor: '#ffaa00',
                      color: '#0b2545',
                      fontWeight: 800,
                      py: 1.4,
                      fontSize: '0.98rem',
                      '&:hover': { bgcolor: '#ffb72b' }
                    }}
                  >
                    {isSubmitting ? <CircularProgress size={24} color="inherit" /> : 'Submit Enquiry'}
                  </Button>

                  <Stack direction="row" spacing={1} justifyContent="center" alignItems="center" sx={{ mt: 0.5 }}>
                    <LockIcon sx={{ fontSize: 14, color: 'success.main' }} />
                    <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 600, fontSize: '0.72rem' }}>
                      Your data is safe with us
                    </Typography>
                  </Stack>
                </Stack>
              </form>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
