import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import emailjs from '@emailjs/browser';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./home.module.css";
import webImg from '../../assets/web.png';
import seoImg from '../../assets/seo.webp';

import ecm from '../../assets/ecm.jpg';
import ppc from '../../assets/ppc.webp';
import smm from '../../assets/cm.png';
import brand from '../../assets/brand.jpg';
import web from '../../assets/web.mp4';
import appImg from '../../assets/app.jpg';
import app from '../../assets/app.mp4';
import software from '../../assets/software.mp4';
import graphic from '../../assets/graphic.mp4';
import digital from '../../assets/digital.mp4';
import cli1 from '../../assets/cli1.webp';
import cli2 from '../../assets/cli2.png';
import cli3 from '../../assets/cli3.png';
import cli4 from '../../assets/cli4.png';
import softImg from '../../assets/soft.webp';
import fb from '../../assets/facebook.png';
import insta from '../../assets/instagram.png';
import lnkdn from '../../assets/linkedin.png';
import x from '../../assets/twitter.png';
import contImg from '../../assets/contImg.jpg';
import useScrollAnimation from "../ScrollAnimation";
import { FaRocket, FaEye, FaLightbulb, FaHandshake, FaLeaf } from 'react-icons/fa';
import teamImg from '../../assets/aboutus.jpeg';

export const Home = () => {
  const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
  const UserTemplateID = process.env.REACT_APP_EMAILJS_USER_TEMPLATE_ID;
  const CompanyTemplateId = process.env.REACT_APP_EMAILJS_COMPANY_TEMPLATE_ID;
  const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;
  const navigate = useNavigate();

  
  const [servicesRef, servicesVisible] = useScrollAnimation();
  const [clientsRef, clientsVisible] = useScrollAnimation();
  const [whyChooseRef, whyChooseVisible] = useScrollAnimation();
  const [storyRef, storyVisible] = useScrollAnimation();
  const [missionRef, missionVisible] = useScrollAnimation();
  const [visionRef, visionVisible] = useScrollAnimation();
  const [submitMsg, setSubmitMsg] = useState("");
  const [sending, setSending] = useState(false);

  const SERVICE_SLUGS = {
    WEB_DEVELOPMENT: "web-development",
    APP_DEVELOPMENT: "app-development",
    SEO_OPTIMIZATION: "seo-optimization",
    SOCIAL_MEDIA_MARKETING: "social-media-marketing",
    PPC_ADVERTISING: "ppc-advertising",
    ECOMMERCE_MARKETING: "ecommerce-marketing",
    BRANDING_REPUTATION: "branding-reputation",
    CONTENT_CREATION: "content-creation",
    SOFTWARE_DEVELOPMENT: "software-development"
  };

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
      navigate('/thank-you'); // Corrected route to match component name
      e.target.reset();
    } catch (error) {
      console.error('Error:', error);
      setSubmitMsg('Failed to send message. Please try again.');
      setSending(false);
    }
  };

  const handleNewForm = () => {
    setSubmitMsg("");
  };

  const CustomArrow = ({ onClick, direction }) => (
    <button 
      className={`${styles.sliderArrow} ${direction === 'prev' ? styles.prev : styles.next}`}
      onClick={onClick}
      aria-label={direction === 'prev' ? 'Previous slide' : 'Next slide'}
    >
      {direction === 'prev' ? '❮' : '❯'}
    </button>
  );

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    prevArrow: <CustomArrow direction="prev" />,
    nextArrow: <CustomArrow direction="next" />,
  };

  const handleGetStartedClick = (serviceSlug) => {
    if (!serviceSlug) {
      console.error("Missing service slug");
      return;
    }
    navigate(`/service-detail/${serviceSlug}`);
  };

  return (
    <div className={styles.homeContainer} id="home">
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <Slider {...sliderSettings}>
          <div className={styles.heroSlide}>
            <video autoPlay loop muted playsInline disablePictureInPicture className={styles.bgVideo}>
              <source src={digital} type="video/mp4" />
            </video>
            <div className={styles.heroContents}>
              <h2>Leading Digital Solutions</h2>
              <p>Grow your business with cutting-edge technology</p>
              <button 
                className={styles.ctaButton}
                onClick={() => handleGetStartedClick(SERVICE_SLUGS.WEB_DEVELOPMENT)}
              >
                Discover More
              </button>
            </div>
          </div>
          <div className={styles.heroSlide}>
            <video autoPlay loop muted playsInline disablePictureInPicture className={styles.bgVideo}>
              <source src={app} type="video/mp4" />
            </video>
            <div className={styles.heroContents}>
              <h2>Expert App Development</h2>
              <p>Seamless mobile experiences for all platforms</p>
              <button 
                className={styles.ctaButton}
                onClick={() => handleGetStartedClick(SERVICE_SLUGS.APP_DEVELOPMENT)}
              >
                Discover More
              </button>
            </div>
          </div>
          <div className={styles.heroSlide}>
            <video autoPlay loop muted playsInline disablePictureInPicture className={styles.bgVideo}>
              <source src={graphic} type="video/mp4" />
            </video>
            <div className={styles.heroContents}>
              <h2>Creative Graphic Design</h2>
              <p>Visuals that captivate and convert</p>
              <button 
                className={styles.ctaButton}
                onClick={() => handleGetStartedClick(SERVICE_SLUGS.CONTENT_CREATION)}
              >
                Discover More
              </button>
            </div>
          </div>
        </Slider>
      </section>

      {/* About Section */}


<section className={styles.storySection} ref={storyRef}>
        <div className={`${styles.sectionContainer} ${storyVisible ? styles.visible : ""}`}>
          <h2 className={styles.sectionTitle}>Our Journey</h2>
          <div className={styles.storyGrid}>
            <div className={styles.storyContent}>
              <p className={styles.storyLead}>
                Founded in 2020 by digital visionaries, Webexprt started as a small team with big dreams. Today, we’re a global force, crafting innovative solutions that redefine business success in the digital age.
              </p>
              <div className={styles.milestones}>
                <div className={styles.milestoneCard}>
                  <h3>2020</h3>
                  <p>Founded with 3 members</p>
                  <div className={styles.timelineLine}></div>
                </div>
                <div className={styles.milestoneCard}>
                  <h3>2022</h3>
                  <p>Launched full digital suite</p>
                  <div className={styles.timelineLine}></div>
                </div>
                <div className={styles.milestoneCard}>
                  <h3>2023</h3>
                  <p>Expanded globally</p>
                </div>
              </div>
            </div>
            <div className={styles.storyImage}>
              <div className={styles.imageFrame}>
                <img src={teamImg} alt="Webexprt Team" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Sections */}
      <section className={styles.purposeSection}>
        <div className={styles.purposeContainer}>
          {/* Mission */}
          <div className={styles.purposeCardMissionCard} ref={missionRef}>
            <div className={`${styles.cardContent} ${missionVisible ? styles.visible : ""}`}>
              <div className={styles.cardHeader}>
                <FaRocket className={styles.cardIcon} />
                <h3>Our Mission</h3>
              </div>
              <div className={styles.cardBody}>
                <p>
                  We empower businesses with transformative digital solutions that drive growth and innovation, turning ideas into reality with cutting-edge technology.
                </p>
                <ul className={styles.missionList}>
                  <li>Transform ideas into digital success</li>
                  <li>Deliver scalable solutions</li>
                  <li>Build strong partnerships</li>
                  <li>Fuse creativity with tech</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Vision */}
          <div className={styles.purposeCardVisionCard} ref={visionRef}>
            <div className={`${styles.cardContent} ${visionVisible ? styles.visible : ""}`}>
              <div className={styles.cardHeader}>
                <FaEye className={styles.cardIcon} />
                <h3>Our Vision</h3>
              </div>
              <div className={styles.cardBody}>
                <p>
                  We aim to lead a digital revolution where every business thrives through accessible, sustainable, and impactful technology.
                </p>
                <div className={styles.visionPillars}>
                  <div className={styles.pillar}>
                    <h4>Digital Inclusion</h4>
                    <p>For all businesses</p>
                  </div>
                  <div className={styles.pillar}>
                    <h4>Sustainable Tech</h4>
                    <p>Eco-friendly solutions</p>
                  </div>
                  <div className={styles.pillar}>
                    <h4>Global Impact</h4>
                    <p>Worldwide empowerment</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Services Section */}
      <section id="service" className={styles.serviceSection}>
        <div ref={servicesRef} className={`${styles.serviceContent} ${servicesVisible ? styles.visible : ""}`}>
          <h2>Our Services</h2>
          <div className={styles.serviceGrid}>
            {[
              { img: webImg, title: "Web Development", desc: "Custom, responsive websites", slug: SERVICE_SLUGS.WEB_DEVELOPMENT },
              { img: appImg, title: "App Development", desc: "Modern mobile solutions", slug: SERVICE_SLUGS.APP_DEVELOPMENT },
              { img: seoImg, title: "SEO Optimization", desc: "Boost your rankings", slug: SERVICE_SLUGS.SEO_OPTIMIZATION },
              { img: smm, title: "Social Media Marketing", desc: "Grow your audience", slug: SERVICE_SLUGS.SOCIAL_MEDIA_MARKETING },
              { img: ppc, title: "PPC Advertising", desc: "High-ROI campaigns", slug: SERVICE_SLUGS.PPC_ADVERTISING },
              { img: ecm, title: "E-commerce Marketing", desc: "Scale your online store", slug: SERVICE_SLUGS.ECOMMERCE_MARKETING },
              { img: brand, title: "Branding & Reputation", desc: "Build your brand", slug: SERVICE_SLUGS.BRANDING_REPUTATION },
              { img: contImg, title: "Content Creation", desc: "Engaging content", slug: SERVICE_SLUGS.CONTENT_CREATION },
              { img: softImg, title: "Software Development", desc: "Custom software", slug: SERVICE_SLUGS.SOFTWARE_DEVELOPMENT }
            ].map((service, index) => (
              <div key={index} className={styles.serviceCard}>
                <img src={service.img} alt={service.title} className={styles.serviceImg} />
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
                <button 
                  className={styles.knowMoreButton}
                  onClick={() => handleGetStartedClick(service.slug)}
                >
                  Start Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className={styles.clientsSection}>
        <div ref={clientsRef} className={`${styles.clientsContainer} ${clientsVisible ? styles.visible : ""}`}>
          <h2>Our Valued Clients</h2>
          <div className={styles.clientsFlex}>
            {[cli1, cli2, cli3, cli4].map((client, index) => (
              <div key={index} className={styles.clientItem}>
                <img src={client} alt={`Client ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className={styles.whyChooseSection}>
        <div ref={whyChooseRef} className={`${styles.chooseContainer} ${whyChooseVisible ? styles.visible : ""}`}>
          <h2>Why Choose Us?</h2>
          <div className={styles.reasonsFlex}>
            {[
              { num: "01", title: "Proven Results", desc: "Measurable success for clients" },
              { num: "02", title: "Industry Experts", desc: "10+ years of experience" },
              { num: "03", title: "Custom Strategies", desc: "Tailored to your needs" },
              { num: "04", title: "24/7 Support", desc: "Always here for you" }
            ].map((reason, index) => (
              <div key={index} className={styles.reasonCard}>
                <div className={styles.reasonNumber}>{reason.num}</div>
                <h3>{reason.title}</h3>
                <p>{reason.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className={styles.mainContact}>
        <div className={styles.contactContainer}>
          <div className={styles.contactForm}>
            <h2>Let’s Connect</h2>
            <form onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <input type="text" name="user_name" placeholder="Your Name" required onClick={handleNewForm} disabled={sending} />
              </div>
              <div className={styles.formGroup}>
                <input type="email" name="user_email" placeholder="Your Email" required onClick={handleNewForm} disabled={sending} />
              </div>
              <div className={styles.formGroup}>
                <input type="tel" name="user_tel" placeholder="Phone Number" onClick={handleNewForm} disabled={sending} />
              </div>
              <div className={styles.formGroup}>
                <textarea placeholder="Your Message" name="user_message" rows="5" required onClick={handleNewForm} disabled={sending}></textarea>
              </div>
              <button type="submit" className={styles.submitBtn} disabled={sending}>
                {sending ? "Sending..." : "Send Message"}
              </button>
              {submitMsg && <p className={styles.submitMsg}>{submitMsg}</p>}
            </form>
          </div>
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
              <h3>Follow Us</h3>
              <div className={styles.socialIcons}>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><img src={fb} alt="Facebook" className={styles.icon} /></a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><img src={insta} alt="Instagram" className={styles.icon} /></a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><img src={x} alt="Twitter" className={styles.icon} /></a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><img src={lnkdn} alt="LinkedIn" className={styles.icon} /></a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};