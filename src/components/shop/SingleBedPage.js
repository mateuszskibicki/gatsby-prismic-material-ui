import React from "react";
import PropTypes from "prop-types";

export const SingleBedPage = props => {
  const { url, title, description, overview, baseOptions } = props;
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h3 className="text-primary mb-4">{title}</h3>
        </div>
        <div className="col-12 col-md-5 col-xl-6 mb-3">
          <img
            src={`/img/beds/${url}.jpg`}
            alt={`Bunrley Blackburn Beds ${title} LS Interiors`}
            className="img-fluid shadow"
          />
        </div>
        <div className="col-12 col-md-7 col-xl-6">
          {description}
          <div className="m-auto text-center d-flex flex-wrap justify-content-around">
            <a
              className="btn btn-info text-white font-weight-bold rounded-pill m-1"
              href="/img/beds/bedsizes.png"
              target="_blank"
            >
              <i className="fas fa-download mr-2" /> Specification
            </a>
            <a
              className="btn btn-info text-white font-weight-bold rounded-pill m-1"
              href={`/img/beds/${url}spec.pdf`}
              target="_blank"
            >
              <i className="fas fa-download mr-2" /> Spec sheet
            </a>
            <a
              className="btn btn-primary text-white font-weight-bold rounded-pill m-1"
              href="#contact"
            >
              <i className="fas fa-phone mr-2" /> BUY
            </a>
          </div>
        </div>
        {overview && (
          <div className="col-12 mt-4 mb-4">
            <h1 className="text-primary">Overview</h1>
            {overview}
          </div>
        )}
        {baseOptions && (
          <div className="col-12 mt-4 mb-4">
            <div className="row">
              <div className="col-12 col-md-6">
                <h1 className="text-primary">Base options</h1>
                <p className="mb-2 small">
                  Extend the life of the mattress with a Luxurious Sanctum base,
                  available in a wide choice of stylish covers and either a firm
                  platform top or centre sprung with firm edge specification.
                </p>
                <p className="mb-2 small">
                  Tailored Sanctum bases are fully padded and upholstered and
                  have the option of enhanced storage drawers (see chart) with
                  high quality soft-touch metal drawer runners.
                </p>
                <p className="mb-2 small">
                  Hidden base linking and shepherd style castors add that final
                  touch of luxury.
                </p>
              </div>
              <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
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
                </div>
              </div>
              <div className="col-12 m-auto text-center">
                <a
                  className="btn btn-primary btn-xl text-white mt-3"
                  href="#contact"
                >
                  <i className="fas fa-phone mr-2" /> CONTACT ME FOR MORE
                  INFORMATION
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

SingleBedPage.propTypes = {
  url: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.object,
  overview: PropTypes.object
};
