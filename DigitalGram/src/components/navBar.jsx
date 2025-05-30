import React, { useState } from 'react';
import { Heart, X } from 'lucide-react';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="nav-container">
      <div className="nav-content">
        <div className="logo">
          <Heart className="logo-icon" />
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
          <a href="#home" onClick={() => setIsMenuOpen(false)}>Home</a>
          <a href="#services" onClick={() => setIsMenuOpen(false)}>Services</a>
          <a href="#about" onClick={() => setIsMenuOpen(false)}>About</a>
          <a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a>
          <button className="mobile-cta" onClick={() => setIsMenuOpen(false)}>
            Start Your Campaign
          </button>
        </div>
      )}
    </nav>
  );
};

export default NavBar;