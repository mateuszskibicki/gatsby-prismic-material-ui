import React from "react";
import PropTypes from "prop-types";
import Slider from "react-slick";
import { graphql } from "gatsby";
import { AboutSection } from "../../components/about/AboutSection";
//import { HeadComponent } from "../components/SEO/HeadComponent";

import photoKitchen1 from "../../../static/img/kitchen/1.jpg";
import photoKitchen2 from "../../../static/img/kitchen/2.jpg";
import photoKitchen3 from "../../../static/img/kitchen/3.jpg";
import photoKitchen4 from "../../../static/img/kitchen/4.jpg";
import photoKitchen5 from "../../../static/img/kitchen/5.jpg";
import photoKitchen6 from "../../../static/img/kitchen/6.jpg";
import photoKitchen7 from "../../../static/img/kitchen/7.jpg";
import photoKitchen8 from "../../../static/img/kitchen/8.jpg";
import photoKitchen10 from "../../../static/img/kitchen/10.jpg";

//console.log(photoKitchen1);

export const pageQuery = graphql`
  query aboutquery {
    allPrismicSingleArticle {
      edges {
        node {
          uid
        }
      }
    }
  }
`;

const KitchenPage = props => {
  const {
    data: { allPrismicSingleArticle }
  } = props;

  var settings = {
    dots: true,
    infinite: false,
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
    <div className="mt-4">
      <AboutSection
        id="kitchen"
        title="Looking for inspiration for your new kitchen?"
        description="I'VE BEEN WORKING IN THIS FIELD FOR 20 YEARS NOW. HAVING BEEN AND WORKED IN A LOT OF PLACES IN EUROPE, I LEARNED A LOT. HOW TO BE FAIR, PUNCTUAL, HARD-WORKING AND OPEN TO ANY OF MY CLIENTS' IDEAS AND SUGGESTIONS. I CAN MEET ANYONE'S NEEDS."
        button_title="Make your kitchen unique!"
        button_url="#contact"
      />
      <div className="container my-5" style={{ maxHeight: "400px" }}>
        <div className="row">
          <div className="col-12 mb-3">
            <Slider {...settings}>
              <div>
                <img
                  src={photoKitchen1}
                  alt="LS Interiors bathrooms Burnley Blackburn Accrington"
                  className="img-fluid m-auto"
                  style={{ maxHeight: "300px" }}
                />
              </div>
              <div>
                <img
                  src={photoKitchen2}
                  alt="LS Interiors bathrooms Burnley Blackburn Accrington"
                  className="img-fluid m-auto"
                  style={{ maxHeight: "300px" }}
                />
              </div>
              <div>
                <img
                  src={photoKitchen3}
                  alt="LS Interiors bathrooms Burnley Blackburn Accrington"
                  className="img-fluid m-auto"
                  style={{ maxHeight: "300px" }}
                />
              </div>
              <div>
                <img
                  src={photoKitchen4}
                  alt="LS Interiors bathrooms Burnley Blackburn Accrington"
                  className="img-fluid m-auto"
                  style={{ maxHeight: "300px" }}
                />
              </div>
              <div>
                <img
                  src={photoKitchen5}
                  alt="LS Interiors bathrooms Burnley Blackburn Accrington"
                  className="img-fluid m-auto"
                  style={{ maxHeight: "300px" }}
                />
              </div>
              <div>
                <img
                  src={photoKitchen6}
                  alt="LS Interiors bathrooms Burnley Blackburn Accrington"
                  className="img-fluid m-auto"
                  style={{ maxHeight: "300px" }}
                />
              </div>
              <div>
                <img
                  src={photoKitchen7}
                  alt="LS Interiors bathrooms Burnley Blackburn Accrington"
                  className="img-fluid m-auto"
                  style={{ maxHeight: "300px" }}
                />
              </div>
              <div>
                <img
                  src={photoKitchen8}
                  alt="LS Interiors bathrooms Burnley Blackburn Accrington"
                  className="img-fluid m-auto"
                  style={{ maxHeight: "300px" }}
                />
              </div>
              <div>
                <img
                  src={photoKitchen10}
                  alt="LS Interiors bathrooms Burnley Blackburn Accrington"
                  className="img-fluid m-auto"
                  style={{ maxHeight: "300px" }}
                />
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

KitchenPage.propTypes = {
  data: PropTypes.shape({
    allPrismicSingleArticle: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            uid: PropTypes.string
          })
        })
      )
    })
  })
};

export default KitchenPage;
