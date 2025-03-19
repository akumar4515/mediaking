import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./nav.css";
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
    <nav className="navbar" aria-label="Main Navigation">
      {/* Logo */}
      <div className="logo" onClick={() => { handleMenuClick("home"); navigate("/"); }}>
        <img src={logo} alt="Company Logo" />
      </div>

      {/* Hamburger Menu Icon */}
      <div
        className={`hamburger ${isMenuOpen ? "open" : ""}`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle Menu"
        role="button"
        tabIndex={0}
      >
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      {/* Desktop Navigation */}
      <ul className="nav-links">
        <li className={`nav ${nav === "home" ? "active" : ""}`}>
          <a href="/" onClick={(e) => handleLinkClick(e, "/")}>Home</a>
        </li>
        <li className={`nav ${nav === "about" ? "active" : ""}`}>
          <a href="/about" onClick={(e) => handleLinkClick(e, "/about")}>About</a>
        </li>
        <li className={`nav ${nav === "services" ? "active" : ""}`}>
          <a href="/services" onClick={(e) => handleLinkClick(e, "/services")}>Services</a>
        </li>
        <li className={`nav ${nav === "contact" ? "active" : ""}`}>
          <a href="/contact" onClick={(e) => handleLinkClick(e, "/contact")}>Contact</a>
        </li>
      </ul>

      {/* Mobile Sidebar */}
      <div
        className={`sidebar-overlay ${isMenuOpen ? "active" : ""}`}
        onClick={() => setIsMenuOpen(false)}
        role="button"
        tabIndex={0}
        aria-label="Close Menu"
      ></div>
      <div className={`mobile-sidebar ${isMenuOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          <div className="logo" onClick={() => { handleMenuClick("home"); navigate("/"); }}>Mediaking</div>
          <div
            className="close-btn"
            onClick={() => setIsMenuOpen(false)}
            role="button"
            tabIndex={0}
            aria-label="Close Menu"
          >
            &times;
          </div>
        </div>
        <ul className="sidebar-menu">
          <li className={`${nav === "home" ? "active" : ""}`}>
            <a href="/" onClick={(e) => { handleMenuClick("home"); handleLinkClick(e, "/"); }}>Home</a>
          </li>
          <li className={`${nav === "about" ? "active" : ""}`}>
            <a href="/about" onClick={(e) => { handleMenuClick("about"); handleLinkClick(e, "/about"); }}>About</a>
          </li>
          <li className={`${nav === "services" ? "active" : ""}`}>
            <a href="/services" onClick={(e) => { handleMenuClick("services"); handleLinkClick(e, "/services"); }}>Services</a>
          </li>
          <li className={`${nav === "contact" ? "active" : ""}`}>
            <a href="/contact" onClick={(e) => { handleMenuClick("contact"); handleLinkClick(e, "/contact"); }}>Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};