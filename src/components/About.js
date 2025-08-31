import React, { useEffect, useRef } from 'react';
import './About.css';

const About = () => {
  const aboutRef = useRef(null);

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

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skills = {
    Languages: ['Python', 'JavaScript'],
    Frontend: ['React', 'HTML', 'CSS'],
    Backend: ['Django', 'Node.js', 'Express'],
    Database: ['PostgreSQL', 'MongoDB'],
    Tools: ['Git', 'Docker', 'AWS']
  };

  return (
    <section className="about section" id="about">
      <div className="container">
        <div className="about-content fade-in" ref={aboutRef}>
          <h2 className="about-title">About Me</h2>
          
          <div className="about-grid">
            <div className="about-text">
              <p>
                I'm a full-stack developer with a passion for creating intuitive and performant web applications. 
                My journey into tech started with a fascination for how things work, and it has evolved into a 
                career where I can solve real-world problems through code.
              </p>
              <p>
                I thrive in collaborative environments and am always eager to learn new technologies. 
                Whether it's building responsive frontends or architecting scalable backends, 
                I approach each project with attention to detail and a focus on user experience.
              </p>
            </div>
            
            <div className="skills-grid">
              {Object.entries(skills).map(([category, skillList]) => (
                <div key={category} className="skill-category">
                  <h3 className="skill-category-title">{category}</h3>
                  <div className="skill-tags">
                    {skillList.map((skill) => (
                      <span key={skill} className="skill-tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;