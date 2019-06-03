import React from "react";
import { WarrantyAndBedcare } from "../../../components/shop/WarrantyAndBedcare";
import { SingleBedPage } from "../../../components/shop/SingleBedPage";
import Layout from "../../../layout/Layout";

const Latex100Page = () => {
  return (
    <Layout>
      <div className="mt-5 pt-5">
        <SingleBedPage
          url="latex100"
          title="100% Natural Latex | 7-zone luxury | Instant comfort & pressure relief"
          description={
            <>
              <h4>Mattress Comfort</h4>
              <p className="mb-2 small">
                Soft and luxurious stretch cover for a cool surface feel
              </p>
              <p className="mb-2 small">
                Deep 100% Natural Latex core with a unique 7-Zone design to
                ensure properly supported sleep across the entire sleep surface
              </p>
              <p className="mb-2 small">
                100% Natural Latex provides constant air circulation for a
                healthier and more comfortable night’s sleep
              </p>
              <p className="mb-2 small">
                Anti–allergenic, anti-bacterial and anti-microbial properties
              </p>
              <p className="text-bold text-primary">NO NEED TO TURN</p>
            </>
          }
          overview={
            <>
              <h4>Why choose 100% Natural Latex?</h4>
              <p className="mb-2 small">
                1. Unique structure creates 7 distinct ergonomic zones with
                variances in firmness so that they can instantly adjust to the
                sleepers’ body and ensure optimal support and correct spinal
                alignment.
              </p>
              <p className="mb-2 small">
                2. Excellent elasticity provides perfect body support to improve
                blood flow and minimise the risk of back pain and spinal
                stiffness.
              </p>
              <p className="mb-2 small">
                3. 100% Natural Latex mattresses have excellent durability and
                will retain their shape, height and firmness much longer than
                conventional mattresses – Performance Guaranteed for 10 years.
              </p>
              <p className="mb-2 small">
                4. Unique open cell structure allows continuous air circulation
                and perfect ventilation through the proper dispersion of body
                moisture.
              </p>
              <p className="mb-2 small">
                5. Hypo-allergenic and resistant to mould, mildew and dust-mites
                for a healthier nights sleep.
              </p>
              <p className="mb-2 small">
                6. 100% Natural Latex is a totally renewable raw material.
                Rubber trees neutralize over 90 million tons of carbon dioxide
                (CO2) each year.
              </p>
              <p className="mb-2 small">
                7. Meets UK Flammability Regulations.
              </p>
            </>
          }
          baseOptions
        />
        <WarrantyAndBedcare />
      </div>
    </Layout>
  );
};

export default Latex100Page;
