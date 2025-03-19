import React from 'react';
import './about.css';
import  useScrollAnimation  from "../ScrollAnimation";


export const About = () => {
  const [heroRef, heroVisible] = useScrollAnimation();
  const [storyRef, storyVisible] = useScrollAnimation();
  const [missionRef, missionVisible] = useScrollAnimation();
  const [valuesRef, valuesVisible] = useScrollAnimation();
  return (
    <div className="about-page" id='about'>
      {/* Hero Section */}
      <section className="about-hero" ref={heroRef}>
      <div className={`hero-content ${heroVisible ? "visible" : ""}`}>
          <h1>About Mediaking</h1>
          <p>Pioneering Digital Excellence Since 2020</p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="our-story" ref={storyRef}>
      <div className={`section-container ${storyVisible ? "visible" : ""}`}>
          <div className="text-content">
            <h2>Our Journey</h2>
            <p className="highlight-text">
            Mediaking started with a simple vision—to empower businesses with innovative digital solutions. From our early days as a small tech team to becoming a trusted provider of website development, mobile apps, digital marketing, and web hosting services, our journey has been fueled by passion, innovation, and a commitment to excellence.

What began as a passion for technology quickly turned into a mission to help businesses establish a strong online presence. Over time, we have worked with clients across various industries, delivering solutions that are user-centric, scalable, and results-driven.</p>
            <div className="story-details">
              <p>
                Founded in 2020 by a team of digital enthusiasts, Mediaking started as a small startup 
                with big dreams. What began as a three-person operation has 
                blossomed into a full-service digital agency serving clients globally.
              </p>
            </div>
          </div>
          <div className="image-content">
            <div className="timeline-card">
              <div className="milestone">
                <h3>2020</h3>
                <p>Company Founded</p>
              </div>
              <div className="milestone">
                <h3>2022</h3>
                <p>Launched Analytics Platform</p>
              </div>
              <div className="milestone">
                <h3>2023</h3>
                <p>Global Expansion</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section" ref={missionRef}>
      <div className={`mission-container ${missionVisible ? "visible" : ""}`}>
          <div className="mission-card">
            <div className="icon-box">🎯</div>
            <h3>Our Mission</h3>
            <p>
            At Mediaking, our mission is to empower businesses and individuals with cutting-edge digital solutions that drive success. We strive to deliver high-quality, scalable, and innovative web and mobile applications, digital marketing strategies, and hosting services tailored to our clients' needs.

Our goal is to bridge the gap between technology and business growth, ensuring seamless digital experiences through modern development practices, user-friendly designs, and result-oriented strategies.</p>
          </div>
          
          <div className="mission-card">
            <div className="icon-box">👁️</div>
            <h3>Our Vision</h3>
            <p>
            At Mediaking, our vision is to be a leading force in digital transformation, empowering businesses with innovative, reliable, and scalable solutions. We aim to create a future where technology seamlessly integrates with business growth, enabling brands to thrive in the digital age.

We strive to revolutionize digital experiences with cutting-edge web and mobile solutions while empowering businesses worldwide by providing high-quality, scalable, and secure digital services. Our focus is on staying ahead of innovation by continuously evolving with the latest technologies and trends. By building long-term partnerships and delivering value-driven solutions, we aim to drive success for businesses of all sizes.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section" ref={valuesRef}>
        <div className={`values-container ${valuesVisible ? "visible" : ""}`}>
        <h2>Core Values</h2>
        <div className="values-container">
          <div className="value-card">
            <h4>Innovation</h4>
            <p>Constantly pushing boundaries in digital technology</p>
          </div>
          <div className="value-card">
            <h4>Integrity</h4>
            <p>Ethical practices in all our operations</p>
          </div>
          <div className="value-card">
            <h4>Client-Centric</h4>
            <p>Tailored solutions for unique needs</p>
          </div>
          <div className="value-card">
            <h4>Excellence</h4>
            <p>Commitment to superior quality in every project</p>
          </div>
        </div>
        </div>
      </section>
    </div>
  );
};