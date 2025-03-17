import React from 'react';
import "./herosection.css"
const HeroSection=() => {
  return (
    
    <div className='hero-section-grid'>
      <div className='description-section'>
      <h6>Eliminate Blood Security in<span>Nepal</span> </h6><p>by donating your time to make an impact, your blood to save lives or 
        your money to create a holistic blood management cycle.</p>
        <div className='btn-description-section'>
          <button>Blood</button>
          <button>Time</button>
          <button>Fundraizer</button>
        </div></div>
      <div className='image-section'>
        <img src="https://rumsan.nyc3.cdn.digitaloceanspaces.com/hamro-lifebank/website/banner-bg.png"></img>
        </div>
        
    </div>
  )
}; 
export default HeroSection;
