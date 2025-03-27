import { FC } from "react";
import "./fundraiserdetails.css";

const FundraiserDetails: FC = () => {
  return (
    <section className="fundraiser-details">
      <div className="container">
        <h2 className="section-title">Fundraiser Campaign Details</h2>

        <p>
          In Nepal, families of patients often face the heavy responsibility and
          stress of managing blood and finding blood donors themselves. Hamro
          LifeBank strives to ease this burden and stress by assisting families
          in their search for blood through a dedicated Ragat Chahiyo phone line
          that individuals can call in case of emergencies or urgent needs
          related to blood donation or transfusion. This hotline serves as a
          direct and immediate point of contact for individuals seeking blood
          donations or assistance in emergencies, ensuring timely access to
          life-saving support. Join us in our annual fundraiser and contribute
          to creating a meaningful impact by being part of the solution!
        </p>

        <div className="feature-boxes">
          <div className="feature-box">
            <ul className="ragat">
            <li>
           Ragat Chahiyo Hotline</li></ul>
            <p>
              Ease the burden on patients families with our Ragat Chahiyo blood
              hotline by helping them manage blood during crucial moments of
              needs
            </p>
          </div>

          <p>
            In 2019, we launched the "Ragat Chahiyo" blood management hotline,
            which played a crucial role during the finding of blood. Our hotline
            team and volunteers have assisted over 7000 families facing
            distress. In 2022, we expanded our services to operate 24/7,
            ensuring patients in need of blood receive timely assistance.
          </p>

          <div className="feature-box">
           
              <p className="bloodmotivation">Blood Motivation through Events and Promotion</p>
          
            <p>
              We conduct regular blood donation events and programs to motivate
              people to donate blood. We have conducted 20+ events collaborating
              with Labim, Grande Hospital, Cedar Gates, Fusemachine, CG, Ncell,
              Omnicom Media group, The British School and many more
              organizations. Nepal faces a blood shortage due to high demand and
              low collections. This pioneering event in Nepal introduced a
              digital blood donation journey, integrating technology to motivate
              donors and enhance their experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FundraiserDetails;
