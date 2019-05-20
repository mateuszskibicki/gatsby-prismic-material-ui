import React from "react";
import PropTypes, { string } from "prop-types";
import { graphql, Link } from "gatsby";
import { MastheadHomepage } from "../components/masthead/Masthead";
import { AboutSection } from "../components/about/AboutSection";
import { MultipleMedia } from "../components/multiple-media/MultipleMedia";
//import { HeadComponent } from "../components/SEO/HeadComponent";

export const pageQuery = graphql`
  query IndexQuery {
    allPrismicSingleArticle {
      edges {
        node {
          uid
        }
      }
    }
  }
`;

const IndexPage = props => {
  const {
    data: { allPrismicSingleArticle }
  } = props;

  const elementsArray = [
    {
      title: "EXPERIENCE",
      description:
        "Years of experience and finished high quality projects that show my experience, approach and value.",
      iconClasses: "far fa-3x fa-star text-primary mb-4"
    },
    {
      title: "CREATIVE",
      description:
        "I have many creative ideas so I can always advise modern solutions.",
      iconClasses: "fas fa-3x fa-gem text-primary mb-4"
    },
    {
      title: "PROFESSIOANL",
      description:
        "Everything is professionally documented and preceded by projects.",
      iconClasses: "fas fa-3x fa-user-tie text-primary mb-4"
    }
  ];

  return (
    <>
      <MastheadHomepage />
      <AboutSection
        id="about"
        title="We've got what you need!"
        description="I'VE BEEN WORKING IN THIS FIELD FOR 20 YEARS NOW. HAVING BEEN AND WORKED IN A LOT OF PLACES IN EUROPE, I LEARNED A LOT. HOW TO BE FAIR, PUNCTUAL, HARD-WORKING AND OPEN TO ANY OF MY CLIENTS' IDEAS AND SUGGESTIONS. I CAN MEET ANYONE'S NEEDS."
        button_title="Make your home amazing!"
        button_url="#categories"
      />
      <MultipleMedia elementsArray={elementsArray} />
      {/* <HeadComponent SEO={SEO} /> */}
      {allPrismicSingleArticle.edges.map(edge => (
        <Link to={`/blog/${edge.node.uid}`} key={edge.node.uid}>
          <button>{edge.node.uid}</button>
        </Link>
      ))}
    </>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    allPrismicSingleArticle: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            uid: string
          })
        })
      )
    })
  })
};

export default IndexPage;
