import React from "react";
import { Helmet } from "react-helmet";
import "../styles/base/base.scss";
import "../styles/main.scss";
import Navbar from "../components/navbar/Navbar";
import { Portfolio } from "../components/portfolio/Portfolio";
import GetInTouch from "../components/common/layout-components/GetInTouch";
import Footer from "../components/footer/Footer";

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
  function scrollFunction() {
    if (
      document.body.scrollTop > 60 ||
      document.documentElement.scrollTop > 60
    ) {
      document.getElementById("navbar").style.backgroundColor = "whitesmoke";
      document.getElementById("navbar").style.boxShadow =
        "0 3px 8px rgba(0, 0, 0, 0.1), 0 3px 8px rgba(0, 0, 0, 0.12)";
      //document.getElementById("navbar").style.fontSize = "25px";
    } else {
      document.getElementById("navbar").style.backgroundColor = "transparent";
      document.getElementById("navbar").style.boxShadow = "none";
      //document.getElementById("navbar").style.fontSize = "35px";
    }
  }
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
      <script
        src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
        integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
        crossOrigin="anonymous"
      />
      <script
        src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
        integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
        crossOrigin="anonymous"
      />
      <script
        src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
        integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
        crossOrigin="anonymous"
      />
      <script>
        {
          (window.onscroll = function() {
            scrollFunction();
          })
        }
      </script>
    </>
  );
};

export default LayoutComponent;
