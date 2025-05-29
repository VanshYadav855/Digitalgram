import React, { useState, useEffect } from 'react';
import './App.css'
import services from './components/home';
import {
  ArrowRight, Play, Star, Users, TrendingUp, Target, Instagram, Facebook, Twitter, Youtube, MessageCircle, Camera, BarChart3, Mail, CheckCircle, Award, Heart, ChevronDown, Menu, X, Sparkles, Zap, Eye, Share2
} from 'lucide-react';


const DigitalGramWebsite = () => {
 

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-pink-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex items-center space-x-3">
                {/* Logo placeholder - you can replace this with your actual logo */}
                <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl flex items-center justify-center">
                  <Heart className="h-6 w-6 text-white" />
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-pink-600 bg-clip-text text-transparent">
                  DigitalGram
                </span>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-pink-500 font-medium transition-colors">Home</a>
              <a href="#services" className="text-gray-700 hover:text-pink-500 font-medium transition-colors">Services</a>
              <a href="#portfolio" className="text-gray-700 hover:text-pink-500 font-medium transition-colors">Portfolio</a>
              <a href="#about" className="text-gray-700 hover:text-pink-500 font-medium transition-colors">About</a>
              <a href="#contact" className="text-gray-700 hover:text-pink-500 font-medium transition-colors">Contact</a>
              <button className="bg-gradient-to-r from-pink-500 to-pink-600 text-white px-6 py-2 rounded-full hover:shadow-lg hover:shadow-pink-200 transition-all duration-300">
                Get Started
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-700"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-pink-100">
              <div className="flex flex-col space-y-4">
                <a href="#home" className="text-gray-700 hover:text-pink-500 font-medium">Home</a>
                <a href="#services" className="text-gray-700 hover:text-pink-500 font-medium">Services</a>
                <a href="#portfolio" className="text-gray-700 hover:text-pink-500 font-medium">Portfolio</a>
                <a href="#about" className="text-gray-700 hover:text-pink-500 font-medium">About</a>
                <a href="#contact" className="text-gray-700 hover:text-pink-500 font-medium">Contact</a>
                <button className="bg-gradient-to-r from-pink-500 to-pink-600 text-white px-6 py-2 rounded-full w-full">
                  Get Started
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 bg-gradient-to-br from-pink-50 via-white to-pink-25 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-pink-100 rounded-full text-pink-700 text-sm font-medium mb-6">
                <Sparkles className="h-4 w-4 mr-2" />
                #1 Social Media Marketing Agency
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Grow Your Brand on
                <span className="bg-gradient-to-r from-pink-500 to-pink-600 bg-clip-text text-transparent">
                  {" "}Social Media
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                We help businesses build authentic connections, increase engagement, and drive sales through strategic social media marketing across all platforms.
              </p>

              {/* Social Platform Icons */}
              <div className="flex items-center space-x-4 mb-8">
                {socialPlatforms.map((platform, index) => {
                  const Icon = platform.icon;
                  return (
                    <div key={index} className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center hover:shadow-md transition-shadow">
                      <Icon className={`h-6 w-6 ${platform.color}`} />
                    </div>
                  );
                })}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-to-r from-pink-500 to-pink-600 text-white px-8 py-4 rounded-full hover:shadow-xl hover:shadow-pink-200 transition-all duration-300 flex items-center justify-center">
                  Start Your Campaign
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
                <button className="border border-pink-300 text-pink-600 px-8 py-4 rounded-full hover:bg-pink-50 transition-all duration-300 flex items-center justify-center">
                  <Play className="mr-2 h-5 w-5" />
                  See Our Work
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-pink-100 to-pink-50 rounded-3xl p-8">
                <img
                  src="/api/placeholder/600/400"
                  alt="Social Media Dashboard"
                  className="rounded-2xl shadow-2xl"
                />
              </div>
              {/* Floating Elements */}
              <div className="absolute -top-4 -left-4 bg-white p-4 rounded-2xl shadow-lg border border-pink-100">
                <Heart className="h-8 w-8 text-pink-500" />
                <p className="text-sm font-semibold mt-2 text-gray-700">10K+ Likes</p>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-2xl shadow-lg border border-pink-100">
                <Share2 className="h-8 w-8 text-pink-500" />
                <p className="text-sm font-semibold mt-2 text-gray-700">5K Shares</p>
              </div>
              <div className="absolute top-1/2 -right-8 bg-white p-3 rounded-xl shadow-lg border border-pink-100">
                <Eye className="h-6 w-6 text-pink-500" />
                <p className="text-xs font-semibold mt-1 text-gray-700">1M Views</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="p-6">
                <div className="text-4xl font-bold bg-gradient-to-r from-pink-500 to-pink-600 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gradient-to-br from-pink-25 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our <span className="bg-gradient-to-r from-pink-500 to-pink-600 bg-clip-text text-transparent">Social Media Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive social media marketing solutions designed to build your brand, engage your audience, and drive real results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className={`bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer border-2 ${activeService === index ? 'border-pink-300 transform scale-105 shadow-pink-100' : 'border-transparent'
                    }`}
                  onMouseEnter={() => setActiveService(index)}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-pink-100 to-pink-50 rounded-2xl flex items-center justify-center mb-6">
                    <Icon className="h-8 w-8 text-pink-500" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-pink-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Success <span className="bg-gradient-to-r from-pink-500 to-pink-600 bg-clip-text text-transparent">Stories</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real results for real brands. See how we've helped businesses grow their social media presence and achieve their goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {portfolio.map((project, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-2xl mb-6">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-pink-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 text-white">
                      <p className="text-2xl font-bold">{project.result}</p>
                      <p className="text-pink-200">{project.metric}</p>
                    </div>
                  </div>
                </div>
                <div className="px-2">
                  <p className="text-pink-500 font-semibold text-sm mb-2">{project.category}</p>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-pink-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What Our <span className="bg-gradient-to-r from-pink-500 to-pink-600 bg-clip-text text-transparent">Clients Say</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg border border-pink-100">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-pink-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-pink-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{testimonial.name}</p>
                      <p className="text-gray-600 text-sm">{testimonial.role}, {testimonial.company}</p>
                    </div>
                  </div>
                  <span className="text-pink-500 text-sm font-medium px-3 py-1 bg-pink-50 rounded-full">
                    {testimonial.platform}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-pink-500 to-pink-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Go Viral?
          </h2>
          <p className="text-xl text-pink-100 mb-8">
            Let's create a social media strategy that turns your followers into customers and your brand into a movement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-pink-600 px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all duration-300">
              Get Free Strategy Call
            </button>
            <button className="border border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-pink-600 transition-all duration-300">
              View Our Packages
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl flex items-center justify-center">
                  <Heart className="h-6 w-6 text-white" />
                </div>
                <span className="text-2xl font-bold">DigitalGram</span>
              </div>
              <p className="text-gray-400 mb-6">
                Transforming brands through creative social media marketing and authentic community building.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors cursor-pointer">
                  <Instagram className="h-5 w-5" />
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors cursor-pointer">
                  <Facebook className="h-5 w-5" />
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors cursor-pointer">
                  <Twitter className="h-5 w-5" />
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors cursor-pointer">
                  <Youtube className="h-5 w-5" />
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6">Services</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="hover:text-white cursor-pointer">Instagram Marketing</li>
                <li className="hover:text-white cursor-pointer">Facebook Advertising</li>
                <li className="hover:text-white cursor-pointer">Twitter Management</li>
                <li className="hover:text-white cursor-pointer">YouTube Growth</li>
                <li className="hover:text-white cursor-pointer">Content Creation</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6">Company</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="hover:text-white cursor-pointer">About Us</li>
                <li className="hover:text-white cursor-pointer">Our Team</li>
                <li className="hover:text-white cursor-pointer">Case Studies</li>
                <li className="hover:text-white cursor-pointer">Blog</li>
                <li className="hover:text-white cursor-pointer">Careers</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
              <ul className="space-y-3 text-gray-400">
                <li>hello@digitalgram.com</li>
                <li>+1 (555) 123-4567</li>
                <li>123 Social Street<br />Marketing City, MC 12345</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 DigitalGram. All rights reserved. Made with ❤️ for social media success.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Add this export
export default DigitalGramWebsite;
