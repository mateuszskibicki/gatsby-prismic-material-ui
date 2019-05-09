import React from "react";
import { Helmet } from "react-helmet";

import CssBaseline from "@material-ui/core/CssBaseline";
import { withStyles } from "@material-ui/core/styles";
import grey from "@material-ui/core/colors/grey";

import "../styles/base/base.scss";
import Navbar from "../components/navbar/Navbar";

const styles = theme => ({
  root: {
    width: "100%",
    minHeight: "100vh",
    background: grey[300],
    display: "flex",
    justifyContent: "center"
  },
  content: {
    width: 1280,
    background: grey[50],
    minHeight: "80vh",
    margin: "4px 5px",
    boxShadow: theme.shadows[6],
    [theme.breakpoints.up("sm")]: {
      margin: "12px"
    },
    [theme.breakpoints.up("md")]: {
      margin: "16px"
    },
    [theme.breakpoints.up("lg")]: {
      margin: "25px"
    }
  }
});

const LayoutComponent = props => {
  const { classes } = props;
  console.log(props);
  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <Helmet>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"
          />
        </Helmet>
        <CssBaseline />
        <Navbar />
        {props.children}
      </div>
    </div>
  );
};

export default withStyles(styles)(LayoutComponent);
