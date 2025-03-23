"use client";
import React, { useState } from 'react';
import { FaMapMarkerAlt, FaPhone, FaClock, FaEnvelope, FaPaperPlane } from 'react-icons/fa';
import "./time.css";

const ContactForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle form submission
    console.log({ name, email, phone, message });
  };

  return (
    <div>
       <nav className='contact-nav'>
        <h6>Contact</h6>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#fff" fillOpacity="1" d="M0,32L80,64C160,96,320,160,480,170.7C640,181,800,139,960,122.7C1120,107,1280,117,1360,122.7L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
        </svg>
      </nav> 
      <div className="contact-form-container">
        <h2>Get in Touch</h2>
        <div className="contact-info">
          <p><FaMapMarkerAlt className="icon" /> <strong>Kupondole-01</strong></p>
          <p>Lalitpur, Nepal</p>
          <p><FaPhone className="icon" /><strong>+977 9801230045</strong></p>
          <p><FaClock className="icon" />Monday to Friday 9am to 6pm</p>
          <p><FaEnvelope className="icon" /><strong>team@hamrollfebank.com</strong></p>
          <p>Send us your query anytime!</p>
        </div>
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label>Enter your name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Enter email address:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Enter phone:</label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Enter Message:</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="submit-button">Send</button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;