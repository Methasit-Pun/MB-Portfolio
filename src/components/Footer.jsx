import './123.css';
import React from 'react'; // Ensure you import the CSS file here

const Footer = () => (
  <footer className="footer">
    <div className="footer-content">
      <p>&copy; 2024 MB Company</p>
      <p>Contact Us: methasit@gmail.com</p>
      <div className="social-links">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
    </div>
  </footer>
);

export default Footer;
