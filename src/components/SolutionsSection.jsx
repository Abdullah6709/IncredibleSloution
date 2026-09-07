import React from 'react';
import { Container, Grid, Typography, Card, CardContent, CardMedia, Box, Link } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const kvaProducts = [
  { kva: '1 kVA', key: 'single-phase', img: '/assets/images/single_phase_ups.jpg' },
  { kva: '2 kVA', key: 'single-phase', img: '/assets/images/single_phase_ups.jpg' },
  { kva: '3 kVA', key: 'single-phase', img: '/assets/images/single_phase_ups.jpg' },
  { kva: '5 kVA', key: 'single-phase', img: '/assets/images/single_phase_ups.jpg' },
  { kva: '10 kVA', key: 'single-phase', img: '/assets/images/single_phase_ups.jpg' },
  { kva: '20 kVA', key: 'three-phase', img: '/assets/images/three_phase_ups.jpg' },
  { kva: '30 kVA', key: 'three-phase', img: '/assets/images/three_phase_ups.jpg' },
  { kva: '40 kVA', key: 'three-phase', img: '/assets/images/three_phase_ups.jpg' },
  { kva: '60 kVA', key: 'three-phase', img: '/assets/images/three_phase_ups.jpg' },
  { kva: '100 kVA', key: 'three-phase', img: '/assets/images/three_phase_ups.jpg' },
  { kva: '200 kVA', key: 'three-phase', img: '/assets/images/three_phase_ups.jpg' },
  { kva: '300+ kVA', key: 'modular', img: '/assets/images/modular_ups.jpg' },
];

export default function SolutionsSection({ onOpenSpecModal }) {
  return (
    <Box id="products" sx={{ py: 6, bgcolor: '#f4f7fa' }}>
      <Container maxWidth="xl">
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4, flexWrap: 'wrap', gap: 2 }}>
          <Box>
            <Typography variant="h3" sx={{ color: 'primary.main', fontWeight: 800 }}>
              Our Online UPS Range
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary', fontWeight: 500, mt: 0.5 }}>
              Multiple capacity options to match your power backup needs.
            </Typography>
          </Box>

          <Link
            href="#quote"
            underline="hover"
            sx={{
              color: 'secondary.main',
              fontWeight: 800,
              display: 'flex',
              alignItems: 'center',
              gap: 0.5,
              fontSize: '0.95rem'
            }}
          >
            View All Products <ArrowForwardIcon fontSize="small" />
          </Link>
        </Box>

        <Grid container spacing={2.5}>
          {kvaProducts.map((item, idx) => (
            <Grid item xs={6} sm={4} md={3} lg={2} key={idx}>
              <Card
                onClick={() => onOpenSpecModal(item.key)}
                sx={{
                  textAlign: 'center',
                  cursor: 'pointer',
                  p: 2,
                  bgcolor: 'white',
                  borderRadius: 3,
                  border: '1px solid #e2e8f0',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.04)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-6px)',
                    borderColor: 'secondary.main',
                    boxShadow: '0 12px 25px rgba(0,86,179,0.15)'
                  }
                }}
              >
                <CardMedia
                  component="img"
                  height="110"
                  image={item.img}
                  alt={`${item.kva} Online UPS`}
                  sx={{ objectFit: 'contain', mb: 1.5 }}
                />
                <CardContent sx={{ p: '0 !important' }}>
                  <Typography variant="h6" sx={{ color: 'primary.main', fontWeight: 800, fontSize: '1.05rem', lineHeight: 1.1 }}>
                    {item.kva}
                  </Typography>
                  <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 600 }}>
                    Online UPS
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
