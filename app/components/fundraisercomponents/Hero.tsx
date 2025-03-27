import { FC } from 'react';

const Hero: FC = () => {
  return (
    <section className="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <h1>Fundraiser to Support and Manage<br />"Ragat Chahiyo" Blood Hotline in Nepal</h1>
          <p>
            Hamro LifeBank Fundraiser 2024! Support us, your donation matters.
          </p>
          <div className="fund-progress">
            <div className="fund-details">
              <span className="fund-source">From Go Fund Me - USD</span>
              <span className="fund-amount">Not available at the moment</span>
            </div>
            <div className="fund-details">
              <span className="fund-source">From Nepal - NRs</span>
              <span className="fund-amount">13222</span>
            </div>
          </div>
          <div className="donation-buttons">
            <a href="#donate-now" className="btn btn-primary btn-donate">Donate Now</a>
            <a href="#share" className="btn btn-outline btn-share">Share</a>
          </div>
        </div>
        <div className="hero-image">
          <img src="https://ext.same-assets.com/1446903409/2582503410.png" alt="Blood Donation Impact" />
        </div>
      </div>
    </section>
  );
};

export default Hero;