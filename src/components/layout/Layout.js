import React from "react";
import Badges from "../Badges";
export const Layout = props => {
  return (
    <div>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"
      />
      <Badges />
      {props.children}
    </div>
  );
};
