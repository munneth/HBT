"use client";

import React from "react";

const ApplicationInfo: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <h3 className="text-2xl font-bold text-gray-800 mb-6">Join Our Team</h3>

      <div className="space-y-8">
        {/* Available Positions */}
        <div>
          <h4 className="text-xl font-semibold text-gray-800 mb-4 border-b border-gray-200 pb-2">
            Available Positions
          </h4>
          <div className="space-y-4">
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <h5 className="font-semibold text-blue-800 mb-2">Truck Driver</h5>
              <p className="text-gray-600 text-sm mb-2">
                Experienced CDL drivers needed for local and regional routes.
                Competitive pay, benefits, and flexible schedules available.
              </p>
              <div className="text-xs text-gray-500">
                • CDL Class A required • Clean driving record • 2+ years
                experience preferred
              </div>
            </div>

            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
              <h5 className="font-semibold text-green-800 mb-2">Dispatcher</h5>
              <p className="text-gray-600 text-sm mb-2">
                Coordinate routes, manage driver schedules, and ensure timely
                deliveries. Strong communication and organizational skills
                required.
              </p>
              <div className="text-xs text-gray-500">
                • Dispatch experience preferred • Computer skills • Excellent
                communication
              </div>
            </div>

            <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
              <h5 className="font-semibold text-purple-800 mb-2">Mechanic</h5>
              <p className="text-gray-600 text-sm mb-2">
                Maintain and repair our fleet of trucks and trailers. Diesel
                engine experience and ASE certifications preferred.
              </p>
              <div className="text-xs text-gray-500">
                • Diesel mechanic experience • ASE certifications preferred •
                Tools required
              </div>
            </div>

            <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
              <h5 className="font-semibold text-orange-800 mb-2">
                Office Staff
              </h5>
              <p className="text-gray-600 text-sm mb-2">
                Support our operations with administrative tasks, customer
                service, and data entry. Detail-oriented individuals welcome.
              </p>
              <div className="text-xs text-gray-500">
                • Office experience • Computer proficiency • Customer service
                skills
              </div>
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div>
          <h4 className="text-xl font-semibold text-gray-800 mb-4 border-b border-gray-200 pb-2">
            Benefits & Perks
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <svg
                  className="w-4 h-4 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <span className="text-gray-700">Health Insurance</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <svg
                  className="w-4 h-4 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <span className="text-gray-700">Dental & Vision</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                <svg
                  className="w-4 h-4 text-purple-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <span className="text-gray-700">401(k) Retirement</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                <svg
                  className="w-4 h-4 text-orange-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <span className="text-gray-700">Paid Time Off</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                <svg
                  className="w-4 h-4 text-red-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <span className="text-gray-700">Competitive Pay</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center">
                <svg
                  className="w-4 h-4 text-indigo-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <span className="text-gray-700">Flexible Schedules</span>
            </div>
          </div>
        </div>

        {/* Application Process */}
        <div>
          <h4 className="text-xl font-semibold text-gray-800 mb-4 border-b border-gray-200 pb-2">
            Application Process
          </h4>
          <div className="space-y-3">
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                1
              </div>
              <div>
                <h5 className="font-medium text-gray-800">
                  Submit Application
                </h5>
                <p className="text-sm text-gray-600">
                  Complete the application form with your information
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                2
              </div>
              <div>
                <h5 className="font-medium text-gray-800">Review Process</h5>
                <p className="text-sm text-gray-600">
                  Our team will review your application within 3-5 business days
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                3
              </div>
              <div>
                <h5 className="font-medium text-gray-800">Interview</h5>
                <p className="text-sm text-gray-600">
                  If selected, we&apos;ll contact you to schedule an interview
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                4
              </div>
              <div>
                <h5 className="font-medium text-gray-800">Background Check</h5>
                <p className="text-sm text-gray-600">
                  Successful candidates will undergo background verification
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-gray-50 rounded-lg p-6">
          <h4 className="text-lg font-semibold text-gray-800 mb-3">
            Questions?
          </h4>
          <p className="text-gray-600 text-sm mb-3">
            If you have any questions about our application process or available
            positions, please don&apos;t hesitate to contact us.
          </p>
          <div className="text-sm text-gray-600">
            <p>
              <strong>Phone:</strong> 530-111-1111
            </p>
            <p>
              <strong>Email:</strong> careers@hbt.com
            </p>
            <p>
              <strong>Address:</strong> 4670 Sawtelle Ave, Yuba City, CA 95991
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationInfo;
