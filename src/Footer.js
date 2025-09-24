

import React, { useState, useEffect } from 'react';
import { 
  Mail, Phone, MapPin, Clock, 
  Facebook, Twitter, Instagram, Youtube,
  BookOpen, Users, Award, Calendar,
  ChevronUp, Heart, ExternalLink
} from 'lucide-react';

const FooterSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState(null);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => {
      setShowBackToTop(window.pageYOffset > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Academic Programs', href: '#programs' },
    { name: 'Admissions', href: '#admissions' },
    { name: 'Faculty', href: '#faculty' },
    { name: 'Campus Life', href: '#campus' },
    { name: 'News & Events', href: '#news' }
  ];

  const programs = [
    { name: 'Elementary School', href: '#elementary' },
    { name: 'Middle School', href: '#middle' },
    { name: 'High School', href: '#high' },
    { name: 'Summer Programs', href: '#summer' },
    { name: 'After School Care', href: '#aftercare' },
    { name: 'Special Education', href: '#special' }
  ];

  // const resources = [
  //   { name: 'Student Portal', href: '#portal' },
  //   { name: 'Parent Resources', href: '#parents' },
  //   { name: 'Library', href: '#library' },
  //   { name: 'Career Services', href: '#careers' },
  //   { name: 'Alumni Network', href: '#alumni' },
  //   { name: 'Support Center', href: '#support' }
  // ];

  const socialLinks = [
    { 
      icon: Facebook, 
      name: 'Facebook', 
      href: '#facebook',
      color: 'hover:bg-blue-600'
    },
    { 
      icon: Twitter, 
      name: 'Twitter', 
      href: '#twitter',
      color: 'hover:bg-blue-400'
    },
    { 
      icon: Instagram, 
      name: 'Instagram', 
      href: '#instagram',
      color: 'hover:bg-pink-600'
    },
    { 
      icon: Youtube, 
      name: 'YouTube', 
      href: '#youtube',
      color: 'hover:bg-red-600'
    }
  ];

  const contactInfo = [
    {
      icon: Phone,
      text: '+91-xxxxx xxxxx',
      subtext: 'Mon - Sat, 8:00 AM - 4:00 PM'
    },
    {
      icon: Mail,
      text: 'karnikripaschool@gmail.com',
      subtext: 'We reply within 24 hours'
    },
    {
      icon: MapPin,
      text: 'Mandava, Sikar, Rajasthan',
      subtext: 'karni kripa school, 333031'
    }
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-green-900 text-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-green-500 rounded-full opacity-5 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-green-500 rounded-full opacity-5 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-green-400 rounded-full opacity-5 animate-bounce delay-500"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16 relative z-10">
        {/* Main Footer Content */}
        <div className={`grid lg:grid-cols-4 md:grid-cols-2 gap-12 mb-12 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          
          {/* School Info Section */}
          <div className="lg:col-span-1">
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-green-400 to-green-400 bg-clip-text text-transparent">
                Karni Kripa School
              </h3>
              <div className="w-16 h-1 bg-gradient-to-r from-green-400 to-green-600 rounded-full mb-6"></div>
              <p className="text-gray-300 leading-relaxed mb-6">
                Nurturing minds, fostering creativity, and empowering students to become global leaders since 1985.
              </p>
              
              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center p-3 bg-gradient-to-r from-green-500/10 to-green-500/10 rounded-xl border border-green-500/20">
                  <div className="text-xl font-bold text-green-400">2000+</div>
                  <div className="text-xs text-gray-400">Students</div>
                </div>
                <div className="text-center p-3 bg-gradient-to-r from-green-500/10 to-green-500/10 rounded-xl border border-green-500/20">
                  <div className="text-xl font-bold text-green-400">38+</div>
                  <div className="text-xs text-gray-400">Years</div>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className={`w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 ${social.color} group`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div 
            className="transform transition-all duration-500 hover:translate-y-1"
            onMouseEnter={() => setActiveSection('quick')}
            onMouseLeave={() => setActiveSection(null)}
          >
            <h4 className="text-xl font-bold mb-6 text-white flex items-center">
              <BookOpen className="w-5 h-5 mr-2 text-green-400" />
              Quick Links
            </h4>
            <div className="space-y-3">
              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="block text-gray-300 hover:text-green-400 transition-all duration-300 hover:translate-x-2 flex items-center group"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <span className="w-0 h-0.5 bg-green-400 transition-all duration-300 group-hover:w-4 mr-0 group-hover:mr-2"></span>
                  {link.name}
                  <ExternalLink className="w-3 h-3 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              ))}
            </div>
          </div>

          {/* Programs */}
          <div 
            className="transform transition-all duration-500 hover:translate-y-1"
            onMouseEnter={() => setActiveSection('programs')}
            onMouseLeave={() => setActiveSection(null)}
          >
            <h4 className="text-xl font-bold mb-6 text-white flex items-center">
              <Users className="w-5 h-5 mr-2 text-green-400" />
              Programs
            </h4>
            <div className="space-y-3">
              {programs.map((program, index) => (
                <a
                  key={index}
                  href={program.href}
                  className="block text-gray-300 hover:text-green-400 transition-all duration-300 hover:translate-x-2 flex items-center group"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <span className="w-0 h-0.5 bg-green-400 transition-all duration-300 group-hover:w-4 mr-0 group-hover:mr-2"></span>
                  {program.name}
                  <ExternalLink className="w-3 h-3 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              ))}
            </div>
          </div>

          {/* Contact & Resources */}
          <div className="space-y-8">
            {/* Contact Info */}
            <div>
              <h4 className="text-xl font-bold mb-6 text-white flex items-center">
                <Phone className="w-5 h-5 mr-2 text-green-400" />
                Contact Us
              </h4>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-3 group">
                    <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-green-500/20 to-green-500/20 rounded-lg flex items-center justify-center group-hover:from-green-500/30 group-hover:to-green-500/30 transition-all duration-300">
                      <info.icon className="w-4 h-4 text-green-400" />
                    </div>
                    <div>
                      <p className="text-gray-300 group-hover:text-green-400 transition-colors font-medium">
                        {info.text}
                      </p>
                      <p className="text-gray-500 text-sm">{info.subtext}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Resources */}
            {/* <div>
              <h4 className="text-xl font-bold mb-6 text-white flex items-center">
                <Award className="w-5 h-5 mr-2 text-green-400" />
                Resources
              </h4>
              <div className="space-y-3">
                {resources.slice(0, 4).map((resource, index) => (
                  <a
                    key={index}
                    href={resource.href}
                    className="block text-gray-300 hover:text-green-400 transition-all duration-300 hover:translate-x-2 flex items-center group"
                  >
                    <span className="w-0 h-0.5 bg-green-400 transition-all duration-300 group-hover:w-4 mr-0 group-hover:mr-2"></span>
                    {resource.name}
                    <ExternalLink className="w-3 h-3 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                ))}
              </div>
            </div> */}
          </div>
        </div>

        {/* Newsletter Signup */}
        {/* <div className={`bg-gradient-to-r from-green-600/20 to-green-600/20 backdrop-blur-sm border border-green-500/30 rounded-3xl p-8 mb-12 transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="text-center md:text-left md:flex md:items-center md:justify-between">
            <div className="mb-6 md:mb-0">
              <h4 className="text-2xl font-bold mb-2 text-white">Stay Connected</h4>
              <p className="text-gray-300">Get updates on school events, programs, and important announcements.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 md:ml-8">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-6 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-green-400 focus:ring-4 focus:ring-green-400/20 transition-all duration-300 backdrop-blur-sm"
              />
              <button className="px-8 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold rounded-xl hover:from-green-600 hover:to-green-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                Subscribe
              </button>
            </div>
          </div>
        </div> */}

        {/* Bottom Bar */}
        <div className={`border-t border-gray-700 pt-8 transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-400">
              <span>&copy; 2025 Karni Kripa School. Made with</span>
              <Heart className="w-4 h-4 text-red-500 animate-pulse" />
              <span>for education</span>
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <a href="#privacy" className="hover:text-green-400 transition-colors">Privacy Policy</a>
              <a href="#terms" className="hover:text-green-400 transition-colors">Terms of Service</a>
              <a href="#accessibility" className="hover:text-green-400 transition-colors">Accessibility</a>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 z-50 flex items-center justify-center group"
        >
          <ChevronUp className="w-6 h-6 group-hover:animate-bounce" />
        </button>
      )}

      {/* Floating Animation Elements */}
      <div className="fixed bottom-32 right-16 opacity-5 pointer-events-none">
        <Calendar className="w-24 h-24 text-green-400 animate-pulse" />
      </div>
    </footer>
  );
};

export default FooterSection;