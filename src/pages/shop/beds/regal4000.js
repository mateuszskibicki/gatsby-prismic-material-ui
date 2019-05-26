import React from "react";
import { WarrantyAndBedcare } from "../../../components/shop/WarrantyAndBedcare";
import { SingleBedPage } from "../../../components/shop/SingleBedPage";
//import { HeadComponent } from "../components/SEO/HeadComponent";

const Regal4000Page = () => {
  return (
    <div className="mt-5 pt-5">
      <SingleBedPage
        url="regal4000"
        title="Regal Embrace Luxury Pocket 4000"
        description={
          <>
            <h4>Mattress Comfort</h4>
            <p className="mb-2 small">
              Luxurious natural Viscose damask cover with the softest surface
              feel.
            </p>
            <p className="mb-2 small">
              11” deep mattress is tufted by hand using pure woollen tufts for
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
              The luxury engineered spring system features 4000 individually
              encased pocket springs in a 3-tier construction – a 2000 centre
              core with an additional 1000 2” support unit on each side to
              further enhance surface comfort. The springs adjust to your body
              contours and provide anatomically correct support with no ‘roll
              together’. The mattress spring unit has strengthened edge support
              to ensure total comfort and support across the entire sleep area.
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

export default Regal4000Page;
