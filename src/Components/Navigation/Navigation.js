import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import NavIcon from "../../Media/Hamburger-Menu-Icon.png";
import XIcon from "../../Media/X-icon.png";
import Resume from "../../Media/PDFs/Resume.pdf";
import "./Navigation.css";

// Build a nav bar for the top of the screen
const Navigation = () => {
  // Initialize use state hooks to deal with different screen sizes
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 800);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle menu functions --> Only for when the iPhone size
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 800);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Deals with laptop screen case
  if (!isSmallScreen) {
    return (
      // Top bar outline
      <header className="nav-bar">
        {/* Top Left Logo */}
        <div className="logo-div">
          <NavLink to="/home" className="logo">
            Mark Rubin
          </NavLink>
        </div>
        {/* Top Right Navigation Elements */}
        <div className="nav-list">
          <NavLink
            to="/experience"
            className="nav-page"
            activeClassName="active-c"
          >
            Experiences
          </NavLink>
          <NavLink
            to="/projects"
            className="nav-page"
            activeClassName="active-c"
          >
            Projects
          </NavLink>
          <NavLink to="/about" className="nav-page" activeClassName="active-c">
            About
          </NavLink>
          <NavLink
            to="/contact"
            className="nav-page"
            activeClassName="active-c"
          >
            Contact
          </NavLink>
          <a href={Resume} download="Mark-Rubin-Resume.pdf" className="resume">
            Resume
          </a>
        </div>
      </header>
    );
  } else if (isMenuOpen) {
    return (
      <div className="vertical-nav-bar">
        <button onClick={toggleMenu} className="vnav-button">
          <img src={XIcon} alt="ex" className="nav-icon-exit" />
        </button>
        <div className="nav-v-list">
          <ul className="nav-v-list-ul">
            <NavLink to="/home" className="nl" onClick = {toggleMenu}>
              <li className="nav-v-list-li">Home</li>
            </NavLink>
            <NavLink to="/experience" className="nl" onClick = {toggleMenu}>
              <li className="nav-v-list-li">Experiences</li>
            </NavLink>
            <NavLink to="/projects" className="nl" onClick = {toggleMenu}>
              <li className="nav-v-list-li">Projects</li>
            </NavLink>
            <NavLink to="/about" className="nl" onClick = {toggleMenu}>
              <li className="nav-v-list-li">About</li>
            </NavLink>
            <NavLink to="/contact" className="nl" onClick = {toggleMenu}>
              <li className="nav-v-list-li">Contact</li>
            </NavLink>
            <a href={Resume} download="Mark-Rubin-Resume.pdf" className="nl">
              <li className="nav-v-list-li">Resume</li>
            </a>
          </ul>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div className="logo-div-vertical">
          <NavLink to="/home" className="logo">
            Mark Rubin
          </NavLink>
        </div>
        <div className="nav-icon-div">
          <button onClick={toggleMenu} className="button-bkg">
            <img src={NavIcon} alt="Navigation icon" className="nav-icon"></img>
          </button>
        </div>
      </div>
    );
  }
};

export default Navigation;
