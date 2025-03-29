"use client";
import React from "react";
import "./whyhlb.css";

const WhyHlb = () => {
  const whatWeDo = [
    {
      id: 1,
      image: "https://hamrolifebank.com/img/icon/digitization.png",
      header: "Digitalization",
      paragraph: "We digitalize blood banks",
      number: "",
    },
    {
      id: 2,
      image: "https://rumsan.nyc3.cdn.digitaloceanspaces.com/hamro-lifebank/website/images/ragatchayogotline.png",
      header: "Ragat Chahiyo Hotline",
      paragraph: "Contact Us",
      number: "+977 9801230045"
    },
    {
      id: 3,
      image: "https://hamrolifebank.com/img/icon/motivatedonor.png",
      header: "Motivate donors",
      paragraph: "we motivate and retain donors with our vein-to-vein initiative",
      number: "",
    }
  ];

  return (
    <div>
      <div className="grid-hlb">
        <div className="svg-hlb">
          <img 
            src="https://rumsan.nyc3.cdn.digitaloceanspaces.com/hamro-lifebank/website/images/whyhlb_image.png" 
            alt="Why HLB illustration"
          />
        </div>
        
        <div className="why-hlb" id="why-hlb-section">
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
        
        <div className="what-we-do" id="what-we-do-id">
          <div>
            <h1>What we do?</h1>
            <p>
              With the right donor data management and blood stock management,
              HLB works closely with blood banks to maintain their information
              and also recruit, engage and retain donors as per the demand.
              Folks in search of blood can get access to blood availability
              info.
            </p>
            
            <div className="what-we-do-map-container">
              {whatWeDo.map((item) => (
                <div key={item.id} className="card">
                 
                  <img src={item.image} alt={item.header} />
                  <h2>{item.header}</h2>
                  <p className="card-description">{item.paragraph} </p>
                <p>{item.number}</p>
             
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyHlb;