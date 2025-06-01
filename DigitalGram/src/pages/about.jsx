import React from 'react';
import { Heart, Users, Target, Award, ArrowLeft } from 'lucide-react';
import NavBar from '../components/navBar';
import '../css/about.css';

const About = ({ navigateTo }) => {
  return (
    <div className="app-container">
      <nav className="nav-container">
        <NavBar navigateTo={navigateTo} />
      </nav>

      {/* About Hero Section */}
      <section className="about-hero">
        <div className="about-hero-content">
          <button 
            className="back-button"
            onClick={() => window.history.back()}
          >
            <ArrowLeft className="back-icon" />
            Back to Home
          </button>
          <h1 className="about-title">
            About <span>DigitalGram</span>
          </h1>
          <p className="about-subtitle">
            We're passionate about helping businesses thrive in the digital world through strategic social media marketing.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="our-story">
        <div className="story-content">
          <div className="story-text">
            <h2>Our Story</h2>
            <p>
              Founded in 2020, DigitalGram emerged from a simple belief: every business deserves to have a powerful social media presence. What started as a small team of social media enthusiasts has grown into a full-service digital marketing agency.
            </p>
            <p>
              We've helped over 500+ businesses transform their online presence, generating millions in revenue and building authentic communities around their brands.
            </p>
          </div>
          <div className="story-stats">
            <div className="stat-item">
              <h3>500+</h3>
              <p>Happy Clients</p>
            </div>
            <div className="stat-item">
              <h3>2M+</h3>
              <p>Followers Generated</p>
            </div>
            <div className="stat-item">
              <h3>95%</h3>
              <p>Client Retention</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="our-values">
        <h2>Our Values</h2>
        <div className="values-grid">
          <div className="value-card">
            <Heart className="value-icon" />
            <h3>Authenticity</h3>
            <p>We believe in creating genuine connections between brands and their audiences through authentic storytelling.</p>
          </div>
          <div className="value-card">
            <Users className="value-icon" />
            <h3>Community</h3>
            <p>Building strong, engaged communities is at the heart of everything we do.</p>
          </div>
          <div className="value-card">
            <Target className="value-icon" />
            <h3>Results</h3>
            <p>We're committed to delivering measurable results that drive real business growth.</p>
          </div>
          <div className="value-card">
            <Award className="value-icon" />
            <h3>Excellence</h3>
            <p>We strive for excellence in every campaign, every post, and every interaction.</p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <h2>Meet Our Team</h2>
        <div className="team-grid">
          <div className="team-member">
            <div className="member-avatar">S</div>
            <h3>Sarah Johnson</h3>
            <p>Founder & CEO</p>
            <span>10+ years in digital marketing</span>
          </div>
          <div className="team-member">
            <div className="member-avatar">M</div>
            <h3>Mike Chen</h3>
            <p>Creative Director</p>
            <span>Expert in visual storytelling</span>
          </div>
          <div className="team-member">
            <div className="member-avatar">E</div>
            <h3>Emily Rodriguez</h3>
            <p>Strategy Lead</p>
            <span>Data-driven campaign optimization</span>
          </div>
          <div className="team-member">
            <div className="member-avatar">D</div>
            <h3>David Kim</h3>
            <p>Content Manager</p>
            <span>Viral content specialist</span>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta">
        <h2>Ready to Grow Your Brand?</h2>
        <p>Let's work together to create something amazing for your business.</p>
        <button className="primary-button">Start Your Journey</button>
      </section>
    </div>
  );
};

export default About;