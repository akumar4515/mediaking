import React from "react";
import styles from './footer.module.css';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaEnvelope } from 'react-icons/fa'; // Importing icons

export const Footer = () => {
  const handleSubscribe = (e) => {
    e.preventDefault();
    alert("Thank you for subscribing!"); // Placeholder for subscription logic
  };

  return (
    <footer className={styles.footerSection}>
      <div className={styles.footerContent}>
        {/* Company Info */}
        <div className={styles.footerColumn}>
          <h3 className={styles.footerTitle}>Webexprt</h3>
          <p className={styles.footerText}>
            Empowering businesses with innovative digital solutions since 2021.
          </p>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} Webexprt. All rights reserved.
          </p>
        </div>

        {/* Quick Links */}
        <div className={styles.footerColumn}>
          <h3 className={styles.footerTitle}>Quick Links</h3>
          <ul className={styles.footerLinks}>
            <li><a href="/about">About Us</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/privacy-policy">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className={styles.footerColumn}>
          <h3 className={styles.footerTitle}>Contact Us</h3>
          <ul className={styles.footerContact}>
            <li><FaEnvelope /> <a href={`mailto:${process.env.REACT_APP_COMPANY_EMAIL}`}>{process.env.REACT_APP_COMPANY_EMAIL}</a></li>
            <li>📞 +91 7079367125</li>
            <li>📍 Patna, Bihar, India</li>
          </ul>
        </div>

        {/* Newsletter Subscription */}
        <div className={styles.footerColumn}>
          <h3 className={styles.footerTitle}>Stay Updated</h3>
          <p className={styles.footerText}>Subscribe to our newsletter for the latest updates.</p>
          <form className={styles.newsletterForm} onSubmit={handleSubscribe}>
            <input
              type="email"
              placeholder="Your Email"
              className={styles.newsletterInput}
              required
            />
            <button type="submit" className={styles.newsletterBtn}>
              Subscribe
            </button>
          </form>
        </div>

        {/* Social Links */}
        <div className={styles.socialsLinks}>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FaFacebookF className={styles.socialIcon} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <FaTwitter className={styles.socialIcon} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedinIn className={styles.socialIcon} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer; // Changed to default export for consistency