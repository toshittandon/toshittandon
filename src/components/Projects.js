import React, { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const projectsRef = useRef(null);

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

    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      id: 1,
      title: 'EssencePura – E-commerce Website',
      description: 'A minimalistic e-commerce platform for organic cosmetics. Features cart, checkout, Stripe payments, and user/product management via Appwrite. Built with modern React patterns and responsive design.',
      technologies: ['React', 'Node.js', 'Stripe', 'Appwrite', 'CSS3'],
      githubUrl: 'https://github.com/toshittandon/essencepura',
      liveUrl: 'https://essencepura.com', // Add if deployed
      image: '/ecomweb.jpg'
    },
    {
      id: 2,
      title: 'Job Application Tracker',
      description: 'A simple but efficient job application tracker built to help users manage their job applications effectively. Features include application status tracking, company information storage, and deadline reminders.',
      technologies: ['React', 'JavaScript', 'CSS3', 'ES6+'],
      githubUrl: 'https://github.com/toshittandon/job-application-tracker', // Update with actual repo if available
      liveUrl: 'https://job-application-tracker-opal-nine.vercel.app', // Add if deployed
      image: '/jobapp.jpg'
    },
    {
      id: 3,
      title: 'Portfolio Website',
      description: 'This portfolio itself, designed to showcase my skills, projects, and journey as a developer. Fully responsive with dark/light mode toggle and SEO optimization. Built with modern React and clean CSS.',
      technologies: ['React', 'CSS3', 'JavaScript', 'SEO', 'Responsive Design'],
      githubUrl: 'https://github.com/toshittandon/toshittandon',
      liveUrl: 'https://www.toshittandon.me',
      image: '/portfolio.jpg' // Using favicon as placeholder until portfolio image is added
    },
    {
      id: 4,
      title: 'PrepXL - Interview Practice Platform',
      description: 'A platform designed to help users prepare for interviews through practice questions, mock interviews, and performance analytics. Built with a focus on user experience and effective learning.',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'CSS3'],
      githubUrl: 'https://github.com/toshittandon/prepxl',
      liveUrl: null,
      image: '/prepxl.jpg'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Projects by Toshit Tandon | React, Node.js, Django</title>
        <meta name="description" content="Explore projects by Toshit Tandon including EssencePura e-commerce platform, Calculator App, and Portfolio Website. Built with React, Node.js, Django, and modern web technologies." />
      </Helmet>
      
      <section className="projects section" id="projects">
        <div className="container">
          <div className="projects-content fade-in" ref={projectsRef}>
            <h2 className="projects-title">Featured Projects</h2>
            <p className="projects-subtitle">
              Here are some of my recent projects that showcase my skills and experience in full-stack development.
            </p>
            
            <div className="projects-grid">
              {projects.map((project) => (
                <div key={project.id} className="project-card">
                  <div className="project-image">
                    <img src={project.image} alt={project.title} />
                    <div className="project-overlay">
                      <div className="project-links">
                        <a 
                          href={project.githubUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="project-link"
                          aria-label="View source code"
                        >
                          <FaGithub size={20} />
                        </a>
                        {project.liveUrl && (
                          <a 
                            href={project.liveUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="project-link"
                            aria-label="View live demo"
                          >
                            <FaExternalLinkAlt size={18} />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  <div className="project-content">
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-description">{project.description}</p>
                    
                    <div className="project-technologies">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="project-actions">
                      <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="btn btn-outline"
                      >
                        <FaGithub size={16} />
                        View Code
                      </a>
                      {project.liveUrl && (
                        <a 
                          href={project.liveUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="btn btn-primary"
                        >
                          <FaExternalLinkAlt size={14} />
                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;