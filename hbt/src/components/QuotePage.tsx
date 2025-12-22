"use client";

import React from "react";
import QuoteForm from "./QuoteForm";

const QuotePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Get a Quote</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Get a free, no‑obligation shipping quote from HBT Inc. We know reliable, on‑time freight matters—so we operate with a commitment to keeping your supply chain moving. Just fill in your shipment details below and we&apos;ll send you a precise, all‑in price within 24 hours. No hidden fees. No last‑minute surprises.
          </p>
        </div>

        {/* Quote Form */}
        <div>
          <QuoteForm />
        </div>
      </div>
    </div>
  );
};

export default QuotePage;


