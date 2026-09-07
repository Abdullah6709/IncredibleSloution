import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Container,
  Typography,
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  Stack,
  useTheme,
  useMediaQuery
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import TopBar from './TopBar';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Products', href: '#products' },
  { label: 'Brands', href: '#brands' },
  { label: 'Applications', href: '#industries' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Batteries & AMC', href: '#batteries' },
  { label: 'Contact', href: '#quote' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      <TopBar />
      <AppBar position="sticky" color="default" sx={{ bgcolor: 'white', boxShadow: '0 4px 20px rgba(6, 26, 51, 0.08)' }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ justifyContent: 'space-between', py: 1 }}>
            {/* Brand Logo */}
            <Box component="a" href="#home" sx={{ display: 'flex', alignItems: 'center', gap: 1.5, textDecoration: 'none' }}>
              <Box
                sx={{
                  width: 48,
                  height: 48,
                  borderRadius: 2,
                  background: 'linear-gradient(135deg, #061a33 0%, #0056b3 100%)',
                  color: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 800,
                  fontSize: '1.5rem',
                  fontFamily: 'Outfit, sans-serif',
                  boxShadow: '0 4px 14px rgba(0, 86, 179, 0.3)',
                  border: '1px solid rgba(255,255,255,0.2)'
                }}
              >
                IS
              </Box>
              <Box>
                <Typography variant="h6" sx={{ color: '#061a33', fontWeight: 800, lineHeight: 1.1, fontSize: { xs: '1.15rem', sm: '1.38rem' } }}>
                  Incredible Solutions
                </Typography>
                <Typography variant="caption" sx={{ color: '#0056b3', fontWeight: 800, display: 'block', fontSize: '0.68rem', letterSpacing: 0.8 }}>
                  POWERING A BRIGHTER TOMORROW
                </Typography>
              </Box>
            </Box>

            {/* Desktop Navigation Links */}
            {!isMobile && (
              <Stack direction="row" spacing={2.5}>
                {navItems.map((item) => (
                  <Button
                    key={item.label}
                    component="a"
                    href={item.href}
                    sx={{
                      color: '#0f172a',
                      fontWeight: 700,
                      fontSize: '0.92rem',
                      px: 1.5,
                      py: 0.8,
                      borderRadius: 50,
                      '&:hover': { color: '#0056b3', bgcolor: '#eef5ff' },
                    }}
                  >
                    {item.label}
                  </Button>
                ))}
              </Stack>
            )}

            {/* Header Action Button & Mobile Menu Toggle */}
            <Stack direction="row" spacing={1.5} alignItems="center">
              <Button
                variant="contained"
                endIcon={<ArrowForwardIcon />}
                component="a"
                href="#quote"
                sx={{
                  bgcolor: '#ffaa00',
                  color: '#061a33',
                  fontWeight: 800,
                  px: 2.8,
                  py: 1,
                  fontSize: '0.9rem',
                  display: { xs: 'none', sm: 'inline-flex' },
                  '&:hover': { bgcolor: '#ffb72b' }
                }}
              >
                Get Best Quote
              </Button>

              {isMobile && (
                <IconButton color="inherit" aria-label="open drawer" edge="start" onClick={handleDrawerToggle}>
                  <MenuIcon />
                </IconButton>
              )}
            </Stack>
          </Toolbar>
        </Container>

        {/* Mobile Navigation Drawer */}
        <Drawer anchor="right" open={mobileOpen} onClose={handleDrawerToggle}>
          <Box sx={{ width: 280, p: 2.5 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
              <Typography variant="h6" sx={{ fontWeight: 800, color: 'primary.main' }}>
                Menu Navigation
              </Typography>
              <IconButton onClick={handleDrawerToggle}>
                <CloseIcon />
              </IconButton>
            </Box>
            <List>
              {navItems.map((item) => (
                <ListItem key={item.label} disablePadding>
                  <Button
                    component="a"
                    href={item.href}
                    onClick={handleDrawerToggle}
                    fullWidth
                    sx={{ justifyContent: 'flex-start', py: 1.5, color: 'text.primary', fontWeight: 600 }}
                  >
                    {item.label}
                  </Button>
                </ListItem>
              ))}
              <ListItem disablePadding sx={{ mt: 2 }}>
                <Button
                  variant="contained"
                  fullWidth
                  component="a"
                  href="#quote"
                  onClick={handleDrawerToggle}
                  sx={{ bgcolor: '#ffaa00', color: '#061a33', fontWeight: 800, py: 1.2 }}
                >
                  Get Instant Quote →
                </Button>
              </ListItem>
            </List>
          </Box>
        </Drawer>
      </AppBar>
    </>
  );
}
