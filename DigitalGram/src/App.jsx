import React, { useState } from 'react';
import './css/home.css'
import { 
  Instagram, 
  Facebook, 
  Twitter, 
  Youtube, 
  Heart,
  Share2,
  X
} from 'lucide-react';

const DigitalGramWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="app-container">
      {/* Navigation */}
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

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-badge">
          <span>#1 Social Media Marketing Agency</span>
        </div>
        <h1 className="hero-title">
          Grow Your Brand on <span>Social Media</span>
        </h1>
        <p className="hero-description">
          We help businesses build authentic connections, increase engagement, and drive sales through strategic social media marketing across all platforms.
        </p>
        <div className="social-icons">
          <Instagram />
          <Facebook />
          <Twitter />
          <Youtube />
        </div>
        <div className="hero-buttons">
          <button className="primary-button">Start Your Campaign</button>
          <button className="secondary-button">
            See Our Work
            <Share2 className="button-icon" />
          </button>
        </div>
        <div className="likes-counter">
          <Heart className="heart-icon" />
          <span>10K+ Likes</span>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stats-grid">
          <div className="stat-card">
            <h3>2M+</h3>
            <p>Followers Generated</p>
          </div>
          <div className="stat-card">
            <h3>150+</h3>
            <p>Brands Served</p>
          </div>
          <div className="stat-card">
            <h3>98%</h3>
            <p>Client Satisfaction</p>
          </div>
          <div className="stat-card">
            <h3>500%</h3>
            <p>Average Growth</p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <h2>Our <span>Social Media</span> Services</h2>
        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">
              <Instagram />
            </div>
            <h3>Instagram Marketing</h3>
            <p>Grow your Instagram presence with engaging content, Stories, Reels, and targeted advertising campaigns.</p>
            <div className="features-grid">
              <div className="feature-item"><span className="dot"></span>Content Creation</div>
              <div className="feature-item"><span className="dot"></span>Story Design</div>
              <div className="feature-item"><span className="dot"></span>Reels Production</div>
              <div className="feature-item"><span className="dot"></span>Instagram Ads</div>
            </div>
          </div>
          <div className="service-card">
            <div className="service-icon">
              <Facebook />
            </div>
            <h3>Facebook Advertising</h3>
            <p>Reach your ideal audience with precision-targeted Facebook and Meta advertising campaigns.</p>
            <div className="features-grid">
              <div className="feature-item"><span className="dot"></span>Ad Campaign Setup</div>
              <div className="feature-item"><span className="dot"></span>Audience Targeting</div>
              <div className="feature-item"><span className="dot"></span>Creative Design</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <div className="stars">★★★★★</div>
            <p>"DigitalGram transformed our Instagram presence completely. We went from 10K to 500K followers in just 8 months with authentic engagement."</p>
            <div className="testimonial-author">
              <div className="author-avatar">J</div>
              <div className="author-info">
                <h4>Jessica Martinez</h4>
                <p>Brand Manager, StyleBoutique</p>
              </div>
              <span className="platform">Instagram</span>
            </div>
          </div>
          {/* Add more testimonial cards here */}
        </div>
      </section>
    </div>
  );
};

export default DigitalGramWebsite;



