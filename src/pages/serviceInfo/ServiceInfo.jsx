import React from 'react';
import './ServiceDetail.css';
import { useParams, useNavigate } from 'react-router-dom';
import { services } from '../serviceDetail';

export const ServiceDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const service = services.find((s) => s.id === parseInt(id));

  if (!service) {
    return <div>Service not found</div>;
  }

  // Handle Enquire button click
  const handleEnquireClick = (packageName, packagePrice) => {
    navigate('/service-form', {
      state: {
        service: service.title, // Service name
        package: packageName,   // Selected package name
        price:packagePrice ,    // Selected package price
      },
    });
  };
  return (
    <div className='ser-info'>
    <div className="service-detail">
      <h1>{service.title}</h1>
      <p>{service.shortDesc}</p>

      <h2>Features</h2>
      <ul className="features-list">
        {service.features.map((feature, index) => (
          <li key={index} className="feature-item">
            <h3>{feature.name}</h3>
            <p>{feature.description}</p>
          </li>
        ))}
      </ul>

      <h2>Packages</h2>
      <div className="packages">
        {service.packages.map((pkg, index) => (
          <div key={index} className="package">
            <h3>{pkg.name}</h3>
            <p>Price: {pkg.price}</p>
            <ul>
              {pkg.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
            <button
              className="enquire-btn"
              onClick={() => handleEnquireClick(pkg.name,pkg.price)}
            >
              Enquire
            </button>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};