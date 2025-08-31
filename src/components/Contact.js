import React, { useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const contactRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (contactRef.current) {
      observer.observe(contactRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
    alert('Thank you for your message! I\'ll get back to you soon.');
  };

  return (
    <>
      <Helmet>
        <title>Contact Toshit Tandon | LinkedIn, GitHub, X, Email</title>
        <meta name="description" content="Get in touch with Toshit Tandon for collaboration opportunities, project discussions, or networking. Connect via LinkedIn, GitHub, X (Twitter), or email." />
      </Helmet>
      
      <section className="contact section" id="contact">
        <div className="container">
          <div className="contact-content fade-in" ref={contactRef}>
            <h2 className="contact-title">Get In Touch</h2>
            <p className="contact-subtitle">
              I'm always open to discussing new opportunities, interesting projects, and collaborations. 
              Let's connect and see how we can work together!
            </p>
            
            <div className="contact-grid">
              <div className="contact-info">
                <div className="contact-item">
                  <div className="contact-icon">
                    <FaEnvelope size={24} />
                  </div>
                  <div className="contact-details">
                    <h3>Email</h3>
                    <a href="mailto:toshittandon1@gmail.com" className="contact-link">
                      toshittandon1@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="contact-item">
                  <div className="contact-icon">
                    <FaMapMarkerAlt size={24} />
                  </div>
                  <div className="contact-details">
                    <h3>Location</h3>
                    <p>Available for Remote Work</p>
                  </div>
                </div>
                
                <div className="contact-social">
                  <h3>Connect with me</h3>
                  <div className="social-links">
                    <a 
                      href="https://github.com/toshittandon" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="social-link github"
                      aria-label="GitHub Profile"
                    >
                      <FaGithub size={24} />
                      <span>GitHub</span>
                    </a>
                    <a 
                      href="https://www.linkedin.com/in/toshit-tandon" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="social-link linkedin"
                      aria-label="LinkedIn Profile"
                    >
                      <FaLinkedin size={24} />
                      <span>LinkedIn</span>
                    </a>
                    <a 
                      href="https://x.com/toshittandon" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="social-link twitter"
                      aria-label="X (Twitter) Profile"
                    >
                      <FaTwitter size={24} />
                      <span>X (Twitter)</span>
                    </a>
                  </div>
                </div>
                
                <div className="contact-cta">
                  <a 
                    href="mailto:toshittandon1@gmail.com" 
                    className="btn btn-primary email-btn"
                  >
                    <FaEnvelope size={16} />
                    Send Email
                  </a>
                </div>
              </div>
              
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or opportunity..."
                    required
                  ></textarea>
                </div>
                
                <button type="submit" className="btn form-submit">
                  <FaEnvelope size={16} />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;