"use client";

import Image from "next/image";
import ProdNav from "@/components/prodNav";

export default function Header() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm">
      <div className="flex items-center justify-between p-4 text-black">
        <div className="flex items-center gap-4">
          <Image
            src="/logo.png"
            alt="logo"
            width={60}
            height={60}
            className="md:w-[100px] md:h-[100px]"
          />
        </div>
        <div className="flex-1 flex justify-center">
          <ProdNav />
        </div>
        <div className="w-[100px]"></div> {/* Spacer to balance the logo */}
      </div>
    </div>
  );
}
