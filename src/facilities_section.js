import React, { useState, useEffect } from 'react';
import { Monitor, Beaker, Music, Users, Brain, BookOpen, Trophy, Palette, Heart, Utensils, MapPin, Clock, Award, Users2, Play, Pause } from 'lucide-react';

const SchoolFacilities = () => {
  const [currentRotation, setCurrentRotation] = useState(0);
  const [activeFacilityIndex, setActiveFacilityIndex] = useState(0);
  const [isRotating, setIsRotating] = useState(true);
    const [rotationSpeed, setRotationSpeed] = useState(3000);
  
  const facilities = [
    {
      id: 1,
      name: "Computer Lab",
      shortDesc: "Digital Learning Hub",
      description: "Our state-of-the-art computer laboratory is equipped with 40 high-performance workstations, each running the latest software for programming, design, and digital literacy. Students learn coding languages like Python, Java, and web development technologies in this modern environment.",
      icon: Monitor,
      color: "bg-blue-500",
      features: [
        "40 High-speed computers with latest processors",
        "High-speed fiber internet connectivity", 
        "Software: Adobe Creative Suite, Microsoft Office, Programming IDEs",
        "Interactive smart board for demonstrations",
        "Air conditioning and ergonomic furniture",
        "Dedicated server for network-based learning"
      ],
      location: "Second Floor, Block A",
      timing: "8:00 AM - 6:00 PM",
      capacity: "40 Students",
      incharge: "Ms. Sarah Johnson, M.Tech Computer Science"
    },
    {
      id: 2,
      name: "Science Laboratory",
      shortDesc: "Research & Discovery",
      description: "Three specialized laboratories for Physics, Chemistry, and Biology provide hands-on learning experiences. Fully equipped with modern instruments, safety equipment, and specimen collections to conduct experiments safely and effectively.",
      icon: Beaker,
      color: "bg-purple-500",
      features: [
        "Separate Physics, Chemistry & Biology labs",
        "Advanced microscopes and laboratory equipment",
        "Chemical storage with proper ventilation",
        "Emergency safety showers and eye wash stations",
        "Digital pH meters, spectrophotometers",
        "Preserved specimens and 3D models"
      ],
      location: "Ground Floor, Science Block",
      timing: "9:00 AM - 5:00 PM",
      capacity: "30 Students per lab",
      incharge: "Dr. Michael Chen, Ph.D Chemistry"
    },
    {
      id: 3,
      name: "Music Room",
      shortDesc: "Harmony & Rhythm",
      description: "A professionally designed music studio with acoustic treatment, featuring a wide range of instruments and recording equipment. Students explore various musical genres and develop their talents in a inspiring environment.",
      icon: Music,
      color: "bg-pink-500",
      features: [
        "Soundproof acoustic panels throughout",
        "Piano, keyboards, guitars, drums, and percussion",
        "Professional audio recording setup",
        "Individual practice booths",
        "Music theory smart board",
        "Performance stage area with lighting"
      ],
      location: "First Floor, Arts Wing",
      timing: "8:00 AM - 7:00 PM",
      capacity: "25 Students",
      incharge: "Prof. Emma Rodriguez, Masters in Music"
    },
    {
      id: 4,
      name: "Dance Studio",
      shortDesc: "Movement & Expression",
      description: "A spacious dance studio with professional-grade flooring, wall-to-wall mirrors, and state-of-the-art sound system. Students learn various dance forms including classical, contemporary, hip-hop, and traditional cultural dances.",
      icon: Users,
      color: "bg-red-500",
      features: [
        "Professional sprung wooden dance floor",
        "Full-wall mirrors with safety backing",
        "Premium sound system with wireless connectivity",
        "Ballet barres at multiple heights",
        "Costume and prop storage room",
        "Air conditioning and ventilation system"
      ],
      location: "Ground Floor, Arts Wing",
      timing: "7:00 AM - 8:00 PM",
      capacity: "35 Students",
      incharge: "Ms. Priya Sharma, Certified Dance Instructor"
    },
    {
      id: 5,
      name: "Smart Classroom",
      shortDesc: "Interactive Learning",
      description: "Technology-enhanced learning spaces with interactive whiteboards, tablets, and collaborative learning tools. These classrooms make learning more engaging through multimedia presentations and interactive activities.",
      icon: Brain,
      color: "bg-indigo-500",
      features: [
        "75-inch interactive touch displays",
        "Student tablets for collaborative work",
        "Wireless presentation capabilities",
        "High-quality audio-visual systems",
        "Climate-controlled environment",
        "Flexible seating arrangements"
      ],
      location: "All floors, Multiple blocks",
      timing: "8:00 AM - 6:00 PM",
      capacity: "35 Students per room",
      incharge: "IT Department Team"
    },
    {
      id: 6,
      name: "Library",
      shortDesc: "Knowledge Repository",
      description: "A comprehensive library with over 15,000 books, digital resources, and quiet study areas. Features include research databases, e-books, periodicals, and comfortable reading spaces designed to foster a love for reading and research.",
      icon: BookOpen,
      color: "bg-emerald-500",
      features: [
        "15,000+ books across all subjects",
        "Digital library with e-books and journals",
        "Quiet study carrels and group discussion rooms",
        "Research databases and online resources",
        "Newspaper and magazine section",
        "Librarian assistance and research support"
      ],
      location: "First Floor, Central Block",
      timing: "8:00 AM - 7:00 PM",
      capacity: "100 Students",
      incharge: "Ms. Lisa Parker, M.L.I.S"
    },
    {
      id: 7,
      name: "Sports Complex",
      shortDesc: "Athletic Excellence",
      description: "Comprehensive sports facilities including basketball court, football field, cricket pitch, and indoor games area. Our complex promotes physical fitness, teamwork, and competitive spirit among students.",
      icon: Trophy,
      color: "bg-yellow-500",
      features: [
        "Full-size basketball and volleyball courts",
        "Football field with proper goal posts",
        "Cricket pitch with practice nets",
        "Indoor games: Table tennis, badminton, chess",
        "Gymnasium with fitness equipment",
        "Swimming pool with safety equipment"
      ],
      location: "Campus Grounds",
      timing: "6:00 AM - 8:00 PM",
      capacity: "200+ Students",
      incharge: "Coach Mark Thompson, Sports Science Degree"
    },
    {
      id: 8,
      name: "Art Studio",
      shortDesc: "Creative Expression",
      description: "A bright, well-ventilated art studio with natural lighting and professional art supplies. Students explore various art forms including painting, sketching, sculpture, and digital art in this inspiring creative space.",
      icon: Palette,
      color: "bg-orange-500",
      features: [
        "Natural north-facing windows for optimal lighting",
        "Easels, canvases, and professional art supplies",
        "Pottery wheel and kiln for ceramics",
        "Digital art tablets and design software",
        "Storage for artwork and supplies",
        "Display area for student exhibitions"
      ],
      location: "Second Floor, Arts Wing",
      timing: "8:00 AM - 6:00 PM",
      capacity: "30 Students",
      incharge: "Ms. Angela Foster, Fine Arts Graduate"
    }
  ];

  // Auto-rotate the wheel
  useEffect(() => {
    if (!isRotating) return;
    
    const interval = setInterval(() => {
      setCurrentRotation(prev => prev + (360 / facilities.length));
      setActiveFacilityIndex(prev => (prev + 1) % facilities.length);
    }, rotationSpeed);

    return () => clearInterval(interval);
  }, [isRotating, rotationSpeed, facilities.length]);

  const getCardPosition = (index, total, rotation = 0) => {
    const angle = (index * 360) / total - rotation;
        const radius = 192;
    const x = Math.cos((angle - 90) * (Math.PI / 180)) * radius;
    const y = Math.sin((angle - 90) * (Math.PI / 180)) * radius;
    return { x, y, angle };
  };

  const handleCardClick = (index) => {
    setActiveFacilityIndex(index);
    const targetRotation = (index * 360) / facilities.length;
    setCurrentRotation(targetRotation);
  };

  const toggleRotation = () => {
    setIsRotating(!isRotating);
  };

  const changeSpeed = (speed) => {
    setRotationSpeed(speed);
  };

  const activeFacility = facilities[activeFacilityIndex];

  return (
    <div id="facilities" className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Main Heading */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-6xl font-bold text-green-600 mb-4 animate-bounce-in">
            Our Facilities
          </h1>
          <div className="w-24 h-1 bg-green-500 mx-auto mb-6 animate-pulse"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Watch the rotating wheel to explore our world-class facilities
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Left Side - Rotating Circular Wheel */}
                              <div className="lg:w-1/2 flex justify-center items-start pt-48">
            <div className="relative w-96 h-96">
              {/* Active Indicator */}
              {/* <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-4 z-20">
                <div className="w-0 h-0 border-l-4 border-r-4 border-b-8 border-l-transparent border-r-transparent border-b-orange-500 animate-bounce"></div>
              </div> */}

              {/* Center Hub */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-gradient-to-r from-green-500 to-orange-500 rounded-full flex items-center justify-center shadow-xl z-10 animate-pulse">
                <span className="text-white font-bold text-sm text-center">School<br/>Facilities</span>
              </div>

              {/* Rotating Container */}
              <div 
                className="absolute inset-0 transition-transform duration-1000 ease-linear"
                style={{ transform: `rotate(-${currentRotation}deg)` }}
              >
                {/* Circular Cards */}
                {facilities.map((facility, index) => {
                  const { x, y } = getCardPosition(index, facilities.length);
                  const IconComponent = facility.icon;
                  const isActive = index === activeFacilityIndex;
                  
                  return (
                    <div
                      key={facility.id}
                      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                      style={{ transform: `translate(${x}px, ${y}px) translate(-50%, -50%) rotate(${currentRotation}deg)` }}
                      onClick={() => handleCardClick(index)}
                    >
                      <div className={`w-20 h-20 rounded-full shadow-lg transform hover:scale-110 transition-all duration-300 flex flex-col items-center justify-center ${
                        isActive 
                          ? facility.color + ' ring-4 ring-orange-400 scale-125 shadow-2xl' 
                          : facility.color + ' hover:shadow-xl blur-sm opacity-60'
                      }`}>
                        <IconComponent className="w-6 h-6 text-white mb-1" />
                        <span className="text-xs text-white font-semibold text-center leading-tight px-1">
                          {facility.name.split(' ')[0]}
                        </span>
                      </div>
                    </div>
                  );
                })}

                {/* Connecting Lines */}
                <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 1 }}>
                  {facilities.map((_, index) => {
                    const { x, y } = getCardPosition(index, facilities.length);
                    const isActiveLine = index === activeFacilityIndex;
                    return (
                      <line
                        key={index}
                        x1="50%"
                        y1="50%"
                        x2={`${50 + ((x / 192) * 0.7) * 50}%`}
                        y2={`${50 + ((y / 192) * 0.7) * 50}%`}
                        stroke={isActiveLine ? "rgba(249, 115, 22, 0.8)" : "rgba(34, 197, 94, 0.3)"}
                        strokeWidth={isActiveLine ? "3" : "2"}
                        className={isActiveLine ? "animate-pulse" : ""}
                      />
                    );
                  })}
                </svg>
              </div>

              
            </div>
          </div>

          {/* Right Side - Active Facility Details */}
          <div className="lg:w-1/2">
            {activeFacility && (
              <div key={activeFacility.id} className="bg-white rounded-3xl shadow-2xl overflow-hidden transform hover:scale-105 transition-all duration-500 animate-slide-in-right">
                {/* Header */}
                <div className={`${activeFacility.color} p-6 text-white relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-4">
                        {React.createElement(activeFacility.icon, { className: "w-12 h-12" })}
                        <div>
                          <h2 className="text-3xl font-bold text-orange-100">
                            {activeFacility.name}
                          </h2>
                          <p className="text-orange-200 text-lg">
                            {activeFacility.shortDesc}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Description */}
                  <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    {activeFacility.description}
                  </p>

                  {/* Quick Info */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center gap-2 text-gray-600">
                      <MapPin className="w-5 h-5 text-green-500" />
                      <span className="text-sm">{activeFacility.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Clock className="w-5 h-5 text-green-500" />
                      <span className="text-sm">{activeFacility.timing}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Users2 className="w-5 h-5 text-green-500" />
                      <span className="text-sm">{activeFacility.capacity}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Award className="w-5 h-5 text-green-500" />
                      <span className="text-sm">Professional Staff</span>
                    </div>
                  </div>

                  {/* Features */}
                  <h3 className="text-xl font-bold text-orange-500 mb-4">Key Features</h3>
                  <ul className="space-y-2 mb-6">
                    {activeFacility.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2 text-gray-700 animate-fade-in-stagger" style={{ animationDelay: `${index * 0.1}s` }}>
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* In-charge */}
                  <div className="bg-gradient-to-r from-green-50 to-orange-50 p-4 rounded-xl">
                    <h4 className="font-semibold text-green-700 mb-1">Faculty In-charge</h4>
                    <p className="text-sm text-gray-600">{activeFacility.incharge}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes bounce-in {
          0% { opacity: 0; transform: translateY(-50px) scale(0.8); }
          50% { opacity: 0.5; transform: translateY(-10px) scale(1.05); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        
        @keyframes slide-in-right {
          from { opacity: 0; transform: translateX(50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes fade-in-stagger {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        
        .animate-bounce-in {
          animation: bounce-in 1.2s ease-out;
        }
        
        .animate-slide-in-right {
          animation: slide-in-right 0.6s ease-out;
        }
        
        .animate-fade-in-stagger {
          animation: fade-in-stagger 0.5s ease-out both;
        }
      `}</style>
    </div>
  );
};

export default SchoolFacilities;
