import React from "react";
import { MastheadShop } from "../../components/masthead/Masthead";
import { BedCard } from "../../components/shop/BedCard";
//import { HeadComponent } from "../components/SEO/HeadComponent";

const ShopPage = () => {
  return (
    <div className="mt-5 shop-page">
      <MastheadShop />
      <div className="container mt-5 mb-5">
        <div className="row justify-content-center">
          <div className="col-12 text-center mb-3">
            <h3 className="display-4">Beds and mattresses</h3>
          </div>
          <div className="col-12 mb-3 text-center">
            <h3>Royal Embrace</h3>
          </div>
          <BedCard
            title="Royal Embrace Luxury Pocket 2000"
            url="royal2000"
            description="Luxurious natural Viscose damask cover with the softest
                surface feel. 9” deep mattress is tufted by hand using pure
                woollen tufts for added luxury."
          />
          <BedCard
            title="Royal Embrace Luxury Pocket 3000"
            url="royal3000"
            description="Luxurious natural Viscose damask cover with the softest
                surface feel. 9” deep mattress is tufted by hand using pure
                woollen tufts for added luxury."
          />
          <div className="col-12 mb-3 text-center mt-4">
            <h3>Regal Embrace</h3>
          </div>
          <BedCard
            title="Regal Embrace Luxury Pocket 4000"
            url="regal4000"
            description="Luxurious natural Viscose damask cover with the softest surface feel. 11” mattress is tufted by hand using pure woollen tufts for added luxury. The finest mattress upholstery includes opulent surface comfort layers of 100% pure British wool, soft rebound wool and a rich mix of cashmere, silk and cotton for unsurpassed comfort."
          />
          <BedCard
            title="Regal Embrace Luxury Pocket 5000"
            url="regal5000"
            description="Luxurious natural Viscose damask cover with the softest surface feel. 11” mattress is tufted by hand using pure woollen tufts for added luxury. The 500g 100% British wool comfort layer is cool in summer, warm in winter and naturally
            disperses heat and moisture for the most comfortable night’s sleep."
          />
          <div className="col-12 mb-3 text-center mt-4">
            <h3>Majestic Embrace</h3>
          </div>
          <BedCard
            title="Majestic Embrace Luxury Pocket 7000"
            url="majestic7000"
            description="Luxurious natural Viscose damask cover with the softest surface feel. 11” mattress is tufted by hand using pure woollen tufts for added luxury. The luxury engineered spring system features 7,000 individually encased pocket springs in a 5-tier construction –  a 3000 centre air suspension core with an additional 2 x 1000 mini-pocket tablet support unit on each side to further enhance surface comfort. The springs adjust to your body contours and provide anatomically correct support with no ‘roll together’. The mattress spring unit has strengthened edge support to ensure total comfort and support across the entire sleep area."
          />
          <BedCard
            title="Majestic Embrace Luxury Pocket 10000"
            url="majestic10000"
            description="Luxurious natural Viscose damask cover with the softest surface feel. 11” mattress is tufted by hand using pure woollen tufts for added luxury. The luxury engineered spring system features 10,000 individually encased pocket springs in a 5-tier construction – a 2000 centre core with an additional 2 x 2000 mini-pocket tablet support unit on each side to further enhance surface comfort. The springs adjust to your body contours and provide anatomically correct support with no ‘roll together’. The mattress spring unit has strengthened edge support to ensure total comfort and support across the entire sleep area."
          />
          <div className="col-12 mb-3 text-center mt-4">
            <h3>100% Natural Latex</h3>
          </div>
          <BedCard
            title="100% Natural Latex | 7-zone luxury | Instant comfort & pressure relief"
            url="latex100"
            description="Soft and luxurious Sanctum stretch cover for a cool surface feel. Deep 100% Natural Latex core with a unique 7-Zone design to ensure properly supported sleep across the entire sleep surface 100% Natural Latex provides constant air circulation for a healthier and more comfortable night’s sleep."
          />
          <div className="col-12 mb-3 text-center mt-4">
            <h3>Hand-crafted headboards</h3>
          </div>
          <BedCard
            title="Luxury floor standing headboards"
            url="headboards"
            description="Hand-crafted, highest quality headboards with different shapes and colors."
          />
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
