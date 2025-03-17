import React, { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import "./nav.css";

const Nav = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <a href="/">MyLogo</a>
        </div >
        <div className="drop-down">
          <div className="about-us">
        <a href="/">Aboutus</a>
        <RiArrowDropDownLine />
        </div>
        <div className="resource">
        <a href="/">Resources</a>
        <RiArrowDropDownLine />

        </div>
        <div>
          <a>Blood Stories</a>
        </div>
        </div>
        <div className="btn-group">
        <button className="denote-btn">Donate Blood</button>
        <button className="request-btn">Request Blood</button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
