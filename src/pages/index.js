import React from "react";
import PropTypes, { string } from "prop-types";
import { graphql, Link } from "gatsby";
import Button from "@material-ui/core/Button";
import { HeadComponent } from "../components/SEO/HeadComponent";
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

  const SEO = { description: "123" };
  const arrayy = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    87,
    8,
    9,
    9,
    9,
    9678,
    76,
    7,
    7,
    6876,
    43
  ];

  return (
    <>
      <HeadComponent SEO={SEO} />
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
      {arrayy.map(a => (
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis
          placeat provident voluptatem reiciendis facere distinctio sunt eaque
          suscipit iusto magni.
        </p>
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
