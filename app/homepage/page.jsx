"use client";
import React from 'react'
import Nav from "../components/navfirst/Nav.jsx";
import Footer from "../components/footer/footer.jsx";
import HeroSection from '../components/herosection/HeroSection.jsx'; 
import HeroSectionMission from '../components/herosectionsecondcomponent/HerosectionMission.jsx';
import WhyHlb from "../components/whyHlb/WhyHlb.jsx";
import Team from "../components/team/Team.jsx";
import Events from "../components/events/Events.jsx";

const Home = () => {
  return (
    <div>
        <Nav/>
        <HeroSection/>
        <HeroSectionMission/>
        <WhyHlb/>
        <Team/>
        <Events/>
     <Footer/>
       
    </div>
  )
} 
export default Home;
