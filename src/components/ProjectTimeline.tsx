"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Dialog } from "@headlessui/react";
import Image from "next/image";

interface Project {
  id: number;
  title: string;
  date: string;
  description: string;
  image: string;
  modalImages: string[];
  githubLink: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Driving School Booking Website",
    date: "Nov 2024",
    description: "Dynamic web app with JavaScript, SQL database and Power BI integration.",
    image: "/DSc.jpg",
    modalImages: ["/DSc.jpg", "/DS_Menu.jpg", "/DS_Profile.jpg", "/DSs.jpg"],
    githubLink: "https://github.com/Slinzo/Driving-School-website-",
  },
  {
    id: 2,
    title: "Trivia Game",
    date: "May 2024",
    description: "A fun and interactive time-based trivia game built with C++",
    image: "/VMC.jpg",
    modalImages: ["/VMC.jpg", "/VMe.jpg", "/VMm.jpg", "/VMl.jpg"],
    githubLink: "https://github.com/Slinzo/Via-Mzansi-Trivia-Game",
  },
  {
    id: 3,
    title: "Restaurant POS with Inventory Management",
    date: "June 2022",
    description: "A POS system with inventory management built using C# and SQL.",
    image: "/RC.jpg",
    modalImages: ["/RC.jpg"],
    githubLink: "https://github.com/Slinzo/Restuarant-POS-System-",
  },
];

export default function ProjectTimeline() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="relative w-full max-w-screen-lg mx-auto min-h-screen flex flex-col items-center bg-fixed bg-cover bg-[url('/images/parallax-bg.jpg')] p-8">
      {/* Section Heading */}
      <h2 className="text-4xl font-bold mb-8 text-foreground transition-colors">Projects</h2>

      {/* Moving Timeline */}
      <motion.div
        className="flex space-x-8"
        initial={{ x: "100%" }}
        animate={{ x: "-100%" }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
      >
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className="relative w-72 h-48 md:w-96 md:h-56 cursor-pointer"
            whileHover={{ scale: 1.1 }}
            onClick={() => setSelectedProject(project as Project)}
          >
            <div className="absolute w-full h-full transition-transform duration-500" style={{ transformStyle: "preserve-3d" }}>
              {/* Front Side */}
              <div className="absolute w-full h-full bg-gray-900 text-white flex items-center justify-center rounded-lg" style={{ backfaceVisibility: "hidden" }}>
                <div className="absolute inset-0">
                  <Image src={project.image} alt={project.title} layout="fill" objectFit="cover" className="rounded-lg" />
                </div>
                <div className="absolute bottom-2 left-2 bg-black/50 text-white px-2 py-1 rounded-md">
                  <p className="text-sm font-semibold">{project.date}</p>
                </div>
              </div>

              {/* Back Side */}
              <div className="absolute w-full h-full bg-gray-200 text-gray-900 flex items-center justify-center rounded-lg rotate-y-180 p-4" style={{ backfaceVisibility: "hidden" }}>
                <p className="text-sm text-center">{project.title}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Pop-out Modal */}
      {selectedProject && (
        <Dialog open={true} onClose={() => setSelectedProject(null)} className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <Dialog.Panel className="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-lg shadow-lg relative">
            <h2 className="text-xl font-bold mb-4">{selectedProject.title}</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">{selectedProject.description}</p>
            <div className="grid grid-cols-2 gap-4">
              {selectedProject.modalImages.map((img, index) => (
                <div key={index} className="relative w-full h-32">
                  <Image src={img} alt={`${selectedProject.title} ${index + 1}`} layout="fill" objectFit="cover" className="rounded-lg" />
                </div>
              ))}
            </div>
            <div className="flex mt-4 space-x-4">
              <button className="p-2 bg-blue-500 text-white rounded-lg flex-1" onClick={() => window.open(selectedProject.githubLink, "_blank")}>
                Go
              </button>
              <button className="p-2 bg-gray-500 text-white rounded-lg flex-1" onClick={() => setSelectedProject(null)}>
                Close
              </button>
            </div>
          </Dialog.Panel>
        </Dialog>
      )}
    </div>
  );
}
