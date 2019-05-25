import React from "react";
import { Helmet } from "react-helmet";
import "../styles/main.scss";
import { Navbar } from "../components/navbar/Navbar";
import { Portfolio } from "../components/portfolio/Portfolio";
import { GetInTouch } from "../components/get-in-touch/GetInTouch";
import { Footer } from "../components/footer/Footer";

const Head = () => (
  <Helmet>
    <link
      href="https://fonts.googleapis.com/css?family=Merriweather:400,300,300italic,400italic,700,700italic"
      rel="stylesheet"
      type="text/css"
    />
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.8.2/css/all.css"
      integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay"
      crossOrigin="anonymous"
    />
    <link
      rel="stylesheet"
      type="text/css"
      charset="UTF-8"
      href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
    />
    <link
      rel="stylesheet"
      type="text/css"
      href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
    />
    <title>LS Interiors</title>
  </Helmet>
);

const LayoutComponent = props => {
  return (
    <div id="page-top">
      <Head />
      <Navbar />
      {props.children}
      <Portfolio />
      <GetInTouch />
      <Footer />
    </div>
  );
};

export default LayoutComponent;
