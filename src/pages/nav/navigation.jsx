import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styles from './nav.module.css'; // Changed to CSS Module
import logo from '../../assets/logo.png';

export const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [nav, setNav] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close menu on window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 720) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Update nav state based on the current route
  useEffect(() => {
    const path = location.pathname;
    if (path === "/") {
      setNav("home");
    } else if (path === "/about") {
      setNav("about");
    } else if (path.startsWith("/services") || path.startsWith("/service-detail") || path.startsWith("/service-form")) {
      setNav("services");
    } else if (path === "/contact") {
      setNav("contact");
    } else {
      setNav("home");
    }
  }, [location.pathname]);

  // Handle menu item clicks
  const handleMenuClick = (section) => {
    setNav(section);
    setIsMenuOpen(false);
  };

  // Prevent default behavior for anchor tags
  const handleLinkClick = (e, path) => {
    e.preventDefault();
    navigate(path);
  };

  return (
    <nav className={styles.navbar} aria-label="Main Navigation">
      {/* Logo */}
      <div className={styles.logo} onClick={() => { handleMenuClick("home"); navigate("/"); }}>
        <img src={logo} alt="Company Logo" />
      </div>

      {/* Hamburger Menu Icon */}
      <div
        className={`${styles.hamburger} ${isMenuOpen ? styles.open : ""}`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle Menu"
        role="button"
        tabIndex={0}
      >
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
      </div>

      {/* Desktop Navigation */}
      <ul className={styles.navLinks}>
        <li className={`${styles.navItem} ${nav === "home" ? styles.active : ""}`}>
          <a href="/" onClick={(e) => handleLinkClick(e, "/")}>Home</a>
        </li>
        <li className={`${styles.navItem} ${nav === "about" ? styles.active : ""}`}>
          <a href="/about" onClick={(e) => handleLinkClick(e, "/about")}>About</a>
        </li>
        <li className={`${styles.navItem} ${nav === "services" ? styles.active : ""}`}>
          <a href="/services" onClick={(e) => handleLinkClick(e, "/services")}>Services</a>
        </li>
        <li className={`${styles.navItem} ${nav === "contact" ? styles.active : ""}`}>
          <a href="/contact" onClick={(e) => handleLinkClick(e, "/contact")}>Contact</a>
        </li>
      </ul>

      {/* Mobile Sidebar */}
      <div
        className={`${styles.sidebarOverlay} ${isMenuOpen ? styles.active : ""}`}
        onClick={() => setIsMenuOpen(false)}
        role="button"
        tabIndex={0}
        aria-label="Close Menu"
      ></div>
      <div className={`${styles.mobileSidebar} ${isMenuOpen ? styles.open : ""}`}>
        <div className={styles.sidebarHeader}>
          <div className={styles.logo} onClick={() => { handleMenuClick("home"); navigate("/"); }}>
            <img src={logo} alt="Company Logo" />
          </div>
          <div
            className={styles.closeBtn}
            onClick={() => setIsMenuOpen(false)}
            role="button"
            tabIndex={0}
            aria-label="Close Menu"
          >
            &times;
          </div>
        </div>
        <ul className={styles.sidebarMenu}>
          <li className={`${nav === "home" ? styles.active : ""}`}>
            <a href="/" onClick={(e) => { handleMenuClick("home"); handleLinkClick(e, "/"); }}>Home</a>
          </li>
          <li className={`${nav === "about" ? styles.active : ""}`}>
            <a href="/about" onClick={(e) => { handleMenuClick("about"); handleLinkClick(e, "/about"); }}>About</a>
          </li>
          <li className={`${nav === "services" ? styles.active : ""}`}>
            <a href="/services" onClick={(e) => { handleMenuClick("services"); handleLinkClick(e, "/services"); }}>Services</a>
          </li>
          <li className={`${nav === "contact" ? styles.active : ""}`}>
            <a href="/contact" onClick={(e) => { handleMenuClick("contact"); handleLinkClick(e, "/contact"); }}>Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};