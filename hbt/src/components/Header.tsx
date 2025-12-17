"use client";

import Image from "next/image";
import ProdNav from "@/components/prodNav";

export default function Header() {
  return (
    <>
      {/* Header section with logo, contact info, and navigation */}
      <div className="bg-white sticky top-0 z-50 px-8 py-4">
        <div className="flex items-center justify-between w-full gap-8">
          {/* Left side - Logo and Call Us */}
          <div className="flex flex-col gap-2 ml-16">
            <Image
              src="/logo.png"
              alt="logo"
              width={80}
              height={80}
              className="md:w-[120px] md:h-[120px]"
            />
            <div className="font-semibold text-gray-800 text-sm">
              Call Us: 530-111-1111
            </div>
            <div className="text-gray-600 text-sm">info@hbt.com</div>
          </div>
          {/* Right side - Navigation bar */}
          <div className="flex-1 flex justify-end">
            <ProdNav />
          </div>
        </div>
      </div>
    </>
  );
}
