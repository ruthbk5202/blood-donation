import React from 'react';
import './footer.css'; // Import the CSS file

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className='description-section'>
        
        Rumsan is a diversified multi-business company. We are committed to supporting promising start-ups and investing in digital innovation.
        </div>
        <div className="footer-section">
         
          <h3 className="footer-heading">Contact Info</h3>
          <p className="footer-text">Email: info@example.com</p>
          <p className="footer-text">Phone: +1 (123) 456-7890</p>
          <p className="footer-text">Address: 123 Main St, City, Country</p>
        </div>

        <div className="footer-section">
        
          <h3 className="footer-heading">Newsletter</h3>
          <p className="footer-text">Subscribe to our newsletter for updates.</p>
          <form className="newsletter-form">
            <input
              type="email"
              placeholder="Enter your email"
              className="newsletter-input"
            />
            <button type="submit" className="newsletter-button">
              Subscribe
            </button>
          </form>
        </div>

        <div className="footer-section">
        
          <h3 className="footer-heading">Follow Us</h3>
          <div className="social-links">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              Facebook
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              Twitter
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>

      
      <div className="copyright-section">
        <p className="copyright-text">
          &copy; {new Date().getFullYear()} Your Company. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;