import React from "react";
 import "./omnicom.css";
import { CiUser } from "react-icons/ci";

const OmniCom = () => {
  return (
    <div>
      <nav>
        <h6>
         Hamro Life Bank and Omnicom Media Group: Smart Blood Donation Event
        </h6>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 300">
          <path
            fill="#fff"
            fill-opacity="1"
            d="M0,32L80,64C160,96,320,160,480,170.7C640,181,800,139,960,122.7C1120,107,1280,117,1360,122.7L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
      </nav>
      <div className="omnicom-container">
      <div className="ciUseri">
       <p>   <CiUser className=""/> swastik shakya | Nov 7, 2024</p>
      </div>
        <div className="description-of-omnicom">
          <div className="description">
            <p>
            Hamro Life Bank partnered with Omnicom Media Group to organize a smart blood donation event at their premises. In collaboration with Metro Kathmandu Hospital, we successfully collected 22 pints of blood, a life-saving contribution that has the potential to save 66 lives!
            </p>
           
          </div>
          <div className="description">
            <h2>Event Highlights:</h2>
            <p>
            <i>Participants</i>: Out of 30 registrants, 22 donors were eligible to give blood, while 8 individuals were ineligible due to health-related reasons.</p>
<p>
    <i>
Gender Distribution</i>: The donor group included 15 males and 7 females.</p>
<p>
    <i>
Engagement</i>: We enhanced the donor experience with witty props for photos, encouraging participants to share their stories on social media. Each donor received food, refreshments, and stickers as tokens of appreciation.</p>
<p>
    <i>
Marketing and Visibility</i>: To promote the event and ensure greater awareness, a Hamro Life Bank hotline standee was placed at the venue.</p>

<p><i>Data Management</i>: Every blood donation was meticulously digitized from collection to supply, ensuring a seamless and transparent process.</p>
<p><i>A Gesture of Gratitude</i>: To acknowledge our donors’ generosity, we sent a thank-you SMS to each donor once their blood was utilized to save a life. This thoughtful initiative demonstrated our appreciation and kept donors informed of their impactful contribution.
            </p>
            
          </div>
          
        </div>
      </div>
    </div>
  );
};
export default OmniCom;
