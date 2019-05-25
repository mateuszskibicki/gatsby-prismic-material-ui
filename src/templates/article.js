// import React from "react";
// import PropTypes from "prop-types";
// import { graphql, Link } from "gatsby";

// export const pageQuery = graphql`
//   query SingleArticleByUid($uid: String!) {
//     prismicSingleArticle(uid: { eq: $uid }) {
//       data {
//         title {
//           text
//         }
//       }
//     }
//   }
// `;

// const Article = ({ data }) => {
//   data.prismicSingleArticle.data.title.text;
//   return (
//     <>
//       <h1>
//         post page : title --- "{data.prismicSingleArticle.data.title.text}"
//       </h1>
//       <Link to="/">Homepage</Link>
//     </>
//   );
// };

// export default Article;
