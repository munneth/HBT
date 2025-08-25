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

  // Duplicate the partners array to create seamless infinite scroll
  const duplicatedPartners = [...partners, ...partners, ...partners];

  useEffect(() => {
    if (isHovered) return; // Pause when hovered

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = prevIndex + 1;
        // Reset to beginning when we reach the end of the original array
        if (nextIndex >= partners.length) {
          return 0;
        }
        return nextIndex;
      });
    }, 3000); // Move every 3 seconds

    return () => clearInterval(interval);
  }, [isHovered, partners.length]);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="w-full bg-gray-100 py-12">
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
          <div
            className="flex transition-transform duration-1000 ease-in-out"
            style={{
              transform: `translateX(-${
                currentIndex * (100 / partners.length)
              }%)`,
            }}
          >
            {duplicatedPartners.map((partner, index) => (
              <div
                key={`${partner.id}-${index}`}
                className="flex-shrink-0 w-64 h-32 mx-4 bg-white rounded-lg shadow-md flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:scale-105"
              >
                <div className="relative w-full h-full flex items-center justify-center">
                  <Image
                    src={partner.image}
                    alt={partner.name}
                    width={200}
                    height={100}
                    className="object-contain max-w-full max-h-full"
                    onError={(e) => {
                      // Fallback for missing images
                      const target = e.target as HTMLImageElement;
                      target.style.display = "none";
                      target.parentElement!.innerHTML = `
                        <div class="text-gray-500 text-center">
                          <div class="text-4xl mb-2">🏢</div>
                          <div class="text-sm">${partner.name}</div>
                        </div>
                      `;
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Hover indicator */}
          {isHovered && (
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-75 text-white px-4 py-2 rounded-lg text-sm">
              Paused
            </div>
          )}
        </div>

        {/* Navigation dots */}
        <div className="flex justify-center mt-6 space-x-2">
          {partners.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                index === currentIndex
                  ? "bg-blue-600"
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
