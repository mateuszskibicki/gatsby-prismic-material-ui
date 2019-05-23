import React from "react";
import logo from "../../../static/img/logoPNG.png";

export const Footer = () => {
  return (
    <footer className="bg-light py-5">
      <div className="container">
        <div className="m-auto text-center">
          <img src={logo} width="50px" alt="LS Interiors Burnley logo" />
        </div>
        <div className="small text-center text-muted mt-4">
          Copyright &copy; 2019 - LS Interiors <br />
          <a href="tel:07538156690">07 538 156 690</a>
          <a className="d-block" href="mailto:ls.interiors.contact@gmail.com">
            ls.interiors.contact@gmail.com
          </a>
          <a
            className="d-block"
            href="https://www.facebook.com/LS-Interiors-1591384234508819/"
            target="_blank"
          >
            Facebook
          </a>
        </div>
      </div>
    </footer>
  );
};
