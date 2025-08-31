import React, { useEffect, useRef } from 'react';
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
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution built with React and Django. Features include user authentication, product catalog, shopping cart, and payment integration.',
      technologies: ['React', 'Django', 'PostgreSQL', 'Stripe API'],
      githubUrl: 'https://github.com/yourusername/ecommerce-platform',
      liveUrl: 'https://your-ecommerce-demo.com',
      image: '/api/placeholder/400/250'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates. Users can create projects, assign tasks, and track progress with an intuitive dashboard.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
      githubUrl: 'https://github.com/yourusername/task-manager',
      liveUrl: 'https://your-taskmanager-demo.com',
      image: '/api/placeholder/400/250'
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'A responsive weather application that provides current conditions and forecasts. Features location-based weather data and interactive charts.',
      technologies: ['JavaScript', 'Chart.js', 'OpenWeather API', 'CSS Grid'],
      githubUrl: 'https://github.com/yourusername/weather-dashboard',
      liveUrl: 'https://your-weather-demo.com',
      image: '/api/placeholder/400/250'
    }
  ];

  return (
    <section className="projects section" id="projects">
      <div className="container">
        <div className="projects-content fade-in" ref={projectsRef}>
          <h2 className="projects-title">Featured Projects</h2>
          <p className="projects-subtitle">
            Here are some of my recent projects that showcase my skills and experience.
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
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                      </a>
                      <a 
                        href={project.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="project-link"
                        aria-label="View live demo"
                      >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                          <polyline points="15,3 21,3 21,9"/>
                          <line x1="10" y1="14" x2="21" y2="3"/>
                        </svg>
                      </a>
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
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;