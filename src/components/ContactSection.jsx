import React, { useState } from 'react';
import { Container, Grid, Typography, Paper, TextField, MenuItem, Button, Box, Stack, CircularProgress } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import SendIcon from '@mui/icons-material/Send';
import { sendEnquiryEmail } from '../services/emailService';

const cities = [
  'Delhi NCR', 'Mumbai', 'Bengaluru', 'Chennai', 'Hyderabad', 'Kolkata', 'Pune', 'Ahmedabad', 'Other City in India'
];

const capacities = [
  '1 KVA - 3 KVA Single Phase',
  '5 KVA - 10 KVA Single Phase',
  '10 KVA - 30 KVA Three Phase',
  '40 KVA - 100 KVA Three Phase',
  '100 KVA+ Modular Data Centre UPS',
  'UPS Batteries (Exide / Quanta)',
  'UPS AMC / Maintenance Service'
];

export default function ContactSection({ onSubmitForm }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    city: 'Delhi NCR',
    capacity: '1 KVA - 3 KVA Single Phase',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.mobile) {
      alert('Please fill in your Name and Mobile Number.');
      return;
    }
    setIsSubmitting(true);
    const result = await sendEnquiryEmail(formData);
    setIsSubmitting(false);

    onSubmitForm(formData, result);
  };

  return (
    <Box id="quote" sx={{ py: 8, bgcolor: '#f4f7fa' }}>
      <Container maxWidth="xl">
        <Grid container spacing={4} alignItems="stretch">
          <Grid item xs={12} md={5}>
            <Paper elevation={3} sx={{ p: 4, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', borderRadius: 4 }}>
              <Box>
                <Typography variant="caption" sx={{ color: 'secondary.main', fontWeight: 800, textTransform: 'uppercase', letterSpacing: 1.5 }}>
                  GET IN TOUCH
                </Typography>
                <Typography variant="h3" sx={{ color: 'primary.main', mt: 0.5, mb: 1.5 }}>
                  Looking for an Online UPS?
                </Typography>
                <Typography variant="body1" sx={{ color: 'text.secondary', mb: 4 }}>
                  Get the right UPS solution at competitive pricing directly from India's trusted supplier.
                </Typography>

                <Stack spacing={2.5} mb={4}>
                  <Paper elevation={0} sx={{ p: 2, display: 'flex', alignItems: 'center', gap: 2, bgcolor: '#eef5ff', border: '1px solid rgba(0,86,179,0.15)', borderRadius: 3 }}>
                    <Box sx={{ width: 44, height: 44, borderRadius: '50%', bgcolor: 'secondary.main', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <PhoneIcon />
                    </Box>
                    <Box>
                      <Typography variant="caption" sx={{ display: 'block', color: 'text.secondary', fontWeight: 700 }}>CALL US NOW</Typography>
                      <Typography variant="h6" component="a" href="tel:+919891916223" sx={{ color: 'primary.main', fontWeight: 800, textDecoration: 'none' }}>
                        +91 9891916223
                      </Typography>
                    </Box>
                  </Paper>

                  <Paper elevation={0} sx={{ p: 2, display: 'flex', alignItems: 'center', gap: 2, bgcolor: '#eef5ff', border: '1px solid rgba(0,86,179,0.15)', borderRadius: 3 }}>
                    <Box sx={{ width: 44, height: 44, borderRadius: '50%', bgcolor: '#25d366', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <WhatsAppIcon />
                    </Box>
                    <Box>
                      <Typography variant="caption" sx={{ display: 'block', color: 'text.secondary', fontWeight: 700 }}>WHATSAPP INQUIRY</Typography>
                      <Typography variant="h6" component="a" href="https://wa.me/919891916223" target="_blank" sx={{ color: 'primary.main', fontWeight: 800, textDecoration: 'none' }}>
                        +91 9891916223
                      </Typography>
                    </Box>
                  </Paper>

                  <Paper elevation={0} sx={{ p: 2, display: 'flex', alignItems: 'center', gap: 2, bgcolor: '#eef5ff', border: '1px solid rgba(0,86,179,0.15)', borderRadius: 3 }}>
                    <Box sx={{ width: 44, height: 44, borderRadius: '50%', bgcolor: '#ea4335', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <EmailIcon />
                    </Box>
                    <Box>
                      <Typography variant="caption" sx={{ display: 'block', color: 'text.secondary', fontWeight: 700 }}>EMAIL US</Typography>
                      <Typography variant="subtitle1" component="a" href="mailto:raturiincredible@gmail.com" sx={{ color: 'primary.main', fontWeight: 800, textDecoration: 'none' }}>
                        raturiincredible@gmail.com
                      </Typography>
                    </Box>
                  </Paper>
                </Stack>
              </Box>

              <Paper elevation={0} sx={{ p: 2, bgcolor: '#eef5ff', borderRadius: 2, borderLeft: '4px solid #0056b3' }}>
                <Typography variant="caption" sx={{ color: 'primary.main', fontWeight: 700 }}>
                  Pan India Service & AMC Support: Rapid response technical support across all major Indian cities.
                </Typography>
              </Paper>
            </Paper>
          </Grid>

          <Grid item xs={12} md={7}>
            <Paper elevation={6} sx={{ p: { xs: 3, md: 5 }, bgcolor: 'primary.main', color: 'white', borderRadius: 4, height: '100%' }}>
              <Typography variant="h3" sx={{ color: 'white', mb: 1 }}>
                Get a Free UPS Quote
              </Typography>
              <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.75)', mb: 3 }}>
                Tell us your requirement and our UPS expert will contact you promptly.
              </Typography>

              <form onSubmit={handleSubmit}>
                <Stack spacing={2.5}>
                  <TextField
                    fullWidth
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name*"
                    required
                    variant="filled"
                    sx={{ bgcolor: 'white', borderRadius: 1.5 }}
                  />

                  <TextField
                    fullWidth
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    placeholder="Mobile Number*"
                    required
                    variant="filled"
                    sx={{ bgcolor: 'white', borderRadius: 1.5 }}
                  />

                  <TextField
                    fullWidth
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address*"
                    variant="filled"
                    sx={{ bgcolor: 'white', borderRadius: 1.5 }}
                  />

                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        select
                        fullWidth
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        variant="filled"
                        sx={{ bgcolor: 'white', borderRadius: 1.5 }}
                      >
                        {cities.map((c) => (
                          <MenuItem key={c} value={c}>{c}</MenuItem>
                        ))}
                      </TextField>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                      <TextField
                        select
                        fullWidth
                        name="capacity"
                        value={formData.capacity}
                        onChange={handleChange}
                        variant="filled"
                        sx={{ bgcolor: 'white', borderRadius: 1.5 }}
                      >
                        {capacities.map((cap) => (
                          <MenuItem key={cap} value={cap}>{cap}</MenuItem>
                        ))}
                      </TextField>
                    </Grid>
                  </Grid>

                  <TextField
                    fullWidth
                    multiline
                    rows={3}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Additional details or specific requirements..."
                    variant="filled"
                    sx={{ bgcolor: 'white', borderRadius: 1.5 }}
                  />

                  <Button
                    type="submit"
                    variant="contained"
                    color="warning"
                    size="large"
                    disabled={isSubmitting}
                    endIcon={isSubmitting ? null : <SendIcon />}
                    sx={{ py: 1.8, fontSize: '1rem', fontWeight: 800 }}
                  >
                    {isSubmitting ? <CircularProgress size={24} color="inherit" /> : 'Submit Enquiry'}
                  </Button>
                </Stack>
              </form>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
