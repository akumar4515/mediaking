import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import emailjs from '@emailjs/browser';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../css/home.css";
import webImg from '../assets/web.png';
import seoImg from '../assets/seo.webp';
import aboutImg from '../assets/about.png';
import ecm from '../assets/ecm.jpg';
import ppc from '../assets/ppc.webp';
import ssm from '../assets/cm.png';
import brand from '../assets/brand.jpg';
import web from '../assets/web.mp4'; // Add more videos for the slider
import app from '../assets/app.mp4';
import software from '../assets/software.mp4';
import graphic from '../assets/graphic.mp4';
import digital from '../assets/digital.mp4';
import amzn from '../assets/amzn.jpg';
import ggl from '../assets/google.jpg';
import acntr from '../assets/acntr.jpg';
import deloit from '../assets/dloit.jpg';
import kpmg from '../assets/kpmg.png';
import apnaClg from '../assets/apna-clg.png';
import fb from '../assets/facebook.png';
import insta from '../assets/instagram.png';
import lnkdn from '../assets/linkedin.png';
import x from '../assets/twitter.png';
import useScrollAnimation from "./ScrollAnimation";


export const Home = () => {
  const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
  const UserTemplateID = process.env.REACT_APP_EMAILJS_USER_TEMPLATE_ID;
  const CompanyTemplateId=process.env.REACT_APP_EMAILJS_COMPANY_TEMPLATE_ID;
  const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;
  const navigate = useNavigate();

  const [aboutRef, aboutVisible] = useScrollAnimation();
  const [servicesRef, servicesVisible] = useScrollAnimation();
  const [clientsRef, clientsVisible] = useScrollAnimation();
  const [whyChooseRef, whyChooseVisible] = useScrollAnimation();
 

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
      console.log("email Sent")
      setSubmitMsg("Thanks For Contacting Us")
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to send message');
    }
  };

  const CustomArrow = ({ onClick, direction }) => (
    <button 
      className={`slider-arrow ${direction}`}
      onClick={onClick}
      aria-label={direction === 'prev' ? 'Previous slide' : 'Next slide'}
    >
      {direction === 'prev' ? '←' : '→'}
    </button>
  );
  
  const sliderSettings = {
    // ... other settings
    arrows: true,
    prevArrow: <CustomArrow direction="prev" />,
    nextArrow: <CustomArrow direction="next" />,
    // ... rest of settings
  };
  
  

  return (
    <div className="home-container" id="home">
      {/* Hero Section */}
      <section id="home" className="hero-section">
        <Slider {...sliderSettings}>
          <div className="hero-slide">
            <video autoPlay loop muted playsInline className="bg-video">
              <source src={digital} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="hero-contents">
              <h1>Mediaking Is Best In Digital Marketing</h1>
              <p>We help your business to grow faster</p>
              <button className="cta-button">Learn More</button>
            </div>
          </div>
          <div className="hero-slide">
            <video autoPlay loop muted playsInline className="bg-video">
              <source src={app} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="hero-contents">
              <h1>Mediaking Is Best In App Development Service</h1>
              <p>We create mobile app which is very easy to use by everyone</p>
              <button className="cta-button">Learn More</button>
            </div>
          </div>
          <div className="hero-slide">
            <video autoPlay loop muted playsInline className="bg-video">
              <source src={graphic} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="hero-contents">
              <h1>Mediaking Is Best In Graphic Design Service</h1>
              <p>We Deliver You Creative & Catchy Post For Your Business</p>
              <button className="cta-button">Learn More</button>
            </div>
          </div>
          <div className="hero-slide">
            <video autoPlay loop muted playsInline className="bg-video">
              <source src={web} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="hero-contents">
              <h1>Beautiful ,Innovative & Effective Website</h1>
              <p>We Promote Your All Goods Online & Generate Leads From Website</p>
              <button className="cta-button">Learn More</button>
            </div>
          </div>
          <div className="hero-slide">
            <video autoPlay loop muted playsInline className="bg-video">
              <source src={software} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="hero-contents">
              <h1>Mediaking Is Best In Software Development Service</h1>
              <p>We Craft Software To Simplify Your Workflow Effortlessly</p>
              <button className="cta-button">Learn More</button>
            </div>
          </div>
        </Slider>
      </section>

     
      <section id="about" className="about-section">
        <div ref={aboutRef} className={`about-content ${aboutVisible ? "visible" : ""}`}>
          <h2>About Us</h2>
          <p>At Mediaking, we are passionate about transforming ideas into powerful digital solutions. We specialize in website development, mobile app development, digital marketing, social media management, and web hosting services. Our team is dedicated to delivering high-quality, user-friendly, and scalable solutions that help businesses establish a strong online presence.

With a focus on innovation, creativity, and performance, we ensure that our clients stay ahead in the digital landscape. Whether you're a startup or an established business, Mediaking is here to provide tailored solutions to help you grow and succeed.

🚀 Empowering businesses with technology—one solution at a time.</p>
          <div className="about-details">
            <div className="about-text">
              <h3>Our Mission</h3>
              <p>At Mediaking, our mission is to empower businesses and individuals with cutting-edge digital solutions that drive success. We strive to deliver high-quality, scalable, and innovative web and mobile applications, digital marketing strategies, and hosting services tailored to our clients' needs.

Our goal is to bridge the gap between technology and business growth, ensuring seamless digital experiences through modern development practices, user-friendly designs, and result-oriented strategies.</p>
            </div>
            <div className="about-image">
              <img src={aboutImg} alt="about-img"/>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="service" className="service-section">
      <div ref={servicesRef} className={`service-content ${servicesVisible ? "visible" : ""}`}>
        <h2>Our Services</h2>
        <div className="service-grid">
          <div className="service-card">
            <img src={webImg} alt="Web Development" className="service-img" />
            <h3>Web Development</h3>
            <p>Custom website solutions wordpress and coding</p>
            <button className="know-more-button"  onClick={()=>navigate('/services')}>Know More</button>
          </div>
          <div className="service-card">
            <img src={seoImg} alt="Mobile Apps" className="service-img" />
            <h3>Search Engine Optimization (SEO) </h3>
            <p>SEO Optimization - To Rank Up businesses</p>
            <button className="know-more-button"   onClick={()=>navigate('/services')}>Know More</button>
          </div>
          <div className="service-card">
            <img src={ssm} alt="Cloud Solutions" className="service-img" />
            <h3>Social Media Marketing (SMM)</h3>
            <p>Scalable cloud infrastructure...</p>
            <button className="know-more-button"  onClick={()=>navigate('/services')}>Know More</button>
          </div>
          <div className="service-card">
            <img src={ppc} alt="Cloud Solutions" className="service-img" />
            <h3>Pay-Per-Click (PPC) Advertising </h3>
            <p>Scalable cloud infrastructure...</p>
            <button className="know-more-button"   onClick={()=>navigate('/services')}>Know More</button>
          </div>
         
          <div className="service-card">
            <img src={ecm} alt="Cloud Solutions" className="service-img" />
            <h3> E-commerce & Marketplace Marketing</h3>
            <p>Scalable cloud infrastructure...</p>
            <button className="know-more-button"   onClick={()=>navigate('/services')}>Know More</button>
          </div>
          <div className="service-card">
            <img src={brand} alt="Cloud Solutions" className="service-img" />
            <h3>Branding & Reputation Management</h3>
            <p>Scalable cloud infrastructure...</p>
            <button className="know-more-button"  onClick={()=>navigate('/services')}>Know More</button>
          </div>
          
        </div>
        </div>
      </section>
      {/* clients */}
      {/* Clients Section */}
<section className="clients-section">
<div ref={clientsRef} className={`clients-container ${clientsVisible ? "visible" : ""}`}>
    <h2>Our Valued Clients</h2>
    
    <div className="clients-flex">
      <div className="client-item">
        <img src={amzn} alt="Client 1" />
      </div>
      <div className="client-item">
        <img src={ggl} alt="Client 2" />
      </div>
      <div className="client-item">
        <img src={acntr} alt="Client 3" />
      </div>
      <div className="client-item">
        <img src={kpmg} alt="Client 4" />
      </div>
      <div className="client-item">
        <img src={deloit} alt="Client 5" />
      </div>
      <div className="client-item">
        <img src={apnaClg} alt="Client 6" />
      </div>
    </div>
  </div>
</section>
      {/* choose us */}
      <section className="why-choose-section">
      <div ref={whyChooseRef} className={`choose-container ${whyChooseVisible ? "visible" : ""}`}>

    <h2>Why Choose Us?</h2>
    
    <div className="reasons-flex">
      <div className="reason-card">
        <div className="reason-number">01</div>
        <h3>Proven Results</h3>
        <p>Demonstrated success in delivering measurable outcomes for our clients</p>
      </div>

      <div className="reason-card">
        <div className="reason-number">02</div>
        <h3>Industry Experts</h3>
        <p>Certified professionals with 10+ years combined experience</p>
      </div>

      <div className="reason-card">
        <div className="reason-number">03</div>
        <h3>Custom Strategies</h3>
        <p>Tailored solutions to meet your unique business needs</p>
      </div>

      <div className="reason-card">
        <div className="reason-number">04</div>
        <h3>24/7 Support</h3>
        <p>Round-the-clock customer service and technical support</p>
      </div>
    </div>
  </div>
</section>

      {/* Contact Section */}
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
                {sending ? "Sending...":"send Message"}
              </button>
              <p className='submitMsg'>{submitMsg}</p>
            </form>
            

          </div>
              <div className="contact-info">
            <h2>Get in Touch</h2>
            <div className="info-card">
              <div className="info-item">
                <div className="info-icon">📍</div>
                <div>
                  <h3>Our Office</h3>
                  <p> Patna , Bihar</p>
                </div>
              </div>
              <div className="info-item">
                <div className="info-icon">📞</div>
                <div>
                  <h3>Phone Numbers</h3>
                  <p>+91 7370895978</p>
                </div>
              </div>
              <div className="info-item">
                <div className="info-icon">✉️</div>
                <div>
                  <h3>Email</h3>
                  <p>mediaking773@gmail.com</p>
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
     </div>
  );

};