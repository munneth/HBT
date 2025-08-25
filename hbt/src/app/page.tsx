"use client";

import Header from "@/components/Header";
import Section1 from "@/components/section1";

export default function Home() {
  return (
    <>
      <Header />
      {/* Main Content */}
      <div className="h-screen w-full overflow-hidden -mt-35">
        <Section1 />
      </div>
    </>
  );
}
