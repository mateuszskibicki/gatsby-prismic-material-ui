import React from "react";
import { AboutSection } from "../../components/about/AboutSection";
import { PhotoSlider } from "../../components/slider/PhotoSlider";
//import { HeadComponent } from "../components/SEO/HeadComponent";

//photos
import photoBathroom1 from "../../../static/img/bathrooms/1.jpeg";
import photoBathroom2 from "../../../static/img/bathrooms/2.jpeg";
import photoBathroom3 from "../../../static/img/bathrooms/3.jpeg";
import photoBathroom4 from "../../../static/img/bathrooms/4.jpeg";
import photoBathroom5 from "../../../static/img/bathrooms/5.jpeg";
import photoBathroom6 from "../../../static/img/bathrooms/6.jpeg";
import photoBathroom7 from "../../../static/img/bathrooms/7.jpeg";

const BathroomPage = props => {
  props;

  const photosArray = [
    photoBathroom1,
    photoBathroom2,
    photoBathroom3,
    photoBathroom4,
    photoBathroom5,
    photoBathroom6,
    photoBathroom7
  ];

  return (
    <div className="mt-5">
      <AboutSection
        id="bathroom"
        title="Looking for inspiration for your new bathroom?"
        description="I'VE BEEN WORKING IN THIS FIELD FOR 20 YEARS NOW. HAVING BEEN AND WORKED IN A LOT OF PLACES IN EUROPE, I LEARNED A LOT. HOW TO BE FAIR, PUNCTUAL, HARD-WORKING AND OPEN TO ANY OF MY CLIENTS' IDEAS AND SUGGESTIONS. I CAN MEET ANYONE'S NEEDS."
        button_title="Make your bathroom unique!"
        button_url="#contact"
      />
      <PhotoSlider photosArray={photosArray} name="bathroom" />
    </div>
  );
};

export default BathroomPage;
