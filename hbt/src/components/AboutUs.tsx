"use client";

import React from "react";
import { motion } from "motion/react";

const AboutUs: React.FC = () => {
  return (
    <div className="w-full bg-white py-16">
      <div className="max-w-6xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">About Us</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Your trusted partner in freight transportation for over two decades
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-800">
                Our Story
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Founded in 2003, HB Transportation began as a small family-owned
                trucking company with a single truck and a big dream. What started
                as a local freight service in Northern California has grown into
                a trusted regional transportation partner serving businesses
                across the West Coast.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our founder, driven by a passion for reliability and customer
                service, built the company on principles of integrity, safety,
                and timely delivery. Over the years, we&apos;ve expanded our fleet,
                enhanced our services, and built lasting relationships with
                clients who trust us with their most important shipments.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-800">
                Our Mission
              </h3>
              <p className="text-gray-600 leading-relaxed">
                At HB Transportation, we&apos;re committed to providing reliable,
                efficient, and professional freight transportation services. We
                understand that your business depends on timely deliveries, and
                we take that responsibility seriously. Every shipment is handled
                with care, every route is optimized for efficiency, and every
                customer interaction is built on trust and respect.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="bg-gray-50 rounded-lg p-8 space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Why Choose Us
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mt-1">
                      <svg
                        className="w-4 h-4 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h4 className="font-semibold text-gray-800">
                        Experienced Team
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Over 20 years of industry experience with a team of
                        professional drivers and logistics experts
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mt-1">
                      <svg
                        className="w-4 h-4 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h4 className="font-semibold text-gray-800">
                        Safety First
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Comprehensive safety programs and regular vehicle
                        maintenance ensure your cargo arrives safely
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mt-1">
                      <svg
                        className="w-4 h-4 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h4 className="font-semibold text-gray-800">
                        Reliable Service
                      </h4>
                      <p className="text-gray-600 text-sm">
                        On-time delivery is our promise. We track every shipment
                        to ensure it reaches its destination as scheduled
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mt-1">
                      <svg
                        className="w-4 h-4 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h4 className="font-semibold text-gray-800">
                        Customer Focused
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Your satisfaction is our priority. We work closely with
                        clients to meet their unique transportation needs
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

