import React from 'react';
import { Heart, Instagram, Facebook, Twitter, Youtube, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import '../css/footbar.css';

const Footbar = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <div className="footer-logo">
            <Heart className="footer-logo-icon" />
            <span>DigitalGram</span>
          </div>
          <p className="footer-description">
            We help businesses build authentic connections, increase engagement, and drive sales through strategic social media marketing.
          </p>
          <div className="footer-social">
            <a href="#" className="social-icon"><Instagram /></a>
            <a href="#" className="social-icon"><Facebook /></a>
            <a href="#" className="social-icon"><Twitter /></a>
            <a href="#" className="social-icon"><Youtube /></a>
            <a href="#" className="social-icon"><Linkedin /></a>
          </div>
        </div>
        
        <div className="footer-section">
          <h3 className="footer-heading">Quick Links</h3>
          <ul className="footer-links">
            <li><a href="#">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Our Work</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3 className="footer-heading">Services</h3>
          <ul className="footer-links">
            <li><a href="#">Instagram Marketing</a></li>
            <li><a href="#">Facebook Marketing</a></li>
            <li><a href="#">LinkedIn Marketing</a></li>
            <li><a href="#">Twitter Marketing</a></li>
            <li><a href="#">YouTube Marketing</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3 className="footer-heading">Contact Us</h3>
          <div className="contact-info">
            <div className="contact-item">
              <Mail className="contact-icon" />
              <span>hello@digitalgram.com</span>
            </div>
            <div className="contact-item">
              <Phone className="contact-icon" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="contact-item">
              <MapPin className="contact-icon" />
              <span>123 Social Ave, Digital City, CA 94103</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} DigitalGram. All rights reserved.</p>
        <div className="footer-bottom-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footbar;