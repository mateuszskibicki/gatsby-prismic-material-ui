import React, { useState } from "react";
import logo from "../../../static/img/logoPNG.png";

const Navbar = props => {
  const [visible, setVisible] = useState(false);

  const onClickNavbar = () => {
    setVisible(!visible);
  };

  return (
    <nav className="navbar navbar-expand-sm fixed-top" id="navbar">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img src={logo} style={{ height: "40px" }} />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          onClick={onClickNavbar}
        >
          <i className="fas fa-bars text-primary" />
        </button>
        <div className={`navbar-collapse ${visible ? "" : "d-none"}`}>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Pricing
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link disabled"
                href="#"
                tabIndex="-1"
                aria-disabled="true"
              >
                Disabled
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

Navbar.propTypes = {};

export default Navbar;
