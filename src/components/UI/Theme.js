import { createMuiTheme } from "@material-ui/core/styles";

const ttBlue = "#142850";
const ttGrey = "#dae1e7";

export default createMuiTheme({
  palette: {
    common: {
      Blue: `${ttBlue}`,
      Cream: `${ttGrey}`,
    },
    primary: {
      main: `${ttBlue}`,
    },
    secondary: {
      main: `${ttGrey}`,
    },
  },
  typography: {
    h3: {
      fontWeight: 300,
    },
  },
});
