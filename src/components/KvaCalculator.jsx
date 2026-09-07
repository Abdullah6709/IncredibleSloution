import React, { useState } from 'react';
import {
  Container,
  Grid,
  Typography,
  Paper,
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  MenuItem,
  IconButton
} from '@mui/material';
import BoltIcon from '@mui/icons-material/Bolt';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CloseIcon from '@mui/icons-material/Close';
import { Stack } from '@mui/system';

const comparisonData = [
  { type: 'Single Phase Online UPS', capacity: '1 – 10 kVA', phase: '1P - 1P', ideal: 'Offices, IT' },
  { type: 'Three Phase UPS', capacity: '10 – 200 kVA', phase: '3P - 3P', ideal: 'Commercial' },
  { type: 'Industrial UPS', capacity: '10 – 1000+ kVA', phase: '3P', ideal: 'Manufacturing' },
  { type: 'Modular UPS', capacity: '20 – 1000+ kVA', phase: '3P', ideal: 'Data Centers' },
];

export default function KvaCalculator() {
  const [modalOpen, setModalOpen] = useState(false);
  const [watts, setWatts] = useState(3000);
  const [backupHours, setBackupHours] = useState(1);

  const loadWatts = parseFloat(watts) || 0;
  const hours = parseFloat(backupHours) || 1;
  const reqKva = loadWatts > 0 ? (loadWatts / 0.8 / 1000 * 1.25).toFixed(1) : 0;
  const phase = reqKva > 10 ? '3-Phase High Capacity' : '1-Phase Compact Tower';

  return (
    <Box sx={{ py: 6, bgcolor: '#081c38', color: 'white' }}>
      <Container maxWidth="xl">
        <Grid container spacing={4} alignItems="center">
          {/* Left Column: Sizing Callout */}
          <Grid item xs={12} lg={5}>
            <Stack direction="row" spacing={2} alignItems="flex-start" mb={2}>
              <Box sx={{ width: 54, height: 54, borderRadius: 2, bgcolor: '#ffaa00', color: '#081c38', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <BoltIcon fontSize="large" />
              </Box>
              <Box>
                <Typography variant="h3" sx={{ color: 'white', fontWeight: 800, lineHeight: 1.2, mb: 1 }}>
                  Not Sure Which <br />
                  <Box component="span" sx={{ color: '#ffaa00' }}>
                    UPS You Need?
                  </Box>
                </Typography>
                <Typography variant="body1" sx={{ color: 'rgba(255, 255, 255, 0.85)', mb: 3 }}>
                  Tell us your load requirement and application. Our UPS experts will recommend the right capacity and configuration.
                </Typography>

                <Button
                  variant="contained"
                  size="large"
                  endIcon={<ArrowForwardIcon />}
                  onClick={() => setModalOpen(true)}
                  sx={{
                    bgcolor: '#ffaa00',
                    color: '#081c38',
                    fontWeight: 800,
                    py: 1.5,
                    px: 3.5,
                    fontSize: '1rem',
                    '&:hover': { bgcolor: '#ffb72b' }
                  }}
                >
                  Get Free UPS Sizing
                </Button>
              </Box>
            </Stack>
          </Grid>

          {/* Right Column: Quick Comparison Guide Table */}
          <Grid item xs={12} lg={7}>
            <Paper elevation={4} sx={{ borderRadius: 3, overflow: 'hidden' }}>
              <Box sx={{ bgcolor: '#0056b3', color: 'white', p: 2, px: 3 }}>
                <Typography variant="h6" sx={{ fontWeight: 800, color: 'white' }}>
                  Quick Comparison Guide
                </Typography>
              </Box>
              <TableContainer>
                <Table size="small">
                  <TableHead>
                    <TableRow sx={{ bgcolor: '#eef5ff' }}>
                      <TableCell sx={{ fontWeight: 800, color: 'primary.main' }}>UPS Type</TableCell>
                      <TableCell sx={{ fontWeight: 800, color: 'primary.main' }}>Capacity Range</TableCell>
                      <TableCell sx={{ fontWeight: 800, color: 'primary.main' }}>Phase</TableCell>
                      <TableCell sx={{ fontWeight: 800, color: 'primary.main' }}>Ideal For</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {comparisonData.map((row, idx) => (
                      <TableRow key={idx} sx={{ '&:nth-of-type(even)': { bgcolor: '#f8fafc' } }}>
                        <TableCell sx={{ fontWeight: 700, color: 'primary.main' }}>{row.type}</TableCell>
                        <TableCell sx={{ color: 'text.secondary', fontWeight: 600 }}>{row.capacity}</TableCell>
                        <TableCell sx={{ color: 'secondary.main', fontWeight: 700 }}>{row.phase}</TableCell>
                        <TableCell sx={{ color: 'text.secondary' }}>{row.ideal}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      {/* Sizing Modal */}
      <Dialog open={modalOpen} onClose={() => setModalOpen(false)} maxWidth="sm" fullWidth>
        <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h6" sx={{ fontWeight: 800, color: 'primary.main' }}>
            Interactive UPS Sizing Calculator
          </Typography>
          <IconButton onClick={() => setModalOpen(false)} size="small">
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers>
          <Box mb={3}>
            <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 1 }}>
              Total Equipment Load (in Watts):
            </Typography>
            <TextField
              fullWidth
              type="number"
              value={watts}
              onChange={(e) => setWatts(e.target.value)}
              placeholder="e.g. 3000 Watts"
              variant="outlined"
              size="small"
            />
          </Box>

          <Box mb={3}>
            <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 1 }}>
              Desired Backup Duration (in Hours):
            </Typography>
            <TextField
              select
              fullWidth
              value={backupHours}
              onChange={(e) => setBackupHours(e.target.value)}
              variant="outlined"
              size="small"
            >
              <MenuItem value={0.5}>30 Minutes</MenuItem>
              <MenuItem value={1}>1 Hour</MenuItem>
              <MenuItem value={2}>2 Hours</MenuItem>
              <MenuItem value={4}>4 Hours</MenuItem>
              <MenuItem value={8}>8 Hours</MenuItem>
            </TextField>
          </Box>

          <Paper elevation={0} sx={{ p: 3, bgcolor: '#eef5ff', border: '2px dashed #0056b3', textAlign: 'center', borderRadius: 3 }}>
            <Typography variant="caption" sx={{ fontWeight: 700, color: 'text.secondary' }}>
              RECOMMENDED CAPACITY
            </Typography>
            <Typography variant="h3" sx={{ color: 'secondary.main', fontWeight: 800, my: 1 }}>
              {reqKva} KVA
            </Typography>
            <Typography variant="body2" sx={{ fontWeight: 600, color: 'primary.main' }}>
              Recommended Setup: {phase}
            </Typography>
          </Paper>
        </DialogContent>
        <DialogActions sx={{ p: 2 }}>
          <Button variant="contained" color="warning" fullWidth component="a" href="#quote" onClick={() => setModalOpen(false)}>
            Proceed to Quote
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
