import React, { useState } from 'react';
import { X } from 'lucide-react';

const NavBar = ({ navigateTo }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavigation = (page) => {
    if (navigateTo) {
      navigateTo(page);
    } else {
      // If navigateTo prop is not provided, use window.location
      if (page === 'home') {
        window.location.href = '/';
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="nav-container">
      <div className="nav-content">
        <div className="logo" onClick={() => handleNavigation('home')} style={{cursor: 'pointer'}}>
          <img src="/logo.png" alt="DigitalGram Logo" className="logo-image" />
          <span>DigitalGram</span>
        </div>
        <button 
          className="menu-button" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <>
              <span></span>
              <span></span>
              <span></span>
            </>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="mobile-menu">
          <a href="#" onClick={() => handleNavigation('home')}>Home</a>
          <a href="#services" onClick={() => setIsMenuOpen(false)}>Services</a>
          <a href="#" onClick={() => handleNavigation('about')}>About</a>
          <a href="#" onClick={() => handleNavigation('work')}>Our Work</a>
          <a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a>
          <div className="mobile-cta">
            <button className="primary-button">Get Started</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;