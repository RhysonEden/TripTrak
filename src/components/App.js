import React from "react";
import Header from "./Header/Header";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./UI/Theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
    </ThemeProvider>
  );
};

export default App;
