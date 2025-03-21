import {
  CssBaseline,
  ThemeProvider as MuiThemeProvider,
  createTheme,
} from "@mui/material";
import React from "react";

const appTheme = createTheme({
  palette: {
    primary: {
      main: "#00A971", // Green color from the AI Skills logo
      light: "#E6F7F1", // Light green background
      dark: "#008F5D",
    },
    secondary: {
      main: "#2D81F7", // Blue color used in buttons
      light: "#E6F0FE",
      dark: "#1A68D4",
    },
    error: {
      main: "#FF4D4F",
    },
    warning: {
      main: "#FAAD14",
    },
    info: {
      main: "#2D81F7",
    },
    success: {
      main: "#00A971",
    },
    text: {
      primary: "#262626", // Dark text
      secondary: "#737373", // Gray text
      disabled: "#BFBFBF",
    },
    background: {
      default: "#FFFFFF",
      paper: "#FFFFFF",
    },
    divider: "#F0F0F0",
    grey: {
      50: "#F5F5F5",
      100: "#F0F0F0",
      200: "#D9D9D9",
      300: "#BFBFBF",
      400: "#8C8C8C",
      500: "#737373",
      600: "#595959",
      700: "#434343",
      800: "#262626",
      900: "#1F1F1F",
    },
    rating: {
      yellow: "#FAAD14", // Star rating color
    },
    action: {
      active: "rgba(0, 0, 0, 0.54)",
      hover: "rgba(0, 0, 0, 0.04)",
      selected: "rgba(0, 0, 0, 0.08)",
      disabled: "rgba(0, 0, 0, 0.26)",
      disabledBackground: "rgba(0, 0, 0, 0.12)",
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: "32px",
      fontWeight: 700,
      lineHeight: 1.2,
    },
    h2: {
      fontSize: "24px",
      fontWeight: 700,
      lineHeight: 1.3,
    },
    h3: {
      fontSize: "20px",
      fontWeight: 600,
      lineHeight: 1.4,
    },
    h4: {
      fontSize: "18px",
      fontWeight: 600,
      lineHeight: 1.4,
    },
    h5: {
      fontSize: "16px",
      fontWeight: 600,
      lineHeight: 1.5,
    },
    h6: {
      fontSize: "14px",
      fontWeight: 600,
      lineHeight: 1.5,
    },
    subtitle1: {
      fontSize: "16px",
      fontWeight: 500,
      lineHeight: 1.5,
    },
    subtitle2: {
      fontSize: "14px",
      fontWeight: 500,
      lineHeight: 1.5,
    },
    body1: {
      fontSize: "16px",
      fontWeight: 400,
      lineHeight: 1.5,
    },
    body2: {
      fontSize: "14px",
      fontWeight: 400,
      lineHeight: 1.5,
    },
    button: {
      fontSize: "14px",
      fontWeight: 500,
      lineHeight: 1.5,
      textTransform: "none",
    },
    caption: {
      fontSize: "12px",
      fontWeight: 400,
      lineHeight: 1.5,
    },
    overline: {
      fontSize: "12px",
      fontWeight: 500,
      lineHeight: 1.5,
      textTransform: "uppercase",
      letterSpacing: "1px",
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: 4,
          fontWeight: 500,
          boxShadow: "none",
          padding: "8px 16px",
          "&:hover": {
            boxShadow: "none",
          },
        },
        containedPrimary: {
          backgroundColor: "#00A971",
          "&:hover": {
            backgroundColor: "#008F5D",
          },
        },
        containedSecondary: {
          backgroundColor: "#2D81F7",
          "&:hover": {
            backgroundColor: "#1A68D4",
          },
        },
        outlined: {
          borderWidth: 1,
        },
        sizeSmall: {
          padding: "4px 12px",
          fontSize: "12px",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.08)",
          borderRadius: 8,
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 4,
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: ({ theme }) => ({
          padding: "12px 16px",
          borderBottom: `1px solid ${theme.palette.divider}`,
        }),
        head: ({ theme }) => ({
          ...theme.typography.subtitle2,
          backgroundColor: theme.palette.grey[50],
          color: theme.palette.text.secondary,
        }),
        body: ({ theme }) => ({
          ...theme.typography.body2,
        }),
      },
    },
    MuiListItemText: {
      styleOverrides: {
        primary: ({ theme }) => ({
          ...theme.typography.subtitle1,
          color: theme.palette.text.primary,
        }),
        secondary: ({ theme }) => ({
          ...theme.typography.body2,
          color: theme.palette.text.secondary,
        }),
      },
    },
    MuiPagination: {
      styleOverrides: {
        root: {
          "& .MuiPaginationItem-root": {
            borderRadius: 4,
          },
        },
      },
    },
    MuiRating: {
      styleOverrides: {
        root: ({ theme }) => ({
          color: theme.palette.rating.yellow,
        }),
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: "#F5F5F5",
        },
      },
    },
  },
});

export const ThemeProvider = ({ children }) => {
  return (
    <MuiThemeProvider theme={appTheme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
};
