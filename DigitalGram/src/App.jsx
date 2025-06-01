// Update the logo in the NavBar component
import React, { useState } from 'react';
import './css/home.css'
import {
  Instagram,
  Facebook,
  Twitter,
  Youtube,
  Share2,
  Linkedin,
  Heart,
  PenTool,
  TrendingUp,
  BarChart2,
  Users,
  Award
} from 'lucide-react';
import NavBar from './components/navBar';
import About from './pages/about';
import SeeOurWork from './pages/seeOurWork';
import Footbar from './components/footbar';

const DigitalGramWebsite = () => {
  const [currentPage, setCurrentPage] = useState('home');

  // Function to handle navigation
  const navigateTo = (page) => {
    setCurrentPage(page);
  };

  // Render different pages based on currentPage state
  if (currentPage === 'about') {
    return <About navigateTo={navigateTo} />;
  }
  
  if (currentPage === 'work') {
    return <SeeOurWork navigateTo={navigateTo} />;
  }

  return (
    <div className="app-container">
      <nav className="nav-container">
        <NavBar navigateTo={navigateTo} />
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

      {/* Services Section - Updated with subtitle */}
      <section className="services-section">
        <h2>Our <span>Social Media</span> Services</h2>
        <p className="section-subtitle">Strategic solutions tailored to elevate your brand's digital presence across all platforms</p>
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
            <h3>Facebook Marketing</h3>
            <p>Drive engagement and sales with strategic Facebook marketing and advanced targeting solutions.</p>
            <div className="features-grid">
              <div className="feature-item"><span className="dot"></span>Ad Campaign Setup</div>
              <div className="feature-item"><span className="dot"></span>Custom Audiences</div>
              <div className="feature-item"><span className="dot"></span>Retargeting</div>
              <div className="feature-item"><span className="dot"></span>Analytics & ROI</div>
            </div>
          </div>
          <div className="service-card">
            <div className="service-icon">
              <Linkedin />
            </div>
            <h3>LinkedIn Marketing</h3>
            <p>Build your professional brand and generate B2B leads through strategic LinkedIn marketing.</p>
            <div className="features-grid">
              <div className="feature-item"><span className="dot"></span>Profile Optimization</div>
              <div className="feature-item"><span className="dot"></span>B2B Lead Generation</div>
              <div className="feature-item"><span className="dot"></span>Sponsored Content</div>
              <div className="feature-item"><span className="dot"></span>InMail Campaigns</div>
            </div>
          </div>
          <div className="service-card">
            <div className="service-icon">
              <Twitter />
            </div>
            <h3>Twitter Marketing</h3>
            <p>Engage with your audience in real-time and build a strong Twitter presence.</p>
            <div className="features-grid">
              <div className="feature-item"><span className="dot"></span>Tweet Strategy</div>
              <div className="feature-item"><span className="dot"></span>Trend Monitoring</div>
              <div className="feature-item"><span className="dot"></span>Engagement Growth</div>
              <div className="feature-item"><span className="dot"></span>Twitter Ads</div>
            </div>
          </div>
          <div className="service-card">
            <div className="service-icon">
              <Youtube />
            </div>
            <h3>YouTube Marketing</h3>
            <p>Create engaging video content and grow your YouTube channel with our expert strategies.</p>
            <div className="features-grid">
              <div className="feature-item"><span className="dot"></span>Video Production</div>
              <div className="feature-item"><span className="dot"></span>SEO Optimization</div>
              <div className="feature-item"><span className="dot"></span>Community Building</div>
              <div className="feature-item"><span className="dot"></span>Video Ads</div>
            </div>
          </div>
          <div className="service-card">
            <div className="service-icon">
              <PenTool />
            </div>
            <h3>Content Marketing</h3>
            <p>Create compelling content that resonates with your audience across all social platforms.</p>
            <div className="features-grid">
              <div className="feature-item"><span className="dot"></span>Content Strategy</div>
              <div className="feature-item"><span className="dot"></span>Visual Design</div>
              <div className="feature-item"><span className="dot"></span>Copywriting</div>
              <div className="feature-item"><span className="dot"></span>Analytics</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="testimonials-container">
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

            <div className="testimonial-card">
              <div className="stars">★★★★★</div>
              <p>"Our Facebook ad campaigns saw a 300% increase in ROI after partnering with DigitalGram. Their targeting strategy is exceptional!"</p>
              <div className="testimonial-author">
                <div className="author-avatar">M</div>
                <div className="author-info">
                  <h4>Michael Chen</h4>
                  <p>Marketing Director, TechPro</p>
                </div>
                <span className="platform">Facebook</span>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="stars">★★★★★</div>
              <p>"The LinkedIn marketing strategy developed by DigitalGram helped us generate 150+ quality B2B leads within the first quarter."</p>
              <div className="testimonial-author">
                <div className="author-avatar">S</div>
                <div className="author-info">
                  <h4>Sarah Johnson</h4>
                  <p>CEO, ConsultPro Solutions</p>
                </div>
                <span className="platform">LinkedIn</span>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="stars">★★★★★</div>
              <p>"Our YouTube channel grew from 5K to 100K subscribers in 6 months. DigitalGram's content strategy was a game-changer!"</p>
              <div className="testimonial-author">
                <div className="author-avatar">R</div>
                <div className="author-info">
                  <h4>Robert Wilson</h4>
                  <p>Content Creator, TechReviews</p>
                </div>
                <span className="platform">YouTube</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Story Section */}
      <section className="success-story-section">
        <h2>Success <span>Stories</span></h2>
        <p className="section-subtitle">Real results from real clients who trusted us with their social media presence</p>
        
        <div className="success-stories-grid">
          <div className="success-story-card">
            <div className="story-image">
              <div className="image-placeholder">
                <TrendingUp className="story-icon" />
              </div>
            </div>
            <div className="story-content">
              <h3>500% Growth in 6 Months</h3>
              <p className="story-client">Fashion Retailer</p>
              <p className="story-description">
                A boutique fashion brand came to us with 5,000 Instagram followers and stagnant growth. 
                Within 6 months, we grew their account to 30,000 followers with a 300% increase in 
                engagement and a 250% boost in website traffic from social media.
              </p>
              <div className="story-metrics">
                <div className="metric">
                  <BarChart2 className="metric-icon" />
                  <div>
                    <h4>500%</h4>
                    <p>Follower Growth</p>
                  </div>
                </div>
                <div className="metric">
                  <Users className="metric-icon" />
                  <div>
                    <h4>300%</h4>
                    <p>Engagement Rate</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="success-story-card">
            <div className="story-image">
              <div className="image-placeholder">
                <Award className="story-icon" />
              </div>
            </div>
            <div className="story-content">
              <h3>$1.2M in Revenue from LinkedIn</h3>
              <p className="story-client">B2B Software Company</p>
              <p className="story-description">
                A B2B SaaS company struggled to generate leads through social media. Our LinkedIn 
                strategy generated 200+ qualified leads in the first quarter, resulting in $1.2M 
                in new business within 12 months.
              </p>
              <div className="story-metrics">
                <div className="metric">
                  <BarChart2 className="metric-icon" />
                  <div>
                    <h4>200+</h4>
                    <p>Qualified Leads</p>
                  </div>
                </div>
                <div className="metric">
                  <Users className="metric-icon" />
                  <div>
                    <h4>$1.2M</h4>
                    <p>Revenue Generated</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="success-cta">
          <button className="primary-button" onClick={() => navigateTo('work')}>
            See More Success Stories
          </button>
        </div>
      </section>
      
      {/* Footer */}
      <Footbar />
    </div>
  );
};

export default DigitalGramWebsite;



