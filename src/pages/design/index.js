import React from "react";
import { MastheadDesign } from "../../components/masthead/Masthead";
import { AboutSection } from "../../components/about/AboutSection";
import { PhotoSlider } from "../../components/slider/PhotoSlider";
import Layout from "../../layout/Layout";

//photos
import photoDesign1 from "../../../static/img/design/d1.jpg";
import photoDesign2 from "../../../static/img/design/d2.jpg";
import photoDesign3 from "../../../static/img/design/d3.jpg";
import photoDesign4 from "../../../static/img/design/d4.jpg";
import photoDesign5 from "../../../static/img/design/d5.jpg";
import photoDesign6 from "../../../static/img/design/d6.jpg";
import photoDesign7 from "../../../static/img/design/d7.jpg";
import photoDesign8 from "../../../static/img/design/d8.jpg";
import photoDesign9 from "../../../static/img/design/d9.jpg";
import photoDesign10 from "../../../static/img/design/d10.jpg";
import photoDesign11 from "../../../static/img/design/d11.jpg";
import photoDesign12 from "../../../static/img/design/d12.jpg";
import photoDesign13 from "../../../static/img/design/d13.jpg";
import photoDesign14 from "../../../static/img/design/d14.jpg";
import photoDesign15 from "../../../static/img/design/d15.jpg";
import photoDesign16 from "../../../static/img/design/d16.jpg";
import photoDesign17 from "../../../static/img/design/d17.jpg";
import photoDesign18 from "../../../static/img/design/d18.jpg";
import photoDesign19 from "../../../static/img/design/d19.jpg";

const DesignPage = () => {
  const photosArray = [
    photoDesign1,
    photoDesign2,
    photoDesign3,
    photoDesign4,
    photoDesign5,
    photoDesign6,
    photoDesign7,
    photoDesign8,
    photoDesign9,
    photoDesign10,
    photoDesign11,
    photoDesign12,
    photoDesign13,
    photoDesign14,
    photoDesign15,
    photoDesign16,
    photoDesign17,
    photoDesign18,
    photoDesign19
  ];

  return (
    <Layout>
      <div className="mt-5">
        <MastheadDesign />
        <AboutSection
          id="design"
          title="Do you need additional design service?"
          description="I collaborate with interior designer which is providing bespoke, excellent and professional service which suit your needs."
          button_title="Contact for more information"
          button_url="#contact"
          secondary
          linkInternal
        />
        <PhotoSlider photosArray={photosArray} name="designer" />
      </div>
    </Layout>
  );
};

export default DesignPage;
