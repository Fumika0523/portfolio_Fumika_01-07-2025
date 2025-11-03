import React from "react";
import { ThemeProvider, useTheme } from "./context/ThemeContext";
import Navbar from "./components/Section/Navbar";
import Hero from "./components/Section/Hero";
import Skill from "./components/Section/Skill";
import Work from "./components/Section/Work";
import Contact from "./components/Section/Contact";
import Particle from "./components/Prticle";

const AppContent = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();

  return (
   <div className={`relative min-h-screen ${isDarkMode ? "bg-[#25265c]" : "bg-[#f7f7ed]"}`}>
  <Particle isDarkMode={isDarkMode} />
  <div className="relative z-10">
    <Navbar toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
    <Hero toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
    <Skill toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
    <Work toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode}/>
    <Contact  toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode}/>
  </div>
</div>

  );
};

const App = () => (
  <ThemeProvider>
    <AppContent />
  </ThemeProvider>
);

export default App;
