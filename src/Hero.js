// import React from "react";
// import SpinningWheel from "./SpinningWheel";

// const Hero = () => {
//   return (
//     <div
//       className="relative h-screen bg-cover bg-center"
//       style={{ backgroundImage: "url('/images/hero_image.jpeg')" }}
//     >
//       <div className="absolute inset-0 bg-black opacity-50"></div>
//       <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
//         <h1 className="text-5xl font-bold">Welcome to Our School</h1>
//         <p className="mt-4 text-xl">
//           A place where students can learn and grow.
//         </p>
//       </div>
//       <SpinningWheel />
//     </div>
//   );
// };

// export default Hero;




import React, { useState, useEffect } from 'react';

const SchoolHeroSection = () => {
  const [currentCard, setCurrentCard] = useState(0);
  const [activeNav, setActiveNav] = useState('home');

  const cards = [
    { title: "Academic Excellence", subtitle: "World-class education", content: "Delivering outstanding academic programs with experienced faculty and modern curriculum." },
    { title: "Sports & Athletics", subtitle: "Build champions", content: "State-of-the-art sports facilities and professional coaching for all-round development." },
    { title: "Arts & Culture", subtitle: "Creative expression", content: "Nurturing creativity through music, dance, drama, and visual arts programs." },
    { title: "Science Labs", subtitle: "Innovation hub", content: "Cutting-edge laboratories for hands-on learning and scientific exploration." },
    { title: "Library & Resources", subtitle: "Knowledge center", content: "Extensive collection of books, digital resources, and quiet study spaces." },
    { title: "Student Life", subtitle: "Memorable moments", content: "Vibrant campus life with clubs, events, and lifelong friendships." }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'gallery', 'facilities', 'contact'];
      const offsets = sections.map(id => {
        const element = document.getElementById(id);
        return element ? element.offsetTop : 0;
      });
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      for (let i = sections.length - 1; i >= 0; i--) {
        if (scrollPosition >= offsets[i]) {
          setActiveNav(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCard((prev) => (prev + 1) % cards.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const getCardTransform = (index) => {
    const angle = (index - currentCard) * 60; // 360/6 = 60 degrees per card
    const radius = 200;
    const x = Math.cos((angle * Math.PI) / 180) * radius;
    const y = Math.sin((angle * Math.PI) / 180) * radius;
    
    return {
      transform: `translate(${x}px, ${y}px) rotate(${angle}deg)`,
      zIndex: index === currentCard ? 10 : 1,
    };
  };

  const getCardOpacity = (index) => {
    const diff = Math.abs(index - currentCard);
    const adjustedDiff = Math.min(diff, cards.length - diff);
    
    if (adjustedDiff === 0) return 1; // Center card
    if (adjustedDiff <= 1) return 0.8; // Adjacent cards
    if (adjustedDiff <= 2) return 0.4; // Visible but blurred
    return 0.1; // Hidden cards
  };

  const getCardScale = (index) => {
    const diff = Math.abs(index - currentCard);
    const adjustedDiff = Math.min(diff, cards.length - diff);
    
    if (adjustedDiff === 0) return 1.1; // Center card larger
    if (adjustedDiff <= 1) return 1; // Adjacent cards normal
    return 0.8; // Other cards smaller
  };

  return (
    <div className="relative h-screen bg-gradient-to-br from-white via-green-50 to-orange-50 overflow-hidden">
      {/* Floating Navbar */}
      <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 bg-white/90 backdrop-blur-md rounded-full px-8 py-4 shadow-lg border border-white/20">
        <div className="flex items-center space-x-8">
          <div className="text-2xl font-bold text-green-600">
            <img src="/images/KKSS_logo.png" alt="School Logo" className="h-12" />
          </div>
          <div className="hidden md:flex space-x-6">
            <a 
              href="#home" 
              className={`relative px-4 py-2 rounded-full transition-all duration-300 ${
                activeNav === 'home' 
                  ? 'text-green-600 bg-green-50' 
                  : 'text-gray-700 hover:text-green-600 hover:bg-green-50'
              }`}
              onClick={() => setActiveNav('home')}
            >
              Home
              {activeNav === 'home' && (
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-green-600 rounded-full"></div>
              )}
            </a>
            <a 
              href="#about" 
              className={`relative px-4 py-2 rounded-full transition-all duration-300 ${
                activeNav === 'about' 
                  ? 'text-green-600 bg-green-50' 
                  : 'text-gray-700 hover:text-green-600 hover:bg-green-50'
              }`}
              onClick={() => setActiveNav('about')}
            >
              About Us
              {activeNav === 'about' && (
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-green-600 rounded-full"></div>
              )}
            </a>
            <a 
              href="#gallery" 
              className={`relative px-4 py-2 rounded-full transition-all duration-300 ${
                activeNav === 'gallery' 
                  ? 'text-green-600 bg-green-50' 
                  : 'text-gray-700 hover:text-green-600 hover:bg-green-50'
              }`}
              onClick={() => setActiveNav('gallery')}
            >
              Gallery
              {activeNav === 'gallery' && (
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-green-600 rounded-full"></div>
              )}
            </a>
            <a 
              href="#facilities" 
              className={`relative px-4 py-2 rounded-full transition-all duration-300 ${
                activeNav === 'facilities' 
                  ? 'text-green-600 bg-green-50' 
                  : 'text-gray-700 hover:text-green-600 hover:bg-green-50'
              }`}
              onClick={() => setActiveNav('facilities')}
            >
              Facilities
              {activeNav === 'facilities' && (
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-green-600 rounded-full"></div>
              )}
            </a>
            <a 
              href="#contact" 
              className={`relative px-4 py-2 rounded-full transition-all duration-300 ${
                activeNav === 'contact' 
                  ? 'text-green-600 bg-green-50' 
                  : 'text-gray-700 hover:text-green-600 hover:bg-green-50'
              }`}
              onClick={() => setActiveNav('contact')}
            >
              Contact Us
              {activeNav === 'contact' && (
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-green-600 rounded-full"></div>
              )}
            </a>
          </div>
          <button className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition-colors">
            Apply Now
          </button>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="container mx-auto px-6 pt-32 pb-20 flex items-center h-screen">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full h-full">
          
          {/* Left Part - Text Content */}
          <div className="flex items-center justify-center h-full">
            <div className="space-y-8 max-w-lg">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-7xl font-bold text-green-600 leading-tight">
                  Shape Your
                  <span className="block text-gray-900">Future</span>
                </h1>
                <h2 className="text-2xl lg:text-3xl font-semibold text-orange-500">
                  Excellence in Education Since 1985
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Join thousands of successful graduates who started their journey at our institution. 
                  Experience world-class education with state-of-the-art facilities and dedicated faculty.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-green-600 text-white px-8 py-4 rounded-lg hover:bg-green-700 transition-all transform hover:scale-105 shadow-lg">
                  Explore Programs
                </button>
                <button className="border-2 border-orange-500 text-orange-500 px-8 py-4 rounded-lg hover:bg-orange-500 hover:text-white transition-all transform hover:scale-105">
                  Virtual Tour
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">2000+</div>
                  <div className="text-gray-600">Students</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">150+</div>
                  <div className="text-gray-600">Faculty</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">98%</div>
                  <div className="text-gray-600">Success Rate</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Part - Spinning Card Wheel */}
          <div className="flex justify-center items-center h-full">
            <div className="relative w-96 h-96 lg:w-[500px] lg:h-[500px]">
              
              {/* Center hub */}
              {/* <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-gradient-to-r from-green-500 to-orange-500 rounded-full shadow-lg z-20 flex items-center justify-center">
                <div className="w-8 h-8 bg-white rounded-full"></div>
              </div> */}

              {/* Cards arranged in circle */}
              {cards.map((card, index) => (
                <div
                  key={index}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-1000 ease-in-out cursor-pointer"
                  style={{
                    ...getCardTransform(index),
                    opacity: getCardOpacity(index),
                    scale: getCardScale(index),
                    filter: index === currentCard ? 'blur(0px)' : 'blur(1px)',
                  }}
                  onClick={() => setCurrentCard(index)}
                >
                  <div className="w-32 h-48 bg-white rounded-xl shadow-xl border border-gray-200 p-4 hover:shadow-2xl transition-all duration-300">
                    <div className="h-full flex flex-col justify-center items-center text-center space-y-2">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-lg mb-2">
                        {index + 1}
                      </div>
                      <h3 className="font-bold text-gray-800 text-sm leading-tight">
                        {card.title}
                      </h3>
                      <p className="text-orange-500 text-xs font-semibold">
                        {card.subtitle}
                      </p>
                      <p className="text-gray-600 text-xs leading-tight">
                        {card.content.slice(0, 50)}...
                      </p>
                    </div>
                  </div>
                </div>
              ))}

              {/* Navigation dots */}
              {/* <div className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {cards.map((_, index) => (
                  <button
                    key={index}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentCard
                        ? 'bg-green-600 scale-125'
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                    onClick={() => setCurrentCard(index)}
                  />
                ))}
              </div> */}
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-green-200 rounded-full opacity-50 animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-12 h-12 bg-orange-200 rounded-full opacity-50 animate-bounce"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-green-300 rounded-full opacity-30 animate-pulse"></div>
      
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-green-600 via-transparent to-orange-600"></div>
      </div>
    </div>
  );
};

export default SchoolHeroSection;