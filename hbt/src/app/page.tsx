"use client";

import Header from "@/components/Header";
import Section1 from "@/components/section1";
import Partners from "@/components/partners";
import Footer from "@/components/footer";
import ContactUs from "@/components/ContactUs";
import AboutUs from "@/components/AboutUs";
import ServiceCoverage from "@/components/ServiceCoverage";
import Image from "next/image";
import { motion } from "motion/react";

export default function Home() {
  return (
    <>
      <Header />
      {/* Hero Section */}
      <div
        className="w-full h-96 bg-cover bg-center bg-no-repeat flex items-center relative"
        style={{ backgroundImage: "url('/hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-[#808080]"></div>
        <div className="w-full max-w-6xl mx-auto px-8 flex items-center justify-between relative z-10">
          {/* Left side - Truck image */}
          <motion.div
            className="flex-shrink-0 -ml-64"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Image
              src="/models/truck_image.png"
              alt="Truck"
              width={700}
              height={525}
              className="drop-shadow-lg"
            />
          </motion.div>
          {/* Right side - Welcome message */}
          <motion.div
            className="text-white relative p-12 ml-60 min-w-[600px]"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            {/* Faded logo background */}
            <div 
              className="absolute inset-0 bg-center bg-no-repeat opacity-20 -z-10"
              style={{ 
                backgroundImage: "url('/logo.png')",
                backgroundSize: "70%"
              }}
            ></div>
            <h1 className="mb-4 drop-shadow-lg relative z-10">
              <span className="text-2xl font-semibold">Welcome to </span>
              <span className="text-7xl font-bold whitespace-nowrap">
                <span>HB </span>
                <span>Transportation.</span>
              </span>
            </h1>
            <p className="text-xl drop-shadow-lg mb-8 relative z-10">
              Reliable Freight, Delivered Fast
            </p>
          </motion.div>
        </div>
      </div>
      {/* Partners Section */}
      <div className="w-full">
        <Partners />
      </div>
      {/* About Us Section */}
      <AboutUs />
      {/* Service Coverage Section */}
      <ServiceCoverage />
      {/* Main Content */}
      <div className="w-full overflow-hidden">
        <Section1 />
      </div>
      {/* Contact Us Section */}
      <ContactUs />
      {/* Footer */}
      <Footer />
    </>
  );
}
