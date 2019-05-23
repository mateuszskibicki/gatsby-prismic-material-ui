import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { AboutSection } from "../../components/about/AboutSection";
import { PhotoSlider } from "../../components/slider/PhotoSlider";
//import { HeadComponent } from "../components/SEO/HeadComponent";

//photos
import photoKitchen1 from "../../../static/img/kitchen/kitchen1.jpg";
import photoKitchen2 from "../../../static/img/kitchen/kitchen2.jpg";
import photoKitchen3 from "../../../static/img/kitchen/kitchen3.jpg";
import photoKitchen4 from "../../../static/img/kitchen/kitchen4.jpg";
import photoKitchen5 from "../../../static/img/kitchen/kitchen5.jpg";
import photoKitchen6 from "../../../static/img/kitchen/kitchen6.jpg";
import photoKitchen7 from "../../../static/img/kitchen/kitchen7.jpg";
import photoKitchen8 from "../../../static/img/kitchen/kitchen8.jpg";
import photoKitchen10 from "../../../static/img/kitchen/kitchen9.jpg";

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

  const photosArray = [
    photoKitchen1,
    photoKitchen2,
    photoKitchen3,
    photoKitchen4,
    photoKitchen5,
    photoKitchen6,
    photoKitchen7,
    photoKitchen8,
    photoKitchen10
  ];

  return (
    <div className="mt-5">
      <AboutSection
        id="kitchen"
        title="Looking for inspiration for your new kitchen?"
        description="I'VE BEEN WORKING IN THIS FIELD FOR 20 YEARS NOW. HAVING BEEN AND WORKED IN A LOT OF PLACES IN EUROPE, I LEARNED A LOT. HOW TO BE FAIR, PUNCTUAL, HARD-WORKING AND OPEN TO ANY OF MY CLIENTS' IDEAS AND SUGGESTIONS. I CAN MEET ANYONE'S NEEDS."
        button_title="Make your kitchen unique!"
        button_url="#contact"
      />
      <PhotoSlider photosArray={photosArray} name="kitchen" />
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
