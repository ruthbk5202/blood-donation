import { FC } from 'react';
import "./team.css";

const Team: FC = () => {
  return (
    <section className="team">
      <div className="container">
        <h2 className="section-title">Our Team</h2>

        <p>
          Our team of committed hotline operators and volunteers handle thousands of calls from people searching for blood. We gather feedback from patients, donors, and others, and encourage regular blood donations. We've partnered with various volunteering organizations like Rh-ve group, Youth for Blood, Red Cross, and blood banks in Nepal to improve blood management for families in need.
        </p>

        <img
          src="https://ext.same-assets.com/2933486728/1335913592.jpeg"
          alt="Hamro LifeBank Team"
          className="team-image"
        />
      </div>
    </section>
  );
};

export default Team;
