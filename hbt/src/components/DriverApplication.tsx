"use client";

import React, { useState } from "react";
import ApplicationPart1 from "./ApplicationPart1";

const DriverApplication: React.FC = () => {
  const handleGeneratePDF = async () => {
    try {
      const response = await fetch("/api/generate-pdf", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: "John",
          lastName: "Doe",
        }),
      });
    } catch (error) {
      console.error("Error generating PDF:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Driver Application
        </h1>
        <div className="bg-white rounded-lg shadow-lg p-8">
          <ApplicationPart1 />
          <div className="mt-8 flex justify-center">
            <button
              onClick={handleGeneratePDF}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300"
            >
              Generate PDF
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DriverApplication;
