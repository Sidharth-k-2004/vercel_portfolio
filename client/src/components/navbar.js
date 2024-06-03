import React, { useState, useEffect } from 'react';
import './navbar.css';
// import logo from './path-to-logo.png';
import linkedinIcon from '../screens/linkenin-icon.jpg';
import instagramIcon from '../screens/instagram-icon.jpg';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 100) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleHome = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleSkills = () => {
    // const skillsSection = document.getElementById('skills-section');
    // if (skillsSection) {
    //   skillsSection.scrollIntoView({ behavior: 'smooth' });
    // }
    window.scrollTo({
      top: 600,
      behavior: 'smooth'
    });
  };

  const handleProjects = () => {
    window.scrollTo({
      top: 1275,
      behavior: 'smooth'
    });
  };

  return (
    <div className='nav-bar-box'>
      <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="navbar-container">
          <div className="logo">
            {/* <img src={logo} alt="Logo" /> */}
              
          </div>
          <nav className="nav-links">
            {/* <a href="#">Home</a>
            <a href="#">Skills</a>
            <a href="#">Projects</a> */}
            <Link to="/">

            <button onClick={handleHome}>Home</button>
            <button onClick={handleSkills}>Skills</button>
            <button onClick={handleProjects}>Projects</button>
            </Link>
          </nav>
          <div className="nav-right">
            <a href="https://www.linkedin.com/in/sidharth-k-5b4121278/" target="_blank" rel="noopener noreferrer">
              <img src={linkedinIcon} alt="LinkedIn" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <img src={instagramIcon} alt="Instagram" />
            </a>
            {/* <button className="connect-button" onClick={navigator.navigate("")}>Let's Connect</button> */}
            <Link to="/connect">
              <button className="connect-button">Let's Connect</button>
            </Link>
          </div>
        </div>
      </header>
      
    </div>
  );
};

export default NavBar;
