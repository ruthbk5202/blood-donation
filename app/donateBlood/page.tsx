"use client";
import React from "react";
import "./donate.css";

const DonateBlood = () => {
  return (
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
              <input type="text" id="name" placeholder="Enter your name" />
            </div>
            <div className="form-group">
              <input type="date" id="dob" placeholder="Date of Birth" />
            </div>

            <div className="form-group">
              <input type="text" id="phone" placeholder="Phone" />
            </div>
            <div className="form-group">
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
  );
};

export default DonateBlood;
