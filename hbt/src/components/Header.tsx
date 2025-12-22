"use client";

import Image from "next/image";
import ProdNav from "@/components/prodNav";
import { Phone, Mail } from "lucide-react";
import Link from "next/link";

export default function Header() {
  return (
    <>
      <div className="sticky top-0 z-50 bg-white">
        {/* Top section with logo and contact info */}
        <div className="w-full bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
            {/* Left side - Logo and company name */}
            <div className="flex items-center gap-4">
              <div className="flex-shrink-0">
                <Image
                  src="/logo.png"
                  alt="logo"
                  width={80}
                  height={80}
                  className="rounded-full"
                />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-black">HBT INC</h1>
                <p className="text-sm text-gray-600">Precision in every mile</p>
              </div>
            </div>

            {/* Right side - Contact information */}
            <div className="flex items-center gap-6">
              {/* Phone */}
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-black" />
                <div>
                  <p className="text-xs text-gray-500 uppercase">Call Us</p>
                  <a
                    href="tel:5306732116"
                    className="text-lg font-bold text-black hover:text-gray-700"
                  >
                    +1 (530) 673-2116
                  </a>
                </div>
              </div>

              {/* Vertical divider */}
              <div className="w-px h-12 bg-gray-300"></div>

              {/* Email */}
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-black" />
                <div>
                  <p className="text-xs text-gray-500 uppercase">Email Us</p>
                  <a
                    href="mailto:info@hbtinc.org"
                    className="text-lg font-bold text-black hover:text-gray-700"
                  >
                    INFO@HBTINC.ORG
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation bar with overlap effect */}
        <div className="relative -mb-8 z-10">
          <ProdNav />
        </div>
      </div>
    </>
  );
}
