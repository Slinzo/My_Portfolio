"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

// List of icons and corresponding project counts
const icons = [
    { src: "html.svg", name: "HTML", projects: 2 },
    { src: "css.svg", name: "CSS", projects: 2 },
    { src: "javascript.svg", name: "JavaScript", projects: 1 },
    { src: "cpp.svg", name: "C++", projects: 1 },
    { src: "csharp.svg", name: "C#", projects: 2 },
    { src: "java.svg", name: "Java", projects: 0 },
    { src: "python.svg", name: "Python", projects: 0 },
    { src: "sql.svg", name: "Microsoft SQL Server", projects: 2 },
  ];
// Predefined positions (adjust to fit your layout)
const predefinedPositions = [
    { top: "20vh", left: "9vw" },
    { top: "20vh", left: "92vw" },
    { top: "30vh", left: "2vw" },
    { top: "60vh", left: "82vw" },
    { top: "60vh", left: "6vw" },
    { top: "75vh", left: "92vw" },
    { top: "44vh", left: "8vw" },
    { top: "35vh", left: "85vw" },
    { top: "40vh", left: "90vw" },
  ];
  
export default function FloatingIcons() {
  const [isClient, setIsClient] = useState(false);
  const [hoveredIcon, setHoveredIcon] = useState<number | null>(null);

  // Ensure this component only renders on the client
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null; // Prevents SSR mismatches

  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
      {icons.map((icon, index) => {
        const pos = predefinedPositions[index % predefinedPositions.length];

        return (
          <div
            key={index}
            className="absolute pointer-events-auto"
            style={{
              top: pos.top,
              left: pos.left,
              animation: `floatAnimation ${Math.random() * 3 + 4}s infinite alternate ease-in-out`,
            }}
            onMouseEnter={() => setHoveredIcon(index)}
            onMouseLeave={() => setHoveredIcon(null)}
          >
            {/* Floating Icon */}
            <Image
              src={`/icons/${icon.src}`}
              alt={icon.name}
              width={50}
              height={50}
              className="opacity-50 hover:opacity-100 transition-opacity duration-300"
            />

            {/* Tooltip */}
            {hoveredIcon === index && (
                <div className="absolute left-1/2 -translate-x-1/2 -top-12 bg-gray-900 text-white text-sm font-semibold px-4 py-2 rounded-lg shadow-md opacity-100 transform transition-all duration-300 scale-105">
                    {icon.name}  
                    <span className="block text-gray-300 text-xs">({icon.projects} projects)</span>
                </div>
            )}
          </div>
        );
      })}
    </div>
  );
}