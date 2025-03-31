"use client";

import { useState, useEffect } from "react";

export default function DarkModeToggle() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");

    if (storedTheme) {
      document.documentElement.classList.toggle("dark", storedTheme === "dark");
      setTheme(storedTheme);
      updateThemeColors(storedTheme);
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      updateThemeColors("light");
    }

    // Ensure fade-in effect applies after page loads
    setTimeout(() => {
      document.body.classList.add("loaded");
    }, 100);
  }, []);

  const updateThemeColors = (theme: string) => {
    if (theme === "dark") {
      document.body.style.backgroundColor = "#121212";
      document.body.style.color = "#ffffff";
    } else {
      document.body.style.backgroundColor =  "#f5f5dc";    
      document.body.style.color = "#4a3f35";	
    }
  };

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    localStorage.setItem("theme", newTheme);

    // Apply the colors dynamically when the toggle button is clicked
    updateThemeColors(newTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-800"
    >
      {theme === "dark" ? "🌙" : "☀️"}
    </button>
  );
}




 
