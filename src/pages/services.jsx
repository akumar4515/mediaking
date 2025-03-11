import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../css/services.css";

export const Services = () => {
  const navigate = useNavigate();

  // State to manage the visibility of feature details
  const [activeFeature, setActiveFeature] = useState(null);

  // Service details
  const serviceDetails = {
    "Website Development": "Website development involves creating websites from scratch, ensuring they are functional, user-friendly, and responsive.",
    "SEO Optimization": "SEO Optimization improves your website's visibility on search engines, driving more organic traffic to your site.",
    "Digital Marketing": "Digital marketing strategies like SEO, PPC, social media marketing, and content marketing help you reach and engage your audience online.",
    "Graphic Design": "Graphic design services involve creating visual content such as logos, branding, brochures, and website designs to communicate your brand.",
    "Content Creation": "Content creation includes writing blog posts, designing infographics, and creating multimedia content that engages your audience.",
    "Social Media Marketing": "Social media marketing helps you build your brand's presence on platforms like Facebook, Instagram, and LinkedIn, engaging your audience.",
    "App Development": "App development services for both iOS and Android platforms, providing custom solutions tailored to your business needs.",
    "E-Commerce Solutions": "E-commerce solutions include building and maintaining online stores, offering product management and secure payment gateways.",
    "Branding & Reputation Management": "Branding & Reputation Management involves developing a strong brand identity and managing your brand's online reputation.",
    "PPC Advertising": "PPC (Pay-Per-Click) advertising involves paid advertisements that drive traffic to your website through paid search engine ads.",
    "E-Commerce & Marketplace Marketing": "E-Commerce & Marketplace Marketing involves advertising and optimizing your presence on e-commerce platforms like Amazon, eBay, and Shopify.",
  };

  // Function to handle feature click
  const handleFeatureClick = (feature) => {
    if (activeFeature === feature) {
      setActiveFeature(null); // Toggle off if the same feature is clicked again
    } else {
      setActiveFeature(feature); // Show details for clicked feature
    }
  };

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
          {/* Website Development */}
          <div className="service-card">
            <div className="service-icon">🖥️</div>
            <h2>Website Development</h2>
            <ul className="service-features">
              {["Website Development", "E-Commerce Solutions", "App Development"].map((feature) => (
                <li
                  key={feature}
                  onClick={() => handleFeatureClick(feature)}
                  className={activeFeature === feature ? 'active-feature' : ''}
                  style={{ cursor: 'pointer' }}
                >
                  {feature}
                  {activeFeature === feature && (
                    <p className={activeFeature === feature ? 'active-description' : ''}>
                      {serviceDetails[feature]}
                    </p>
                  )}
                </li>
              ))}
            </ul>
            <button 
              className="service-cta"
              onClick={() => navigate('/service-form')}
            >
              Get Started
            </button>
          </div>

          {/* Graphic Design */}
          <div className="service-card">
            <div className="service-icon">📱</div>
            <h2>Graphic Designing</h2>
            <ul className="service-features">
              {["Graphic Design", "Branding & Reputation Management"].map((feature) => (
                <li
                  key={feature}
                  onClick={() => handleFeatureClick(feature)}
                  className={activeFeature === feature ? 'active-feature' : ''}
                  style={{ cursor: 'pointer' }}
                >
                  {feature}
                  {activeFeature === feature && (
                    <p className={activeFeature === feature ? 'active-description' : ''}>
                      {serviceDetails[feature]}
                    </p>
                  )}
                </li>
              ))}
            </ul>
            <button 
              className="service-cta"
              onClick={() => navigate('/service-form')}
            >
              Get Started
            </button>
          </div>

          {/* Digital Marketing */}
          <div className="service-card">
            <div className="service-icon">📈</div>
            <h2>Digital Marketing</h2>
            <ul className="service-features">
              {["Digital Marketing", "SEO Optimization", "Social Media Marketing", "PPC Advertising"].map((feature) => (
                <li
                  key={feature}
                  onClick={() => handleFeatureClick(feature)}
                  className={activeFeature === feature ? 'active-feature' : ''}
                  style={{ cursor: 'pointer' }}
                >
                  {feature}
                  {activeFeature === feature && (
                    <p className={activeFeature === feature ? 'active-description' : ''}>
                      {serviceDetails[feature]}
                    </p>
                  )}
                </li>
              ))}
            </ul>
            <button 
              className="service-cta"
              onClick={() => navigate('/service-form')}
            >
              Get Started
            </button>
          </div>

          {/* Content Creation */}
          <div className="service-card">
            <div className="service-icon">☁️</div>
            <h2>Content Creation</h2>
            <ul className="service-features">
              {["Content Creation", "E-Commerce & Marketplace Marketing"].map((feature) => (
                <li
                  key={feature}
                  onClick={() => handleFeatureClick(feature)}
                  className={activeFeature === feature ? 'active-feature' : ''}
                  style={{ cursor: 'pointer' }}
                >
                  {feature}
                  {activeFeature === feature && (
                    <p className={activeFeature === feature ? 'active-description' : ''}>
                      {serviceDetails[feature]}
                    </p>
                  )}
                </li>
              ))}
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
            <h3>Data Analytics</h3>
            <p>Business intelligence insights</p>
          </div>
        </div>
      </section>
    </div>
  );
};
