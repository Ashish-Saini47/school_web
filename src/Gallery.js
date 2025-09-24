import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Gallery = () => {
  // Sample images - replace with your actual images
  const images = [
    { id: 1, src: "/images/gallery/gallery_2.jpeg", alt: "Beautiful moment 1" },
    { id: 2, src: "/images/gallery/gallery_3.jpeg", alt: "Beautiful moment 2" },
    { id: 3, src: "/images/gallery/gallery_4.jpeg", alt: "Beautiful moment 3" },
    { id: 4, src: "/images/gallery/gallery_5.jpeg", alt: "Beautiful moment 4" },
    { id: 5, src: "/images/gallery/gallery_6.jpeg", alt: "Beautiful moment 5" },
    { id: 6, src: "/images/gallery/gallery_7.jpeg", alt: "Beautiful moment 6" },
    { id: 7, src: "/images/gallery/gallery_8.jpeg", alt: "Beautiful moment 7" },
    { id: 8, src: "/images/gallery/gallery_1.jpeg", alt: "Beautiful moment 8" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isSliderHovered, setIsSliderHovered] = useState(false);

  // Auto-change functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  // Remove the getVisibleImages function as we're now using CSS transforms

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = (prevIndex + 1) % images.length;
      return newIndex;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1,
    );
  };

  return (
    <div id="gallery" className="w-full max-w-7xl mx-auto px-4 py-16">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-green-600 mb-4">Gallery</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Discover our beautiful collection of moments
        </p>
      </div>

      {/* Image Slider */}
      <div
        className="relative group"
        onMouseEnter={() => setIsSliderHovered(true)}
        onMouseLeave={() => setIsSliderHovered(false)}
      >
        {/* Main slider container */}
        <div className="relative overflow-hidden rounded-lg">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${(currentIndex * 100) / 4}%)`,
            }}
          >
            {/* Create extended array for smooth infinite loop */}
            {[...images, ...images].map((image, index) => (
              <div
                key={`${image.id}-${index}`}
                className="w-1/4 flex-shrink-0 relative group cursor-pointer"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="relative overflow-hidden mx-2">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-64 object-cover rounded-lg transform transition-transform duration-300 group-hover:scale-110"
                  />

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 rounded-lg flex items-center justify-center">
                    <div
                      className={`transform transition-all duration-300 ${
                        hoveredIndex === index
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-4"
                      }`}
                    >
                      <button className="bg-white text-gray-800 px-4 py-2 rounded-full font-semibold shadow-lg hover:bg-gray-100 transition-colors duration-200">
                        View
                      </button>
                    </div>
                  </div>

                  {/* Image number indicator */}
                  <div className="absolute top-4 left-4 bg-black bg-opacity-50 text-white px-2 py-1 rounded text-sm">
                    {(index % images.length) + 1}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation buttons - only visible on hover */}
        <button
          onClick={prevSlide}
          className={`absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 text-gray-800 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-10 ${
            isSliderHovered
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-4"
          }`}
        >
          <ChevronLeft size={24} />
        </button>

        <button
          onClick={nextSlide}
          className={`absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 text-gray-800 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-10 ${
            isSliderHovered
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-4"
          }`}
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default Gallery;
