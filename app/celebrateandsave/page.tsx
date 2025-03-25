import React from "react";
import "./celebrate.css";
import { CiUser } from "react-icons/ci";

const CelebrateAndSave = () => {
  return (
    <div>
      <nav>
        <h6>
          Celebrate and Saves Lives: Why Blood Donation is Crucial During
          Festive Times
        </h6>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 300">
          <path
            fill="#fff"
            fill-opacity="1"
            d="M0,32L80,64C160,96,320,160,480,170.7C640,181,800,139,960,122.7C1120,107,1280,117,1360,122.7L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
      </nav>
        <div className="ciUser">
            
        <CiUser className="ci"/> <p>Dristi Piya | Nov 7, 2024</p>
        </div>
      <div className="celebrate-save-container">
        <div className="description-of-celebrate ">
          <div>
            <p>
              The festive season is a time for joy, celebration, and
              togetherness. Families reunite, communities gather, and the spirit
              of giving is everywhere. However, while people focus on
              celebrations, an often-overlooked need becomes even more critical:
              blood donation. During holidays, the number of blood donations can
              drop by a staggering 90%, while blood demand rises by 60-70%. This
              gap places significant pressure on hospitals and blood banks,
              where supplies are already stretched. This festive season, let’s
              discuss how donating blood can be a meaningful gift that saves
              lives and why it matters now more than ever.
            </p>
          </div>
          <div className="description">
            <h2>Why Blood Donations Decline During Festive Seasons</h2>

            <p>
              During the holidays, blood donations see a sharp decline,
              sometimes falling by up to 90%. This happens because people are
              busy with family gatherings, vacations, and travel plans, and
              regular donors often don’t have donation appointments on their
              minds. However, this drop coincides with a 60-70% increase in
              blood demand due to higher rates of road accidents, seasonal
              health emergencies, and planned surgeries. This mismatch between
              supply and demand creates a pressing need for more blood donors
              during these critical times.
            </p>
          </div>
          <div className="description">
            <h2>How Blood Donations Save Lives During Festivities</h2>
            <p>
              Every blood donation has the power to save up to three lives,
              making it a truly impactful way to give back during the season of
              giving. Donated blood supports patients from those undergoing
              surgeries, Dialysis patients and cancer treatments to new mothers
              and trauma victims. One small act of generosity during the
              holidays can offer comfort and hope to families in critical
              situations by donating blood.
            </p>
          </div>
          <div className="description">
            <div className="description-child">
              <p>
                Challenges of Blood Donation During Festive Times and How to
                Overcome Them
              </p>
              <p>
                The challenges of blood needs during festive seasons can be
                addressed with proactive solutions:
              </p>
              <p>
                Donor Awareness: Blood banks can engage with communities through
                campaigns that raise awareness about the heightened need for
                blood donations during holidays.
              </p>
              <p>
                Blood Bank and Red Cross Coordination: Collaborating with
                organizations like the Red Cross and local blood banks to
                organize donation events in accessible locations makes it easier
                for people to donate despite busy schedules. The Red Cross plays
                crucial roles by managing and raising awareness about blood
                shortages, encouraging people to donate.{" "}
              </p>
              <p>
                Hosting Blood Drives: Organizing holiday-themed blood donation
                events can draw community members and new donors, making it
                easier for those celebrating to contribute. This kind of
                community-driven support can help prevent blood shortages and
                ensure hospitals can handle critical situations with adequate
                supplies.
              </p>
            </div>
            <div className="description">
              <h2>Conclusion</h2>
              <p>
                This holiday season, let’s give more than just gifts—let’s give
                hope, health, and life. Blood donations decrease sharply while
                the need for blood rises, creating an urgent call for donors. By
                donating blood during festive periods, you can be a hero in the
                true spirit of giving. As we gather with loved ones to
                celebrate, let’s remember the lives we can touch and the hope we
                can bring to families in need. This season, be a hero by
                donating blood and helping make the world a brighter, healthier
                place for everyone.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CelebrateAndSave;
