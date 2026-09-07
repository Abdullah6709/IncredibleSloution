import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#061a33',
      light: '#0b2e59',
      dark: '#030d1a',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#0056b3',
      light: '#1a75ff',
      dark: '#003d80',
      contrastText: '#ffffff',
    },
    warning: {
      main: '#ffaa00',
      light: '#ffc107',
      dark: '#e69900',
      contrastText: '#061a33',
    },
    success: {
      main: '#25d366',
      light: '#4cd97b',
      dark: '#1ebc57',
      contrastText: '#ffffff',
    },
    background: {
      default: '#f4f7fa',
      paper: '#ffffff',
    },
    text: {
      primary: '#0f172a',
      secondary: '#475569',
    },
  },
  typography: {
    fontFamily: ['Inter', 'system-ui', 'sans-serif'].join(','),
    h1: {
      fontFamily: ['Outfit', 'sans-serif'].join(','),
      fontWeight: 800,
      letterSpacing: '-0.5px',
    },
    h2: {
      fontFamily: ['Outfit', 'sans-serif'].join(','),
      fontWeight: 800,
      letterSpacing: '-0.5px',
    },
    h3: {
      fontFamily: ['Outfit', 'sans-serif'].join(','),
      fontWeight: 800,
    },
    h4: {
      fontFamily: ['Outfit', 'sans-serif'].join(','),
      fontWeight: 700,
    },
    h5: {
      fontFamily: ['Outfit', 'sans-serif'].join(','),
      fontWeight: 700,
    },
    h6: {
      fontFamily: ['Outfit', 'sans-serif'].join(','),
      fontWeight: 700,
    },
    button: {
      fontFamily: ['Outfit', 'sans-serif'].join(','),
      fontWeight: 800,
      textTransform: 'none',
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 50,
          padding: '10px 24px',
          boxShadow: 'none',
          transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
          '&:hover': {
            boxShadow: '0 8px 20px rgba(0,86,179,0.2)',
            transform: 'translateY(-2px)'
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: '0 8px 25px rgba(6, 26, 51, 0.06)',
          border: '1px solid #e2e8f0',
          borderRadius: 16,
          transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
          '&:hover': {
            boxShadow: '0 15px 35px rgba(0, 86, 179, 0.15)',
            transform: 'translateY(-4px)'
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 16,
        },
      },
    },
  },
});

export default theme;
