import React from 'react';
import { Link } from 'react-router-dom';
import styles from './thankyou.module.css';

const ThankYou = () => {
  return (
    <div className={styles.thankYouContainer}>
      <div className={styles.thankYouCard}>
        <div className={styles.checkmark}>✓</div>
        <h1>Thank You!</h1>
        <p className={styles.confirmationMessage}>
          Your submission has been received. We'll contact you within 24 hours.
        </p>
        <div className={styles.nextSteps}>
          <h3>Next Steps:</h3>
          <ol>
            <li>Check your email for confirmation</li>
            <li>Our team will review your request</li>
            <li>We'll schedule a consultation</li>
          </ol>
        </div>
        <Link to="/" className={styles.returnHome}>
          Return to Homepage
        </Link>
      </div>
    </div>
  );
};

export default ThankYou;