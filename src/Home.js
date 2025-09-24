// import React from "react";
import SchoolHeroSection from "./Hero";
import AboutUs from "./AboutUs";
import CircularCards from "./CircularCards";
import ContactUs from "./Contact";
import SchoolFacilities from "./facilities_section";

function Home() {
  return (
    <div id="home">
      <SchoolHeroSection />
      <AboutUs />
      <CircularCards />
      <SchoolFacilities />
      <ContactUs />
    </div>
  );
}

export default Home;
