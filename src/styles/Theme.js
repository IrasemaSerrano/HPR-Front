import { createTheme } from '@mui/material/styles';

const Theme = createTheme({
    typography: {
        fontFamily: "'Work Sans', sans-serif",
        fontSize: 14,
        fontFamilySecondary: "'Roboto Condensed', sans-serif",
      },
     palette: {
          type: 'light',
          primary: {
            main: '#000000',
          },
          secondary: {
            main: '#f44336',
          },
          background: {
            default: '#fafafa',
            paper: '#ffffff',
          },
          text: {
            primary: 'rgba(45,45,45,0.87)',
            secondary: 'rgba(45,45,45,0.54)',
            disabled: 'rgba(45,45,45,0.38)',
            hint: 'rgba(45,45,45,0.38)',
          },
          warning: {
            main: '#ff9701',
          },
          info: {
            main: '#2196f2',
          },
          success: {
            main: '#4caf51',
          },
          divider: 'rgba(0,0,0,0.13)'
     },

});

export {Theme};