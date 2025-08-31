import React from 'react';
import { FaGithub, FaLinkedin, FaHeart } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-info">
            <h3 className="footer-name">Toshit Tandon</h3>
            <p className="footer-tagline">Full-Stack Developer</p>
          </div>
          
          <div className="footer-social">
            <a 
              href="https://github.com/toshittandon" 
              target="_blank" 
              rel="noopener noreferrer"
              className="footer-social-link"
              aria-label="GitHub Profile"
            >
              <FaGithub size={24} />
            </a>
            <a 
              href="https://www.linkedin.com/in/toshit-tandon" 
              target="_blank" 
              rel="noopener noreferrer"
              className="footer-social-link"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p className="footer-copyright">
            © {new Date().getFullYear()} Toshit Tandon. Built with <FaHeart className="heart-icon" /> using React.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;