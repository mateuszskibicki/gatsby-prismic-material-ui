import React, { useState } from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import deepOrange from "@material-ui/core/colors/deepOrange";

import NavbarList from "./NavbarList";

const styles = theme => {
  return {
    root: {
      width: "100%",
      borderRadius: 0,
      backgroundColor: deepOrange[500],
      color: "white"
    },
    menuButton: {
      marginLeft: -12,
      marginRight: 20
    },
    title: {
      [theme.breakpoints.up("sm")]: {
        display: "block"
      }
    }
  };
};

const Navbar = props => {
  const { classes } = props;

  const [isOpenNavbar, setOpenNavbar] = useState(false);
  const handleClickNavbar = () => {
    setOpenNavbar(!isOpenNavbar);
  };

  return (
    <>
      {isOpenNavbar && <NavbarList setOpenNavbar={setOpenNavbar} />}
      <AppBar position="static" className={classes.root}>
        <Toolbar>
          <IconButton
            className={classes.menuButton}
            color="inherit"
            aria-label="Open drawer"
            onClick={handleClickNavbar}
          >
            {isOpenNavbar ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
          <Typography
            className={classes.title}
            variant="h6"
            color="inherit"
            noWrap
          >
            App starter
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
};

Navbar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Navbar);
