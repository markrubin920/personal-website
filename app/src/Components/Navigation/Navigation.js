import React, { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";
import './Navigation.css';

// Build a nav bar for the top of the screen
const Navigation = () => {
    
// Initialize use state hooks to deal with different screen sizes  
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

// Toggle menu functions --> Only for when the iPhone size
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

    // Deals with laptop screen case
    if (!isSmallScreen)
    {
        return (
            // Top bar outline
            <header className='nav-bar'>
                {/* Top Left Logo */}
                <div className='logo-div'>
                    <NavLink to = "/home" className="logo">Mark Rubin</NavLink>
                </div>
                {/* Top Right Navigation Elements */}
                <div className="nav-list">
                    <NavLink to = "/experience" className="nav-page">Experience</NavLink>
                    <NavLink to = "/extracurriculars" className="nav-page">Extracurriculars</NavLink>
                    <NavLink to = "/projects" className="nav-page">Projects</NavLink>
                    <NavLink to = "/contact" className="nav-page">Contact</NavLink>
                    <NavLink to = "/resume" className="nav-page">Resume</NavLink> {/* Need to make a download link */}
                </div>
            </header>
        )
    }

    else if (isMenuOpen)
    {
        // Fix this so it's vertical
        return (
            <h1>Not done</h1>

            // <div>
            // <button className='nav-logo' onClick={toggleMenu}>
            //     Nav Button
            //     {/* <img src=""></img> Need a logo element*/ }
            // </button>
            // <nav className="Nav-bar-outer">
            //     <div className = "Nav-bar">
            //         <ul className = "Nav-list">
            //             <li className="Nav-page">
            //                 <NavLink to = "/home">Home</NavLink>
            //             </li>
            //             <li className="Nav-page">
            //                 <NavLink to = "/experience">Experience</NavLink>
            //             </li>
            //             <li className="Nav-page">
            //                 <NavLink to = "/extracurriculars">Extracurriculars</NavLink>
            //             </li>
            //             <li className="Nav-page">
            //                 <NavLink to = "/about">About</NavLink>
            //             </li>
            //             <li className="Nav-page">
            //                 <NavLink to = "/contact">Contact</NavLink>
            //             </li>
            //         </ul>
            //     </div>
            // </nav>
            // </div>
        )
    }
    else
    {
        // Fix it to have the right logo
        return (
            <h1>Not done2</h1>
        )
    }
};

export default Navigation;