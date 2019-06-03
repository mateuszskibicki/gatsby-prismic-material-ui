import React from "react";
import { AboutSection } from "../../components/about/AboutSection";
import Layout from "../../layout/Layout";

const ContactPage = () => {
  return (
    <Layout>
      <div className="mt-5">
        <AboutSection
          id="contactsection"
          title="Contact me to get more information"
          description="I'VE BEEN WORKING IN THIS FIELD FOR 20 YEARS NOW. HAVING BEEN AND WORKED IN A LOT OF PLACES IN EUROPE, I LEARNED A LOT. HOW TO BE FAIR, PUNCTUAL, HARD-WORKING AND OPEN TO ANY OF MY CLIENTS' IDEAS AND SUGGESTIONS. I CAN MEET ANYONE'S NEEDS."
          button_title="Make your home amazing with unique solutions!"
          button_url="#contact"
        />
      </div>
    </Layout>
  );
};

export default ContactPage;
