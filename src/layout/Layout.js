import React from "react";
import { Helmet } from "react-helmet";
import "../styles/main.scss";
import { Navbar } from "../components/navbar/Navbar";
import { Portfolio } from "../components/portfolio/Portfolio";
import { GetInTouch } from "../components/get-in-touch/GetInTouch";
import { Footer } from "../components/footer/Footer";

const Head = () => (
  <Helmet>
    {/* meta */}
    <meta charset="UTF-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />
    <title>
      LS Interiors - Home deisgn - Burnley Blackburn Accrington Lukasz Sienicki
    </title>
    <meta
      name="description"
      content="Get in LS Interiors and discover beauty of bespoke and unique home. Over 20 years of experience. Enjoy your home from the inside."
    />
    <meta
      name="keywords"
      content="interiors, kitchen, home, design, building, bathroom, joinery, Burnley"
    />
    <meta
      itemProp="name"
      content="LS Interiors - Home deisgn - Lukasz Sienicki"
    />
    <meta
      itemProp="description"
      content="Get in LS Interiors and discover beauty of bespoke and unique home. Over 20 years of experience. Enjoy your home from the inside."
    />
    <meta itemProp="image" content="/img/icons/icon-384x384.png" />
    <meta
      property="og:title"
      content="LS Interiors - Home deisgn - Lukasz Sienicki"
    />
    <meta property="og:type" content="business" />
    <meta property="og:image" content="/img/icons/icon-384x384.png" />
    <meta
      property="og:description"
      content="Get in LS Interiors and discover beauty of bespoke and unique home. Over 20 years of experience. Enjoy your home from the inside."
    />
    <meta
      property="og:site_name"
      content="LS Interiors - Home Deisgn - Lukasz Sienicki"
    />

    {/* manifest and icons */}
    <link rel="manifest" href="/manifest.json" />
    <meta name="mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="application-name" content="LS Interiors" />
    <meta name="apple-mobile-web-app-title" content="LS Interiors" />
    <meta name="theme-color" content="#ff6347" />
    <meta name="msapplication-navbutton-color" content="#ff6347" />
    <meta
      name="apple-mobile-web-app-status-bar-style"
      content="black-translucent"
    />
    <meta name="msapplication-starturl" content="/" />
    <link
      rel="icon"
      type="image/png"
      sizes="512x512"
      href="/img/icons/icon-512x512.png"
    />
    <link
      rel="apple-touch-icon"
      type="image/png"
      sizes="512x512"
      href="/img/icons/icon-512x512.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="384x384"
      href="/img/icons/icon-384x384.png"
    />
    <link
      rel="apple-touch-icon"
      type="image/png"
      sizes="384x384"
      href="/img/icons/icon-384x384.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="192x192"
      href="/img/icons/icon-192x192.png"
    />
    <link
      rel="apple-touch-icon"
      type="image/png"
      sizes="192x192"
      href="/img/icons/icon-192x192.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="152x152"
      href="/img/icons/icon-152x152.png"
    />
    <link
      rel="apple-touch-icon"
      type="image/png"
      sizes="152x152"
      href="/img/icons/icon-152x152.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="144x144"
      href="/img/icons/icon-144x144.png"
    />
    <link
      rel="apple-touch-icon"
      type="image/png"
      sizes="144x144"
      href="/img/icons/icon-144x144.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="128x127"
      href="/img/icons/icon-128x128.png"
    />
    <link
      rel="apple-touch-icon"
      type="image/png"
      sizes="128x127"
      href="/img/icons/icon-128x128.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="96x96"
      href="/img/icons/icon-96x96.png"
    />
    <link
      rel="apple-touch-icon"
      type="image/png"
      sizes="96x96"
      href="/img/icons/icon-96x96.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="72x72"
      href="/img/icons/icon-72x72.png"
    />
    <link
      rel="apple-touch-icon"
      type="image/png"
      sizes="72x72"
      href="/img/icons/icon-72x72.png"
    />

    {/* fonts and css */}
    {/* <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
      integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
      crossOrigin="anonymous"
    /> */}
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
