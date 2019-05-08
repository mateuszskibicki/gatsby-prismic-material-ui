import React from "react";
// import PropTypes from 'prop-types'

import { graphql, Link } from "gatsby";

import { Layout } from "../components/layout/Layout";

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
    <Layout>
      <h1>page</h1>
      <Link to="/blog/article">
        <button>article 1</button>
      </Link>
      <Link to="/blog/article-2">article 2</Link>
    </Layout>
  );
};

export default IndexPage;
