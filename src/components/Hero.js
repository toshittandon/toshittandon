import React, { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { FaGithub, FaLinkedin, FaExternalLinkAlt } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  const heroRef = useRef(null);

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

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Helmet>
        <title>Toshit Tandon | Full-Stack Developer Portfolio</title>
        <meta name="description" content="Toshit Tandon - Full-Stack Developer specializing in JavaScript, React, Python, Node.js, and Django. BSc Data Science & AI student passionate about Web Development, AI, and Blockchain." />
      </Helmet>
      
      <section className="hero" id="hero">
        <div className="hero-container">
          <div className="hero-content fade-in" ref={heroRef}>
            <h1 className="hero-title">
              Hi, I'm <span className="hero-name">Toshit Tandon</span>
            </h1>
            <p className="hero-subtitle">
              Full-Stack Developer | JavaScript • React • Python • Node.js • Django
            </p>
            
            <div className="hero-social">
              <a 
                href="https://github.com/toshittandon" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
                aria-label="GitHub Profile"
              >
                <FaGithub size={24} />
              </a>
              <a 
                href="https://www.linkedin.com/in/toshit-tandon" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedin size={24} />
              </a>
            </div>

            <div className="hero-buttons">
              <a 
                href="https://github.com/toshittandon" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn hero-cta primary"
              >
                <FaGithub size={18} />
                View My GitHub
              </a>
              <button onClick={scrollToProjects} className="btn hero-cta secondary">
                <FaExternalLinkAlt size={16} />
                View My Work
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;