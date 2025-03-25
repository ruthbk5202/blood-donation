import React from 'react';
import { LiaHandsSolid } from "react-icons/lia";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import "./fund.css";
const Fund = () => {
  return (
    <div>
        <div className='fund-raised-container'> 
        <LiaHandsSolid />
        <h1>Hamro LifeBank Fundraiser 2024!Support us, your donation matters. </h1>
        <span><h1>Fund Raised</h1></span>
        <p>From Go Fund Me-USD <span>Not available at the moment</span></p>
        <p>From nepal-NRs<span>13222</span></p>
        <button>Donate Now</button>
        <div>
            <h2>share</h2>
            <div>
            <FaFacebookF />
            <FaLinkedinIn />
            <FaTwitter />
  
            </div>
        </div>

        </div>
    </div>
  )
};export default Fund;
