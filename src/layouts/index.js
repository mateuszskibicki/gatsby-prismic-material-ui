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
  wrapper: {
    width: 1280,
    background: grey[50],
    minHeight: "80vh",
    boxShadow: theme.shadows[6],
    [theme.breakpoints.up("sm")]: {
      margin: "12px"
    },
    [theme.breakpoints.up("md")]: {
      margin: "16px"
    },
    [theme.breakpoints.up("lg")]: {
      margin: "30px"
    }
  },
  content: {
    padding: "0.6rem",
    [theme.breakpoints.up("sm")]: {
      padding: "0.8rem"
    },
    [theme.breakpoints.up("md")]: {
      padding: "1rem"
    },
    [theme.breakpoints.up("lg")]: {
      padding: "1.2rem"
    }
  }
});

const Head = () => (
  <>
    <Helmet>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"
      />
    </Helmet>
    <CssBaseline />
  </>
);

const LayoutComponent = props => {
  const { classes } = props;

  return (
    <>
      <Head />
      <div className={classes.root}>
        <div className={classes.wrapper}>
          <Navbar />
          <div className={classes.content}>{props.children}</div>
        </div>
      </div>
    </>
  );
};

export default withStyles(styles)(LayoutComponent);
