import React, { useState } from 'react';
import { Container, Grid, Typography, Paper, Box, Avatar, Snackbar, Alert } from '@mui/material';
import FactoryIcon from '@mui/icons-material/Factory';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import StorageIcon from '@mui/icons-material/Storage';
import BusinessIcon from '@mui/icons-material/Business';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import PrintIcon from '@mui/icons-material/Print';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import CellTowerIcon from '@mui/icons-material/CellTower';
import SolarPowerIcon from '@mui/icons-material/SolarPower';

const industries = [
  { icon: <FactoryIcon />, title: 'Manufacturing Industries', rec: 'Industrial 30-300 kVA Three Phase UPS' },
  { icon: <LocalHospitalIcon />, title: 'Hospitals & Healthcare', rec: 'Three Phase 20-120 kVA Isolation UPS' },
  { icon: <StorageIcon />, title: 'Data Centers', rec: 'Modular 50-500 kVA UPS with N+1 Redundancy' },
  { icon: <BusinessIcon />, title: 'Corporate Offices', rec: '10-40 kVA True Online Double Conversion' },
  { icon: <AccountBalanceIcon />, title: 'Banks & Financial Institutions', rec: 'Zero Downtime 10-30 kVA UPS' },
  { icon: <PrintIcon />, title: 'Printing & Packaging', rec: '30-100 kVA High Inrush Online UPS' },
  { icon: <PrecisionManufacturingIcon />, title: 'CNC & Industrial Machines', rec: 'Heavy Duty 30-200 kVA Three Phase UPS' },
  { icon: <CellTowerIcon />, title: 'Telecom & Networking', rec: 'Rackmount & Long Backup Battery Systems' },
  { icon: <SolarPowerIcon />, title: 'Solar & Electronics Industries', rec: 'Hybrid Online Solar Inverter & UPS' },
];

export default function IndustryGrid() {
  const [selected, setSelected] = useState(null);
  const [toastMessage, setToastMessage] = useState('');

  const handleCardClick = (item) => {
    setSelected(item.title);
    setToastMessage(`💡 ${item.title} Solution: ${item.rec}`);
  };

  return (
    <Box id="industries" sx={{ py: 7, bgcolor: 'white' }}>
      <Container maxWidth="xl">
        <Box textAlign="center" mb={5}>
          <Typography variant="h3" sx={{ color: 'primary.main', fontWeight: 800 }}>
            Online UPS Solutions for Every Industry
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary', mt: 0.5 }}>
            Tailored power protection built for specialized sector demands.
          </Typography>
        </Box>

        <Grid container spacing={2} justifyContent="center">
          {industries.map((item, idx) => {
            const isSelected = selected === item.title;
            return (
              <Grid item xs={6} sm={4} md={2.6} lg={1.3} key={idx}>
                <Paper
                  elevation={isSelected ? 4 : 0}
                  onClick={() => handleCardClick(item)}
                  sx={{
                    p: 2,
                    textAlign: 'center',
                    bgcolor: isSelected ? 'primary.main' : '#f8fafc',
                    color: isSelected ? 'white' : 'text.primary',
                    border: '1px solid #e2e8f0',
                    borderRadius: 3,
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      bgcolor: isSelected ? 'primary.main' : '#eef5ff',
                      borderColor: 'secondary.main'
                    }
                  }}
                >
                  <Avatar
                    sx={{
                      width: 48,
                      height: 48,
                      bgcolor: isSelected ? 'rgba(255,255,255,0.2)' : '#eef5ff',
                      color: isSelected ? '#ffaa00' : 'secondary.main',
                      mb: 1.5
                    }}
                  >
                    {item.icon}
                  </Avatar>
                  <Typography variant="caption" sx={{ fontWeight: 700, fontSize: '0.78rem', lineHeight: 1.2, color: isSelected ? 'white' : 'primary.main' }}>
                    {item.title}
                  </Typography>
                </Paper>
              </Grid>
            );
          })}
        </Grid>

        <Snackbar
          open={Boolean(toastMessage)}
          autoHideDuration={4000}
          onClose={() => setToastMessage('')}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        >
          <Alert severity="info" onClose={() => setToastMessage('')} sx={{ width: '100%', bgcolor: 'primary.main', color: 'white' }}>
            {toastMessage}
          </Alert>
        </Snackbar>
      </Container>
    </Box>
  );
}
