import React from 'react';
import { Container, Typography, Grid, Paper, Box } from '@mui/material';

const brands = [
  { name: 'EATON', style: { color: '#0056b3', fontWeight: 900 } },
  { name: 'VERTIV.', style: { color: '#1a1a1a', fontWeight: 800, letterSpacing: 2 } },
  { name: 'MICROTEK', style: { color: '#c0392b', fontWeight: 800 } },
  { name: 'LUMINOUS', style: { color: '#0052cc', fontWeight: 800 } },
  { name: 'APC', subtitle: 'by Schneider Electric', style: { color: '#27ae60', fontWeight: 800 } },
  { name: 'HITACHI', subtitle: 'Inspire the Next', style: { color: '#000000', fontWeight: 700, fontFamily: 'serif' } },
  { name: 'Fuji Electric', style: { color: '#d35400', fontWeight: 800 } },
];

export default function TrustedBrands() {
  return (
    <Box id="brands" sx={{ bgcolor: 'white', py: 6, borderTop: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0' }}>
      <Container maxWidth="xl">
        <Box textAlign="center" mb={4}>
          <Typography variant="h3" sx={{ color: 'primary.main', fontWeight: 800 }}>
            Leading Online UPS Brands
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary', fontWeight: 500, mt: 0.5 }}>
            We deal in genuine products from the world's most trusted brands.
          </Typography>
        </Box>

        <Grid container spacing={2.5} justifyContent="center" alignItems="center">
          {brands.map((brand, idx) => (
            <Grid item xs={6} sm={4} md={1.7} key={idx}>
              <Paper
                elevation={0}
                sx={{
                  py: 2,
                  px: 1.5,
                  textAlign: 'center',
                  bgcolor: '#f8fafc',
                  border: '1px solid #e2e8f0',
                  borderRadius: 2.5,
                  height: 75,
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
                <Typography variant="h6" sx={{ fontSize: '1.1rem', ...brand.style }}>
                  {brand.name}
                </Typography>
                {brand.subtitle && (
                  <Typography variant="caption" sx={{ fontSize: '0.62rem', color: 'text.secondary', display: 'block' }}>
                    {brand.subtitle}
                  </Typography>
                )}
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
