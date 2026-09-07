import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
  IconButton
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const productSpecsData = {
  'single-phase': {
    title: 'Single Phase Online UPS (1 KVA - 10 KVA)',
    specs: [
      { label: 'Capacity Range', value: '1.0 KVA to 10.0 KVA' },
      { label: 'Input Voltage Range', value: '110V - 300V AC Single Phase' },
      { label: 'Output Voltage', value: '220V / 230V AC ± 1%' },
      { label: 'Technology', value: 'True Double Conversion Online Technology' },
      { label: 'Power Factor', value: '0.9 / 1.0 Unity Power Factor' },
      { label: 'Waveform', value: 'Pure Sine Wave' },
      { label: 'Battery System', value: 'External VRLA / Lithium Battery Bank (36V to 240V DC)' },
      { label: 'Ideal For', value: 'Small & Medium Offices, Diagnostic Labs, IT Racks' }
    ]
  },
  'three-phase': {
    title: 'Three Phase Online UPS (10 KVA - 120 KVA)',
    specs: [
      { label: 'Capacity Range', value: '10.0 KVA to 120.0 KVA' },
      { label: 'Input Voltage Range', value: '380V / 400V / 415V AC 3-Phase 4-Wire' },
      { label: 'Output Voltage', value: '400V / 415V AC 3-Phase ± 1%' },
      { label: 'Efficiency', value: 'Up to 96% in Online Double Conversion Mode' },
      { label: 'Display & Control', value: 'Touchscreen LCD Graphic Display with SNMP Monitoring' },
      { label: 'Overload Capability', value: '125% for 10 mins; 150% for 1 min' },
      { label: 'Ideal For', value: 'Hospitals, Factories, Industrial Motors, Server Rooms' }
    ]
  },
  'modular': {
    title: 'Modular Online UPS (20 KVA - 500 KVA+)',
    specs: [
      { label: 'Capacity Range', value: '20 KVA to 500 KVA+ Scalable' },
      { label: 'Module Capacity', value: '10 KVA, 25 KVA, 50 KVA Hot-Swappable Power Modules' },
      { label: 'Redundancy', value: 'N+X Parallel Redundancy' },
      { label: 'Maintenance', value: 'Zero Downtime Module Replacement (Hot Swap)' },
      { label: 'Footprint', value: 'Ultra Compact High Power Density Cabinet' },
      { label: 'Ideal For', value: 'Enterprise Data Centres, Financial Cloud Racks, Telecom Hubs' }
    ]
  }
};

export default function ProductSpecModal({ open, productKey, onClose }) {
  const data = productSpecsData[productKey] || productSpecsData['single-phase'];

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', pr: 2 }}>
        <Typography variant="h6" sx={{ fontWeight: 800, color: 'primary.main' }}>
          {data.title}
        </Typography>
        <IconButton onClick={onClose} size="small">
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent dividers>
        <Table size="small">
          <TableBody>
            {data.specs.map((row, idx) => (
              <TableRow key={idx}>
                <TableCell sx={{ fontWeight: 700, color: 'primary.main', width: '40%' }}>
                  {row.label}
                </TableCell>
                <TableCell sx={{ color: 'text.secondary' }}>
                  {row.value}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </DialogContent>

      <DialogActions sx={{ p: 2 }}>
        <Button variant="contained" color="warning" fullWidth component="a" href="#quote" onClick={onClose}>
          Request Price Quote
        </Button>
      </DialogActions>
    </Dialog>
  );
}
