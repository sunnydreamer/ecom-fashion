// set up theme for mui components

import { createTheme } from "@mui/material/styles";

// TODO
export const shades = {
  primary: {
    100: "#cccccc",
    200: "#999999",
    300: "#666666",
    400: "#333333",
    500: "#000000",
    600: "#000000",
    700: "#000000",
    800: "#000000",
    900: "#000000",
  },
};

export const theme = createTheme({
  palette: {
    primary: {
      main: shades.primary[500],
    },
  },
  typography: {
    fontFamily: ["Graphik", "sans-serif"].join(","),
    fontSize: 12,
  },
  //   TODO h1,h2...
});
