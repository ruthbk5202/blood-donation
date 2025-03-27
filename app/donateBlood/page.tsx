"use client";
import React from "react";
import {useRouter} from "next/navigation";
import "./donate.css";

const DonateBlood = () => {
  const router= useRouter();
  const handleUpcomingDonation=()=>{
    router.push('/upcomingdonationevent');
  }
  return (
    <div>

      <nav className="donate-blood-new">
         <h6>Donate Blood</h6>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 340">
  <path fill="#fff" fill-opacity="1" d="M0,32L80,64C160,96,320,160,480,170.7C640,181,800,139,960,122.7C1120,107,1280,117,1360,122.7L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
</svg>
      </nav>
      <div className="upcoming-description">
        <p>
        Register with us today to pledge to donate blood and we will notify you when donation events come up near your area OR let us know if you’d like to donate at a nearby blood bank.
        </p>
        <button className="upcomming-btn" onClick={handleUpcomingDonation}>Find upcoming Donation Events Here</button>
      </div>
    <div className="donate-blood-container">
      <div className="denote-blood-form-container">
        <div className="denote-blood-form-loop-container">
          <div className="img-hamro-life">
            <div>
            <img
              src="https://hamrolifebank.com/contactform_external/images/New%20Project.png"
              alt="Donate Blood"
            />
            </div>
          </div>
          <form className="form-details">
            <h1>Please send us your details</h1>

            <div className="form-group">
              <label>Name</label>
              <input type="text" id="name" placeholder="Enter your name" />
            </div>
            <div className="form-group">
              <label>Date of Birth</label>
              <input type="date" id="dob" placeholder="Date of Birth" />
            </div>

            <div className="form-group">
              <label>Phone Number</label>
              <input type="text" id="phone" placeholder="Phone" />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" id="email" placeholder="Enter your email" />
            </div>
            <div className="form-group">
              <select id="gender" className="form-input">
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="form-group">
              <select id="blood-group" className="form-input">
                <option value="">Select Blood Group</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
              </select>
            </div>

            <div className="form-group">
              <input type="text" id="address" placeholder="Address" />
            </div>

            <div className="submit-button-container">
              <button type="submit" className="submit-button">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
};

export default DonateBlood;
