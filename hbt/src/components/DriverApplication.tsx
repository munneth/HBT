"use client";

import React from "react";
import ApplicationPart1 from "./ApplicationPart1";
import Script from "next/script";

const DriverApplication: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Driver Application
        </h1>

        {/* Main application content will go here */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <ApplicationPart1 />
        </div>
      </div>
    </div>
  );
};

export default DriverApplication;
