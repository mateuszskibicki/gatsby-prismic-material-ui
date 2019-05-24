import React from "react";
//import PropTypes from "prop-types";
import { MastheadShop } from "../../components/masthead/Masthead";
import { BedCard } from "../../components/shop/BedCard";
//import { HeadComponent } from "../components/SEO/HeadComponent";

const ShopPage = () => {
  return (
    <div className="mt-5" className="shop-page">
      <MastheadShop />
      <div className="container mt-5 mb-5">
        <div className="row">
          <BedCard
            title="Royal Embrace Luxury Pocket 2000"
            url="royal2000"
            description="Luxurious natural Viscose damask cover with the softest
                surface feel. 9” deep mattress is tufted by hand using pure
                woollen tufts for added luxury."
          />
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
