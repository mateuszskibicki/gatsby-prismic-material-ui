import React from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";

export const BedCard = props => {
  const { title, description, url } = props;

  const onClickChangeURL = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  };

  return (
    <div className="col-12 col-md-6">
      <div className="card shop-page__card mb-2">
        <Link to={`/shop/beds/${url}`} onClick={onClickChangeURL}>
          <img
            src={`/img/beds/${url}.jpg`}
            className="card-img-top"
            alt={`Burnley Blackburn Accrington Beds ${title} LS Interiors`}
          />
        </Link>
        <div className="card-body">
          <h3 className="card-title">{title}</h3>
          <p className="card-text text-secondary">{description}</p>
          <div className="d-flex flex-wrap justify-content-around align-items-center">
            <Link
              to={`/shop/beds/${url}`}
              className="btn px-3 btn-primary shadow mb-1"
              onClick={onClickChangeURL}
            >
              <i className="fas fa-info-circle mr-1" /> ABOUT
            </Link>
            <Link
              to={`/shop/beds/${url}#contact`}
              className="btn px-3 btn-info shadow mb-1"
              onClick={onClickChangeURL}
            >
              <i className="fas fa-phone mr-1" /> CONTACT
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

BedCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};
