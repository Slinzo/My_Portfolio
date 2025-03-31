"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import DarkModeToggle from "@/components/DarkModeToggle";
import FloatingIcons from "@/components/FloatingIcons";
import FlipCard from "@/components/FlipCard";
import ProjectTimeline from "@/components/ProjectTimeline";

export default function Home() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 text-center bg-background text-foreground transition-all w-full pt-20"> {/* Added pt-20 to add padding */}
      
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 w-full bg-gray-900 bg-opacity-80 backdrop-blur-md shadow-lg z-50">
        <ul className="flex justify-between items-center p-4 text-white text-lg">
          <div className="flex space-x-6">
            {/* About Link: Scroll to Top */}
            <li><a href="#top" className="hover:text-gray-300">Back to Top</a></li>

            {/* Projects Link: Scroll to Projects Section */}
            <li><a href="#projects" className="hover:text-gray-300">Projects</a></li>
            <li><a href="#documents" className="hover:text-gray-300">Documents</a></li>
          </div>
          <div className="flex items-center space-x-4"> {/* Add space between items */}
            {/* Dark Mode Toggle */}
            <DarkModeToggle />
          </div>
        </ul>
      </nav>

      {/* Top Anchor (for "Back to Top" link) */}
      <div id="top"></div>

      {/* Profile Image */}
      <Image
        className="rounded-full transition-transform duration-300 hover:scale-105 hover:shadow-xl mt-16"
        src="/T10.JPG"
        alt="T10"
        width={180}
        height={180}
        priority
      />

      {/* Introduction */}
      <div className="relative">
        <FloatingIcons />
        <h1 className="text-4xl font-bold mt-6">Hi, I&apos;m Lindani</h1>
        <p className="text-lg mt-2 max-w-lg text-gray-700 dark:text-gray-300">
          Computer Science Graduate| 📍 Durban, South Africa 
        </p>
      </div>

      {/* Social Links */}
      <div className="flex gap-6 mt-6">
        <a className="hover:opacity-75 transition" href="https://github.com/Slinzo" target="_blank">
          <Image src="/github.svg" alt="GitHub" width={40} height={40} />
        </a>
        <a className="hover:opacity-75 transition" href="https://www.linkedin.com/in/lindani-mashwama-185a19238/" target="_blank">
          <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="LinkedIn" width={40} height={40} />
        </a>
      </div>

      {/* Content Section */}
      <div className="flex flex-col items-center justify-center min-h-screen space-y-12 p-6">

        {/* About Me Section */}
        <div id="about">
          <FlipCard 
            frontImage="/code.jpg" 
            frontText="About Me" 
            backText="Hi, I’m Lindani! 🌟 A recent computer science graduate currently based in Durban, South Africa, with a passion for problem solving and a love for learning. While my experience so far comes from school projects, I’ve honed my teamwork, communication, and adaptability skills which are qualities I’m eager to bring to the real world.
                     I’m still exploring where I fit in the vast field of computer science, but I’m excited to dive in, grow, and make an impact. Whether it’s coding, data, or something entirely new, I’m ready to roll up my sleeves and learn.
                      If you’re looking for someone who’s eager, adaptable, and brings fresh energy to the table, let’s connect! I may be at the start of my journey, but I’m ready to work hard and contribute meaningfully. 💻✨" 
          />
          <div className="mt-6"> {/* Added margin to separate About Me and Hobbies */}
            <FlipCard
              frontImage="/fish.jpg"
              frontText="Hobbies"
              backText="When I’m not coding, you’ll probably find me binge-watching The Office for the umpteenth time or diving into an anime series that’s caught my
                        eye. 📺 I’m also an occasional bookworm (that is if I find the right book to obsess over a certain period). 📚
                        Going to the gym is probably the most consistent form of discipline i have had longevity wise, I started off trying to lose weight in my early teens, saw results and never looked back. 
                        On more recent interests, I’ve been learning guitar thanks to a friend. I can confidently say I’ve mastered playing for our dog 
                        (he doesn’t run away, I must be doing something right!). 🎸🐕 Once I’ve conquered the guitar, I’m planning to tackle the piano, let’s see how far I get! 🎹.
                        I’m always up for trying something new, whether it’s a hobby, a skill, or just a really good cup of coffee. ☕ Let me know if you have any recommendations!"
            />
          </div>
        </div>

        {/* Separation Line */}
        <div className="w-1/2 border-t border-gray-400 dark:border-gray-600 my-12"></div>

        {/* Projects Section */}
        <div id="projects">
          <motion.h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">
           👷🏽‍♂️
          </motion.h2>
          <ProjectTimeline />
        </div>

        {/* Separation Line */}
        <div className="w-1/2 border-t border-gray-400 dark:border-gray-600 my-12"></div>

        {/* Documents Section */}
        <div id="documents" className="relative w-full max-w-4xl mx-auto text-center p-8 bg-white/10 dark:bg-gray-900/20 backdrop-blur-md rounded-xl shadow-lg">
        <motion.h2 
            className="text-3xl font-bold mb-4 text-gray-800 dark:text-white"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
           
          >
            Curriculum Vitae
          </motion.h2>

          {/* Download CV Button */}
          <a href="/cv.pdf" download className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-all">
            Download CV
          </a>

          {/* Toggle Button for CV Preview */}
          <button className="ml-4 inline-block bg-green-600 hover:bg-green-800 text-white font-semibold py-2 px-4 rounded-lg transition-all" onClick={() => setIsExpanded(!isExpanded)}>
            {isExpanded ? "Hide Preview" : "View CV"}
          </button>

          {/* CV Preview (iframe) */}
          {isExpanded && (
            <motion.div
              className="mt-6 w-full h-[500px] bg-white/30 backdrop-blur-lg rounded-lg shadow-md overflow-hidden"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <iframe src="/cv.pdf" className="w-full h-full border-none" title="CV Preview" />
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}







