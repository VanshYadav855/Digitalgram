import React, { useState } from 'react';
import './App.css'
import { 
  Instagram, 
  Facebook, 
  Twitter, 
  Youtube, 
  Heart,
  Menu, 
  X,
  Share2
} from 'lucide-react';

const DigitalGramWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const services = [
    {
      icon: Instagram,
      title: "Instagram Marketing",
      description: "Grow your Instagram presence with engaging content, Stories, Reels, and targeted advertising campaigns.",
      features: [
        "Content Creation",
        "Story Design",
        "Reels Production",
        "Instagram Ads"
      ]
    },
    {
      icon: Facebook,
      title: "Facebook Advertising",
      description: "Reach your ideal audience with precision-targeted Facebook and Meta advertising campaigns.",
      features: [
        "Ad Campaign Setup",
        "Audience Targeting",
        "Creative Design"
      ]
    }
  ];

  const stats = [
    { number: "2M+", label: "Followers Generated" },
    { number: "150+", label: "Brands Served" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "500%", label: "Average Growth" }
  ];

  const testimonials = [
    {
      quote: "DigitalGram transformed our Instagram presence completely. We went from 10K to 500K followers in just 8 months with authentic engagement.",
      author: "Jessica Martinez",
      position: "Brand Manager, StyleBoutique",
      platform: "Instagram"
    },
    {
      quote: "Their Facebook advertising strategy delivered incredible results. We achieved 400% ROAS and expanded to 5 new cities.",
      author: "David Chen",
      position: "Marketing Director, FoodieChain",
      platform: "Facebook"
    },
    {
      quote: "Professional, creative, and results-driven. DigitalGram helped us build a strong social media foundation from scratch.",
      author: "Sarah Williams",
      position: "CEO, TechInnovate",
      platform: "Multi-Platform"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-pink-100">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-pink-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex items-center space-x-2">
                <Heart className="h-6 w-6 text-pink-500" />
                <span className="text-xl font-bold text-pink-500">DigitalGram</span>
              </div>
            </div>
            <button className="text-gray-700" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center bg-pink-50 px-4 py-2 rounded-full mb-6">
            <span className="text-sm text-pink-500 font-medium">#1 Social Media Marketing Agency</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Grow Your Brand on <span className="text-pink-500">Social Media</span>
          </h1>
          <p className="text-gray-600 text-lg mb-8">
            We help businesses build authentic connections, increase engagement, and drive sales through strategic social media marketing across all platforms.
          </p>
          <div className="flex justify-center space-x-6 mb-8">
            <Instagram className="h-6 w-6 text-gray-600" />
            <Facebook className="h-6 w-6 text-gray-600" />
            <Twitter className="h-6 w-6 text-gray-600" />
            <Youtube className="h-6 w-6 text-gray-600" />
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-pink-500 text-white px-6 py-3 rounded-full font-medium">
              Start Your Campaign
            </button>
            <button className="border border-gray-200 px-6 py-3 rounded-full font-medium flex items-center justify-center gap-2">
              See Our Work
              <Share2 className="h-4 w-4" />
            </button>
          </div>
          <div className="mt-8 inline-flex items-center bg-white px-4 py-2 rounded-full shadow-sm">
            <Heart className="h-4 w-4 text-pink-500 mr-2" />
            <span className="text-sm font-medium">10K+ Likes</span>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-4xl font-bold text-pink-500 mb-2">{stat.number}</div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our <span className="text-pink-500">Social Media</span> Services
          </h2>
          <div className="space-y-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-sm">
                  <div className="flex items-start gap-6">
                    <div className="bg-pink-50 p-3 rounded-xl">
                      <Icon className="h-6 w-6 text-pink-500" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                      <p className="text-gray-600 mb-4">{service.description}</p>
                      <div className="grid grid-cols-2 gap-3">
                        {service.features.map((feature, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-pink-500" />
                            <span className="text-sm text-gray-600">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-pink-50">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-sm">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-pink-500">★</span>
                      ))}
                    </div>
                    <p className="text-gray-800 italic mb-4">"{testimonial.quote}"</p>
                    <div className="flex items-center gap-4">
                      <div className="bg-pink-500 w-8 h-8 rounded-full flex items-center justify-center text-white font-medium">
                        {testimonial.author[0]}
                      </div>
                      <div>
                        <p className="font-medium">{testimonial.author}</p>
                        <p className="text-sm text-gray-600">{testimonial.position}</p>
                      </div>
                    </div>
                  </div>
                  <span className="text-pink-500 text-sm">{testimonial.platform}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default DigitalGramWebsite;



