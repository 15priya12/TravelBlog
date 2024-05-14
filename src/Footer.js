import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className="main-content" style={{ marginTop: '130px' }}>
      {/* Your main content */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-section">
            <h3>TravelBuddy</h3>
            <p>Trusted travel companions since 1997.</p>
          </div>
          <div className="footer-section">
            <h3>TravelTalks &copy;</h3>
          </div>
          <div className="footer-section">
            <h3>Assistance</h3>
            <ul>
              <li>Support Center</li>
              <li>Client Care</li>
              <li>User Manuals</li>
              <li>Get in Touch</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
