import { createMuiTheme } from "@material-ui/core/styles";

const ttBlue = "#142850";
const ttGrey = "#dae1e7";

export default createMuiTheme({
  palette: {
    common: {
      Blue: `${ttBlue}`,
      Grey: `${ttGrey}`,
    },
    primary: {
      main: `${ttBlue}`,
    },
    secondary: {
      main: `${ttGrey}`,
    },
  },
  typography: {
    tab: {
      fontFamily: "Raleway",
      textTransform: "None",
      fontWeight: "700",
      fontSize: "1rem",
    },
  },
});
