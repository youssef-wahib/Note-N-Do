import { createTheme } from "@material-ui/core/styles";

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#070b2a",
      second: "#e7f1ea",
      Button: "#1e264f",
      ButtonHover: "#acc2b1",
    },
    secondary: {
      main: "#2f3d80",
      hover: "#fff",
    },
    background: {
      default: "#e5ecf6",
    },
  },
});

export default theme;
