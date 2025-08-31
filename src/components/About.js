import React, { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  FaJs, FaReact, FaHtml5, FaCss3Alt, FaNodeJs, 
  FaGitAlt, FaGithub, FaNpm, FaDatabase 
} from 'react-icons/fa';
import { 
  SiDjango, SiAppwrite, SiVisualstudiocode 
} from 'react-icons/si';
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
    Frontend: [
      { name: 'JavaScript (ES6+)', icon: <FaJs /> },
      { name: 'React', icon: <FaReact /> },
      { name: 'HTML5', icon: <FaHtml5 /> },
      { name: 'CSS3', icon: <FaCss3Alt /> }
    ],
    Backend: [
      { name: 'Node.js', icon: <FaNodeJs /> },
      { name: 'Django', icon: <SiDjango /> },
      { name: 'REST APIs', icon: <FaDatabase /> }
    ],
    'Database & Tools': [
      { name: 'Appwrite', icon: <SiAppwrite /> }
    ],
    'Other Tools': [
      { name: 'Git', icon: <FaGitAlt /> },
      { name: 'GitHub', icon: <FaGithub /> },
      { name: 'VS Code', icon: <SiVisualstudiocode /> },
      { name: 'NPM/Yarn', icon: <FaNpm /> }
    ]
  };

  return (
    <>
      <Helmet>
        <title>About Toshit Tandon – Full-Stack Developer & AI Enthusiast</title>
        <meta name="description" content="Learn about Toshit Tandon, a BSc Data Science & AI student passionate about Web Development, Artificial Intelligence, and Blockchain. Experienced in JavaScript, React, Node.js, Python, and Django." />
      </Helmet>
      
      <section className="about section" id="about">
        <div className="container">
          <div className="about-content fade-in" ref={aboutRef}>
            <h2 className="about-title">About Me</h2>
            
            <div className="about-grid">
              <div className="about-text">
                <p>
                  I am a BSc. Data Science & AI student with a passion for building scalable, user-friendly applications. 
                  My interests lie at the intersection of Web Development, Artificial Intelligence, and Blockchain, 
                  where I continuously explore ways to combine these domains.
                </p>
                <p>
                  With hands-on experience in JavaScript, React, Node.js, Python, and Django, I am working on projects 
                  that range from simple calculators to full-fledged e-commerce platforms with Stripe and Appwrite integrations. 
                  My goal is to become a versatile full-stack developer and contribute to impactful, innovative projects.
                </p>
              </div>
            </div>
            
            {/* Skills Section */}
            <div className="skills-section">
              <h3 className="skills-title">Technical Skills</h3>
              <div className="skills-grid">
                {Object.entries(skills).map(([category, skillList]) => (
                  <div key={category} className="skill-category">
                    <h4 className="skill-category-title">{category}</h4>
                    <div className="skill-items">
                      {skillList.map((skill) => (
                        <div key={skill.name} className="skill-item">
                          <div className="skill-icon">
                            {skill.icon}
                          </div>
                          <span className="skill-name">{skill.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;