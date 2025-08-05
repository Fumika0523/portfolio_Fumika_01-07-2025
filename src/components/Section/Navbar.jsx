import React, { useState } from 'react'
import { AnimatePresence, motion } from "framer-motion"
import { Code2, Sun, Moon } from "lucide-react"
import { useTheme } from "../../context/ThemeContext"
import logo from "../../assets/image/logo.png"
import { IoMdClose } from "react-icons/io";
import { IoMenu } from "react-icons/io5";


const Navbar = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const navItems = ["Home", "Skill", "Work", "About", "Contact"];

  return (
    <motion.nav
      style={{ opacity: 1 }}
      className={`fixed top-0 w-full z-50 px-6 py-4 ${
        isDarkMode ? "bg-gray-950/80" : "bg-gray-50/80"
      } backdrop-blur-md border-b ${
        isDarkMode ? "border-gray-800" : "border-gray-200"
      }`}
    >

      <div className="max-w-7xl mx-auto flex items-center justify-between">
            <motion.div
          whileHover={{ y: -2 }}
          transition={{ duration: 0.3 }}
          className="inline-flex items-center space-x-2 p-3  transform transition-transform"
        >
          <div className={`text-md font-bold uppercase font-serif transition-colors ${
                isDarkMode
                  ? "text-[#f5bbc5] hover:text-white"
                  : "text-gray-600 hover:text-gray-900"
              }`}>Fumika Mikami</div>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <motion.button
              key={item}
              aria-label={`Go to ${item} section`}
              whileHover={{ y: -2 }}
              onClick={() => scrollToSection(item.toLowerCase())}
              className={`text-md uppercase tracking-wider transition-colors ${
                isDarkMode
                  ? "text-[#b78890] hover:text-white"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              {item}
            </motion.button>
          ))}
          <motion.button
            type="button"
            aria-label="Toggle Dark Mode"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => toggleDarkMode(isDarkMode ? "light" : "dark")}
            className={`p-2 rounded-full cursor-pointer transition-colors ${
              isDarkMode
                ? "text-amber-400 hover:text-amber-600 hover:bg-gray-100"
                : "text-gray-600 hover:text-gray-900 hover:bg-pink-100"
            }`}
          >
            {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
          </motion.button>
        </div>
  

      {/* Mobile Menu Button */}
      <div className='md:hidden flex items-center space-x-4'>
        <motion.button
        whileHover={{scale:1.05}}
        whileTap={{scale:0.95}}
        onClick={()=>toggleDarkMode(isDarkMode ? "light" : "dark")}
        className={`p-2 rounded-full transition-colors
        ${isDarkMode
          ? "text-gray-400 hover:text-amber-600 hover:bg-pink-100"
          : "text-gray-500 hover:text-gray-900 hover:bg-blue-100"}`}>
          {isDarkMode ? <Sun size={18} /> :<Moon  size={18} />}
        </motion.button>
          
        <motion.button
        whileHover={{scale:1.05}}
        whileTap={{scale:0.95}}
        onClick={()=>setIsMenuOpen(!isMenuOpen)}
        className={`p-2 rounded-full transition-colors
        ${isDarkMode ? "text-gray-400 hover:text-white hover:bg-gray-800":"text-gray-600 hover:text-gray-900 hover:bg-gray-200"}`}>
          {isMenuOpen ? <IoMdClose size={18} /> :< IoMenu size={18} />}
        </motion.button>
      </div>

    </div>
        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
            initial={{opacity:0, y:-20}}
            animate={{opacity:1, y:0}}
            exit={{opacity:0, y:-20}}
            className={`md:hidden mt-4 rounded-lg ${
              isDarkMode ? "bg-gray-950 text-white" : "bg-white"
            } border ${isDarkMode ? "border-pink-200/20":"border-gray-200"}`}>

            {["Home","Skills","Work","About","Contact"].map((item)=>(
              <motion.button
              key={item}
              whileHover={{x:5}}
              onClick={()=>scrollToSection(item.toLowerCase())}
              className={`block w-full ml-2  text-left px-2 py-2 text-sm uppercase tracking-wider transition-colors
                ${
              isDarkMode ? "text-[#b78890] hover:text-white" : "text-gray-600 hover:text-gray-900"
            }`}>
          {item}
          </motion.button>
          ))}
            </motion.div>
          )}
        </AnimatePresence>
        
    </motion.nav>
  );
};

export default Navbar;
