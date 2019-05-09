import React from "react";
import PropTypes, { string } from "prop-types";
import { graphql, Link } from "gatsby";
import Button from "@material-ui/core/Button";

import indexStyles from "./index.module.scss";
import { Layout } from "../components/layout/Layout";

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
    <Layout>
      {allPrismicSingleArticle.edges.map(edge => (
        <Link
          to={`/blog/${edge.node.uid}`}
          key={edge.node.uid}
          className={indexStyles.buttonLink}
        >
          <Button variant="outlined" color="secondary">
            {edge.node.uid}
          </Button>
        </Link>
      ))}
    </Layout>
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
