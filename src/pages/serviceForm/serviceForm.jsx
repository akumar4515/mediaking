import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './ServiceForm.css';
import fb from '../../assets/facebook.png';
import insta from '../../assets/instagram.png';
import lnkdn from '../../assets/linkedin.png';
import x from '../../assets/twitter.png';
import emailjs from '@emailjs/browser';

export const ServiceForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: location.state?.service || '', // Pre-fill service if available
    package: location.state?.package || '', // Pre-fill package if available
    price: location.state?.price || '',     // Pre-fill price if available
    message: '',
  });
  const [errors, setErrors] = useState({});


  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }
    if (!formData.service) newErrors.service = 'Service selection is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      // Submit form logic here
      console.log('Form submitted:', formData);
      navigate('/thank-you');
    } else {
      setErrors(validationErrors);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <div className="service-form-page">
      <section className="form-hero">
        <div className="hero-contentt">
          <h1>Service Request</h1>
          <p>Let us know how we can assist you</p>
        </div>
      </section>

      <section className="service-form-section" id="ser-form">
        <form onSubmit={handleSubmit} className="inquiry-form">
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={errors.name ? 'error' : ''}
            />
            {errors.name && <span className="error-message">{errors.name}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={errors.email ? 'error' : ''}
            />
            {errors.email && <span className="error-message">{errors.email}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          {/* Display Service if pre-filled */}
          {location.state?.service && (
            <div className="form-group">
              <label>Selected Service</label>
              <input
                type="text"
                value={formData.service}
                readOnly
              />
            </div>
          )}

          {/* Display Package if pre-filled */}
          {location.state?.package && (
            <div className="form-group">
              <label>Selected Package</label>
              <input
                type="text"
                value={formData.package}
                readOnly
              />
            </div>
          )}

          {/* Display Price if pre-filled */}
          {location.state.price && (
            <div className="form-group">
              <label>Price</label>
              <input
                type="text"
                value={`$${formData.price}`}  // Add $ symbol for clarity
                readOnly
              />
            </div>
          )}

          <div className="form-group">
            <label htmlFor="message">Additional Details</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              placeholder="Describe your project requirements..."
            ></textarea>
          </div>

          <button type="submit" className="submit-btn">
            Submit Inquiry
          </button>
        </form>

        {/* Contact Info */}
        <div className="contact-info">
          <h2>Get in Touch</h2>
          <div className="info-card">
            <div className="info-item">
              <div className="info-icon">📍</div>
              <div>
                <h3>Our Office</h3>
                <p>Patna, Bihar</p>
              </div>
            </div>
            <div className="info-item">
              <div className="info-icon">📞</div>
              <div>
                <h3>Phone Numbers</h3>
                <p>+91 7079367125</p>
              </div>
            </div>
            <div className="info-item">
              <div className="info-icon">✉️</div>
              <div>
                <h3>Email</h3>
                <p>{process.env.REACT_APP_COMPANY_EMAIL}</p>
              </div>
            </div>
          </div>

          <div className="social-links">
            <h3>Follow Us</h3>
            <div className="social-icons">
              <a href="#facebook">
                <div className="icon">
                  <img src={fb} alt="facebook" />
                </div>
              </a>
              <a href="#twitter">
                <div className="icon">
                  <img src={insta} alt="insta" />
                </div>
              </a>
              <a href="#linkedin">
                <div className="icon">
                  <img src={x} alt="twitter" />
                </div>
              </a>
              <a href="#instagram">
                <div className="icon">
                  <img src={lnkdn} alt="linkdin" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};