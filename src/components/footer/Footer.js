import React from "react";
import logo from "../../../static/img/logoPNG.png";

const Footer = () => {
  return (
    <footer className="bg-light py-5">
      <div className="container">
        <div className="m-auto text-center">
          <img src={logo} width="50px" alt="LS Interiors Burnley logo" />
        </div>
        <div className="small text-center text-muted mt-4">
          Copyright &copy; 2019 - LS Interiors
        </div>
      </div>
    </footer>
  );
};

export default Footer;
