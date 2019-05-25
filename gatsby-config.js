require("dotenv").config({
  path: `.env`
});

const website = require("./config/website");

const pathPrefix = website.pathPrefix === "/" ? "" : website.pathPrefix;

module.exports = {
  /* General Information */
  pathPrefix: website.pathPrefix,
  //pathPrefix: `/dummy`,
  /* Plugins */
  plugins: [
    "gatsby-plugin-react-helmet",
    // in gatsby-config.js
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-source-prismic",
      options: {
        repositoryName: "mateusz-skibicki-blog",
        //accessToken: `${process.env.API_KEY}`,
        lang: "en-gb"
      }
    },
    "gatsby-plugin-lodash",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: website.googleAnalyticsID
      }
    },
    "gatsby-plugin-sitemap",
    // Must be placed at the end
    "gatsby-plugin-offline",
    "gatsby-plugin-layout"
  ]
};
