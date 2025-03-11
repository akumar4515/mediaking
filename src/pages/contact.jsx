import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/contact.css';
import fb from '../assets/facebook.png';
import insta from '../assets/instagram.png';
import lnkdn from '../assets/linkedin.png';
import x from '../assets/twitter.png';
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
  const UserTemplateID = process.env.REACT_APP_EMAILJS_USER_TEMPLATE_ID;
  const CompanyTemplateId=process.env.REACT_APP_EMAILJS_COMPANY_TEMPLATE_ID;
  const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const timestamp = new Date().toLocaleString(); 
      await emailjs.send(
        serviceID,               // 1. Service ID
        CompanyTemplateId,       // 2. Template ID
        {                        // 3. Template Parameters
          user_name: e.target.user_name.value,
          user_email: e.target.user_email.value,
          user_tel: e.target.user_tel.value,
          user_message: e.target.user_message.value,
          current_timestamp:timestamp

        },
        publicKey               // 4. Public Key
      );
      // 2. Send confirmation email to USER
      const userEmail = e.target.user_email.value;
      await emailjs.send(
        serviceID,              // Correct parameter order:
        UserTemplateID,         // 1. serviceID
        {                       // 2. templateID
          to_email: userEmail,  // 3. template parameters
          user_name: e.target.user_name.value,
          message: "Thank you for contacting us!"
        },
        publicKey              // 4. publicKey
      );
      console.log("email sent");
  
      // navigate('/thank-you');
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to send message");
  
    }
  };

  return (
    <div className="contact-page" id='contact'>
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="hero-content">
          <h1>Contact Us</h1>
          <p>Let's Start Your Digital Journey</p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="main-contact">
        <div className="contact-container">
          {/* Contact Form */}
          <div className="contact-form">
            <h2>Send a Message</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input 
                  type="text" 
                  name="user_name"
                  placeholder="Your Name" 
                  required 
                />
              </div>
              <div className="form-group">
                <input 
                  type="email" 
                  name="user_email"
                  placeholder="Your Email" 
                  required 
                />
              </div>
              <div className="form-group">
                <input 
                  type="tel" 
                  name="user_tel"
                  placeholder="Phone Number" 
                />
              </div>
              <div className="form-group">
                <textarea 
                  placeholder="Your Message" 
                  name="user_message"
                  rows="5" 
                  required 
                ></textarea>
              </div>
              <button type="submit" className="submit-btn">
                Send Message
              </button>
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
                  <p>123 Anywhere St, Any City, ST 12345</p>
                </div>
              </div>
              <div className="info-item">
                <div className="info-icon">📞</div>
                <div>
                  <h3>Phone Numbers</h3>
                  <p>+123-456-7890</p>
                  <p>123-456-7890</p>
                </div>
              </div>
              <div className="info-item">
                <div className="info-icon">✉️</div>
                <div>
                  <h3>Email</h3>
                  <p>contact@mediaking.com</p>
                </div>
              </div>
            </div>
            
            <div className="social-links">
              <h3>Follow Us</h3>
              <div className="social-icons">
                <a href="#facebook"><div className='icon'><img src={fb}alt="facebook" /></div></a>
                <a href="#twitter"><div className='icon'><img src={insta}alt="insta" /></div></a>
                <a href="#linkedin"><div className='icon'><img src={x}alt="twitter" /></div></a>
                <a href="#instagram"><div className='icon'><img src={lnkdn}alt="linkdin" /></div></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <iframe
          title="office-location"
          src="https://maps.google.com/maps?q=123%20Anywhere%20St&t=&z=13&ie=UTF8&iwloc=&output=embed"
          style={{ border: 0 }}
          allowFullScreen
        ></iframe>
      </section>
    </div>
  );
};