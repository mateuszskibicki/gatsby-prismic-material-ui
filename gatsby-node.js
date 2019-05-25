// const _ = require("lodash");

// // graphql function doesn't throw an error so we have to check to check for the result.errors to throw manually
// const wrapper = promise =>
//   promise.then(result => {
//     if (result.errors) {
//       throw result.errors;
//     }
//     return result;
//   });

// exports.createPages = async ({ graphql, actions }) => {
//   const { createPage } = actions;

//   const postTemplate = require.resolve("./src/templates/article.js");

//   const result = await wrapper(
//     graphql(`
//       {
//         allPrismicSingleArticle {
//           edges {
//             node {
//               uid
//             }
//           }
//         }
//       }
//     `)
//   );

//   const articlesList = result.data.allPrismicSingleArticle.edges;

//   // Double check that the post has a category assigned
//   articlesList.forEach(edge => {
//     // The uid you assigned in Prismic is the slug!
//     createPage({
//       path: `/blog/${edge.node.uid}`,
//       component: postTemplate,
//       context: {
//         // Pass the unique ID (uid) through context so the template can filter by it
//         uid: edge.node.uid
//       }
//     });
//   });
// };
