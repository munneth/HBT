"use client";

import React, { useState, useEffect } from "react";

type PDFField = string;
type FormData = Record<string, string>;

const DynamicApplicationForm: React.FC = () => {
  const [pdfFields, setPdfFields] = useState<PDFField[]>([]);
  const [formData, setFormData] = useState<FormData>({});
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });


  // Fetch PDF fields on component mount
  useEffect(() => {
    const fetchPdfFields = async () => {
      try {
        const response = await fetch("/api/get-pdf-fields");
        const data = await response.json();
        
        if (data.textFields) {
          // Use all text fields from PDF
          setPdfFields(data.textFields);
          
          // Initialize form data with empty strings for all fields
          const initialData: FormData = {};
          data.textFields.forEach((field: string) => {
            initialData[field] = "";
          });
          setFormData(initialData);
        }
      } catch (error) {
        console.error("Error fetching PDF fields:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPdfFields();
  }, []);

  const handleChange = (fieldName: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [fieldName]: value,
    }));
  };

  const formatFieldName = (fieldName: string): string => {
    return fieldName
      .replace(/_/g, " ")
      .replace(/([A-Z])/g, " $1")
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    // Log the data to console before sending
    console.log("=== SUBMITTING APPLICATION FORM ===");
    console.log("Form Data:", JSON.stringify(formData, null, 2));
    console.log("=== END FORM DATA ===");

    try {
      const response = await fetch("/api/application", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message: result.message || "Application submitted successfully!",
        });
        // Optionally reset form
        // setFormData({});
      } else {
        setSubmitStatus({
          type: "error",
          message: result.error || "Failed to submit application. Please try again.",
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus({
        type: "error",
        message: "Network error. Please check your connection and try again.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 py-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <p className="text-gray-600">Loading form fields...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Driver Application (Dynamic Form)
        </h1>
        <div className="bg-white rounded-lg shadow-lg p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {pdfFields.length === 0 ? (
              <div className="text-center py-8">
                <p className="text-gray-600">
                  No additional fields found. All fields may already be handled.
                </p>
              </div>
            ) : (
              pdfFields.map((field) => (
                <div key={field}>
                  <label
                    htmlFor={field}
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    {formatFieldName(field)}
                  </label>
                  <input
                    type="text"
                    id={field}
                    name={field}
                    value={formData[field] || ""}
                    onChange={(e) => handleChange(field, e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder={`Enter ${formatFieldName(field).toLowerCase()}`}
                  />
                </div>
              ))
            )}

            {/* Status Message */}
            {submitStatus.type && (
              <div
                className={`p-4 rounded-lg ${
                  submitStatus.type === "success"
                    ? "bg-green-100 border border-green-400 text-green-700"
                    : "bg-red-100 border border-red-400 text-red-700"
                }`}
              >
                {submitStatus.message}
              </div>
            )}

            {/* Submit Button */}
            {pdfFields.length > 0 && (
              <div>
                <button
                  type="submit"
                  disabled={submitting}
                  className={`w-full font-semibold py-3 px-6 rounded-lg transition-colors duration-300 transform ${
                    submitting
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-blue-600 hover:bg-blue-700 hover:scale-105"
                  } text-white`}
                >
                  {submitting ? "Submitting..." : "Submit Application"}
                </button>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default DynamicApplicationForm;
