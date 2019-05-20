import React from "react";
import PropTypes, { string } from "prop-types";
import { graphql, Link } from "gatsby";
import { MastheadHomepage } from "../components/masthead/Masthead";
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

  return (
    <>
      <MastheadHomepage />
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
