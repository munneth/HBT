"use client";

import React from "react";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

const ContactPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to get started? Have questions about our services? We'd love
            to hear from you. Send us a message and we'll respond as soon as
            possible.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div>
            <ContactForm />
          </div>

          {/* Contact Information */}
          <div>
            <ContactInfo />
          </div>
        </div>

        {/* Additional Info Section */}
        <div className="mt-16 bg-white rounded-lg shadow-lg p-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Why Choose HBT?
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
              With years of experience in the trucking industry, we pride
              ourselves on providing reliable, efficient, and professional
              transportation services. Our commitment to safety, customer
              satisfaction, and environmental responsibility sets us apart from
              the competition.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
