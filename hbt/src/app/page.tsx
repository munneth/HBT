"use client";

import Image from "next/image";
import ProdNav from "@/components/prodNav";
import Scene from "@/components/scene";

export default function Home() {
  return (
    <>
      <ProdNav />
      <div className="h-screen w-screen">
        <Scene />
      </div>
    </>
  );
}
