import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../css/services.css";

export const Services = () => {
  const navigate = useNavigate();

  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="services-hero">
        <div className="hero-content">
          <h1>Our Services</h1>
          <p>Expert Solutions for Digital Success</p>
        </div>
      </section>

      {/* Main Services Section */}
      <section className="main-services">
        <div className="services-container">
          <div className="service-card">
            <div className="service-icon">🖥️</div>
            <h2>Web Development</h2>
            <ul className="service-features">
              <li>Custom Website Design</li>
              <li>E-Commerce Solutions</li>
              <li>CMS Integration</li>
              <li>API Development</li>
            </ul>
            <button 
              className="service-cta"
              onClick={() => navigate('/service-form')}
            >
              Get Started
            </button>
          </div>

          <div className="service-card">
            <div className="service-icon">📱</div>
            <h2>Mobile App Development</h2>
            <ul className="service-features">
              <li>iOS & Android Apps</li>
              <li>Cross-Platform Solutions</li>
              <li>UI/UX Design</li>
              <li>App Maintenance</li>
            </ul>
            <button 
              className="service-cta"
              onClick={() => navigate('/service-form')}
            >
              Get Started
            </button>
          </div>

          <div className="service-card">
            <div className="service-icon">📈</div>
            <h2>Digital Marketing</h2>
            <ul className="service-features">
              <li>SEO Optimization</li>
              <li>Social Media Management</li>
              <li>PPC Advertising</li>
              <li>Content Strategy</li>
            </ul>
            <button 
              className="service-cta"
              onClick={() => navigate('/service-form')}
            >
              Get Started
            </button>
          </div>

          <div className="service-card">
            <div className="service-icon">☁️</div>
            <h2>Cloud Solutions</h2>
            <ul className="service-features">
              <li>Cloud Migration</li>
              <li>Server Management</li>
              <li>Data Security</li>
              <li>24/7 Monitoring</li>
            </ul>
            <button 
              className="service-cta"
              onClick={() => navigate('/service-form')}
            >
              Get Started
            </button>
          </div>
        </div>
      </section>

      {/* Additional Services Section */}
      <section className="additional-services">
        <h2>Specialized Solutions</h2>
        <div className="specialized-container">
          <div className="special-card">
            <h3>UI/UX Design</h3>
            <p>User-centered interface design</p>
          </div>
          <div className="special-card">
            <h3>Brand Strategy</h3>
            <p>Comprehensive branding solutions</p>
          </div>
          <div className="special-card">
            <h3>Data Analytics</h3>
            <p>Business intelligence insights</p>
          </div>
        </div>
      </section>
    </div>
  );
};