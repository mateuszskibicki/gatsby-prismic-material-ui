import React from "react";
import imgHomepage from "../../../static/img/homepage.jpg";
import imgShop from "../../../static/img/shop.jpg";
import logo from "../../../static/img/logoPNG.png";

export const MastheadHomepage = () => {
  return (
    <header
      className="masthead masthead-homepage"
      style={{
        background: `linear-gradient(
        to bottom,
        rgba(92, 77, 66, 0.8) 0,
        rgba(92, 77, 66, 0.8) 100%
      ),
      url(${imgHomepage})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        minHeight: "50vh",
        paddingTop: "80px",
        paddingBottom: "30px"
      }}
    >
      <div className="container h-100">
        <div className="row h-100 align-items-center justify-content-center text-center">
          <div className="col-lg-10 align-self-end">
            <div className="masthead__img--wrapper">
              <img src={logo} alt="LS Interiors" className="masthead__img" />
            </div>
            <h1 className="text-uppercase text-white font-weight-bold">
              <strong>LS INTERIORS</strong> <br />
              Enjoy your home from the inside.
            </h1>
            <hr className="divider my-4" />
          </div>
          <div className="col-lg-8 align-self-baseline d-flex flex-column">
            <p className="text-white-75 font-weight-light mb-5 text-uppercase">
              GET IN LS INTERIORS AND DISCOVER BEAUTY OF UNIQE HOME.
              <br />
              20+ years of experience
            </p>
            <a
              className="btn btn-primary btn-xl js-scroll-trigger w-50 m-auto"
              href="#about"
            >
              Find Out More
            </a>
            <div className="mb-3" />
            <a
              className="btn btn-info btn-xl js-scroll-trigger w-50 m-auto"
              href="https://www.facebook.com/LS-Interiors-1591384234508819/"
              target="_blank"
            >
              Find Me On Facebook
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export const MastheadShop = () => {
  return (
    <header
      className="masthead masthead-shop"
      style={{
        background: `linear-gradient(
        to bottom,
        rgba(92, 77, 66, 0.7) 0,
        rgba(92, 77, 66, 0.7) 100%
      ),
      url(${imgShop})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        minHeight: "50vh",
        paddingTop: "80px",
        paddingBottom: "30px"
      }}
    >
      <div className="container h-100">
        <div className="row h-100 align-items-center justify-content-center text-center">
          <div className="col-lg-10 align-self-end">
            <div className="masthead__img--wrapper">
              <img src={logo} alt="LS Interiors" className="masthead__img" />
            </div>
            <h1 className="text-uppercase text-white font-weight-bold">
              <strong>LS INTERIORS</strong> <br />
              Find perfect bed and mattress for you.
            </h1>
            <hr className="divider my-4" />
          </div>
          <div className="col-lg-8 align-self-baseline d-flex flex-column">
            <p className="text-white-75 font-weight-light mb-5 text-uppercase">
              CONTACT LS INTERIORS FOR MORE INFORMATION.
              <br />
              20+ years of experience, professional help and advice with
              choosing your perfect bed
            </p>
            <a
              className="btn btn-primary btn-xl js-scroll-trigger w-50 m-auto"
              href="#shop"
            >
              Find Out More
            </a>
            <div className="mb-3" />
            <a
              className="btn btn-info btn-xl js-scroll-trigger w-50 m-auto"
              href="https://www.facebook.com/LS-Interiors-1591384234508819/"
              target="_blank"
            >
              Find Me On Facebook
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
