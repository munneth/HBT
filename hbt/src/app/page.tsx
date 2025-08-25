"use client";

import Header from "@/components/Header";
import Section1 from "@/components/section1";
import Partners from "@/components/partners";

export default function Home() {
  return (
    <>
      <Header />
      {/* Main Content */}
      <div className="w-full overflow-hidden">
        <Section1 />
      </div>
      {/* Partners Section */}
      <div className="w-full">
        <Partners />
      </div>
    </>
  );
}
