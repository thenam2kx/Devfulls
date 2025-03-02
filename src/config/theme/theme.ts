'use client';
import { createTheme } from '@mui/material/styles';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

declare module '@mui/material/styles' {
  interface Theme {
    devFulls: {
      appHeader: string
      appFooter: string
      appContent: string
    };
  }
  interface ThemeOptions {
    devFulls?: {
      appHeader?: string
      appFooter?: string
      appContent?: string
    };
  }
}

const APP_HEADER = '50px'
const APP_FOOTER = '40px'
const APP_CONTENT = `calc(100vh - ${APP_HEADER} - ${APP_FOOTER})`

const theme = createTheme({
  devFulls: {
    appHeader: APP_HEADER,
    appFooter: APP_FOOTER,
    appContent: APP_CONTENT
  },

  colorSchemes: {
    light: {
      palette: {
        text: {
          primary: '#000',
          secondary: 'hsl(0deg 0% 100% / 50%)'
        }
      }
    },
    dark: {
      palette: {
        text: {
          primary: '#dee2e6',
          secondary: 'hsl(0deg 0% 100% / 50%)'
        }
      }
    }
  },
  cssVariables: {
    colorSchemeSelector: 'class',
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  components: {
    MuiAlert: {
      styleOverrides: {
        root: {
          variants: [
            {
              props: { severity: 'info' },
              style: {
                backgroundColor: '#60a5fa',
              },
            },
          ],
        },
        // root: ({ ownerState }) => ({
        //   ...(ownerState.severity === 'info' && {
        //     backgroundColor: '#60a5fa',
        //   }),
        // }),
      },
    },
  },
});

export default theme;
