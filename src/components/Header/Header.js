import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
  },
}));

function Header(props) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h3">TripTrak</Typography>
        </Toolbar>
      </AppBar>
      <div className={classes.toolbarMargin} />
    </React.Fragment>
  );
}

export default Header;
