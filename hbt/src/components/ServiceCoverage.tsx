"use client";

import React from "react";
import { motion } from "motion/react";
import Image from "next/image";

const ServiceCoverage: React.FC = () => {
  return (
    <div className="w-full bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Service Coverage
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We provide reliable freight transportation services across the West
            Coast and beyond, including temperature-controlled freight coverage
            across 7 states
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-lg shadow-lg p-8"
        >
          <div className="relative w-full h-auto rounded-lg overflow-hidden">
            <Image
              src="/map.png"
              alt="Service Coverage Map"
              width={1200}
              height={800}
              className="w-full h-auto object-contain"
            />
          </div>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Regional Coverage
              </h3>
              <p className="text-gray-600">
                Serving California, Oregon, Washington, Nevada, and Arizona
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Interstate Routes
              </h3>
              <p className="text-gray-600">
                Long-haul transportation across major interstate highways
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Local Delivery
              </h3>
              <p className="text-gray-600">
                Same-day and next-day delivery within metropolitan areas
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-4 border-2 border-blue-200">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Temperature Controlled
              </h3>
              <p className="text-gray-600">
                Temperature-controlled freight services covered across 7 states
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ServiceCoverage;

