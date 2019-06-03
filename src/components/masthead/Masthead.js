import React from "react";
import imgHomepage from "../../../static/img/homepage.jpg";
import imgBathroom from "../../../static/img/bathroom.jpg";
import imgKitchen from "../../../static/img/kitchen.jpg";
import imgDecorating from "../../../static/img/decorating.jpg";
import imgJoinery from "../../../static/img/joinery.jpg";
import imgDesign from "../../../static/img/design.jpg";
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

export const MastheadBathroom = () => {
  return (
    <header
      className="masthead masthead-bathroom"
      style={{
        background: `linear-gradient(
        to bottom,
        rgba(92, 77, 66, 0.7) 0,
        rgba(92, 77, 66, 0.7) 100%
      ),
      url(${imgBathroom})`,
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
              Find a perfect bathroom for you.
            </h1>
            <hr className="divider my-4" />
          </div>
          <div className="col-lg-8 align-self-baseline d-flex flex-column">
            <p className="text-white-75 font-weight-light mb-5 text-uppercase">
              CONTACT LS INTERIORS FOR MORE INFORMATION.
              <br />
              20+ years of experience, professional help and advice with
              choosing your perfect new bathroom
            </p>
            <a
              className="btn btn-primary btn-xl js-scroll-trigger w-50 m-auto"
              href="#contact"
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

export const MastheadKitchen = () => {
  return (
    <header
      className="masthead masthead-kitchen"
      style={{
        background: `linear-gradient(
        to bottom,
        rgba(92, 77, 66, 0.7) 0,
        rgba(92, 77, 66, 0.7) 100%
      ),
      url(${imgKitchen})`,
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
              Find a perfect kitchen for you.
            </h1>
            <hr className="divider my-4" />
          </div>
          <div className="col-lg-8 align-self-baseline d-flex flex-column">
            <p className="text-white-75 font-weight-light mb-5 text-uppercase">
              CONTACT LS INTERIORS FOR MORE INFORMATION.
              <br />
              20+ years of experience, professional help and advice with
              choosing your perfect new kitchen
            </p>
            <a
              className="btn btn-primary btn-xl js-scroll-trigger w-50 m-auto"
              href="#contact"
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

export const MastheadDecorating = () => {
  return (
    <header
      className="masthead masthead-decorating"
      style={{
        background: `linear-gradient(
        to bottom,
        rgba(92, 77, 66, 0.7) 0,
        rgba(92, 77, 66, 0.7) 100%
      ),
      url(${imgDecorating})`,
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
              Find a perfect and unique home interior.
            </h1>
            <hr className="divider my-4" />
          </div>
          <div className="col-lg-8 align-self-baseline d-flex flex-column">
            <p className="text-white-75 font-weight-light mb-5 text-uppercase">
              CONTACT LS INTERIORS FOR MORE INFORMATION.
              <br />
              20+ years of experience, professional help and advice with
              choosing your perfect interiors
            </p>
            <a
              className="btn btn-primary btn-xl js-scroll-trigger w-50 m-auto"
              href="#contact"
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

export const MastheadJoinery = () => {
  return (
    <header
      className="masthead masthead-joinery"
      style={{
        background: `linear-gradient(
        to bottom,
        rgba(92, 77, 66, 0.7) 0,
        rgba(92, 77, 66, 0.7) 100%
      ),
      url(${imgJoinery})`,
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
              Find a perfect and unique home interior.
            </h1>
            <hr className="divider my-4" />
          </div>
          <div className="col-lg-8 align-self-baseline d-flex flex-column">
            <p className="text-white-75 font-weight-light mb-5 text-uppercase">
              CONTACT LS INTERIORS FOR MORE INFORMATION.
              <br />
              20+ years of experience, professional help and advice with
              choosing your perfect interiors
            </p>
            <a
              className="btn btn-primary btn-xl js-scroll-trigger w-50 m-auto"
              href="#contact"
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

export const MastheadDesign = () => {
  return (
    <header
      className="masthead masthead-design"
      style={{
        background: `linear-gradient(
        to bottom,
        rgba(92, 77, 66, 0.7) 0,
        rgba(92, 77, 66, 0.7) 100%
      ),
      url(${imgDesign})`,
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
            <h1 className="text-uppercase text-white font-weight-bold">
              <strong>BAYO DESIGN</strong>
            </h1>
            <hr className="divider my-4" />
          </div>
          <div className="col-lg-8 align-self-baseline d-flex flex-column">
            <p className="text-white-75 font-weight-light mb-5 text-uppercase">
              CONTACT LS INTERIORS FOR MORE INFORMATION.
              <br />
              Online professional interior design service
            </p>
            <a
              className="btn btn-primary btn-xl js-scroll-trigger w-50 m-auto"
              href="#contact"
            >
              Find Out More
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
              Find a perfect bed and mattress for you.
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
              href="#contact"
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
