import React from 'react';
import styles from './about.module.css';
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