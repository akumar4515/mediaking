import React from 'react';
import { useNavigate } from 'react-router-dom';
import useScrollAnimation from '../ScrollAnimation';
import styles from "./services.module.css";

export const Services = () => {
  const navigate = useNavigate();

  const [heroRef, heroVisible] = useScrollAnimation();
  const [marketingRef, marketingVisible] = useScrollAnimation();
  const [servicesRef, servicesVisible] = useScrollAnimation();
  const [additionalServicesRef, additionalServicesVisible] = useScrollAnimation();

  const mainServices = [
    {
      s_name: "web-development",
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
      s_name: "app-development",
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
      s_name: "seo-optimization",
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

  const digitalMarketingServices = [
    {
      s_name: "social-media-marketing",
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
      s_name: "ppc-advertising",
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
      s_name: "ecommerce-marketing",
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

  const contentServices = [
    {
      s_name: "content-creation",
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
      s_name: "branding-reputation",
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
      s_name: "software-development",
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

  const handleGetStartedClick = (serviceSlug) => {
    if (!serviceSlug) {
      console.error("Missing service slug");
      return;
    }
    navigate(`/service-detail/${serviceSlug}`);
  };

  return (
    <div className={styles.servicesPage}>
      {/* Hero Section */}
      <section className={styles.servicesHero} ref={heroRef}>
        <div className={`${styles.heroContent} ${heroVisible ? styles.visible : ""}`}>
          <h1>Digital Transformation Services</h1>
          <p>End-to-End Solutions for Modern Businesses</p>
        </div>
      </section>

      {/* Main Development Services */}
      <section className={styles.mainServices} ref={servicesRef}>
        <div className={`${styles.servicesContainer} ${servicesVisible ? styles.visible : ""}`}>
          <h2>Development Services</h2>
          <div className={styles.servicesGrid}>
            {mainServices.map((service) => (
              <div key={service.s_name} className={styles.serviceCard}>
                <div className={styles.serviceIcon}>{service.icon}</div>
                <h3>{service.title}</h3>
                <ul className={styles.serviceFeatures}>
                  {service.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
                <button
                  className={styles.serviceCta}
                  onClick={() => handleGetStartedClick(service.s_name)}
                  aria-label={`Get started with ${service.title}`}
                >
                  Start Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Marketing Services */}
      <section className={styles.marketingServices} ref={marketingRef}>
        <div className={`${styles.servicesContainer} ${marketingVisible ? styles.visible : ""}`}>
          <h2>Digital Marketing Solutions</h2>
          <div className={styles.servicesGrid}>
            {digitalMarketingServices.map((service) => (
              <div key={service.s_name} className={styles.serviceCard}>
                <div className={styles.serviceIcon}>{service.icon}</div>
                <h3>{service.title}</h3>
                <ul className={styles.serviceFeatures}>
                  {service.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
                <button
                  className={styles.serviceCta}
                  onClick={() => handleGetStartedClick(service.s_name)}
                  aria-label={`Get started with ${service.title}`}
                >
                  Start Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Services */}
      <section className={styles.contentServices} ref={additionalServicesRef}>
        <div className={`${styles.servicesContainer} ${additionalServicesVisible ? styles.visible : ""}`}>
          <h2>Content & Brand Management</h2>
          <div className={styles.servicesGrid}>
            {contentServices.map((service) => (
              <div key={service.s_name} className={styles.serviceCard}>
                <div className={styles.serviceIcon}>{service.icon}</div>
                <h3>{service.title}</h3>
                <ul className={styles.serviceFeatures}>
                  {service.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
                <button
                  className={styles.serviceCta}
                  onClick={() => handleGetStartedClick(service.s_name)}
                  aria-label={`Get started with ${service.title}`}
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