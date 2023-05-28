import React from "react";
import HeroSection from "../components/LandingPage/HeroBanner/HeroSection";
import Features from "../components/LandingPage/FeaturesSection/Features";

type Props = {};

const LandingPage = (props: Props) => {
  return (
    <>
      <HeroSection />
      <Features />
    </>
  );
};

export default LandingPage;
