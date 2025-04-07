import React from 'react';
import styles from './about.module.css';
import useScrollAnimation from "../ScrollAnimation";
import { FaRocket, FaEye, FaLightbulb, FaHandshake, FaLeaf } from 'react-icons/fa';
import teamImg from '../../assets/aboutus.jpeg';
import aboutImg from '../../assets/about.png';
export const About = () => {
  const [heroRef, heroVisible] = useScrollAnimation();
  const [aboutRef, aboutVisible] = useScrollAnimation();
  const [valuesRef, valuesVisible] = useScrollAnimation();

  return (
    <div className={styles.aboutPage} id='about'>
      {/* Hero Section */}
      <section className={styles.aboutHero} ref={heroRef}>
        <div className={`${styles.heroContent} ${heroVisible ? styles.visible : ""}`}>
          <h1>About Webexprt</h1>
          <p className={styles.heroSubtitle}>Pioneering Digital Excellence Since 2020</p>
          <div className={styles.heroHighlight}>
            <FaRocket className={styles.rocketIcon} />
            <span>Empowering Businesses with Innovation</span>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section id="about" className={styles.aboutSection}>
  <div ref={aboutRef} className={`${styles.aboutWrapper} ${aboutVisible ? styles.slideIn : ""}`}>
    {/* Intro Section */}
    <div className={styles.introSection}>
      <h2>Who We Are</h2>
      <p>
  Welcome to Webxprt—a vibrant, forward-thinking team passionately dedicated to shaping the future of your business in an era where digital innovation knows no bounds. We’re not just a digital agency; we’re a collective of innovators, strategists, and creators driven by a shared mission to transform your boldest aspirations into reality with precision, creativity, and an unwavering commitment to excellence. Our story began with a core conviction: that every organization—whether a fledgling startup or an established industry leader—deserves a trusted partner to unlock its unique potential through bespoke digital solutions that captivate and endure. With a rich tapestry of expertise in design, cutting-edge technology, and strategic vision, we embrace every project as a chance to redefine what’s possible, from crafting immersive online experiences that resonate with your audience to developing intelligent systems that streamline your operations, or weaving compelling narratives that amplify your brand’s voice. At Webxprt, we excel at turning ambitious ideas into actionable outcomes, complexity into clarity, and visions into measurable triumphs, all while fostering partnerships grounded in trust, collaboration, and a deep understanding of your goals. We’re here not only to build your digital presence but to empower your journey toward lasting impact and success.
</p>
    </div>

    {/* Purpose Section with Image on Right */}
    <div className={styles.contentRow}>
      <div className={styles.textBlock}>
        <h3>Our Purpose</h3>
        <p>
          At Webxprt, our purpose is to empower brands with solutions that inspire, perform, and endure. We believe every business has a unique story to tell, and we’re here to amplify it through exceptional digital experiences. From designing sleek, user-focused websites to developing powerful, scalable mobile apps, we bring your ideas to life with tools and strategies tailored to your needs. Our data-driven marketing approach ensures your message reaches the right audience at the right time, driving measurable growth and lasting connections. With over a decade of experience, we combine technical expertise, creative problem-solving, and a relentless focus on results to help you navigate the complexities of the digital landscape and achieve your boldest ambitions.
        </p>
      </div>
      <div className={styles.imageBlock}>
        <img src={aboutImg} alt="Webexprt Team Collaborating" className={styles.sideImage} />
      </div>
    </div>

    {/* Vision Section with Image on Left */}
    <div className={styles.contentRowReverse}>
    <div className={styles.textBlock}>
        <h3>Our Vision</h3>
        <p>
          Our vision is to redefine what’s possible in the digital realm and set a new benchmark for excellence. We aspire to be more than a service provider—we aim to be a catalyst for transformation, pushing boundaries with bold creativity and advanced technology. We see a future where businesses of all sizes can harness the full potential of the digital world to innovate, connect, and thrive. By fostering collaboration, embracing emerging trends, and delivering solutions that are both forward-thinking and practical, we’re committed to creating a legacy of impact. Every project we undertake is a step toward building a digital ecosystem where ideas flourish, experiences captivate, and success becomes a shared journey.
        </p>
      </div>
      <div className={styles.imageBlock}>
        <img src={aboutImg} alt="Webexprt Innovation in Action" className={styles.sideImage} />
      </div>
      
    </div>
  </div>
</section>

      {/* Values Section */}
      <section className={styles.valuesSection} ref={valuesRef}>
        <div className={`${styles.valuesContainer} ${valuesVisible ? styles.visible : ""}`}>
          <h2 className={styles.sectionTitle}>Core Values</h2>
          <div className={styles.valuesGrid}>
            <div className={styles.valueCard}>
              <FaLightbulb className={styles.valueIcon} />
              <h4>Innovation</h4>
              <p>Driving progress through creativity</p>
            </div>
            <div className={styles.valueCard}>
              <FaHandshake className={styles.valueIcon} />
              <h4>Integrity</h4>
              <p>Honesty in every step</p>
            </div>
            <div className={styles.valueCard}>
              <FaLeaf className={styles.valueIcon} />
              <h4>Sustainability</h4>
              <p>Green tech for a better future</p>
            </div>
            <div className={styles.valueCard}>
              <FaRocket className={styles.valueIcon} />
              <h4>Excellence</h4>
              <p>Top-tier quality always</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};