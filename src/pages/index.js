import React from "react";
import PropTypes, { string } from "prop-types";
import { graphql, Link } from "gatsby";
import Button from "@material-ui/core/Button";
import { Text } from "../components/common/Text";
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
      <Text>aaa</Text>
      <Text bold>aaa</Text>
      <Text h1>aaa</Text>
      <Text h1 bold>
        aaa
      </Text>
      <Text h5 bold>
        aaa
      </Text>
      {allPrismicSingleArticle.edges.map(edge => (
        <Link to={`/blog/${edge.node.uid}`} key={edge.node.uid}>
          <Button variant="outlined" color="secondary">
            {edge.node.uid}
          </Button>
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
