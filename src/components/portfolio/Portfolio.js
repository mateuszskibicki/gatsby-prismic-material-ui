import React from "react";
import { Link } from "gatsby";
import logo from "../../../static/img/logoPNG.png";
import aboutPortfolioPhoto from "../../../static/img/portfolio/about-portfolio.jpg";
import kitchenPortfolioPhoto from "../../../static/img/portfolio/kitchen-portfolio.jpg";
import bathroomPortfolioPhoto from "../../../static/img/portfolio/bathroom-portfolio.jpg";
import decoratingPortfolioPhoto from "../../../static/img/portfolio/decorating-portfolio.jpg";
import joineryPortfolioPhoto from "../../../static/img/portfolio/joinery-portfolio.jpg";
import shopPortfolioPhoto from "../../../static/img/portfolio/shop-portfolio.jpg";

export const Portfolio = () => {
  const onClickChangeURL = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  };

  return (
    <section id="portfolio">
      <div className="container-fluid p-0">
        <div className="row no-gutters">
          <div className="col-sm-6 col-lg-4">
            <Link
              className="portfolio-box"
              onClick={onClickChangeURL}
              to="/"
              style={{ backgroundImage: `url(${aboutPortfolioPhoto})` }}
            >
              <h3 className="portfolio-box___title">ABOUT</h3>
              <div className="portfolio-box-caption">
                <img
                  src={logo}
                  alt="LS Interiors Logo Burnley Accrington"
                  style={{ width: "50px", paddingBottom: "10px" }}
                />
                <div className="project-category text-white">ABOUT</div>
                <div className="project-name">
                  CONTACT LS INTERIORS AND MAKE YOUR HOME AMAZING
                </div>
              </div>
            </Link>
          </div>
          <div className="col-sm-6 col-lg-4">
            <Link
              className="portfolio-box"
              onClick={onClickChangeURL}
              to="/kitchen"
              style={{ backgroundImage: `url(${kitchenPortfolioPhoto})` }}
            >
              <h3 className="portfolio-box___title">KITCHEN</h3>
              <div className="portfolio-box-caption">
                <img
                  src={logo}
                  alt="LS Interiors Logo Burnley Accrington"
                  style={{ width: "50px", paddingBottom: "10px" }}
                />
                <div className="project-category text-white">KITCHEN</div>
                <div className="project-name">
                  CONTACT LS INTERIORS AND MAKE YOUR KITCHEN BEAUTIFUL
                </div>
              </div>
            </Link>
          </div>
          <div className="col-sm-6 col-lg-4">
            <Link
              className="portfolio-box"
              onClick={onClickChangeURL}
              to="/bathroom"
              style={{ backgroundImage: `url(${bathroomPortfolioPhoto})` }}
            >
              <h3 className="portfolio-box___title">BATHROOM</h3>
              <div className="portfolio-box-caption">
                <img
                  src={logo}
                  alt="LS Interiors Logo Burnley Accrington"
                  style={{ width: "50px", paddingBottom: "10px" }}
                />
                <div className="project-category text-white">BATHROOM</div>
                <div className="project-name">
                  CONTACT LS INTERIORS AND MAKE YOUR BATHROOM BEAUTIFUL
                </div>
              </div>
            </Link>
          </div>
          <div className="col-sm-6 col-lg-4">
            <Link
              className="portfolio-box"
              onClick={onClickChangeURL}
              to="/decorating"
              style={{ backgroundImage: `url(${decoratingPortfolioPhoto})` }}
            >
              <h3 className="portfolio-box___title">DECORATING</h3>
              <div className="portfolio-box-caption">
                <img
                  src={logo}
                  alt="LS Interiors Logo Burnley Accrington"
                  style={{ width: "50px", paddingBottom: "10px" }}
                />
                <div className="project-category text-white">DECORATING</div>
                <div className="project-name">
                  CONTACT LS INTERIORS AND RENOVATE YOUR HOME
                </div>
              </div>
            </Link>
          </div>
          <div className="col-sm-6 col-lg-4">
            <Link
              className="portfolio-box"
              onClick={onClickChangeURL}
              to="/joinery"
              style={{ backgroundImage: `url(${joineryPortfolioPhoto})` }}
            >
              <h3 className="portfolio-box___title">JOINERY</h3>
              <div className="portfolio-box-caption">
                <img
                  src={logo}
                  alt="LS Interiors Logo Burnley Accrington"
                  style={{ width: "50px", paddingBottom: "10px" }}
                />
                <div className="project-category text-white">JOINERY</div>
                <div className="project-name">
                  CONTACT LS INTERIORS AND ORDER UNIQUE WOODEN FURNITURE
                </div>
              </div>
            </Link>
          </div>
          <div className="col-sm-6 col-lg-4">
            <Link
              className="portfolio-box"
              onClick={onClickChangeURL}
              to="/shop"
              style={{ backgroundImage: `url(${shopPortfolioPhoto})` }}
            >
              <h3 className="portfolio-box___title">SHOP</h3>
              <div className="portfolio-box-caption">
                <img
                  src={logo}
                  alt="LS Interiors Logo Burnley Accrington"
                  style={{ width: "50px", paddingBottom: "10px" }}
                />
                <div className="project-category text-white">SHOP</div>
                <div className="project-name">
                  VISIT SHOP AND BUY TOP QUALITY PRODUCTS
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

// linear-gradient(
//     to bottom,
//     rgba(92, 77, 66, 0.8) 0,
//     rgba(92, 77, 66, 0.8) 100%
//   ),
//   url("/static/masthead-homepage.jpg")
