import React from "react";
import PropTypes from "prop-types";

export const MultipleMedia = props => {
  const { elementsArray } = props;
  return (
    <section className="page-section" id="services">
      <div className="container">
        <h2 className="text-center mt-0">At Your Service</h2>
        <hr className="divider my-4" />
        <div className="row justify-content-center align-items-center">
          {elementsArray.map((element, index) => (
            <div className="col-lg-3 col-md-6 text-center" key={index}>
              <div className="mt-5">
                <i className={element.iconClasses} />
                <h3 className="h4 mb-2">{element.title}</h3>
                <p className="text-muted mb-0">{element.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

MultipleMedia.propTypes = {
  elementsArray: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
      iconClasses: PropTypes.string
    })
  )
};
