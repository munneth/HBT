"use client";

import React from "react";

interface CertificationItemProps {
  imageSrc: string;
  imageAlt: string;
}

const CertificationItem: React.FC<CertificationItemProps> = ({
  imageSrc,
  imageAlt,
}) => {
  return (
    <div className="flex items-center justify-center p-4 bg-transparent">
      <img
        src={imageSrc}
        alt={imageAlt}
        className="max-w-full max-h-32 object-contain"
      />
    </div>
  );
};

const Certifications: React.FC = () => {
  const certifications = [
    {
      imageSrc: "/smartway.jpg",
      imageAlt: "SmartWay Transport Partner Certification",
    },
    {
      imageSrc: "/CARB.jpg",
      imageAlt: "California Air Resources Board Certification",
    },
  ];

  return (
    <div className="bg-transparent pt-1 pb-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex justify-center space-x-8">
          {certifications.map((cert, index) => (
            <CertificationItem
              key={index}
              imageSrc={cert.imageSrc}
              imageAlt={cert.imageAlt}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certifications;
