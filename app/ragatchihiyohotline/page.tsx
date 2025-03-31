import React from "react";
import { PiLineVerticalLight } from "react-icons/pi";
import { MdOutlineDoubleArrow } from "react-icons/md";
import { CiDroplet } from "react-icons/ci";
import { FaCheckCircle } from "react-icons/fa";
import { GiAlarmClock } from "react-icons/gi";

import "./ragatchahiyo.css";
import { BiParagraph } from "react-icons/bi";

const RagatChahiyoHotline = () => {
  const partners=[
    {
      id:1,
      image:"https://rumsan.nyc3.cdn.digitaloceanspaces.com/hamro-lifebank/website/images/test-anmf-logo.png",

    },
    {
      id:2,
      image:"https://rumsan.nyc3.cdn.digitaloceanspaces.com/rumsan-group/pathao-rmbg-logo.png",
    },
    {
      id:3,
      image:"https://rumsan.nyc3.cdn.digitaloceanspaces.com/esatya/friends-of-rh.png",
    },
    {
      id:4,
      image:"https://rumsan.nyc3.cdn.digitaloceanspaces.com/esatya/youth-for-blood.jpg",
    },
  ]
  const helpLine=[
    {
      id:1,
      image:"https://rumsan.nyc3.cdn.digitaloceanspaces.com/hamro-lifebank/website/images/pasted-image-0-1.png",
      header:"HLB Website request form",
      paragraph:"People in need of blood csn send their blood request through the HLB website"
    },
    {
      id:2,
      image:"https://rumsan.nyc3.cdn.digitaloceanspaces.com/hamro-lifebank/website/images/hotline-phone-number.png",
      header:"Hotline phone number",
      paragraph:"People in need of blood can directly contact Ragat Chahiyo Hotline number at 981230045 where a trained call operator will handle the blood request received",
    },
    {
      id:3,
      image:"https://rumsan.nyc3.cdn.digitaloceanspaces.com/hamro-lifebank/website/images/pasted-image-0-2.png",
      header:"HLB fb messenger",
      paragraph:"People in need of blood needs via HLB messanger we are also introducing a chatbot soon.",
    },
    {
      id:4,
      image:"https://rumsan.nyc3.cdn.digitaloceanspaces.com/hamro-lifebank/website/images/viber-ragat-chayo-hotline.png",
      header:"Viber",
      paragraph:"People in need of blood  can also share their blood needs via viber. We are introducing ragat chahiyo hotline chatbot vary soon. ",
    },
    
    
    {
      id:7,
      image:"	https://rumsan.nyc3.cdn.digitaloceanspaces.com/hamro-lifebank/website/images/twitter-hlb.png",
      header:"Twitter",
      paragraph:"People in need of blood can also share their blood needs via twitter. we are introducing ragat chahiyo hotline bot very soon."
    },
    {
      id:8,
      image:"https://hamrolifebank.com/img/icon/facebook.png",
      header:"Facebook",
      paragraph:"People in need of blood can also share their blood needs via facebook. We are introducing ragat chahiyo hotline bot very soon."
    }
  ]
  return (
    <div>
      <div className="ragat-chahiyo-container">
        <div >
          <div className="ragat-chahiyo-nav">
            <nav>
              <svg width="24" height="24" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" fill="#cf3d36">
                  <animate
                    attributeName="opacity"
                    values="1;0.5;1"
                    dur="1s"
                    repeatCount="indefinite"
                  />
                </circle>
              </svg>
              <h6>Ragat Chahiyo Hotline</h6>{" "}
              <PiLineVerticalLight className="piline" /> <h1> Mar 26, 2025</h1>{" "}
              <PiLineVerticalLight className="piline" /> {" "}<p>Blood Search managed
              till date</p>{""}
              <MdOutlineDoubleArrow className="arrow" /><p> 10524</p> 
            </nav>
          </div>
          <div className="blood-request-today">

            <div className="cidroplet">
              <img src="https://rumsan.nyc3.cdn.digitaloceanspaces.com/esatya/blood-drop.png"></img>
             
              <h2>Blood Request Today</h2>
              <h6>25</h6>
            </div>
            <PiLineVerticalLight className="blood-req" />
            <div className="cidroplet">
              <img src="https://rumsan.nyc3.cdn.digitaloceanspaces.com/esatya/check.png"></img>
              <h2>Managed</h2>
              <h6>24</h6>
            </div>
            <PiLineVerticalLight className="blood-req" />
            <div className="cidroplet">
              <img src="https://rumsan.nyc3.cdn.digitaloceanspaces.com/rumsan-group/hotline-pending.png"></img>
              <h2>Pending</h2>
              <h6>1</h6>
            </div>
          </div>
        </div>
        <div className="no-blood-req">
          <p>There is currently no blood request at this time</p>
        </div>
        <div className="ragat-chahiyo-call">
          <img
            src="https://rumsan.nyc3.cdn.digitaloceanspaces.com/rumsan-test/ragat-chahiyo-hotline.png"
           
          ></img>
          <p>Ragat Chahiyo</p>
        </div>
        <div className="ragat-chahiyo-grid">
          <div className="description-part">
            <h6>Ragat Chahiyo Hotline</h6>
            <p>
              Many people rely on friends/family network or social media to
              manage blood during emergencies. These mediums are helpful and the
              only resort for help at times of need. But many times, this
              process creates a lot of panic and fear for the needy as well as
              others who come through this. Many people are unaware about most
              basic information on blood and where blood banks are and if
              there’s blood available in the blood bank. They end up creating
              difficult situations for themselves. Ragat Chahiyo Hotline aims to
              eliminate this stress and help patients' families with right
              information and find blood or donors during emergencies. This
              initiative includes a build of a robust communication hub and
              search system, supported and funded by America Nepal Medical
              Foundation.
            </p>

          </div>
          <div className="image-part">
            <img src="https://rumsan.nyc3.cdn.digitaloceanspaces.com/hamro-lifebank/website/images/ragat-chahiyo-logo-powered-by-updated-final.png"></img>
          </div>
        </div>
        <div className="partners-logo">
          {partners.map((index)=>(
            <div key={index.id} className="logo-img" >
              <img src={index.image}></img>
              </div>
          ))}
       
        </div>
        <div className="ragat-chahiyo-contact-section">
          <div>
            <img src="https://rumsan.nyc3.cdn.digitaloceanspaces.com/hamro-lifebank/website/images/question-1.png"></img>
          </div>
          <div >
            <h6>How can patient families contact the ragat chahiyo Hotline?</h6>
          </div>
          </div>
<div className="help-line-map">
  {
    helpLine.map((index)=>(
      <div key={index.id} className="help-line-item">
        <img src={index.image}></img>
        <div className="description-helpline">
          <h5>{index.header}</h5>
          <p>{index.paragraph}</p>
        </div>
      </div>))
    
  }
        </div>
      </div>
    </div>
  );
};
export default RagatChahiyoHotline;
