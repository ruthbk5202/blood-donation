import { FC } from 'react';
import "./aboutfund.css"

const About: FC = () => {
  return (
    <section className="about" id="about-us">
      <div className="container">
        <h2 className="section-title">About Hamro LifeBank</h2>
        <div className="about-content">
          <p>
            Hamro LifeBank is a social initiative for a smart, transparent, and holistic blood management service from collection to supply. We have saved and impacted more than 100K lives since our inception in 2019. Hamro LifeBank was started as an answer to the growing pains of a patient's family to arrange blood in times of need. As we delved deeper into the current blood shortage challenge, the concept birthed into a much-needed data-informed approach, wherein the lifecycle of a blood bag can be managed efficiently and transparently with higher process control.
          </p>

          <h3>Our mission is to:</h3>
          <ul className="mission-list">
            <li>
              Ease the burden on patients families with our "Ragat Chahiyo" blood hotline by helping them manage blood during crucial moments of need
            </li>
            <li>
              Inspire and retain youth donors through innovative smart blood donation events and campaigns.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
