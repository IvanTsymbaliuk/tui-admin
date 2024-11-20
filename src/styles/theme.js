import { createTheme } from "@mui/material/styles";

export const Colors = {
  primary: "#2e7d32",
  secondary: "#558b2f",
  success: "#4CAF50",
  info: "#00a2ff",
  warning: "#FFC107",
  danger: "#FF5722",
  dark: "#0e1b20",
  light: "#aaa",
  muted: "#f06292",
  border: "#DDDFE1",
  inverse: "#f06292",
  shaft: "#333",
  transparent: "#000000000",

  background: "#F5F5F5",

  white: "#fff",
  black: "#000",
};

//css utils
export const cssUtils = {
  boxShadow: "rgba(149,157,165, 0.2) 0px 8px 24px",
};

//create theme
const theme = createTheme({
  palette: {
    primary: {
      main: Colors.primary,
    },
    secondary: {
      main: Colors.secondary,
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: Colors.transparent,
        },
      },
    },
    MuiButton: {
      defaultProps: {
        disableRipple: true,
        disableElevation: true,
      },
    },
  },
});

export default theme;
