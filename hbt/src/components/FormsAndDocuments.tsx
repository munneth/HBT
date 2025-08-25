"use client";

import React from "react";
import Link from "next/link";

interface DocumentItemProps {
  title: string;
  description: string;
  href?: string;
}

const DocumentItem: React.FC<DocumentItemProps> = ({
  title,
  description,
  href,
}) => {
  const content = (
    <div className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
      {/* PDF Icon */}
      <div className="flex-shrink-0 w-12 h-12 bg-red-600 text-white flex items-center justify-center rounded-md font-bold text-sm">
        PDF
      </div>
      {/* Text Content */}
      <div>
        <h3 className="text-lg font-semibold text-red-700 mb-1">{title}</h3>
        <p className="text-gray-700 text-sm">{description}</p>
      </div>
    </div>
  );

  return href ? <Link href={href}>{content}</Link> : content;
};

const FormsAndDocuments: React.FC = () => {
  const documents = [
    {
      title: "Introductory Page",
      description:
        "This provides a written overview of the company. Find company information, a message from the CEO, and more",
      href: "/resources/introductory-page",
    },
    {
      title: "Authority Letter",
      description:
        "The Authority Letter is a letter issued by the Federal Motor Carrier Safety Administration (FMCSA), which indicates the motor carrier's right to operate a commercial motor vehicle in order to transport goods or passengers for hire",
      href: "/resources/authority-letter",
    },
    {
      title: "W-9",
      description:
        "The W-9 is a request for Taxpayer Identification Number and Certification",
      href: "/resources/w9",
    },
    {
      title: "Proof of Insurance",
      description:
        "Proof of Insurance displays the company's coverage for commercial liability, automobile liability, motor truck cargo, and umbrella coverage",
      href: "/resources/proof-of-insurance",
    },
    {
      title: "Directory",
      description:
        "Quickly access important contact information such as phone numbers, extensions, and emails of specific employees, in a printable format",
      href: "/resources/directory",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Company Documents & Forms
        </h2>
        <div className="space-y-6">
          {documents.map((doc, index) => (
            <DocumentItem
              key={index}
              title={doc.title}
              description={doc.description}
              href={doc.href}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FormsAndDocuments;
