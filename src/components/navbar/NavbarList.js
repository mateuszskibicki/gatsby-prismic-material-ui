import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DraftsIcon from "@material-ui/icons/Drafts";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
import CloseIcon from "@material-ui/icons/Close";
import HomeIcon from "@material-ui/icons/Home";
import { Link } from "gatsby";

const styles = theme => ({
  root: {
    width: "200px",
    height: "auto",
    maxHeight: "70vh",
    overflow: "scroll",
    zIndex: 2000,
    backgroundColor: theme.palette.background.paper,
    position: "absolute",
    boxShadow: theme.shadows[4],
    color: "#000"
  },
  exitIcon: {
    justifyContent: "center"
  },
  linkButton: {
    color: "#000"
  }
});

const NavbarList = props => {
  const { classes, setOpenNavbar } = props;
  return (
    <div className={classes.root}>
      <List component="nav">
        <ListItem
          button
          className={classes.exitIcon}
          onClick={() => setOpenNavbar()}
        >
          <CloseIcon color={"secondary"} />
        </ListItem>
        <Link to="/">
          <ListItem button onClick={() => setOpenNavbar()}>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" className={classes.linkButton} />
          </ListItem>
        </Link>
        <Link to="/blog/99">
          <ListItem button onClick={() => setOpenNavbar()}>
            <ListItemIcon>
              <LibraryBooksIcon />
            </ListItemIcon>
            <ListItemText primary="Articles" className={classes.linkButton} />
          </ListItem>
        </Link>
        <ListItem button>
          <ListItemIcon>
            <DraftsIcon />
          </ListItemIcon>
          <ListItemText primary="Drafts" className={classes.linkButton} />
        </ListItem>
      </List>
    </div>
  );
};

NavbarList.propTypes = {
  classes: PropTypes.object.isRequired,
  setOpenNavbar: PropTypes.func.isRequired
};

export default withStyles(styles)(NavbarList);
