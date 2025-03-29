"use client";
import React, { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";

import "./nav.css";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Nav = () => {
  const [aboutDropdown, setAboutDropdown] = useState(false);
  const [resourceDropdown, setResourceDropdown] = useState(false);
  const [ourWorkDropdown, setourWorkDropdown] = useState(false);
  const router = useRouter();
  const handleNavigateToDonate = () => {
    router.push("/donateBlood");
  };
  const handleNavigateToRequestBlood = () => {
    router.push("/requestBloodForm");
  };

  const scrollToSection = (sectionId: string) => {
    if (window.location.pathname === "/") {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
     } else {
      router.push("/");

    
     }
  };
  const scrollToWhyHLB= (sectionId: string) => {
    if (window.location.pathname === "/") {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
     } else {
      router.push("/");

    
     }
  };
  const scrollToWhatWeDo= (sectionId: string) => {
    if (window.location.pathname === "/") {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
     } else {
      router.push("/");

    
     }
  };
  const scrollToPartnerSection=(sectionId:string)=>{
    if(window.location.pathname==='/'){
      const element = document.getElementById(sectionId);
      if (element){
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };
  const handleNavigateToLogin=()=>{
    router.push("/login");
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <a href="/">
            <img src="https://rumsan.nyc3.cdn.digitaloceanspaces.com/esatya/hlb-navbar-logo.png"></img>
          </a>
        </div>

        <div className="drop-down">
        <a 
        href="#why-hlb-section"
        onClick={(e) => {
          e.preventDefault();
          scrollToWhyHLB("why-hlb-section");
        }}
        >Why HLB</a>
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
                <li>
                  <a
                    href="#team-section"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection("team-section");
                    }}
                  >
                    Team
                  </a>
                </li>
                <li>
                  <a href="/BOD">BOD</a>
                </li>
                <li>
                  <a href="/media">media</a>
                </li>
                <li>
                  <a href="/blogs">Blogs</a>
                </li>
                <li>
                  <a href="/eventpage">Events</a>
                </li>
                <li>
                  <a href="/newsletter">Newsletters</a>
                </li>
              </ul>
            )}
          </div>
          <div
            className="dropdown-item"
            onMouseEnter={() => setourWorkDropdown(true)}
            onMouseLeave={() => setourWorkDropdown(false)}
          >
            <div className="our-work">
              <a href="/">Our Work</a>
              <RiArrowDropDownLine className="dropdown-icon" />
            </div>
            {ourWorkDropdown && (
              <ul className="dropdown-menu">
                <li>
                  <a href="#what-we-do-id" 
                  onClick={(e)=>{e.preventDefault();
                    scrollToWhatWeDo("what-we-do-id");
                  }}
                  >What we do</a>
                </li>
                <li>
                  <a href="#partner-id"
                  onClick={(e)=>{
                    e.preventDefault();
                    scrollToPartnerSection("partner-id");
                  }}
                  >Partners</a>
                </li>
                <li>
                  <a href="/ragatchihiyohotline">Ragat Chihiyo Hotline</a>
                </li>
              </ul>
            )}
          </div>

          <div className="dropdown-item">
            <div className="stories">
              <a href="/bloodstories">Stories </a>
            </div>
          </div>

          <div
            className="dropdown-item"
            onMouseEnter={() => setResourceDropdown(true)}
            onMouseLeave={() => setResourceDropdown(false)}
          >
            <div className="resource">
              <a href="/">resources</a>

              <RiArrowDropDownLine className="dropdown-icon" />
            </div>
            {resourceDropdown && (
              <ul className="dropdown-menu">
                <li>
                  <a href="/bloodbasics">Blood Basics</a>
                </li>
                <li>
                  <a href="/Bloodbankinfo">Blood Bank Information</a>
                </li>

                <li>
                  <a href="/vedios">Vedios</a>
                </li>
                <li>
                  <a href="/coronavirus">Coronavirus & Blood Donation</a>
                </li>
              </ul>
            )}
          </div>

          <div className="btn-group">
            <button className="donate-btn" onClick={handleNavigateToDonate}>
              Donate Blood
            </button>

            <button
              className="request-btn"
              onClick={handleNavigateToRequestBlood}
            >
              Request Blood
            </button>
            <button
              className="request-btn"
              onClick={handleNavigateToLogin}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
