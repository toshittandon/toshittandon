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
      liveUrl: null, // Add if deployed
      image: 'https://via.placeholder.com/400x250/3b82f6/ffffff?text=EssencePura+E-commerce'
    },
    {
      id: 2,
      title: 'Calculator App',
      description: 'A simple but efficient calculator app built to strengthen understanding of JavaScript modules and React state management. Features clean UI, keyboard support, and mathematical operations.',
      technologies: ['React', 'JavaScript', 'CSS3', 'ES6+'],
      githubUrl: 'https://github.com/toshittandon/calculator-app', // Update with actual repo if available
      liveUrl: null, // Add if deployed
      image: 'https://via.placeholder.com/400x250/10b981/ffffff?text=Calculator+App'
    },
    {
      id: 3,
      title: 'Portfolio Website',
      description: 'This portfolio itself, designed to showcase my skills, projects, and journey as a developer. Fully responsive with dark/light mode toggle and SEO optimization. Built with modern React and clean CSS.',
      technologies: ['React', 'CSS3', 'JavaScript', 'SEO', 'Responsive Design'],
      githubUrl: 'https://github.com/toshittandon/toshittandon',
      liveUrl: 'https://toshittandon.github.io/toshittandon/',
      image: 'https://via.placeholder.com/400x250/8b5cf6/ffffff?text=Portfolio+Website'
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