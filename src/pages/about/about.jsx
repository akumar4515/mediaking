import React from 'react';
import './about.css';
import useScrollAnimation from "../ScrollAnimation";
import { FaRocket, FaEye, FaLightbulb, FaHandshake, FaLeaf } from 'react-icons/fa';
import teamImg from '../../assets/aboutus.jpeg';
export const About = () => {
  const [heroRef, heroVisible] = useScrollAnimation();
  const [storyRef, storyVisible] = useScrollAnimation();
  const [missionRef, missionVisible] = useScrollAnimation();
  const [visionRef, visionVisible] = useScrollAnimation();
  const [valuesRef, valuesVisible] = useScrollAnimation();

  return (
    <div className="about-page" id='about'>
      {/* Hero Section */}
      <section className="about-hero" ref={heroRef}>
        <div className={`hero-content ${heroVisible ? "visible" : ""}`}>
          <h1>About Webexprt</h1>
          <p className="hero-subtitle">Pioneering Digital Excellence Since 2020</p>
          <div className="hero-highlight">
            <FaRocket className="rocket-icon" />
            <span>Empowering Businesses with Technology</span>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="story-section" ref={storyRef}>
        <div className={`section-container ${storyVisible ? "visible" : ""}`}>
          <h2 className="section-title">Our Journey</h2>
          <div className="story-grid">
            <div className="story-content">
              <p className="story-lead">
                Founded in 2020 by digital enthusiasts, Webexprt began as a passionate startup 
                with a vision to revolutionize digital solutions. Today, we're a global agency 
                empowering businesses through innovative technology.At Webexprt, we’re more than a digital solutions provider—we’re architects of the future. Since our inception, we’ve been driven by a singular mission: to turn visionary ideas into dynamic digital experiences that propel businesses forward. In a world where technology evolves at lightning speed, we stand as your trusted partner, blending creativity, technical expertise, and strategic thinking to craft solutions that not only meet today’s demands but anticipate tomorrow’s challenges.
              </p>
              <div className="milestones">
                <div className="milestone-card">
                  <h3>2020</h3>
                  <p>Founded with 3 team members</p>
                  <div className="timeline-line"></div>
                </div>
                <div className="milestone-card">
                  <h3>2022</h3>
                  <p>Launched full digital suite</p>
                  <div className="timeline-line"></div>
                </div>
                <div className="milestone-card">
                  <h3>2023</h3>
                  <p>Global expansion begins</p>
                </div>
              </div>
            </div>
            <div className="story-image">
              <div className="image-frame">
                <img src={teamImg} alt="Webexprt Team" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Sections */}
      <section className="purpose-section">
        <div className="purpose-container">
          {/* Mission */}
          <div className="purpose-card mission-card" ref={missionRef}>
            <div className={`card-content ${missionVisible ? "visible" : ""}`}>
              <div className="card-header">
                <FaRocket className="card-icon" />
                <h3>Our Mission</h3>
              </div>
              <div className="card-body">
                <p>At Webexprt, our mission is to empower businesses of all sizes with transformative digital solutions that unlock growth, foster innovation, and redefine what’s possible. We exist to bridge the gap between visionary ideas and impactful execution, equipping our clients with the tools, strategies, and technologies they need to thrive in an ever-evolving digital world.</p>
                <ul className="mission-list">
                  <li><span>🔹 Transform ideas into impactful digital experiences</span></li>
                  <li><span>🔹 Deliver scalable, future-ready solutions</span></li>
                  <li><span>🔹 Build lasting client partnerships</span></li>
                  <li><span>🔹 Combine creativity with cutting-edge technology</span></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Vision */}
          <div className="purpose-card vision-card" ref={visionRef}>
            <div className={`card-content ${visionVisible ? "visible" : ""}`}>
              <div className="card-header">
                <FaEye className="card-icon" />
                <h3>Our Vision</h3>
              </div>
              <div className="card-body">
                <p>At Webexprt, we envision a world where every business, regardless of size or industry, harnesses the full potential of technology to create meaningful impact. We strive to be the catalyst for a digital revolution—one where innovation is accessible, seamless, and sustainable, empowering organizations to transcend boundaries and redefine success in the 21st century.</p>
                <div className="vision-pillars">
                  <div className="pillar">
                    <h4>Digital Inclusion</h4>
                    <p>Empower businesses of all sizes</p>
                  </div>
                  <div className="pillar">
                    <h4>Sustainable Tech</h4>
                    <p>Eco-conscious digital solutions</p>
                  </div>
                  <div className="pillar">
                    <h4>Global Impact</h4>
                    <p>Worldwide business empowerment</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section" ref={valuesRef}>
        <div className={`values-container ${valuesVisible ? "visible" : ""}`}>
          <h2 className="section-title">Core Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <FaLightbulb className="value-icon" />
              <h4>Innovation</h4>
              <p>Pushing digital boundaries through continuous learning</p>
            </div>
            <div className="value-card">
              <FaHandshake className="value-icon" />
              <h4>Integrity</h4>
              <p>Ethical practices in every interaction</p>
            </div>
            <div className="value-card">
              <FaLeaf className="value-icon" />
              <h4>Sustainability</h4>
              <p>Green hosting and eco-conscious solutions</p>
            </div>
            <div className="value-card">
              <FaRocket className="value-icon" />
              <h4>Excellence</h4>
              <p>Premium quality in every deliverable</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};