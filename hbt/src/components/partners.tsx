"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

interface Partner {
  id: number;
  name: string;
  image: string;
}

export default function Partners() {
  const [isHovered, setIsHovered] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Sample partner data - replace with actual images from public/partners
  const partners: Partner[] = [
    { id: 1, name: "Partner 1", image: "/partners/partner1.png" },
    { id: 2, name: "Partner 2", image: "/partners/partner2.png" },
    { id: 3, name: "Partner 3", image: "/partners/partner3.png" },
    { id: 4, name: "Partner 4", image: "/partners/partner4.png" },
    { id: 5, name: "Partner 5", image: "/partners/partner5.png" },
  ];

  // Create infinite scroll by duplicating the array multiple times
  const infinitePartners = [
    ...partners,
    ...partners,
    ...partners,
    ...partners,
    ...partners,
  ];

  useEffect(() => {
    if (isHovered) return; // Pause when hovered

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = prevIndex + 1;
        // Reset to beginning of middle set when reaching end
        if (nextIndex >= partners.length * 3) {
          return partners.length * 2;
        }
        return nextIndex;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [isHovered, partners.length]);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleDotClick = (index: number) => {
    setCurrentIndex(index + partners.length * 2); // Start from middle set
  };

  // Get the previous and next partner indices for the side cards
  const getPreviousIndex = (current: number) => {
    return current - 1;
  };

  const getNextIndex = (current: number) => {
    return current + 1;
  };

  return (
    <div className="w-full bg-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Our Partners
        </h2>

        <div
          ref={carouselRef}
          className="relative overflow-hidden"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="flex items-center justify-center space-x-8">
            {/* Left Partner (Previous) */}
            <div className="w-48 h-24 bg-gray-100 rounded-lg shadow-md flex items-center justify-center transition-all duration-700 ease-in-out hover:shadow-lg hover:scale-105 opacity-60 transform hover:opacity-80">
              <div className="relative w-full h-full flex items-center justify-center">
                <Image
                  src={
                    infinitePartners[getPreviousIndex(currentIndex)]?.image ||
                    partners[0].image
                  }
                  alt={
                    infinitePartners[getPreviousIndex(currentIndex)]?.name ||
                    partners[0].name
                  }
                  width={150}
                  height={75}
                  className="object-contain max-w-full max-h-full transition-transform duration-500 ease-in-out"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = "none";
                    target.parentElement!.innerHTML = `
                      <div class="text-gray-500 text-center transition-all duration-500 ease-in-out">
                        <div class="text-2xl mb-1">🏢</div>
                        <div class="text-xs">${
                          infinitePartners[getPreviousIndex(currentIndex)]
                            ?.name || partners[0].name
                        }</div>
                      </div>
                    `;
                  }}
                />
              </div>
            </div>

            {/* Center Partner (Current) */}
            <div className="w-80 h-40 bg-gray-100 rounded-lg shadow-lg flex items-center justify-center transition-all duration-700 ease-in-out hover:shadow-xl hover:scale-105 transform">
              <div className="relative w-full h-full flex items-center justify-center">
                <Image
                  src={
                    infinitePartners[currentIndex]?.image || partners[0].image
                  }
                  alt={infinitePartners[currentIndex]?.name || partners[0].name}
                  width={300}
                  height={150}
                  className="object-contain max-w-full max-h-full transition-transform duration-500 ease-in-out"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = "none";
                    target.parentElement!.innerHTML = `
                      <div class="text-gray-500 text-center transition-all duration-500 ease-in-out">
                        <div class="text-4xl mb-2">🏢</div>
                        <div class="text-sm">${
                          infinitePartners[currentIndex]?.name ||
                          partners[0].name
                        }</div>
                      </div>
                    `;
                  }}
                />
              </div>
            </div>

            {/* Right Partner (Next) */}
            <div className="w-48 h-24 bg-gray-100 rounded-lg shadow-md flex items-center justify-center transition-all duration-700 ease-in-out hover:shadow-lg hover:scale-105 opacity-60 transform hover:opacity-80">
              <div className="relative w-full h-full flex items-center justify-center">
                <Image
                  src={
                    infinitePartners[getNextIndex(currentIndex)]?.image ||
                    partners[0].image
                  }
                  alt={
                    infinitePartners[getNextIndex(currentIndex)]?.name ||
                    partners[0].name
                  }
                  width={150}
                  height={75}
                  className="object-contain max-w-full max-h-full transition-transform duration-500 ease-in-out"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = "none";
                    target.parentElement!.innerHTML = `
                      <div class="text-gray-500 text-center transition-all duration-500 ease-in-out">
                        <div class="text-2xl mb-1">🏢</div>
                        <div class="text-xs">${
                          infinitePartners[getNextIndex(currentIndex)]?.name ||
                          partners[0].name
                        }</div>
                      </div>
                    `;
                  }}
                />
              </div>
            </div>
          </div>

          {/* Hover indicator */}
          {isHovered && (
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-75 text-white px-4 py-2 rounded-lg text-sm transition-all duration-300 ease-in-out animate-pulse">
              Paused
            </div>
          )}
        </div>

        {/* Navigation dots */}
        <div className="flex justify-center mt-6 space-x-2">
          {partners.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ease-in-out transform hover:scale-110 ${
                currentIndex % partners.length === index
                  ? "bg-gray-600 scale-110"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to partner ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
