import React, { useState } from "react";
import { Link } from "gatsby";
import logo from "../../../static/img/logoPNG.png";

export const Navbar = () => {
  const [visible, setVisible] = useState(false);

  const onClickNavbar = () => {
    setVisible(!visible);
  };

  return (
    <nav
      className={`navbar navbar-expand-md navbar-light fixed-top ${visible &&
        "navbar-mobile-visible"}`}
      id="navbar"
    >
      <div className="container">
        <Link to="/" className="navbar-brand">
          <img src={logo} style={{ height: "40px" }} />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          onClick={onClickNavbar}
        >
          <i className="fas fa-bars text-primary" />
        </button>
        <div className={`navbar-collapse ${visible ? "" : "d-none"}`}>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to="/kitchen" className="nav-link">
                Kitchen
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/bathroom" className="nav-link">
                Bathroom
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/decorating" className="nav-link">
                Decorating
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/joinery" className="nav-link">
                Joinery
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/shop" className="nav-link">
                Shop
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
