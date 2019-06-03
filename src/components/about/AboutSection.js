import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
export const AboutSection = props => {
  const {
    title,
    description,
    button_title,
    button_url,
    id,
    secondary,
    linkInternal
  } = props;
  return (
    <section
      className={`page-section ${secondary ? "bg-info" : "bg-primary"}`}
      id={id && id}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            {title && <h2 className="text-white mt-0">{title}</h2>}
            <hr className="divider light my-4" />
            {description && <p className="text-white-50 mb-4">{description}</p>}
            {button_title && button_url && !linkInternal && (
              <a
                className="btn btn-light btn-xl js-scroll-trigger"
                href={button_url}
              >
                {button_title}
              </a>
            )}
            {button_title && button_url && linkInternal && (
              <Link
                className="btn btn-light btn-xl js-scroll-trigger"
                to={button_url}
              >
                {button_title}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

AboutSection.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  button_title: PropTypes.string,
  button_url: PropTypes.string,
  id: PropTypes.string,
  secondary: PropTypes.bool
};
