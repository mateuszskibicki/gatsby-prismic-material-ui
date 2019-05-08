import React from "react";
// import PropTypes from 'prop-types'

import { graphql, Link } from "gatsby";

export const pageQuery = graphql`
  query IndexQuery {
    allPrismicSingleArticle {
      edges {
        node {
          uid
          id
          data {
            date
            seo_description {
              text
            }
          }
        }
      }
    }
  }
`;

const IndexPage = props => {
  console.log(props);
  return (
    <>
      <h1>page</h1>
      <Link to="/blog/article">
        <button>article 1</button>
      </Link>
      <Link to="/blog/article-2">article 2</Link>
    </>
  );
};

export default IndexPage;
