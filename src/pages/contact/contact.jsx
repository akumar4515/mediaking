import React from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import fb from '../../assets/facebook.png';
import insta from '../../assets/instagram.png';
import lnkdn from '../../assets/linkedin.png';
import x from '../../assets/twitter.png';
import useScrollAnimation  from '../ScrollAnimation'; // Import the hook
import './contact.css'; // Import the CSS file
import { useState } from 'react';

export const Contact = () => {
  const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
  const UserTemplateID = process.env.REACT_APP_EMAILJS_USER_TEMPLATE_ID;
  const CompanyTemplateId = process.env.REACT_APP_EMAILJS_COMPANY_TEMPLATE_ID;
  const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;
  const navigate = useNavigate();

  // Scroll animation hooks for each section
  const [heroRef, heroVisible] = useScrollAnimation();
  const [contactRef, contactVisible] = useScrollAnimation();
  const [mapRef, mapVisible] = useScrollAnimation();

  const [submitMsg,setSubmitMsg]=useState("");
  const [sending,setSending]=useState(false);

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
      navigate('/thankyou')
      // setSubmitMsg("Thanks For Contacting Us")
      e.target.user_name.value="";
      e.target.user_email.value="";
      e.target.user_tel.value="";
      e.target.user_message.value="";
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to send message');
    }
  };

  return (
    <div className="contact-page" id="contact">
      {/* Hero Section */}
      <section className="contact-hero" ref={heroRef}>
        <div className={`hero-content ${heroVisible ? 'visible' : ''}`}>
          <h1>Contact Us</h1>
          <p>Let's Start Your Digital Journey</p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="main-contact" ref={contactRef}>
        <div className={`contact-container ${contactVisible ? 'visible' : ''}`}>
          {/* Contact Form */}
          <div className="contact-form">
            <h2>Send a Message</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input type="text" name="user_name" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <input type="email" name="user_email" placeholder="Your Email" required />
              </div>
              <div className="form-group">
                <input type="tel" name="user_tel" placeholder="Phone Number" />
              </div>
              <div className="form-group">
                <textarea placeholder="Your Message" name="user_message" rows="5" required></textarea>
              </div>
              <button type="submit" className="submit-btn">
                {sending ? "Sending...":"send Message"}
              </button>
              <p className='submitMsg'>{submitMsg}</p>
           
            </form>
            
          </div>

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
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section" ref={mapRef}>
        <div className={`map-container ${mapVisible ? 'visible' : ''}`}>
          <iframe
            title="office-location"
            src="https://maps.google.com/maps?q=123%20Anywhere%20St&t=&z=13&ie=UTF8&iwloc=&output=embed"
            style={{ border: 0 }}
            allowFullScreen
          ></iframe>
        </div>
      </section>
    </div>
  );
};