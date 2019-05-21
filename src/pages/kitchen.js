import React from "react";
import PropTypes from "prop-types";
import Slider from "react-slick";
import { graphql } from "gatsby";
import { AboutSection } from "../components/about/AboutSection";
//import { HeadComponent } from "../components/SEO/HeadComponent";

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

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    style: { maxWidth: "100%" }
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
      <Slider {...settings}>
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
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
