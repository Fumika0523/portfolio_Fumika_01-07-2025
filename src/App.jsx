// import React from 'react'
// import {ThemeProvider} from "./context/ThemeContext"
// import Navbar from './components/Section/Navbar'
// import Hero from './components/Section/Hero'
// import Skill from './components/Section/Skill'
// import Contact from './components/Section/Contact'
// import { Work } from './components/Section/Work'

// const App = () => {
//   return (
//    <>
//     <ThemeProvider>
//         <div className='h-screen'>
//           <Navbar/>
//           <Hero/>
//           <Skill/>
//           <Work/>
//           <Contact/>
//         </div>

//     </ThemeProvider>
//    </>
//   )
// }

// export default App


import React from "react";
import { ThemeProvider, useTheme } from "./context/ThemeContext";
import Navbar from "./components/Section/Navbar";
import Hero from "./components/Section/Hero";
import Skill from "./components/Section/Skill";
import Contact from "./components/Section/Contact";
import { Work } from "./components/Section/Work";

const AppContent = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();

  return (
<>
      {/* All components now inherit dark mode */}
            <div className={`mh-screen transition-all duration-500 ${
      isDarkMode? "bg-[#25265c] text-white":"bg-gray-50 text-gray-900"
    }`}>
        <Navbar toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
        <Hero />
        <Skill />
        <Work />
        <Contact />
      </div>
</>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
};

export default App;
