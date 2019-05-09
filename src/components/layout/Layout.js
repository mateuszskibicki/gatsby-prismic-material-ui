import React from "react";
import { Helmet } from "react-helmet";
import CssBaseline from "@material-ui/core/CssBaseline";
import Badges from "../Badges";
export const Layout = props => {
  return (
    <>
      <Badges />
      {props.children}
    </>
  );
};
