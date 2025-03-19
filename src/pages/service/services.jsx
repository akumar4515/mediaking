import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useScrollAnimation from '../ScrollAnimation'; // Import the hook
import "./services.css";

export const Services = () => {
  const navigate = useNavigate();
  const [activeFeature, setActiveFeature] = useState(null);

  // Scroll animation hooks for each section
  const [heroRef, heroVisible] = useScrollAnimation();
  const [servicesRef, servicesVisible] = useScrollAnimation();
  const [additionalServicesRef, additionalServicesVisible] = useScrollAnimation();

  // Service details (same as before)
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

  // Handle feature click to toggle description
  const handleFeatureClick = (feature) => {
    if (activeFeature === feature) {
      setActiveFeature(null); // Toggle off if the same feature is clicked again
    } else {
      setActiveFeature(feature); // Show details for clicked feature
    }
  };

  // Handle "Get Started" button click
  const handleGetStartedClick = (serviceId) => {
    navigate(`/service-detail/${serviceId}`); // Navigate to service detail page with ID
  };

  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="services-hero" ref={heroRef}>
        <div className={`hero-content ${heroVisible ? "visible" : ""}`}>
          <h1>Our Services</h1>
          <p>Expert Solutions for Digital Success</p>
        </div>
      </section>

      {/* Main Services Section */}
      <section className="main-services" ref={servicesRef}>
        <div className={`services-container ${servicesVisible ? "visible" : ""}`}>
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
              onClick={() => handleGetStartedClick(1)} // Navigate to service ID 1
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
              onClick={() => handleGetStartedClick(3)} // Navigate to service ID 3
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
              onClick={() => handleGetStartedClick(3)} // Navigate to service ID 3
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
              onClick={() => handleGetStartedClick(3)} // Navigate to service ID 3
            >
              Get Started
            </button>
          </div>
        </div>
      </section>

      {/* Additional Services Section */}
      <section className="additional-services" ref={additionalServicesRef}>
        <div className={`specialized-container ${additionalServicesVisible ? "visible" : ""}`}>
          <h2>Specialized Solutions</h2>
          <div className="specialized-grid">
            <div className="special-card">
              <h3>UI/UX Design</h3>
              <p>User-centered interface design</p>
            </div>
            <div className="special-card">
              <h3>Data Analytics</h3>
              <p>Business intelligence insights</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};