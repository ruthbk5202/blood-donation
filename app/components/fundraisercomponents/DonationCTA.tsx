import { FC } from 'react';

const DonationCTA: FC = () => {
  return (
    <section className="donation-cta">
      <div className="container">
        <h2 className="donation-title">Eliminate Blood Scarcity and Save Lives</h2>
        <h5>Hamro LifeBank Fundraiser 2024! Support us, your donation matters.</h5>

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
          <a href="#donate-now" className="btn btn-donate">Donate Now</a>
          <a href="#share" className="btn btn-share">Share</a>
        </div>
      </div>
    </section>
  );
};

export default DonationCTA;
