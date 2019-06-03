import React, { useState } from "react";
import { Link } from "gatsby";
import logo from "../../../static/img/logoPNG.png";

export const Navbar = () => {
  const [visible, setVisible] = useState(false);

  const onClickOpenNavbar = () => {
    setVisible(!visible);
  };

  const onClickChangeURL = () => {
    if (visible) setVisible(!visible);
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  };

  return (
    <nav
      className={`navbar navbar-expand-md navbar-light fixed-top ${visible &&
        "navbar-mobile-visible"}`}
      id="navbar"
    >
      <div className="container">
        <Link to="/" className="navbar-brand" onClick={onClickChangeURL}>
          <img
            src={logo}
            style={{ height: "40px" }}
            alt="LS Interiors Logo Bunrley Home Beds Bathrooms"
          />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          onClick={onClickOpenNavbar}
        >
          <i className="fas fa-bars text-primary" />
        </button>
        <div className={`navbar-collapse ${visible ? "" : "d-none"}`}>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link" onClick={onClickChangeURL}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/kitchen"
                className="nav-link"
                onClick={onClickChangeURL}
              >
                Kitchen
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/bathroom"
                className="nav-link"
                onClick={onClickChangeURL}
              >
                Bathroom
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/decorating"
                className="nav-link"
                onClick={onClickChangeURL}
              >
                Decorating
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/joinery"
                className="nav-link"
                onClick={onClickChangeURL}
              >
                Joinery
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/design"
                className="nav-link"
                onClick={onClickChangeURL}
              >
                Design
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/shop" className="nav-link" onClick={onClickChangeURL}>
                Shop
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/contact"
                className="nav-link"
                onClick={onClickChangeURL}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
