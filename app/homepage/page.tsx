"use client";
import React from 'react'
import Nav from "../components/navfirst/Nav.tsx";
import Footer from "../components/footer/footer.tsx";
import HeroSection from '../components/herosection/HeroSection.tsx'; 

const Home = () => {
  return (
    <div>
        <Nav/>
        <HeroSection/>
     <Footer/>
       
    </div>
  )
} 
export default Home;
