import React from 'react';

export default function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-content">
        <p className="hero-mono">Hi, my name is</p>
        <h1 className="hero-title"> David.</h1>
        <h2 className="hero-subtitle">I build web applications.</h2>
        <p className="hero-desc">
          I'm a front-end software engineer specializing in building exceptional digital experiences. 
          Currently, I'm focused on crafting clean, accessible, and user-centric web products.
        </p>
        <div className="btn-group">
          <a href="#projects" className="btn-primary">View My Work</a>
          <a href="#contact" className="btn-secondary">Get In Touch</a>
        </div>
      </div>
    </section>
  );
}