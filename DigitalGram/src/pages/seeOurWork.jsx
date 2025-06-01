import React from 'react';
import { ArrowLeft, Instagram, Facebook, Linkedin, Twitter, Youtube, BarChart2, Users, Award, TrendingUp } from 'lucide-react';
import NavBar from '../components/navBar';
import Footbar from '../components/footbar';
import '../css/seeOurWork.css';

const SeeOurWork = ({ navigateTo }) => {
  return (
    <div className="app-container">
      <nav className="nav-container">
        <NavBar navigateTo={navigateTo} />
      </nav>

      {/* Work Hero Section */}
      <section className="work-hero">
        <div className="work-hero-content">
          <button 
            className="back-button"
            onClick={() => navigateTo('home')}
          >
            <ArrowLeft className="back-icon" />
            Back to Home
          </button>
          <h1 className="work-title">
            Our <span>Success</span> Stories
          </h1>
          <p className="work-subtitle">
            Discover how we've helped businesses transform their social media presence and achieve remarkable results.
          </p>
        </div>
      </section>

      {/* Featured Work */}
      <section className="featured-work">
        <h2>Featured <span>Case Studies</span></h2>
        
        <div className="case-studies-grid">
          <div className="case-study-card featured">
            <div className="case-image">
              <div className="platform-icon">
                <Instagram />
              </div>
            </div>
            <div className="case-content">
              <div className="case-header">
                <h3>Fashion Brand Transformation</h3>
                <span className="case-tag">Instagram</span>
              </div>
              <p className="case-description">
                A boutique fashion brand came to us with 5,000 Instagram followers and stagnant growth. 
                Within 6 months, we grew their account to 30,000 followers with a 300% increase in 
                engagement and a 250% boost in website traffic from social media.
              </p>
              <div className="case-metrics">
                <div className="metric">
                  <TrendingUp className="metric-icon" />
                  <div>
                    <h4>500%</h4>
                    <p>Follower Growth</p>
                  </div>
                </div>
                <div className="metric">
                  <BarChart2 className="metric-icon" />
                  <div>
                    <h4>300%</h4>
                    <p>Engagement Rate</p>
                  </div>
                </div>
                <div className="metric">
                  <Users className="metric-icon" />
                  <div>
                    <h4>250%</h4>
                    <p>Traffic Increase</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="case-study-card">
            <div className="case-image linkedin">
              <div className="platform-icon">
                <Linkedin />
              </div>
            </div>
            <div className="case-content">
              <div className="case-header">
                <h3>B2B Lead Generation</h3>
                <span className="case-tag">LinkedIn</span>
              </div>
              <p className="case-description">
                A B2B SaaS company struggled to generate leads through social media. Our LinkedIn 
                strategy generated 200+ qualified leads in the first quarter, resulting in $1.2M 
                in new business within 12 months.
              </p>
              <div className="case-metrics">
                <div className="metric">
                  <Users className="metric-icon" />
                  <div>
                    <h4>200+</h4>
                    <p>Qualified Leads</p>
                  </div>
                </div>
                <div className="metric">
                  <Award className="metric-icon" />
                  <div>
                    <h4>$1.2M</h4>
                    <p>Revenue Generated</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="case-study-card">
            <div className="case-image facebook">
              <div className="platform-icon">
                <Facebook />
              </div>
            </div>
            <div className="case-content">
              <div className="case-header">
                <h3>E-commerce Sales Boost</h3>
                <span className="case-tag">Facebook</span>
              </div>
              <p className="case-description">
                An e-commerce store was spending $5,000/month on ads with minimal ROI. We restructured 
                their Facebook ad campaigns, resulting in a 400% increase in ROAS and $250,000 in 
                additional revenue over 3 months.
              </p>
              <div className="case-metrics">
                <div className="metric">
                  <TrendingUp className="metric-icon" />
                  <div>
                    <h4>400%</h4>
                    <p>Increase in ROAS</p>
                  </div>
                </div>
                <div className="metric">
                  <Award className="metric-icon" />
                  <div>
                    <h4>$250K</h4>
                    <p>Additional Revenue</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="case-study-card">
            <div className="case-image youtube">
              <div className="platform-icon">
                <Youtube />
              </div>
            </div>
            <div className="case-content">
              <div className="case-header">
                <h3>YouTube Channel Growth</h3>
                <span className="case-tag">YouTube</span>
              </div>
              <p className="case-description">
                A content creator with 5,000 subscribers was struggling to grow their channel. Our content 
                strategy and optimization helped them reach 100,000 subscribers in 6 months and secure 
                multiple brand sponsorships.
              </p>
              <div className="case-metrics">
                <div className="metric">
                  <Users className="metric-icon" />
                  <div>
                    <h4>20x</h4>
                    <p>Subscriber Growth</p>
                  </div>
                </div>
                <div className="metric">
                  <BarChart2 className="metric-icon" />
                  <div>
                    <h4>500%</h4>
                    <p>View Increase</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="case-study-card">
            <div className="case-image twitter">
              <div className="platform-icon">
                <Twitter />
              </div>
            </div>
            <div className="case-content">
              <div className="case-header">
                <h3>Twitter Brand Awareness</h3>
                <span className="case-tag">Twitter</span>
              </div>
              <p className="case-description">
                A tech startup needed to build brand awareness quickly. Our Twitter strategy helped them 
                gain 50,000 followers in 4 months, with multiple viral tweets reaching over 1 million 
                impressions each.
              </p>
              <div className="case-metrics">
                <div className="metric">
                  <TrendingUp className="metric-icon" />
                  <div>
                    <h4>50K</h4>
                    <p>New Followers</p>
                  </div>
                </div>
                <div className="metric">
                  <Users className="metric-icon" />
                  <div>
                    <h4>1M+</h4>
                    <p>Impressions per Tweet</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="work-cta">
        <h2>Ready to Be Our Next Success Story?</h2>
        <p>Let's transform your social media presence and drive real business results.</p>
        <button className="primary-button">Start Your Campaign</button>
      </section>

      {/* Footer */}
      <Footbar />
    </div>
  );
};

export default SeeOurWork;