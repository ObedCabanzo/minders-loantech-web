"use client";
import Image from "next/image";
import { FontExamples } from "@/components/FontExamples";
export default function Home() {
  return (
    <>
      <div
        className="min-h-screen flex flex-col items-center justify-between px-4 py-[10vh] relative overflow-hidden"
        style={{
          backgroundColor: "#FFFFFF",
        }}
      >
        <h1 className="font-jersey text-5xl lg:text-9xl text-center text-[#0404FF] ">
          PRESTAMOCHI
        </h1>
        <Image
          src="/images/char.png"
          alt="Prestamochi Character"
          width={100}
          height={100}
          className="mx-auto drop-shadow-2xl w-[30%] h-auto"
          priority
        />
        <div className="flex flex-col items-center justify-center">
          <p
            className="text-2xl md:text-4xl lg:text-6xl font-jetbrains font-light text-center"
            style={{ color: "#03FF86" }}
          >
            The loan game that grows with you
          </p>
          <p
            className="text-3xl md:text-5xl lg:text-7xl font-jetbrains font-light text-center"
            style={{ color: "#03FF86" }}
          >
            ¡Coming Soon!
          </p>
        </div>
      </div>
    </>
  );
}
