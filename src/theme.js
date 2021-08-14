import { createTheme } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#0f0e17",
      second: "#e7f1ea",
      Button: "#688d73",
      ButtonHover: "#acc2b1",
    },
    secondary: {
      main: "#8bd3dd",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#e7f1ea",
    },
  },
});

export default theme;
