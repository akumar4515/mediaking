import React from 'react';
import { useNavigate } from 'react-router-dom';
import useScrollAnimation from '../ScrollAnimation';
import "./services.css";

export const Services = () => {
  const navigate = useNavigate();
  
  // Scroll animation hooks
  const [heroRef, heroVisible] = useScrollAnimation();
  const [marketingRef, marketingVisible] = useScrollAnimation();
  const [servicesRef, servicesVisible] = useScrollAnimation();
  const [additionalServicesRef, additionalServicesVisible] = useScrollAnimation();

  // Main services data
  const mainServices = [
    {
      id: 1,
      title: "Web Development",
      icon: "🌐",
      features: [
        "Custom website development",
        "Responsive design",
        "CMS integration (WordPress, Shopify)",
        "E-commerce solutions",
        "Website maintenance"
      ]
    },
    {
      id: 2,
      title: "App Development",
      icon: "📱",
      features: [
        "iOS & Android apps",
        "Cross-platform development",
        "UI/UX design",
        "API integration",
        "App store deployment"
      ]
    },
    {
      id: 3,
      title: "SEO Optimization",
      icon: "🔍",
      features: [
        "Keyword research",
        "On-page SEO",
        "Technical SEO audits",
        "Backlink building",
        "Rank tracking"
      ]
    }
  ];

  // Digital Marketing Services
  const digitalMarketingServices = [
    {
      id: 4,
      title: "Social Media Marketing (SMM)",
      icon: "💬",
      features: [
        "Content strategy",
        "Platform management",
        "Influencer collaborations",
        "Audience engagement",
        "Analytics & reporting"
      ]
    },
    {
      id: 5,
      title: "PPC Advertising",
      icon: "📈",
      features: [
        "Google Ads management",
        "Facebook/Instagram ads",
        "Campaign optimization",
        "Conversion tracking",
        "ROI analysis"
      ]
    },
    {
      id: 6,
      title: "E-Commerce Marketing",
      icon: "🛒",
      features: [
        "Marketplace optimization",
        "Product listing ads",
        "Shopping campaigns",
        "Review management",
        "Cart abandonment solutions"
      ]
    }
  ];

  // Content & Branding Services
  const contentServices = [
    {
      id: 7,
      title: "Content Creation",
      icon: "✍️",
      features: [
        "Blog writing",
        "Video production",
        "Infographics",
        "Email newsletters",
        "Social media content"
      ]
    },
    {
      id: 8,
      title: "Branding & Reputation",
      icon: "🏅",
      features: [
        "Brand strategy",
        "Logo design",
        "Style guides",
        "Online reputation management",
        "Crisis communication"
      ]
    },
    {
      id: 9,
      title: "Software Development",
      icon: "💻",
      features: [
        "Custom software solutions",
        "SaaS development",
        "API development",
        "Cloud integration",
        "DevOps services"
      ]
    }
  ];

  const handleGetStartedClick = (serviceId) => {
    navigate(`/service-detail/${serviceId}`);
  };

  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="services-hero" ref={heroRef}>
        <div className={`hero-content ${heroVisible ? "visible" : ""}`}>
          <h1>Digital Transformation Services</h1>
          <p>End-to-End Solutions for Modern Businesses</p>
        </div>
      </section>

      {/* Main Development Services */}
      <section className="main-services" ref={servicesRef}>
        <div className={`services-container ${servicesVisible ? "visible" : ""}`}>
          <h2>Development Services</h2>
          <div className="services-grid">
            {mainServices.map((service) => (
              <div key={service.id} className="service-card">
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <ul className="service-features">
                  {service.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
                <button
                  className="service-cta"
                  onClick={() => handleGetStartedClick(service.id)}
                >
                  Start Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

    

      {/* marketing services */}
      <section className="marketing-services" ref={marketingRef}>
        <div className={`services-container ${marketingVisible ? "visible" : ""}`}>
          <h2>Digital Marketing Solutions</h2>
          <div className="services-grid">
            {digitalMarketingServices.map((service) => (
              <div key={service.id} className="service-card">
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <ul className="service-features">
                  {service.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
                <button
                  className="service-cta"
                  onClick={() => handleGetStartedClick(service.id)}
                >
                  Start Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="content-services" ref={additionalServicesRef}>
        <div className={`services-container ${additionalServicesVisible ? "visible" : ""}`}>
          <h2>Content & Brand Management</h2>
          <div className="services-grid">
            {contentServices.map((service) => (
              <div key={service.id} className="service-card">
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <ul className="service-features">
                  {service.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
                <button
                  className="service-cta"
                  onClick={() => handleGetStartedClick(service.id)}
                >
                  Start Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};