"use client";

import Image from "next/image";
import ProdNav from "@/components/prodNav";

export default function Header() {
  return (
    <div className="flex items-center justify-between p-4 text-black z-10">
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
  );
}
