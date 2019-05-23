import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { AboutSection } from "../../components/about/AboutSection";

//import { HeadComponent } from "../components/SEO/HeadComponent";

export const pageQuery = graphql`
  query contactpage {
    allPrismicSingleArticle {
      edges {
        node {
          uid
        }
      }
    }
  }
`;

const ContactPage = props => {
  const {
    data: { allPrismicSingleArticle }
  } = props;

  return (
    <div className="mt-5">
      <AboutSection
        id="contactsection"
        title="Contact me to get more information"
        description="I'VE BEEN WORKING IN THIS FIELD FOR 20 YEARS NOW. HAVING BEEN AND WORKED IN A LOT OF PLACES IN EUROPE, I LEARNED A LOT. HOW TO BE FAIR, PUNCTUAL, HARD-WORKING AND OPEN TO ANY OF MY CLIENTS' IDEAS AND SUGGESTIONS. I CAN MEET ANYONE'S NEEDS."
        button_title="Make your home amazing with unique solutions!"
        button_url="#contact"
      />
    </div>
  );
};

ContactPage.propTypes = {
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

export default ContactPage;
