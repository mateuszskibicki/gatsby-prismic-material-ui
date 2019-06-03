import React from "react";
import { MastheadHomepage } from "../components/masthead/Masthead";
import { AboutSection } from "../components/about/AboutSection";
import { MultipleMedia } from "../components/multiple-media/MultipleMedia";
//import { HeadComponent } from "../components/SEO/HeadComponent";

const IndexPage = () => {
  const elementsArray = [
    {
      title: "EXPERIENCE",
      description:
        "Years of experience and finished high quality projects that show my experience, approach and value.",
      iconClasses: "far fa-3x fa-star text-primary mb-4"
    },
    {
      title: "CREATIVE",
      description:
        "I have many creative ideas so I can always advise modern solutions.",
      iconClasses: "fas fa-3x fa-gem text-primary mb-4"
    },
    {
      title: "PROFESSIOANL",
      description:
        "Everything is professionally documented and preceded by projects.",
      iconClasses: "fas fa-3x fa-user-tie text-primary mb-4"
    }
  ];

  return (
    <>
      <MastheadHomepage />
      <AboutSection
        id="about"
        title="We've got what you need!"
        description="I'VE BEEN WORKING IN THIS FIELD FOR 20 YEARS NOW. HAVING BEEN AND WORKED IN A LOT OF PLACES IN EUROPE, I LEARNED A LOT. HOW TO BE FAIR, PUNCTUAL, HARD-WORKING AND OPEN TO ANY OF MY CLIENTS' IDEAS AND SUGGESTIONS. I CAN MEET ANYONE'S NEEDS."
        button_title="Make your home amazing!"
        button_url="#portfolio"
      />
      <MultipleMedia elementsArray={elementsArray} />
      <AboutSection
        id="design"
        title="Do you need additional design service?"
        description="I collaborate with interior designer which is providing bespoke, excellent and professional service which suit your needs."
        button_title="Go to portfolio"
        button_url="/design"
        secondary
        linkInternal
      />
    </>
  );
};

export default IndexPage;
