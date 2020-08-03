import React from "react";
import Header from "./Header/Header";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./UI/Theme";
import Login from "./Login/Login";
import SignUp from "./Login/SignUp";
import { showFlights } from "../api/flights";
import { showAirlines } from "../api/airlines";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={() => <div>home</div>} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
