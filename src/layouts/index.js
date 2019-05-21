import React from "react";
import { Helmet } from "react-helmet";
import "../styles/base/base.scss";
import "../styles/main.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Navbar } from "../components/navbar/Navbar";
import { Portfolio } from "../components/portfolio/Portfolio";
import { GetInTouch } from "../components/get-in-touch/GetInTouch";
import { Footer } from "../components/footer/Footer";

const Head = () => (
  <Helmet>
    <link
      href="https://fonts.googleapis.com/css?family=Merriweather+Sans:400,700"
      rel="stylesheet"
    />
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
    <link rel="stylesheet" href="main.css" />
    <title>gatsby</title>
  </Helmet>
);

const LayoutComponent = props => {
  // function scrollFunction() {
  //   if (
  //     document.body.scrollTop > 60 ||
  //     document.documentElement.scrollTop > 60
  //   ) {
  //     document.getElementById("navbar").style.backgroundColor = "whitesmoke";
  //     document.getElementById("navbar").style.boxShadow =
  //       "0 3px 8px rgba(0, 0, 0, 0.1), 0 3px 8px rgba(0, 0, 0, 0.12)";
  //   } else {
  //     document.getElementById("navbar").style.backgroundColor = "transparent";
  //     document.getElementById("navbar").style.boxShadow = "none";
  //   }
  // }
  return (
    <>
      <div id="page-top">
        <Head />
        <Navbar />
        {props.children}
        <Portfolio />
        <GetInTouch />
        <Footer />
      </div>
      {/* <script>
        {window !== undefined &&
          (window.onscroll = function() {
            scrollFunction();
          })}
      </script> */}
    </>
  );
};

export default LayoutComponent;
