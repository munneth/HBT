"use client";

import Header from "@/components/Header";
import Section1 from "@/components/section1";
import Partners from "@/components/partners";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Header />
      {/* Hero Section */}
      <div
        className="w-full h-96 bg-cover bg-center bg-no-repeat flex items-center justify-center"
        style={{ backgroundImage: "url('/hero.jpg')" }}
      >
        <div className="text-center text-white">
          <h1 className="text-5xl font-bold mb-4 drop-shadow-lg">
            Welcome to HBT
          </h1>
          <p className="text-xl drop-shadow-lg mb-8">
            Your trusted partner in excellence
          </p>
          <Link
            href="/contact"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300 transform hover:scale-105 drop-shadow-lg"
          >
            Contact Now
          </Link>
        </div>
      </div>
      {/* Partners Section */}
      <div className="w-full">
        <Partners />
      </div>
      {/* Main Content */}
      <div className="w-full overflow-hidden">
        <Section1 />
      </div>
    </>
  );
}
