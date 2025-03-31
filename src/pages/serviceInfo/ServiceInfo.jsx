import React from 'react';
import styles from './ServiceDetail.module.css';
import { useParams, useNavigate } from 'react-router-dom';
import { services } from '../serviceDetail';
import { FaArrowRight } from 'react-icons/fa';

export const ServiceDetail = () => {
  const { s_name } = useParams();
  const navigate = useNavigate();
  const service = services.find((s) => s.s_name === s_name);

  if (!service) {
    return (
      <div className={styles.notFound}>
        <h2>Service Not Found</h2>
        <p>Oops! It seems we couldn’t find this service.</p>
        <button onClick={() => navigate('/services')} className={styles.backBtn}>
          Back to Services <FaArrowRight className={styles.backIcon} />
        </button>
      </div>
    );
  }

  const handleEnquireClick = (packageName, packagePrice) => {
    navigate('/service-form', {
      state: {
        service: service.title,
        package: packageName,
        price: packagePrice,
      },
    });
  };

  return (
    <div className={styles.serInfo}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1>{service.title}</h1>
          <p>{service.shortDesc}</p>
          <button
            className={styles.heroCta}
            onClick={() => handleEnquireClick(service.packages[0].name, service.packages[0].price)}
          >
            Get Started Now <FaArrowRight className={styles.ctaIcon} />
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className={styles.featuresSection}>
        <h2>Key Features</h2>
        <div className={styles.featuresList}>
          {service.features.map((feature, index) => (
            <div key={index} className={styles.featureCard}>
              <h3>{feature.name}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Packages Section */}
      <section className={styles.packagesSection}>
        <h2>Our Packages</h2>
        <div className={styles.packages}>
          {service.packages.map((pkg, index) => (
            <div key={index} className={styles.packageCard}>
              <div className={styles.packageHeader}>
                <h3>{pkg.name}</h3>
                <span className={styles.priceTag}>${pkg.price}</span>
              </div>
              <ul className={styles.packageFeatures}>
                {pkg.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
              <button
                className={styles.enquireBtn}
                onClick={() => handleEnquireClick(pkg.name, pkg.price)}
              >
                Enquire Now <FaArrowRight className={styles.btnIcon} />
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};