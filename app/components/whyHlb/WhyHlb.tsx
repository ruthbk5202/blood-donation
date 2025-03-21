"use client";
import React from "react";
import "./whyhlb.css";
const WhyHlb = () => {
  return (
    <div>
      <div className="grid-hlb">
        <div className="svg-hlb">
          <img src="https://rumsan.nyc3.cdn.digitaloceanspaces.com/hamro-lifebank/website/images/whyhlb_image.png"></img>
        </div>
        <div className="why-hlb">
          <h1>Why HLB?</h1>
          <p>
            Existing blood management system in Nepal is manual, cumbersome and
            inefficient. Most blood banks record the information on blood
            collection/supply manually in registers. Maintaining blood stock
            inventory is tedious with laborious back-office paperwork and
            managing information on availability and shortage of blood is a tall
            task. A social initiative for a smart, transparent and holistic
            blood management service from collection to supply. When it comes to
            blood, right information at the right time can be the answer to a
            life and death situation.
          </p>
        </div>
        <div className="what-we-do">
          <h1>What we do?</h1>
          <p>
            With the right donor data management and blood stock management, HLB
            works closely with blood banks to maintain their information and
            also recruit, engage and retain donors as per the demand. Folks in
            search of blood can get access to blood availability info.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyHlb;
