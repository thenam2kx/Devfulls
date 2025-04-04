'use client';
import { createTheme } from '@mui/material/styles';

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

  interface Palette {
    custom: {
      notificationBar: string
      notificationBorder: string
      activeLink: string
      inactiveLink: string
      buttonHover: string
    }
  }

  interface PaletteOptions {
    custom?: {
      notificationBar?: string
      notificationBorder?: string
      activeLink?: string
      inactiveLink?: string
      buttonHover?: string
    }
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

  palette: {
    mode: "dark",
    primary: {
      main: "#ffd11a",
      contrastText: "#1a1a1a",
    },
    secondary: {
      main: "#98989a",
      light: "#ffffff",
      dark: "#7e7e81",
    },
    background: {
      default: "#1a1a1a",
      paper: "#262626",
    },
    text: {
      primary: "#ffffff",
      secondary: "#98989a",
    },
    divider: "#333333",

    custom: {
      notificationBar: "#141414",
      notificationBorder: "#262626",
      activeLink: "#ffffff",
      inactiveLink: "#98989a",
      buttonHover: "#e6bc18",
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  shape: {
    borderRadius: 4,
  },
});

  // colorSchemes: {
  //   light: {
  //     palette: {
  //       text: {
  //         primary: '#000',
  //         secondary: 'hsl(0deg 0% 100% / 50%)'
  //       }
  //     }
  //   },
  //   dark: {
  //     palette: {
  //       text: {
  //         primary: '#dee2e6',
  //         secondary: 'hsl(0deg 0% 100% / 50%)'
  //       }
  //     }
  //   }
  // },
  // },


export default theme;
