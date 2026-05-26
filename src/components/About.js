import React from 'react';

export default function About() {
  const skills = [
    'JavaScript (ES6+)', 'React.js', 'Node.js', 
    'CSS3 / HTML5', 'TypeScript', 'Next.js', 
    'Git & GitHub', 'RESTful APIs'
  ];

  return (
    <section id="about" className="section-padding">
      <div className="section-title-wrapper">
        <h2 className="section-title">01. About Me</h2>
        <div className="section-line"></div>
      </div>

      <div className="section-center-content about-grid">
        <div className="about-text">
          <p>
            Hello! My passion for web development started back in 2020 when I decided to try editing custom website templates — turns out hacking together a simple button taught me a lot about HTML & CSS!
          </p>
          <p>
            Fast-forward to today, and I've had the privilege of building software for a digital agency, a start-up, and various freelance clients. My main focus these days is building accessible, inclusive products and digital experiences.
          </p>
          <p>Here are a few technologies I've been working with recently:</p>
          <ul className="skills-list">
            {skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>

        <div className="about-image-wrapper">
          <div className="image-frame-decor"></div>
          <div className="image-card">
            <div className="image-avatar-box">
              <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <h3>Dave</h3>
            <p>Front end Developer</p>
          </div>
        </div>
      </div>
    </section>
  );
}