import React, { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../css/home.css";
import { useLocation } from "react-router-dom";

export const Navigation=()=>{
    const navigate=useNavigate();
    const [nav, setNav]=useState("home");
    const location = useLocation(); 
    // Inside your component
const [isMenuOpen, setIsMenuOpen] = useState(false);

// Close menu on window resize
useEffect(() => {
  const handleResize = () => {
    if (window.innerWidth > 720) {
      setIsMenuOpen(false);
    }
  };
  window.addEventListener('resize', handleResize);
  return () => window.removeEventListener('resize', handleResize);
}, []);

const handleMenuClick = (section) => {
  setNav(section);
  setIsMenuOpen(false);
}

useEffect(() => {
  const path = location.pathname;
  switch (path) {
    case "/":
      setNav("home");
      break;
    case "/about":
      setNav("about");
      break;
    case "/services":
      setNav("services");
      break;
      case "/service-form":
      setNav("services");
      break;
    case "/contact":
      setNav("contact");
      break;
    default:
      setNav("home");
  }
}, [location.pathname]); // Update when path changes


    return(
        <nav className="navbar">
        <div className="logo" onClick={() => {handleMenuClick("home");navigate('/');}}>Mediaking</div>
        
        {/* Hamburger Menu Icon */}
        <div 
          className={`hamburger ${isMenuOpen ? 'open' : ''}`} 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      
        {/* Desktop Navigation */}
        <ul className="nav-links">
          <li className={`nav ${nav == "home" ? "active" : ""}`}>
            <a onClick={() => {navigate('/');}}>Home</a>
          </li>
          <li className={`nav ${nav == "about" ? "active" : ""}`}>
            <a onClick={() => {navigate('/about');}}>About</a>
          </li>
          <li className={`nav ${nav == "services" ? "active" : ""}`}>
            <a  onClick={() => {navigate('/services');}}>Services</a>
          </li>
          <li   className={`nav ${nav == "contact" ? "active" : ""}`}>
            <a onClick={() => {navigate('/contact');}}  >Contact</a>
          </li>
        </ul>
      
        {/* Mobile Sidebar */}
        <div className={`sidebar-overlay ${isMenuOpen ? 'active' : ''}`} onClick={() => setIsMenuOpen(false)}></div>
        <div className={`mobile-sidebar ${isMenuOpen ? 'open' : ''}`}>
          <div className="sidebar-header">
            <div className="logo" onClick={() => {handleMenuClick("home");navigate('/');}}>Mediaking</div>
            <div className="close-btn" onClick={() => setIsMenuOpen(false)}>&times;</div>
          </div>
          <ul className="sidebar-menu">
            <li className={`${nav == "home" ? "active" : ""}`}>
              <a  onClick={() => {handleMenuClick("home");navigate('/');}}>Home</a>
            </li>
            <li  className={`${nav == "about" ? "active" : ""}`}>
              <a onClick={() => {handleMenuClick("about");navigate('/about');}}>About</a>
            </li>
            <li  className={`${nav == "services" ? "active" : ""}`}>
              <a  onClick={() => {handleMenuClick("services");navigate('/services');}}>Services</a>
            </li>
            <li  className={`${nav == "contact" ? "active" : ""}`}>
              <a  onClick={() => {handleMenuClick("contact");navigate('/contact');}}>Contact</a>
            </li>
          </ul>
        </div>
      </nav>

    )
}