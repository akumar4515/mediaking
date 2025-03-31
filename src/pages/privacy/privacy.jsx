import React from 'react';
import styles from './privacy.module.css';

const PrivacyPolicy = () => {
  return (
    <div className={styles.privacyContainer}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1>Privacy Policy</h1>
          <p>Last Updated: March 30, 2025</p>
        </div>
      </section>

      {/* Policy Section */}
      <section className={styles.policySection}>
        <div className={styles.policyContent}>
          <h2>Introduction</h2>
          <p>
            Welcome to Webexprt ("we," "our," or "us"). We are committed to protecting your privacy and ensuring that your personal information is handled responsibly. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
          </p>

          <h2>1. Information We Collect</h2>
          <p>We may collect the following types of information:</p>
          <ul className={styles.policyList}>
            <li><strong>Personal Information:</strong> Name, email address, phone number, and other details you provide when contacting us or submitting forms.</li>
            <li><strong>Usage Data:</strong> Information about how you interact with our website, such as IP address, browser type, pages visited, and time spent.</li>
            <li><strong>Cookies:</strong> Small data files stored on your device to enhance your experience (e.g., remembering preferences).</li>
          </ul>

          <h2>2. How We Use Your Information</h2>
          <p>We use your information to:</p>
          <ul className={styles.policyList}>
            <li>Provide and improve our services.</li>
            <li>Respond to inquiries and communicate with you.</li>
            <li>Analyze website usage and optimize performance.</li>
            <li>Comply with legal obligations.</li>
          </ul>

          <h2>3. How We Share Your Information</h2>
          <p>We do not sell your personal information. We may share it with:</p>
          <ul className={styles.policyList}>
            <li><strong>Service Providers:</strong> Third parties that assist us in operating our website or delivering services (e.g., email services, analytics).</li>
            <li><strong>Legal Authorities:</strong> If required by law or to protect our rights.</li>
          </ul>

          <h2>4. Cookies and Tracking Technologies</h2>
          <p>
            We use cookies to enhance your browsing experience. You can manage cookie preferences through your browser settings. Disabling cookies may affect some website functionality.
          </p>

          <h2>5. Data Security</h2>
          <p>
            We implement reasonable security measures to protect your information. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
          </p>

          <h2>6. Your Rights</h2>
          <p>Depending on your location, you may have the right to:</p>
          <ul className={styles.policyList}>
            <li>Access, update, or delete your personal information.</li>
            <li>Opt out of marketing communications.</li>
            <li>Request information about how your data is processed.</li>
          </ul>
          <p>
            To exercise these rights, contact us at{' '}
            <a href={`mailto:${process.env.REACT_APP_COMPANY_EMAIL}`} className={styles.emailLink}>
              {process.env.REACT_APP_COMPANY_EMAIL}
            </a>.
          </p>

          <h2>7. Third-Party Links</h2>
          <p>
            Our website may contain links to third-party sites. We are not responsible for their privacy practices and encourage you to review their policies.
          </p>

          <h2>8. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Changes will be posted here with an updated "Last Updated" date. Please review periodically.
          </p>

          <h2>9. Contact Us</h2>
          <p>If you have questions about this Privacy Policy, please reach out:</p>
          <ul className={styles.policyList}>
            <li>
              <strong>Email:</strong>{' '}
              <a href={`mailto:${process.env.REACT_APP_COMPANY_EMAIL}`} className={styles.emailLink}>
                {process.env.REACT_APP_COMPANY_EMAIL}
              </a>
            </li>
            <li><strong>Phone:</strong> +91 7079367125</li>
            <li><strong>Address:</strong> Patna, Bihar, India</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;