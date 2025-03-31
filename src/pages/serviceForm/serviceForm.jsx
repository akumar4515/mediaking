import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styles from './ServiceForm.module.css';
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
    service: location.state?.service || '',
    package: location.state?.package || '',
    price: location.state?.price || '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [sending, setSending] = useState(false);
  const [submitMsg, setSubmitMsg] = useState('');

  const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
  const UserTemplateID = process.env.REACT_APP_EMAILJS_USER_TEMPLATE_ID;
  const CompanyTemplateId = process.env.REACT_APP_EMAILJS_COMPANY_TEMPLATE_ID;
  const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setSending(true);
    setSubmitMsg('');

    try {
      const timestamp = new Date().toLocaleString();
      await emailjs.send(
        serviceID,
        CompanyTemplateId,
        {
          user_name: formData.name,
          user_email: formData.email,
          user_tel: formData.phone,
          user_service: formData.service,
          user_package: formData.package,
          user_price: formData.price ? `$${formData.price}` : 'Not specified',
          user_message: formData.message,
          current_timestamp: timestamp,
        },
        publicKey
      );

      await emailjs.send(
        serviceID,
        UserTemplateID,
        {
          to_email: formData.email,
          user_name: formData.name,
          message: 'Thank you for your inquiry! We’ll get back to you soon.',
        },
        publicKey
      );

      setSending(false);
      setSubmitMsg('Inquiry sent successfully!');
      navigate('/thank-you');
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: location.state?.service || '',
        package: location.state?.package || '',
        price: location.state?.price || '',
        message: '',
      });
    } catch (error) {
      console.error('Error:', error);
      setSending(false);
      setSubmitMsg('Failed to send inquiry. Please try again.');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <div className={styles.serviceFormPage}>
      {/* Hero Section */}
      <section className={styles.formHero}>
        <div className={styles.heroContent}>
          <h1>Service Request</h1>
          <p>Let us know how we can assist you</p>
        </div>
      </section>

      {/* Form Section */}
      <section className={styles.serviceFormSection} id="ser-form">
        <form onSubmit={handleSubmit} className={styles.inquiryForm}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={errors.name ? styles.error : ''}
              disabled={sending}
            />
            {errors.name && <span className={styles.errorMessage}>{errors.name}</span>}
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={errors.email ? styles.error : ''}
              disabled={sending}
            />
            {errors.email && <span className={styles.errorMessage}>{errors.email}</span>}
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              disabled={sending}
            />
          </div>

          {location.state?.service && (
            <div className={styles.formGroup}>
              <label>Selected Service</label>
              <input
                type="text"
                value={formData.service}
                readOnly
                className={styles.readOnly}
              />
            </div>
          )}

          {location.state?.package && (
            <div className={styles.formGroup}>
              <label>Selected Package</label>
              <input
                type="text"
                value={formData.package}
                readOnly
                className={styles.readOnly}
              />
            </div>
          )}

          {location.state?.price && (
            <div className={styles.formGroup}>
              <label>Price</label>
              <input
                type="text"
                value={`$${formData.price}`}
                readOnly
                className={styles.readOnly}
              />
            </div>
          )}

          <div className={styles.formGroup}>
            <label htmlFor="message">Additional Details</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              placeholder="Describe your project requirements..."
              disabled={sending}
            ></textarea>
          </div>

          <button type="submit" className={styles.submitBtn} disabled={sending}>
            {sending ? 'Submitting...' : 'Submit Inquiry'}
          </button>
          {submitMsg && <p className={styles.submitMsg}>{submitMsg}</p>}
        </form>

        {/* Contact Info */}
        <div className={styles.contactInfo}>
          <h2>Get in Touch</h2>
          <div className={styles.infoCard}>
            <div className={styles.infoItem}>
              <div className={styles.infoIcon}>📍</div>
              <div>
                <h3>Our Office</h3>
                <p>Patna, Bihar, India</p>
              </div>
            </div>
            <div className={styles.infoItem}>
              <div className={styles.infoIcon}>📞</div>
              <div>
                <h3>Phone</h3>
                <p>+91 7079367125</p>
              </div>
            </div>
            <div className={styles.infoItem}>
              <div className={styles.infoIcon}>✉️</div>
              <div>
                <h3>Email</h3>
                <p>{process.env.REACT_APP_COMPANY_EMAIL}</p>
              </div>
            </div>
          </div>

          <div className={styles.socialLinks}>
            <h3>Connect With Us</h3>
            <div className={styles.socialIcons}>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <img src={fb} alt="Facebook" className={styles.icon} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <img src={insta} alt="Instagram" className={styles.icon} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <img src={x} alt="Twitter" className={styles.icon} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <img src={lnkdn} alt="LinkedIn" className={styles.icon} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};