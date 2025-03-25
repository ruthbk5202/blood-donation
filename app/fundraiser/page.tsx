import React from 'react';
import Fund from "../components/fundraised/Fund";
import "./fundraiser.css";

const Fundraiser = () => {
  return (
    <div>
      <div className='fund-raiser-card-container'>
        <h6>Fundraiser to Support and Manage “Ragat Chahiyo” Blood Hotline in Nepal</h6>
        
        <h1>About Hamro LifeBank</h1>
        <p>Hamro LifeBank is a social initiative for a smart, transparent, and holistic blood management service from collection to supply...</p>

        <h1>Our mission is to:</h1>
        <p>Ease the burden on patients’ families with our “Ragat Chahiyo“ blood hotline” by helping them manage blood during crucial moments of need...</p>

        <h1>Fundraiser Campaign Details</h1>
        <p>In Nepal, families of patients often face the heavy responsibility and stress of managing blood and finding blood donors themselves...</p>

        <h1>Ragat Chahiyo Hotline</h1>
        <p>Ease the burden on patients’ families with our “Ragat Chahiyo“ blood hotline” by helping them manage blood during crucial moments of need...</p>
        
        <h1>Blood Motivation through Events and Promotion</h1>
        <p>We conduct regular blood donation events and programs to motivate people to donate blood...</p>

        <h6>Our Impact</h6>
        <img src="https://assets.rumsan.net/hamro-lifebank/website/images/impact-fundrasier-banner.png" alt="Impact Banner"/>

        <h1>What are we raising funds for?</h1>
        <p>We are looking to raise $5,000 to support the operations of the Ragat Chahiyo blood hotline...</p>

        <h1>Patient Testimonials</h1>
        <div className="video-section">Video Placeholder</div>

        <h1>Success Stories</h1>
        <img src="https://assets.rumsan.net/hamro-lifebank/website/images/patient-feedback-fundrasier.png" alt="Success Stories"/>

        <h1>Donor Testimonial</h1>
        <div className="video-section">Video Placeholder</div>

        <h1>Our Team</h1>
        <p>Our team of committed hotline operators and volunteers handle thousands of calls from people searching for blood...</p>
        <img src="https://rumsan.nyc3.cdn.digitaloceanspaces.com/hamro-lifebank/website/images/hlb-our-team-fundraise.jpg" alt="Our Team"/>
      </div>

      <div>
        <Fund />
      </div>
    </div>
  );
};

export default Fundraiser;
