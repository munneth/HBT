"use client";

import React, { useState } from "react";
import ApplicationPart1 from "./ApplicationPart1";
import ApplicationPart2, { ApplicationPart2Inputs } from "./ApplicationPart2";

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
  license1?: ApplicationPart2Inputs["license1"];
  license2?: ApplicationPart2Inputs["license2"];
  license3?: ApplicationPart2Inputs["license3"];
  experience1?: ApplicationPart2Inputs["experience1"];
  experience2?: ApplicationPart2Inputs["experience2"];
  experience3?: ApplicationPart2Inputs["experience3"];
};

const DriverApplication: React.FC = () => {
  const [formData, setFormData] = useState<FormData | null>(null);
  const [step, setStep] = useState<1 | 2>(1);

  const handleFormSubmit = (data: FormData) => {
    setFormData(data);
    setStep(2);
  };

  const handlePart2Submit = (data: ApplicationPart2Inputs) => {
    setFormData((prev) => ({
      ...(prev || ({} as FormData)),
      license1: data.license1,
      license2: data.license2,
      license3: data.license3,
      experience1: data.experience1,
      experience2: data.experience2,
      experience3: data.experience3,
    }));
    setStep(1);
  };

  const handleGeneratePDF = async () => {
    if (!formData) {
      alert("Please fill out the form first");
      return;
    }

    try {
      await fetch("/api/generate-pdf", {
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
          {step === 1 && <ApplicationPart1 onFormSubmit={handleFormSubmit} />}
          {step === 2 && <ApplicationPart2 onFormSubmit={handlePart2Submit} />}
          {step === 2 && (
            <div className="mt-8 flex justify-between">
              <button
                onClick={() => setStep(1)}
                className="border border-gray-300 text-gray-800 font-semibold py-3 px-8 rounded-lg"
              >
                Back
              </button>
              <button
                onClick={handleGeneratePDF}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300"
              >
                Generate PDF
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DriverApplication;
