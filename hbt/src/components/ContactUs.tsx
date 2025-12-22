"use client";

import React from "react";
import { motion } from "motion/react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const ContactUs: React.FC = () => {
  return (
    <div className="w-full bg-gray-100 py-16">
      <div className="max-w-6xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Contact Us</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get in touch with us. We&apos;re here to help with all your
            transportation needs.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {/* Phone */}
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                <Phone className="w-8 h-8 text-green-600" />
              </div>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Phone</h3>
            <p className="text-gray-600 mb-2">
              <a
                href="tel:5301111111"
                className="hover:text-blue-600 transition-colors"
              >
                (530) 111-1111
              </a>
            </p>
            <p className="text-sm text-gray-500">Call us anytime</p>
          </div>

          {/* Email */}
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center">
                <Mail className="w-8 h-8 text-purple-600" />
              </div>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Email</h3>
            <p className="text-gray-600 mb-2">
              <a
                href="mailto:info@hbt.com"
                className="hover:text-blue-600 transition-colors"
              >
                info@hbt.com
              </a>
            </p>
            <p className="text-sm text-gray-500">We&apos;ll respond within 24 hours</p>
          </div>

          {/* Address */}
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                <MapPin className="w-8 h-8 text-blue-600" />
              </div>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Address
            </h3>
            <p className="text-gray-600 text-sm">
              4670 Sawtelle Ave
              <br />
              Yuba City, CA 95991
            </p>
          </div>

          {/* Hours */}
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center">
                <Clock className="w-8 h-8 text-orange-600" />
              </div>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Hours</h3>
            <p className="text-gray-600 text-sm">
              Mon-Fri: 8:00 AM - 5:00 PM
              <br />
              Sat: 8:00 AM - 12:00 PM
              <br />
              Sun: Closed
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactUs;

