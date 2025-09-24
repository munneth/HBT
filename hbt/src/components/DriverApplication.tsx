"use client";

import React, { useState } from "react";
import ApplicationPart1 from "./ApplicationPart1";

// Define the form data type
type FormData = {
  date: string;
  firstName: string;
  middleName: string;
  lastName: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  dateOfBirth: string;
  homeTelephone: string;
  cellularTelephone: string;
  socialSecurityNumber: string;
  prevAddress1Street: string;
  prevAddress1City: string;
  prevAddress1State: string;
  prevAddress1Zip: string;
  prevAddress1DatesFrom: string;
  prevAddress1DatesTo: string;
  prevAddress2Street: string;
  prevAddress2City: string;
  prevAddress2State: string;
  prevAddress2Zip: string;
  prevAddress2DatesFrom: string;
  prevAddress2DatesTo: string;
  prevAddress3Street: string;
  prevAddress3City: string;
  prevAddress3State: string;
  prevAddress3Zip: string;
  prevAddress3DatesFrom: string;
  prevAddress3DatesTo: string;
};

const DriverApplication: React.FC = () => {
  const [formData, setFormData] = useState<FormData | null>(null);

  const handleFormSubmit = (data: FormData) => {
    console.log("Form Data received:", data);
    setFormData(data);
  };

  const handleGeneratePDF = async () => {
    if (!formData) {
      alert("Please fill out the form first");
      return;
    }

    try {
      const response = await fetch("/api/generate-pdf", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      console.log("Posted");
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
          <ApplicationPart1 onFormSubmit={handleFormSubmit} />
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
