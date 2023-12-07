"use client";
import Image from "next/image";
export default function Hero() {
  return (
    <div className="flex h-full dark:bg-[#1f1f1f] flex-col justify-center items-center max-w-3xl ">
      <div className="flex items-center">
        <div className="relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px]">
          <Image
            src="/documents.png"
            fill
            className="object-contain dark:hidden animate-fade-in"
            alt="Document"
          />
          <Image
            src="/documents-dark.png"
            fill
            className="object-contain dark:block hidden animate-fade-in"
            alt="Document"
          />
        </div>
        <div className="relative w-[400px] h-[400px] hidden md:block animate-fade-in">
          <Image
            src="/reading.png"
            fill
            className="object-contain dark:hidden "
            alt="Reading"
          />
          <Image
            src="/reading-dark.png"
            fill
            className="object-contain dark:block hidden animate-fade-in" 
            alt="Reading"
          />
        </div>
      </div>
    </div>
  );
}
