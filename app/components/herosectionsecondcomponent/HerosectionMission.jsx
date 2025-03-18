import React from 'react';
import { MdWaterDrop } from "react-icons/md";
import { IoTimerOutline } from "react-icons/io5";
import { FaHandHoldingHeart } from "react-icons/fa";
import "./herosectionmission.css";

const HeroSectionMission = () => {
  return (
    <div className='hero-section-second'>
      <div className='content-section-second'>
        <div>
        <h6>In developing countries like <span>Nepal</span> </h6>
        <p>
           patients families have the burden and stress of managing and transorting blood themselves.
        </p>
        <h6>We are on a mission to change that</h6>
        </div>
       </div>
       <div className='vedio-section'>
        <video  controls>
        <source src="https://i.ytimg.com/vi/opariZWbuCY/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLC4Tx0ShIbTbzGNIVSB9-lgXjKJGg" type="video/mp4" />
        
        Your browser does not support the video tag.
      </video>
    </div>
    </div>
  );
};

export default HeroSectionMission;