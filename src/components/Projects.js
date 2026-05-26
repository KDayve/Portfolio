import React from 'react';

export default function Projects() {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A fully functional online storefront featuring cart management, secure checkout, and user authentication.',
      tags: ['React', 'Node.js', 'Vanilla CSS', 'MongoDB'],
    },
    {
      title: 'Task Management Dashboard',
      description: 'An interactive kanban-style project board complete with drag-and-drop mechanics and team collaboration spaces.',
      tags: ['React', 'TypeScript', 'CSS Grid', 'Firebase'],
    },
    {
      title: 'AI Image Generator',
      description: 'A web app connected to generative AI models that lets users create, share, and downscale unique visual concepts.',
      tags: ['React', 'Next.js', 'Custom UI', 'OpenAI API'],
    },
  ];

  return (
    <section id="projects" className="section-padding">
      <div className="section-title-wrapper">
        <h2 className="section-title">02. Things I've Built</h2>
        <div className="section-line"></div>
      </div>

      <div className="section-center-content projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div>
              <div className="card-top">
                <svg className="folder-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                </svg>
                <div className="card-links">
                  <a href="#github">📁</a>
                  <a href="#live">🔗</a>
                </div>
              </div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>
            </div>
            <div className="project-tags">
              {project.tags.map((tag, i) => (
                <span key={i} className="tag">{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}