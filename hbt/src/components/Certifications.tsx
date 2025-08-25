"use client";

import React from "react";

interface CertificationItemProps {
  title: string;
  description: string;
  logoText: string;
  logoSubtext?: string;
  logoTagline?: string;
}

const CertificationItem: React.FC<CertificationItemProps> = ({
  title,
  description,
  logoText,
  logoSubtext,
  logoTagline,
}) => {
  return (
    <div className="flex items-start space-x-6 p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
      {/* Logo Section */}
      <div className="flex-shrink-0 w-32 h-24 bg-gray-50 rounded-lg flex flex-col items-center justify-center border border-gray-200">
        <div className="text-center">
          <div className="text-lg font-bold text-blue-600 mb-1">{logoText}</div>
          {logoSubtext && (
            <div className="text-sm font-semibold text-green-600 mb-1">
              {logoSubtext}
            </div>
          )}
          {logoTagline && (
            <div className="text-xs text-gray-500">{logoTagline}</div>
          )}
        </div>
      </div>

      {/* Content Section */}
      <div className="flex-1">
        <h3 className="text-xl font-bold text-red-700 mb-2">{title}</h3>
        <p className="text-gray-700 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

const Certifications: React.FC = () => {
  const certifications = [
    {
      title: "SmartWay",
      description:
        "The SmartWay certificate ensures that the carrier is a registered SmartWay Carrier Partner who reduces their fuel use and increases efficiency.",
      logoText: "SmartWay",
      logoSubtext: "Transport Partner",
      logoTagline: "Getting There With Cleaner Air",
    },
    {
      title: "CARB",
      description:
        "The CARB Certificate by the California Air Resources Board certifies that our company is compliant with the board's efforts in reducing air pollution and protecting the public's health.",
      logoText: "CALIFORNIA",
      logoSubtext: "AIR RESOURCES BOARD",
    },
    {
      title: "Diversity",
      description:
        "The Diversity certificate certifies the completion of an instruction and training program on diversity & sensitivity in the workplace.",
      logoText: "COMPLIANCE",
      logoSubtext: "TRAINING GROUP",
      logoTagline: "A Safer Workplace Through Education™",
    },
    {
      title: "Minority",
      description:
        "The Minority Business Enterprise certificate certifies that a minority (or minorities) has a majority ownership and control of a business entity.",
      logoText: "NMSDC",
      logoSubtext: "National Minority Supplier Development Council",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          CERTIFICATIONS
        </h2>
        <div className="space-y-6">
          {certifications.map((cert, index) => (
            <CertificationItem
              key={index}
              title={cert.title}
              description={cert.description}
              logoText={cert.logoText}
              logoSubtext={cert.logoSubtext}
              logoTagline={cert.logoTagline}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certifications;
