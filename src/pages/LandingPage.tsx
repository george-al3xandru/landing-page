import React from "react";
import HeroSection from "../components/HeroBanner/HeroSection";
import Features from "../components/FeaturesSection/Features";
import Contact from "../components/Contact/Contact";


type Props = {};

const LandingPage = (props: Props) => {
  return (
    <>
      <HeroSection />
      <Features />
      <Contact />
    </>
  );
};

export default LandingPage;
