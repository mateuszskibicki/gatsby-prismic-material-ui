import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { AboutSection } from "../../components/about/AboutSection";
import { PhotoSlider } from "../../components/slider/PhotoSlider";
//import { HeadComponent } from "../components/SEO/HeadComponent";

//photos
import photoJoinery1 from "../../../static/img/joinery/1.jpg";
import photoJoinery2 from "../../../static/img/joinery/2.jpg";
import photoJoinery3 from "../../../static/img/joinery/3.jpg";
import photoJoinery4 from "../../../static/img/joinery/4.jpg";
import photoJoinery5 from "../../../static/img/joinery/5.jpg";
import photoJoinery6 from "../../../static/img/joinery/6.jpg";
import photoJoinery7 from "../../../static/img/joinery/7.jpg";
import photoJoinery8 from "../../../static/img/joinery/8.jpg";

export const pageQuery = graphql`
  query joineryquery {
    allPrismicSingleArticle {
      edges {
        node {
          uid
        }
      }
    }
  }
`;

const JoineryPage = props => {
  const {
    data: { allPrismicSingleArticle }
  } = props;

  const photosArray = [
    photoJoinery1,
    photoJoinery2,
    photoJoinery3,
    photoJoinery4,
    photoJoinery5,
    photoJoinery6,
    photoJoinery7,
    photoJoinery8
  ];

  return (
    <div className="mt-5">
      <AboutSection
        id="joinery"
        title="Looking for inspiration and new wooden furniture?"
        description="I'VE BEEN WORKING IN THIS FIELD FOR 20 YEARS NOW. HAVING BEEN AND WORKED IN A LOT OF PLACES IN EUROPE, I LEARNED A LOT. HOW TO BE FAIR, PUNCTUAL, HARD-WORKING AND OPEN TO ANY OF MY CLIENTS' IDEAS AND SUGGESTIONS. I CAN MEET ANYONE'S NEEDS."
        button_title="Make your home amazing with unique furniture!"
        button_url="#contact"
      />
      <PhotoSlider photosArray={photosArray} name="joinery" />
    </div>
  );
};

JoineryPage.propTypes = {
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

export default JoineryPage;
