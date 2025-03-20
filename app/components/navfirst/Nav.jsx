"use client";
import React, { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";

import "./nav.css";
import { useRouter } from "next/navigation";

const Nav = () => {
  const [aboutDropdown, setAboutDropdown] = useState(false);
  const [resourceDropdown, setResourceDropdown] = useState(false);
 const router= useRouter();
 const handleNavigateToDonate=()=>{
  router.push('/donateBlood');
 }
 const handleNavigateToRequestBlood=()=>{
  router.push('/requestBloodForm');
 }

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <a href="/">MyLogo</a>
        </div>

        <div className="drop-down">
         
          <div 
            className="dropdown-item" 
            onMouseEnter={() => setAboutDropdown(true)}
            onMouseLeave={() => setAboutDropdown(false)}
          >
            <div className="about-us">
              
              <a href="/">About Us</a>
              <RiArrowDropDownLine className="dropdown-icon" />
              
            </div>
            {aboutDropdown && (
              <ul className="dropdown-menu">
                <li><a href="/">Team</a></li>
                <li><a href="/">BOD</a></li>
                <li><a href="/">media</a></li>
                <li><a href="/">Blogs</a></li> 
                <li><a href="/">Events</a></li>
                <li><a href="/">Newsletters</a></li>
              </ul>
            )}
          </div>
        
          <div 
            className="dropdown-item" 
            onMouseEnter={() => setResourceDropdown(true)}
            onMouseLeave={() => setResourceDropdown(false)}
          >
            <div className="resource">
              <a href="/">resources</a>
              <RiArrowDropDownLine className="dropdown-icon"  />
            </div>
            {resourceDropdown && (
              <ul className="dropdown-menu">
                <li><a href="/">Blood Basics</a></li>
                <li><a href="/">Blood Bank Information</a></li>
                <li><a href="/">Reports</a></li>
                <li><a href="/">Vedios</a></li>
                <li><a href="/">Coronavirus & Blood Donation</a></li>
                <li><a href="/">Reports</a></li>
              </ul>
            )}
          </div>

          
          <div 
            className="dropdown-item" 
           
          >
            <div className="stories">
              <a href="/bloodstories">Stories </a>
            
            </div>
           
          </div>
        

        <div className="btn-group">
          <button className="donate-btn" onClick={handleNavigateToDonate}>Donate Blood</button>
          <button className="request-btn" onClick={handleNavigateToRequestBlood} >Request Blood</button>
        </div>
    </div>
    </div>
    </nav>
  );
};

export default Nav;