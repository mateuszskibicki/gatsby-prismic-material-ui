import React from "react";
import { WarrantyAndBedcare } from "../../../components/shop/WarrantyAndBedcare";
import { SingleBedPage } from "../../../components/shop/SingleBedPage";
//import { HeadComponent } from "../components/SEO/HeadComponent";

const Royal2000Page = () => {
  return (
    <div className="mt-5 pt-5">
      <SingleBedPage
        url="royal2000"
        title="Royal Embrace Luxury Pocket 2000"
        description={
          <>
            <h4>Mattress Comfort</h4>
            <p className="mb-2 small">
              Luxurious natural Viscose damask cover with the softest surface
              feel.
            </p>
            <p className="mb-2 small">
              9” deep mattress is tufted by hand using pure woollen tufts for
              added luxury.
            </p>
            <p className="mb-2 small">
              The finest mattress upholstery includes opulent surface comfort
              layers of 100% pure British wool, soft rebound wool and a rich mix
              of cashmere, silk and cotton for unsurpassed comfort.
            </p>
            <p className="mb-2 small">
              The 500g 100% British wool comfort layer is cool in summer, warm
              in winter and naturally disperses heat and moisture for the most
              comfortable night’s sleep. All models meet the British Wool
              Platinum standards.
            </p>
            <p className="mb-2 small">
              The luxury engineered spring system features 2000 individually
              encased pocket springs (tiered 2 x 1000) that adjust to your body
              contours and provide anatomically correct support with no ‘roll
              together’. The mattress spring unit has enhanced strengthened edge
              support to ensure total comfort and support across the entire
              sleep area.
            </p>
            <p className="mb-2 small">
              The mattress border is side-stitched by hand - further enhancing
              edge support.
            </p>
            <p className="mb-2 small">
              Sleep both sides - please turn your mattress regularly for optimum
              comfort.
            </p>
          </>
        }
        baseOptions
      />
      <WarrantyAndBedcare />
    </div>
  );
};

export default Royal2000Page;
