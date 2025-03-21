"use client";
import React from "react";
import Nav from "../components/navfirst/Nav";
import Footer from "../components/footer/footer";
import HeroSection from "../components/herosection/HeroSection";
// import HeroSectionMission from '../components/herosectionsecondcomponent/HerosectionMission.jsx';
import WhyHlb from "../components/whyHlb/WhyHlb";
import Team from "../components/team/Team";
import Events from "../components/Events/Events";

const Home = () => {
  return (
    <div>
   
      <HeroSection />
     
      <WhyHlb />
      <Team />
      <Events />
      
    </div>
  );
};
export default Home;
