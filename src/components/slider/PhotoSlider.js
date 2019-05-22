import React, { useState } from "react";
import PropTypes from "prop-types";
import Slider from "react-slick";
import Img from "gatsby-image";

export const PhotoSlider = props => {
  const { photosArray, name } = props;

  const [photoURL, setPhotoURL] = useState(null);
  const [isVisible, setVisible] = useState(false);

  const onPhotoOpen = e => {
    setPhotoURL(e.target.src);
    setVisible(true);
  };

  const onPhotoClose = () => {
    setPhotoURL(null);
    setVisible(false);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      }
    ]
  };

  return (
    <div className="container my-5" style={{ maxHeight: "400px" }}>
      <div className="row">
        <div className="col-12 mb-3">
          <Slider {...settings}>
            {photosArray.map(singlePhoto => (
              <div key={singlePhoto}>
                <img
                  src={singlePhoto}
                  alt={`LS Interiors ${name} Burnley Blackburn Accrington`}
                  className="img-fluid p-1 m-auto"
                  style={{ maxHeight: "300px" }}
                  onClick={onPhotoOpen}
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {photoURL !== null && isVisible && (
        <div
          className="modal modal-photo fade show"
          id="exampleModal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
          style={{
            display: "block",
            justifyContent: "center",
            alignItems: "center",
            paddingRight: "15px",
            backgroundColor: "rgba(0,0,0,.4)",
            overflowY: "auto"
          }}
        >
          <div
            className="modal-dialog modal-dialog-centered modal-lg"
            role="document"
          >
            <div className="modal-content">
              <div className="modal-header p-2 pl-3 pr-3">
                <h5 className="modal-title">
                  LS Interiors {name && "- " + name}
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={onPhotoClose}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <img
                  src={photoURL}
                  alt={"LS Interiors Burnley Blackburn Accrington"}
                  className="img-fluid m-auto shadow"
                />
              </div>
              <div className="modal-footer p-2 pl-3 pr-3">
                <p className="lead m-0 mr-auto">
                  LS Interiors {name && "- " + name}
                </p>
                <button
                  type="button"
                  className="btn btn-primary"
                  data-dismiss="modal"
                  onClick={onPhotoClose}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

PhotoSlider.propTypes = {
  photosArray: PropTypes.arrayOf(PropTypes.string),
  name: PropTypes.string
};
