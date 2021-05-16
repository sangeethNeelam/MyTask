import React from "react";
import { Router } from "@reach/router";
import { makeStyles } from "@material-ui/core/styles";

//local imports
import "./core.less";
import App from "./App";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.white.main,
  },
}));

const NotFound = () => <p>Sorry 404, page not found</p>;

const Core = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <div className={classes.root}>
        <Router>
          <NotFound default path="404" />
          <App path="/" />
        </Router>
      </div>
    </React.Fragment>
  );
};

export default Core;
