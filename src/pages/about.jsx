import React from 'react';
import '../css/about.css';
import aboutBg from '../assets/about.png';

export const About = () => {
  return (
    <div className="about-page" id='about'>
      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero-content">
          <h1>About Mediaking</h1>
          <p>Pioneering Digital Excellence Since 2020</p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="our-story">
        <div className="section-container">
          <div className="text-content">
            <h2>Our Journey</h2>
            <p className="highlight-text">
              From humble beginnings to industry leaders - our story of innovation and growth.
            </p>
            <div className="story-details">
              <p>
                Founded in 2020 by a team of digital enthusiasts, Mediaking started as a small startup 
                with big dreams. What began as a three-person operation has 
                blossomed into a full-service digital agency serving clients globally.
              </p>
            </div>
          </div>
          <div className="image-content">
            <div className="timeline-card">
              <div className="milestone">
                <h3>2020</h3>
                <p>Company Founded</p>
              </div>
              <div className="milestone">
                <h3>2022</h3>
                <p>Launched Analytics Platform</p>
              </div>
              <div className="milestone">
                <h3>2023</h3>
                <p>Global Expansion</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <div className="mission-container">
          <div className="mission-card">
            <div className="icon-box">🎯</div>
            <h3>Our Mission</h3>
            <p>
              Empower businesses through innovative digital solutions that drive 
              measurable results and sustainable growth.
            </p>
          </div>
          
          <div className="mission-card">
            <div className="icon-box">👁️</div>
            <h3>Our Vision</h3>
            <p>
              To be the global leader in transformative digital experiences that 
              redefine industry standards.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <h2>Core Values</h2>
        <div className="values-container">
          <div className="value-card">
            <h4>Innovation</h4>
            <p>Constantly pushing boundaries in digital technology</p>
          </div>
          <div className="value-card">
            <h4>Integrity</h4>
            <p>Ethical practices in all our operations</p>
          </div>
          <div className="value-card">
            <h4>Client-Centric</h4>
            <p>Tailored solutions for unique needs</p>
          </div>
          <div className="value-card">
            <h4>Excellence</h4>
            <p>Commitment to superior quality in every project</p>
          </div>
        </div>
      </section>
    </div>
  );
};