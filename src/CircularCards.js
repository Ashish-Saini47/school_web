import React, { useState, useEffect } from 'react';




const CircularCards = () => {
  const [rotation, setRotation] = useState(0);
  const [activeCard, setActiveCard] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const cards = [
    {
      id: 1,
      image: "/images/gallery/gallery_1.jpeg",
      title: "School Event 1",
      description: "A memorable event at our school."
    },
    {
      id: 2,
      image: "/images/gallery/gallery_2.jpeg",
      title: "School Event 2",
      description: "A memorable event at our school."
    },
    {
      id: 3,
      image: "/images/gallery/gallery_3.jpeg",
      title: "School Event 3",
      description: "A memorable event at our school."
    },
    {
      id: 4,
      image: "/images/gallery/gallery_4.jpeg",
      title: "School Event 4",
      description: "A memorable event at our school."
    },
    {
      id: 5,
      image: "/images/gallery/gallery_5.jpeg",
      title: "School Event 5",
      description: "A memorable event at our school."
    },
    {
      id: 6,
      image: "/images/gallery/gallery_6.jpeg",
      title: "School Event 6",
      description: "A memorable event at our school."
    },
    {
      id: 7,
      image: "/images/gallery/gallery_7.jpeg",
      title: "School Event 7",
      description: "A memorable event at our school."
    },
    {
      id: 8,
      image: "/images/gallery/gallery_8.jpeg",
      title: "School Event 8",
      description: "A memorable event at our school."
    },
    {
      id: 9,
      image: "/images/gallery/gallery_1.jpeg",
      title: "School Event 9",
      description: "A memorable event at our school."
    },
    {
      id: 10,
      image: "/images/gallery/gallery_2.jpeg",
      title: "School Event 10",
      description: "A memorable event at our school."
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation(prev => prev + 36);
      setActiveCard(prev => (prev + 1) % 10);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const getCardStyle = (index) => {
    const angle = (index * 36) - rotation;
    const radius = isMobile ? 160 : 320;
    const x = Math.sin((angle * Math.PI) / 180) * radius;
    const y = -Math.cos((angle * Math.PI) / 180) * radius;
    
    // Only show top 5 cards (angles between -90 and 90 degrees)
    const normalizedAngle = ((angle % 360) + 360) % 360;
    const isVisible = normalizedAngle <= 90 || normalizedAngle >= 270;
    
    // Center card is at angle 0 (or 360)
    const isCenter = Math.abs(normalizedAngle) < 18 || Math.abs(normalizedAngle - 360) < 18;
    
    return {
      transform: `translate(${x}px, ${y}px) translateX(-50%) translateY(-50%)`,
      opacity: isVisible ? 1 : 0,
      filter: isCenter ? 'blur(0px) brightness(1.1)' : 'blur(1px) brightness(0.8)',
      scale: isCenter ? '1.1' : '0.9',
      zIndex: isCenter ? 10 : 1,
      transition: 'all 0.8s ease-in-out'
    };
  };

  return (
    <div id="gallery" className="bg-white py-20">
      <div className="container mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-green-600 mb-6">Featured Experiences</h2>
          <p className="text-green-700 text-xl max-w-2xl mx-auto">
            Discover our curated collection of amazing destinations and unforgettable adventures
          </p>
        </div>
        
        {/* Circular Cards Container */}
        <div className="relative h-[800px] flex items-center justify-center mt-16 lg:mt-64">
          <div className="relative w-full h-full">
            {cards.map((card, index) => (
              <div
                key={card.id}
                className={`absolute left-1/2 top-1/2 ${isMobile ? 'w-32 h-48' : 'w-56 h-72'} bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden cursor-pointer hover:shadow-3xl transition-all duration-300 hover:scale-105`}
                style={getCardStyle(index)}
                onClick={() => setSelectedImage(card)}
              >
                <div className="relative h-full">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-44 object-cover"
                  />
                  <div className="p-4 h-28 flex flex-col justify-between">
                    <h3 className="text-lg font-bold text-green-600 mb-2 line-clamp-1">
                      {card.title}
                    </h3>
                    <p className="text-sm text-green-700 line-clamp-3">
                      {card.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Navigation dots */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
            {cards.map((_, index) => (
              <button
                key={index}
                className={`h-3 rounded-full transition-all duration-300 ${
                  index === activeCard ? 'bg-green-500 w-8' : 'bg-green-300 w-3'
                }`}
                onClick={() => {
                  setRotation(index * 36);
                  setActiveCard(index);
                }}
              />
            ))}
          </div>
        </div>
        
        {/* Full Screen Image Modal */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-7xl max-h-full">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-green-400 transition-colors duration-200"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              />
              
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6 rounded-b-lg">
                <h3 className="text-white text-2xl font-bold mb-2">{selectedImage.title}</h3>
                <p className="text-gray-200 text-lg">{selectedImage.description}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CircularCards;