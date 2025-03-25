import React from 'react';
import { MdWaterDrop } from "react-icons/md";
import { IoTimerOutline } from "react-icons/io5";
import { FaHandHoldingHeart } from "react-icons/fa";
import {useRouter} from "next/navigation";
import "./herosection.css";

const HeroSection = () => {
  const router=useRouter();
  const handleBloodNavigation = () => {
    router.push('/donateBlood');}
  const handleTimeNavigation = () => {
    router.push('/time');}
    const handleFundraiserNavigation=() => {
      router.push('/fundraiser');}
    
  return (
    <div className='hero-section'>
      <div className='content-section'>
        <h6>Eliminate Blood Security in <span>Nepal</span> by</h6>
        <p>
           donating your <span>time </span>to make an impact, your<span> blood </span>to save lives, or your <span>money</span> to create a holistic blood management cycle.
        </p>
        <div className='btn-section'>
          <button  onClick={handleBloodNavigation}><MdWaterDrop className='icon' />Blood</button>
          <button onClick={handleTimeNavigation}><IoTimerOutline className='icon' />Time</button>
          <button onClick={handleFundraiserNavigation}><FaHandHoldingHeart className='icon' />Fundraiser</button>
        </div>
      </div>
      <div className='image-section'>
        <img
          src="https://rumsan.nyc3.cdn.digitaloceanspaces.com/hamro-lifebank/website/banner-bg.png"
          alt="Hero Banner"
        />
      </div>
    </div>
  );
};

export default HeroSection;