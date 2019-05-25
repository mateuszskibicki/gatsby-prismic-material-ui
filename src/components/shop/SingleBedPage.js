import React from "react";
import PropTypes from "prop-types";

export const SingleBedPage = props => {
  const { url, title, description, overview } = props;
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-5 col-xl-6 mb-3">
          <img
            src={`/img/beds/${url}.jpg`}
            alt={`Bunrley Blackburn Beds ${title} LS Interiors`}
            className="img-fluid shadow"
          />
        </div>
        <div className="col-12 col-md-7 col-xl-6">
          {description}
          <div className="m-auto text-center">
            <a
              className="btn btn-primary btn-xl text-white m-auto"
              href="#contact"
            >
              CONTACT ME FOR MORE INFORMATION
            </a>
          </div>
        </div>
        <div className="col-12 mt-4 mb-4">
          <h2>Overview</h2>
          {overview}
        </div>
        <div className="col-12 mt-4 mb-4">
          <h2>Base options</h2>
          <p>
            Extend the life of the mattress with a Luxurious Sanctum base,
            available in a wide choice of stylish covers and either a firm
            platform top or centre sprung with firm edge specification.
          </p>
          <p>
            Tailored Sanctum bases are fully padded and upholstered and have the
            option of enhanced storage drawers (see chart) with high quality
            soft-touch metal drawer runners.
          </p>
          <p>
            Hidden base linking and shepherd style castors add that final touch
            of luxury.
          </p>
          <div className="row">
            <div className="col-12 col-sm-6 text-center">
              <img
                src="/img/beds/base1.jpg"
                alt="Bed base Burnley Accrington Blackburn LS Interiors"
                className="img-fluid shadow mb-2"
              />
            </div>
            <div className="col-12 col-sm-6 text-center">
              <img
                src="/img/beds/base2.jpg"
                alt="Bed base Burnley Accrington Blackburn LS Interiors"
                className="img-fluid shadow mb-2"
              />
            </div>
            <div className="col-12 m-auto text-center">
              <a
                className="btn btn-primary btn-xl text-white m-auto"
                href="#contact"
              >
                CONTACT ME FOR MORE INFORMATION
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

SingleBedPage.propTypes = {};
