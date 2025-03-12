"use client";

import { useState } from "react";
import Image from "next/image";

interface FlipCardProps {
  frontImage: string;
  frontText: string;
  backText: string;
}

export default function FlipCard({ frontImage, frontText, backText }: FlipCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="w-[28rem] md:w-[36rem] h-52 md:h-64 relative cursor-pointer perspective transition-transform duration-300 hover:scale-105 hover:shadow-xl"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      {/* Flip Container */}
      <div
        className={`relative w-full h-full transition-transform duration-500 transform-style preserve-3d ${
          isFlipped ? "rotate-y-180" : ""
        }`}
      >
        {/* Front Side */}
        <div
          className={`absolute inset-0 flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg shadow-lg overflow-hidden backface-hidden ${
            isFlipped ? "hidden" : "block"
          }`}
        >
          {/* Image */}
          <div className="absolute inset-0 w-full h-full">
            <Image 
              src={frontImage} 
              alt="Front Side" 
              layout="fill" 
              objectFit="cover"
              className="rounded-lg opacity-80"
            />
          </div>
          {/* Overlay Text */}
          <div className="relative z-10 bg-black/40 p-4 rounded-lg text-white">
            <p className="text-lg font-bold">{frontText}</p>
          </div>
          <span className="absolute bottom-2 text-sm text-gray-200 dark:text-gray-400">Click to Flip</span>
        </div>

        {/* Back Side */}
        <div
          className={`absolute inset-0 flex items-center justify-center bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg shadow-lg rotate-y-180 p-4 ${
            isFlipped ? "block" : "hidden"
          }`}
        >
          <p className="text-sm text-center">{backText}</p>
        </div>
      </div>
    </div>
  );
}


