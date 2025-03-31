import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import fb from '../../assets/facebook.png';
import insta from '../../assets/instagram.png';
import lnkdn from '../../assets/linkedin.png';
import x from '../../assets/twitter.png';
import useScrollAnimation from '../ScrollAnimation';
import styles from './contact.module.css';

export const Contact = () => {
  const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
  const UserTemplateID = process.env.REACT_APP_EMAILJS_USER_TEMPLATE_ID;
  const CompanyTemplateId = process.env.REACT_APP_EMAILJS_COMPANY_TEMPLATE_ID;
  const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;
  const navigate = useNavigate();

  const [heroRef, heroVisible] = useScrollAnimation();
  const [contactRef, contactVisible] = useScrollAnimation();
  const [mapRef, mapVisible] = useScrollAnimation();

  const [submitMsg, setSubmitMsg] = useState("");
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setSubmitMsg("");
    try {
      const timestamp = new Date().toLocaleString();
      await emailjs.send(
        serviceID,
        CompanyTemplateId,
        {
          user_name: e.target.user_name.value,
          user_email: e.target.user_email.value,
          user_tel: e.target.user_tel.value,
          user_message: e.target.user_message.value,
          current_timestamp: timestamp,
        },
        publicKey
      );
      const userEmail = e.target.user_email.value;
      await emailjs.send(
        serviceID,
        UserTemplateID,
        {
          to_email: userEmail,
          user_name: e.target.user_name.value,
          message: 'Thank you for contacting us!',
        },
        publicKey
      );
      setSending(false);
      navigate('/thankyou');
      e.target.reset(); // Reset form fields
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to send message');
      setSending(false);
    }
  };

  return (
    <div className={styles.contactPage} id="contact">
      {/* Hero Section */}
      <section className={styles.contactHero} ref={heroRef}>
        <div className={`${styles.heroContent} ${heroVisible ? styles.visible : ''}`}>
          <h1>Contact Us</h1>
          <p>Let’s Kickstart Your Digital Journey</p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className={styles.mainContact} ref={contactRef}>
        <div className={`${styles.contactContainer} ${contactVisible ? styles.visible : ''}`}>
          {/* Contact Form */}
          <div className={styles.contactForm}>
            <h2>Send Us a Message</h2>
            <form onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <input type="text" name="user_name" placeholder="Your Name" required />
              </div>
              <div className={styles.formGroup}>
                <input type="email" name="user_email" placeholder="Your Email" required />
              </div>
              <div className={styles.formGroup}>
                <input type="tel" name="user_tel" placeholder="Phone Number" />
              </div>
              <div className={styles.formGroup}>
                <textarea placeholder="Your Message" name="user_message" rows="5" required></textarea>
              </div>
              <button type="submit" className={styles.submitBtn}>
                {sending ? "Sending..." : "Send Message"}
              </button>
              <p className={styles.submitMsg}>{submitMsg}</p>
            </form>
          </div>

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
        </div>
      </section>

      {/* Map Section */}
      <section className={styles.mapSection} ref={mapRef}>
        <div className={`${styles.mapContainer} ${mapVisible ? styles.visible : ''}`}>
          <iframe
            title="Office Location - Patna, Bihar"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115183.25614359207!2d85.05198186936033!3d25.60829510000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f29937c6070ed1%3A0x424567373dded3e!2sPatna%2C%20Bihar!5e0!3m2!1sen!2sin!4v1698765432100!5m2!1sen!2sin"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </section>
    </div>
  );
};