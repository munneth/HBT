"use client";

import Image from "next/image";
import ProdNav from "@/components/prodNav";

export default function Header() {
  return (
    <>
      {/* Top section with logo and contact info - static position */}
      <div className="bg-white flex items-center justify-center px-8 py-4">
        <div className="flex items-center justify-between w-full max-w-2xl">
          <div className="flex items-center gap-4">
            <Image
              src="/logo.png"
              alt="logo"
              width={80}
              height={80}
              className="md:w-[120px] md:h-[120px]"
            />
          </div>
          <div className="flex flex-col items-end text-sm">
            <div className="font-semibold text-gray-800">
              Call Us: 530-111-1111
            </div>
            <div className="text-gray-600">info@hbt.com</div>
          </div>
        </div>
      </div>
      {/* Navigation bar section - sticky position */}
      <div className="sticky top-0 z-50 flex justify-center">
        <ProdNav />
      </div>
    </>
  );
}
