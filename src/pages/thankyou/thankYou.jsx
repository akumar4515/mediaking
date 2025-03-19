// src/components/ThankYou.js
import React from 'react';
import { Link } from 'react-router-dom'; // Install react-router-dom if not already installed
import './thankyou.css';

const ThankYou = () => {
  return (
    <div className="thank-you-container">
      <div className="thank-you-card">
        <div className="checkmark">✓</div>
        <h1>Thank You!</h1>
        <p className="confirmation-message">
          Your submission has been received. We'll contact you within 24 hours.
        </p>
        <div className="next-steps">
          <h3>Next Steps:</h3>
          <ol>
            <li>Check your email for confirmation</li>
            <li>Our team will review your request</li>
            <li>We'll schedule a consultation</li>
          </ol>
        </div>
        <Link to="/" className="return-home">
          Return to Homepage
        </Link>
      </div>
    </div>
  );
};

export default ThankYou;