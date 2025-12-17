"use client";

import Image from "next/image";
import ProdNav from "@/components/prodNav";

export default function Header() {
  return (
    <>
      {/* Header: logo is its own element overlapping a shorter nav bar */}
      <div className="sticky top-0 z-50 bg-white flex justify-center px-4 pt-5 pb-2">
        <div className="w-full max-w-6xl relative">
          {/* Logo block on the left, overlapping the bars, shifted further left */}
          <div className="absolute -left-4 top-12 z-10 flex items-center">
            <Image
              src="/logo.png"
              alt="logo"
              width={160}
              height={60}
              className="drop-shadow-lg"
            />
          </div>

          {/* Stack of bars to the right of the logo */}
          <div className="flex flex-col gap-1 pl-28">
            {/* Top thin bar for call info - only as wide as its content */}
            <div className="flex justify-end">
              <div
                className="bg-gray-800 inline-flex items-center px-4 py-1 text-xs md:text-sm text-white"
                style={{
                  clipPath:
                    "polygon(12px 0%, 100% 0%, calc(100% - 12px) 100%, 0% 100%)",
                }}
              >
                <div className="flex flex-col items-end">
                  <div className="font-semibold">Call 24/7: (530) 111-1111</div>
                  <div className="opacity-80">Office Hours: M-F 7am-5pm</div>
                </div>
              </div>
            </div>

            {/* Lower, longer bar for navigation */}
            <div
              className="bg-gray-800 flex items-center pr-6 py-2"
              style={{
                clipPath:
                  "polygon(20px 0%, 100% 0%, calc(100% - 20px) 100%, 0% 100%)",
              }}
            >
              <div className="flex-1 flex justify-center">
                <ProdNav />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
