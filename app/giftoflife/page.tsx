import React from "react";
 import "./giveife.css";
import { CiUser } from "react-icons/ci";

const GiftOfLife = () => {
  return (
    <div>
      <nav>
        <h6>
          Gift the Gift of Life: Donate Blood with Hamro LifeBank and Verisk
          Nepal
        </h6>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 300">
          <path
            fill="#fff"
            fill-opacity="1"
            d="M0,32L80,64C160,96,320,160,480,170.7C640,181,800,139,960,122.7C1120,107,1280,117,1360,122.7L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
      </nav>
      <div className="give-life-container">
      <div className="ciUser">
        <CiUser className="ci" /> <p>swastik shakya | Nov 7, 2024</p>
      </div>
        <div className="description-of-life">
          <div className="description">
            <p>
              Hamro LifeBank and Verisk Nepal organized a Smart Blood Donation
              Drive, a one-day blood donation event in partnership with Labim
              Mall and Grande International Hospital. Out of 82 registrants, 74
              were eligible to donate blood, while the remaining individuals
              were ineligible due to health issues and other reasons. Among the
              74 donors, 28.4% were female and 71.6% were male donors. Usually,
              the female donor count is less than 20%.
            </p>
            <img src="images/pe.jpg"></img>
          </div>
          <div className="description">
            <p>
              We provided witty props, encouraging them to take pictures and
              share their experiences on social media. Blood donors received
              refreshments, stickers, and gift hampers as tokens of
              appreciation. To maximize visibility, we placed four standees and
              a TV screen at Labim Mall, broadcasting a live summary of donation
              data on-site.
            </p>
            <img src="images/down.jpg"></img>
          </div>
          <div className="description">
            <p>
            Hamro LifeBank digitizes every step of the blood management process, from collection to supply. Donors were also sent a personalized thank-you SMS once their donated blood was utilized. The overwhelming positive feedback from donors has inspired us to continue our efforts with even greater dedication in the future. Capture the vibrant moments of our blood donation event photos. Visit our Facebook page at https://www.facebook.com/hamrolifebank to find photo.
            </p>
            <img src="images/download.jpg"></img>
          </div>
        </div>
      </div>
    </div>
  );
};
export default GiftOfLife;
