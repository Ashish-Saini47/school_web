import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, MessageSquare, Users } from 'lucide-react';

const ContactUs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Call Us',
      details: '+91-xxxxxx-xxxxx',
      subtext: 'Mon - Sat, 8:00 AM - 4:00 PM',
      color: 'from-green-400 to-green-600'
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: 'kkss@gmail.com',
      subtext: 'We reply within 24 hours',
      color: 'from-green-500 to-teal-600'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: 'Mandawa, Rajsthan',
      subtext: 'KKSS, 333031',
      color: 'from-green-400 to-green-600'
    },
    {
      icon: Clock,
      title: 'Office Hours',
      details: 'Monday - Saturday',
      subtext: '8:00 AM - 4:00 PM',
      color: 'from-green-500 to-green-600'
    }
  ];

  return (
    <div id="contact" className="min-h-screen bg-gradient-to-br from-gray-50 to-green-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h1 className="text-5xl font-bold text-gray-800 mb-4 bg-gradient-to-r from-green-600 to-green-600 bg-clip-text text-transparent">
            Get In Touch
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-green-600 mx-auto rounded-full mb-4"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Have questions about admissions, programs, or want to schedule a visit? 
            We'd love to hear from you and help your child's educational journey.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information Cards */}
          <div className={`space-y-8 transform transition-all duration-700 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            <div className="grid md:grid-cols-2 gap-6">
              {contactInfo.map((item, index) => (
                <div
                  key={index}
                  className={`bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer ${
                    activeCard === index ? 'ring-4 ring-green-400' : ''
                  }`}
                  onMouseEnter={() => setActiveCard(index)}
                  onMouseLeave={() => setActiveCard(null)}
                  style={{
                    animationDelay: `${index * 200}ms`
                  }}
                >
                  <div className={`bg-gradient-to-r ${item.color} p-6`}>
                    <div className="flex items-center text-white">
                      <item.icon className="w-8 h-8 mr-3" />
                      <h3 className="text-xl font-bold">{item.title}</h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-800 font-semibold text-lg mb-1">{item.details}</p>
                    <p className="text-gray-600">{item.subtext}</p>
                    
                    {/* Animated Bottom Border */}
                    <div className="mt-4 h-1 bg-gray-200 rounded-full overflow-hidden">
                      <div className={`h-full bg-gradient-to-r ${item.color} transform transition-transform duration-500 ${
                        activeCard === index ? 'translate-x-0' : '-translate-x-full'
                      }`}></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Map Card */}
            {/* <div className={`bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-700 hover:scale-105 hover:shadow-2xl ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="bg-gradient-to-r from-green-500 to-green-600 p-6">
                <div className="flex items-center text-white">
                  <MapPin className="w-8 h-8 mr-3" />
                  <h2 className="text-2xl font-bold">Our Campus</h2>
                </div>
              </div>
              <div className="h-48 bg-gradient-to-br from-green-100 via-green-50 to-green-100 flex items-center justify-center relative overflow-hidden group cursor-pointer">
                <div className="absolute inset-0 bg-green-200 opacity-20 transform scale-0 group-hover:scale-100 transition-transform duration-700 rounded-full"></div>
                <div className="text-center z-10">
                  <MapPin className="w-16 h-16 text-green-600 mx-auto mb-4 transform group-hover:bounce" />
                  <p className="text-gray-700 font-semibold group-hover:text-green-700 transition-colors">
                    View Our Campus Location
                  </p>
                  <p className="text-sm text-gray-500 mt-2">Click to open in maps</p>
                </div>
              </div>
            </div> */}
          </div>

          {/* Contact Form */}
          <div className={`bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-700 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            <div className="bg-gradient-to-r from-green-500 to-green-600 p-6">
              <div className="flex items-center text-white">
                <MessageSquare className="w-8 h-8 mr-3" />
                <h2 className="text-2xl font-bold">Send us a Message</h2>
              </div>
            </div>

            <div className="p-8">
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="group">
                    <label className="block text-sm font-semibold text-gray-700 mb-2 group-focus-within:text-green-600 transition-colors">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:ring-4 focus:ring-green-100 transition-all duration-300 outline-none hover:border-green-300 text-gray-700"
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div className="group">
                    <label className="block text-sm font-semibold text-gray-700 mb-2 group-focus-within:text-green-600 transition-colors">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:ring-4 focus:ring-green-100 transition-all duration-300 outline-none hover:border-green-300 text-gray-700"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="group">
                    <label className="block text-sm font-semibold text-gray-700 mb-2 group-focus-within:text-green-600 transition-colors">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:ring-4 focus:ring-green-100 transition-all duration-300 outline-none hover:border-green-300 text-gray-700"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  <div className="group">
                    <label className="block text-sm font-semibold text-gray-700 mb-2 group-focus-within:text-green-600 transition-colors">
                      Subject
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:ring-4 focus:ring-green-100 transition-all duration-300 outline-none hover:border-green-300 cursor-pointer text-gray-700"
                      required
                    >
                      <option value="">Select a subject</option>
                      <option value="admissions">Admissions Inquiry</option>
                      <option value="programs">Academic Programs</option>
                      <option value="visit">Schedule a Visit</option>
                      <option value="general">General Information</option>
                      <option value="support">Technical Support</option>
                    </select>
                  </div>
                </div>

                <div className="group">
                  <label className="block text-sm font-semibold text-gray-700 mb-2 group-focus-within:text-green-600 transition-colors">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="5"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:ring-4 focus:ring-green-100 transition-all duration-300 outline-none hover:border-green-300 resize-none text-gray-700"
                    placeholder="Tell us how we can help you..."
                    required
                  ></textarea>
                </div>

                <button
                  onClick={handleSubmit}
                  disabled={isSubmitted}
                  className={`w-full py-4 px-8 rounded-xl font-bold text-white transition-all duration-300 transform hover:scale-105 focus:scale-95 ${
                    isSubmitted
                      ? 'bg-green-500 cursor-default'
                      : 'bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 shadow-lg hover:shadow-xl'
                  }`}
                >
                  {isSubmitted ? (
                    <span className="flex items-center justify-center space-x-2">
                      <CheckCircle className="w-6 h-6 animate-bounce" />
                      <span>Message Sent Successfully!</span>
                    </span>
                  ) : (
                    <span className="flex items-center justify-center space-x-2">
                      <Send className="w-6 h-6 transform group-hover:translate-x-1 transition-transform" />
                      <span>Send Message</span>
                    </span>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        {/* <div className={`mt-16 bg-gradient-to-r from-green-600 to-green-600 rounded-3xl p-8 text-white transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-2">Why Choose Us?</h2>
            <p className="text-green-100">Excellence in education and student support</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="transform transition-transform duration-300 hover:scale-110">
              <div className="text-4xl font-bold mb-2">24hrs</div>
              <div className="text-green-100">Response Time</div>
            </div>
            <div className="transform transition-transform duration-300 hover:scale-110">
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="text-green-100">Satisfaction Rate</div>
            </div>
            <div className="transform transition-transform duration-300 hover:scale-110">
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-green-100">Support Staff</div>
            </div>
            <div className="transform transition-transform duration-300 hover:scale-110">
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-green-100">Available</div>
            </div>
          </div>
        </div> */}

        {/* Floating Animation Elements
        <div className="fixed top-20 right-10 opacity-10">
          <MessageSquare className="w-32 h-32 text-green-500 animate-pulse" />
        </div> */}
        {/* <div className="fixed bottom-20 left-10 opacity-10">
          <Users className="w-24 h-24 text-green-500 animate-bounce" />
        </div> */}
      </div>
    </div>
  );
};

export default ContactUs;