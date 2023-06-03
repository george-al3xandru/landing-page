import React from "react";
import HeroSection from "../components/HeroBanner/HeroSection";
import Features from "../components/FeaturesSection/Features";
import ContactForm from "../components/Contact/ContactForm";
import ClipboardButton from "../components/Common/ClipboardButton";

type Props = {};

const LandingPage = (props: Props) => {
  return (
    <>
      <HeroSection />
      <Features />
      <ContactForm />
    </>
  );
};

export default LandingPage;
