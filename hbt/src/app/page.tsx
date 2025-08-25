"use client";

import Image from "next/image";
import ProdNav from "@/components/prodNav";
import Section1 from "@/components/section1";

export default function Home() {
  return (
    <>
      {/* Navbar and Logo */}
      <div className="flex items-center justify-between p-4 bg-white/10 backdrop-blur-sm z-10">
        <div className="flex items-center gap-4">
          <Image
            src="/logo.png"
            alt="logo"
            width={60}
            height={60}
            className="md:w-[100px] md:h-[100px]"
          />
        </div>
        <ProdNav />
      </div>

      {/* Main Content */}
      <div className="h-screen w-full overflow-hidden -mt-35">
        <Section1 />
      </div>
    </>
  );
}
