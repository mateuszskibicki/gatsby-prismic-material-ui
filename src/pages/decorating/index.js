import React from "react";
import { MastheadDecorating } from "../../components/masthead/Masthead";
import { AboutSection } from "../../components/about/AboutSection";
import { PhotoSlider } from "../../components/slider/PhotoSlider";
import Layout from "../../layout/Layout";

//photos
import photoDecorating1 from "../../../static/img/decorating/decorating1.jpg";
import photoDecorating2 from "../../../static/img/decorating/decorating2.jpg";
import photoDecorating3 from "../../../static/img/decorating/decorating3.jpg";
import photoDecorating4 from "../../../static/img/decorating/decorating4.jpg";

const DecoratingPage = () => {
  const photosArray = [
    photoDecorating1,
    photoDecorating2,
    photoDecorating3,
    photoDecorating4
  ];

  return (
    <Layout>
      <div className="mt-5">
        <MastheadDecorating />
        <AboutSection
          id="decorating"
          title="Looking for inspiration for decoration?"
          //description="I'VE BEEN WORKING IN THIS FIELD FOR 20 YEARS NOW. HAVING BEEN AND WORKED IN A LOT OF PLACES IN EUROPE, I LEARNED A LOT. HOW TO BE FAIR, PUNCTUAL, HARD-WORKING AND OPEN TO ANY OF MY CLIENTS' IDEAS AND SUGGESTIONS. I CAN MEET ANYONE'S NEEDS."
          button_title="Make your renovation dreams come true!"
          button_url="#contact"
        />
        <PhotoSlider photosArray={photosArray} name="decorating" />
      </div>
    </Layout>
  );
};

export default DecoratingPage;
