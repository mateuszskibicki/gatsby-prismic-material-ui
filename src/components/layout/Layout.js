import React from "react";
import Badges from "../navbar/Navbar";
export const Layout = props => {
  return (
    <>
      <Badges />
      {props.children}
    </>
  );
};
