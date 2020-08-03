import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { Link as RouterLink, Route, Switch } from "react-router-dom";
import Login from "../Login/Login";

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
  },
  tabContainer: {
    marginLeft: "auto",
  },
  tab: {
    minWidth: 10,
    marginLeft: "25px",
  },
}));

function Header(props) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h3">TripTrak</Typography>
          <Tabs className={classes.tabContainer}>
            <Tab
              className={classes.tab}
              label="Home"
              component={RouterLink}
              to="/"
            />
            <Tab className={classes.tab} label="About Us" />
            <Tab className={classes.tab} label="Contact Us" />
            <Tab
              className={classes.tab}
              label="Register/Login"
              component={RouterLink}
              to="login"
            />
          </Tabs>
        </Toolbar>
      </AppBar>
      <div className={classes.toolbarMargin} />
    </React.Fragment>
  );
}

export default Header;
