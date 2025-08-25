"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-black">
      {/* Main Footer Section - All in one line */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <div className="bg-black p-3 mr-4">
              <Image
                src="/logo.png"
                alt="HBT Logo"
                width={60}
                height={60}
                className="w-12 h-12"
              />
            </div>
            <div className="text-black uppercase font-bold">
              <div>HBT</div>
              <div className="text-sm">TRUCKING</div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center space-x-6">
            <Link
              href="/"
              className="text-black uppercase hover:text-gray-600 transition-colors"
            >
              Home
            </Link>
            <div className="w-px h-6 bg-gray-300"></div>
            <Link
              href="/resources"
              className="text-black uppercase hover:text-gray-600 transition-colors"
            >
              Resources
            </Link>
            <div className="w-px h-6 bg-gray-300"></div>
            <Link
              href="/application"
              className="text-black uppercase hover:text-gray-600 transition-colors"
            >
              Application
            </Link>
            <div className="w-px h-6 bg-gray-300"></div>
            <Link
              href="/contact"
              className="text-black uppercase hover:text-gray-600 transition-colors"
            >
              Contact
            </Link>
            <div className="w-px h-6 bg-gray-300"></div>
            <Link
              href="/about"
              className="text-black uppercase hover:text-gray-600 transition-colors"
            >
              About Us
            </Link>
          </div>

          {/* Social Media, Address, and Contact Button */}
          <div className="flex items-center space-x-4">
            {/* Social Media Icons */}
            <a
              href="#"
              className="bg-gray-200 p-2 rounded hover:bg-gray-300 transition-colors"
            >
              <svg
                className="w-4 h-4 text-black"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a
              href="#"
              className="bg-gray-200 p-2 rounded hover:bg-gray-300 transition-colors"
            >
              <svg
                className="w-4 h-4 text-black"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>

            {/* Address */}
            <div className="text-black text-sm">
              <p>4670 Sawtelle Ave, Yuba City, CA 95991</p>
            </div>

            {/* Call to Action Button */}
            <Link
              href="/contact"
              className="bg-gray-200 hover:bg-gray-300 text-black px-4 py-2 rounded transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Section - Copyright */}
      <div className="border-t border-gray-300">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-center">
            <div className="flex items-center space-x-2">
              <Image
                src="/logo.png"
                alt="HBT Logo"
                width={20}
                height={20}
                className="w-5 h-5"
              />
              <span className="text-black text-sm">
                COPYRIGHT © 2025 HBT INC.
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
