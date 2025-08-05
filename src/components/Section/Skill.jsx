import { useTheme } from "../../context/ThemeContext"
import { IoLogoNodejs } from "react-icons/io";
import { useState, useMemo, useCallback } from "react";
import { DiVisualstudio } from "react-icons/di";
import { FaLock } from "react-icons/fa";
import { MdApi } from "react-icons/md";
import { FaLayerGroup, FaLaptopCode, FaServer, FaToolbox } from "react-icons/fa";
import {
  SiHtml5, SiCss3, SiJavascript,
  SiReact,  SiTailwindcss,
  SiNodedotjs, SiExpress, SiMongodb, SiGithub, 
  SiPostman,SiNetlify ,SiRender ,SiBootstrap ,SiMui, SiJson ,SiNextdotjs ,SiFramer, SiRedux   
} from 'react-icons/si';

import {
  FileCode2,
  Braces,
  Atom,
  Palette,
  Server,
  Database,
  GitBranch,
  Terminal,
  Code2,
  Sparkles,
  Zap,
  Layers,
  Cpu,
  Settings,
} from "lucide-react";
import { motion } from "framer-motion";
import React from "react";
import { IoLogoJavascript } from "react-icons/io5";

const Skill = () => {

   const { isDarkMode} = useTheme("")
          const styleBg = isDarkMode
          ? "bg-gradient-to-br text-gray-200 from-[#e86b80]  to-pink-700/80"
          :
          "bg-gradient-to-br text-gray-100 from-pink-400/60  to-[#e86b80]"


    const skillIcons = {
  HTML: <SiHtml5 className="w-8 h-8" style={{ color: "#E34F26" }} />,
  CSS: <SiCss3 className="w-8 h-8" style={{ color: "#1572B6" }} />,
  JavaScript: <SiJavascript className="w-8 h-8" style={{ color: "#F7DF1E" }} />,
  React: <SiReact className="w-8 h-8" style={{ color: "#61DAFB" }} />,
  "Tailwind CSS": <SiTailwindcss className="w-8 h-8" style={{ color: "#06B6D4" }} />,
  "Node.js": <SiNodedotjs className="w-8 h-8" style={{ color: "#339933" }} />,
  Express:  <SiExpress
    className={`w-6 h-6 ${isDarkMode ? "text-gray-300" : "text-gray-800"
    }`}/>,
  MongoDB: <SiMongodb className="w-8 h-8" style={{ color: "#47A248" }} />,
  "Git/GitHub": <SiGithub className={`w-6 h-6 ${isDarkMode ? "text-gray-300" : "text-gray-800"
    }`} />,
  "VS Code": <DiVisualstudio className="w-8 h-8" style={{ color: "#007ACC" }} />,
  POSTMAN: <SiPostman className="w-8 h-8" style={{ color: "#FF6C37" }} />,
  "Netlify" : <SiNetlify className="w-6 h-6 text-[#00C7B7]" />,
  Render: <SiRender className="w-6 h-6 text-[#46E3B7]" />,
  "Bootstrap": <SiBootstrap className="w-6 h-6 text-[#7952B3]" />,
  "MUI": <SiMui className="w-6 h-6 text-[#007FFF]" />,
  "JWT": <SiJson className="w-6 h-6 text-yellow-500" />,
  "Next.js": <SiNextdotjs className="w-6 h-6 text-black dark:text-white" />,
  "Framer Motion": <SiFramer className="w-6 h-6 text-[#0055FF]" />,
"Redux": <SiRedux className="w-6 h-6 text-[#764ABC]" />,
"bcrypt": <FaLock className="w-6 h-6 text-gray-600" />,
"REST API": <MdApi className="w-6 h-6 text-blue-500" />,

    };

    const skills = [
      { name: "HTML", category: "frontend" },
       { name: "CSS", category: "frontend" },
      { name: "JavaScript", category: "frontend" },
      { name: "React", category: "frontend" },
      { name: "Tailwind CSS", category: "frontend" },
      { name: "Node.js", category: "backend" },
      { name: "Express", category: "backend" },
      { name: "MongoDB", category: "backend" },
      { name: "Git/GitHub", category: "tools" },
      { name: "VS Code", category: "tools" },
      {name:"POSTMAN", category:"tools"},
      {name:"Netlify",category:"tools"},
      {name:"Render",category:"tools"},
      {name:"MUI",category:"frontend"},
    {name:"Bootstrap",category:"frontend"},
     {name:"Next.js",category:"frontend"},
     {name:"Framer Motion",category:"frontend"},
     {name:"bcrypt",category:"backend"},
     {name:"JWT",category:"backend"},
    ];

      const [activeCategory, setActiveCategory] = useState("all");

  // useMemo para evitar recalcular skills filtrados
  const filteredSkills = useMemo(
    () =>
      skills.filter(
        (skill) => activeCategory === "all" || skill.category === activeCategory
      ),
    [activeCategory]
  );
   
      const containerVariants = {
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.1,
          },
        },
      };

      const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.5,
            ease: "easeOut",
          },
        },
      };

      const categories = [
  { id: "all", name: "All Skills", icon: <FaLayerGroup className="w-4 h-4" /> },
  { id: "frontend", name: "Frontend", icon: <FaLaptopCode className="w-4 h-4" /> },
  { id: "backend", name: "Backend", icon: <FaServer className="w-4 h-4" /> },
  { id: "tools", name: "Tools", icon: <FaToolbox className="w-4 h-4" /> },
];
    // const categories = [
    //   { id: "all", name: "All Skills", icon: <Layers className="w-4 h-4" /> },
    //   { id: "frontend", name: "Frontend", icon: <Palette className="w-4 h-4" /> },
    //   { id: "backend", name: "Backend", icon: <Server className="w-4 h-4" /> },
    //   { id: "tools", name: "Tools", icon: <Settings className="w-4 h-4" /> },
    // ];

  // useCallback to stabilize the handler >> Only create this function once when the component mounts. Never recreate it on re-renders.
  const handleCategory = useCallback((id) => setActiveCategory(id), []);

  // Detect if it’s mobile to limit animations
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

   return (
    <>
    <section
    id="skill" className={` section-padding ${
      isDarkMode? "bg-gray-950 text-white":"bg-gray-50 text-gray-900"
    }  py-8`}>
      <div className='heading-lg text-center mb-2 text-3xl'>My Developer Toolkit</div>
       <div className="h-1 w-20 bg-[#e86b80] mx-auto mb-8"></div>
      {/* Background overlay para mejor contraste - REMOVIDO para mantener background consistente */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/30 to-background/60 pointer-events-none" />

     <div className="container mx-auto max-w-6xl relative z-10">

        {/* category filters Buttons*/}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => handleCategory(category.id)}
              className={`
              group flex cursor-pointer items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 capitalize font-medium
              ${activeCategory === category.id
                ? "bg-gradient-to-br text-gray-200 from-[#efafb9]  to-pink-800/80 shadow-lg shadow-primary/25"
                : "bg-card/50 border border-gray-400/50 text-muted-foreground hover:bg-pink-400/30 hover:border-pink-400/30 hover:text-white"
        }`}
              whileHover={!isMobile ? { scale: 1.05 } : {}}
              whileTap={!isMobile ? { scale: 0.95 } : {}}
            >
              {category.icon}
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        {/*  skills */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          key={activeCategory}
        >
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={cardVariants}
              className="group relative"
            >
              {/* Card principal */}
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm border border-gray-600/50 hover:border-pink-300/30 transition-all duration-500 p-4">
                {/* Header of a skill */}
                <div className="flex flex-col items-center text-center">
                  <div className="p-2 rounded-xl group-hover:scale-110 transition-transform duration-300">
                    {skillIcons[skill.name] || (
                      <Code2 className="w-8 h-8 border-8 text-muted-foreground" />
                    )}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg group-hover:text-primary transition-colors mb-2">
                      {skill.name}
                    </h3>
                    <span
                      className={`px-3 py-1 text-xs font-medium border rounded-full capitalize`}
                    >
                      {skill.category}
                    </span>
                  </div>
                </div>
              </div>

              {/* effect on hover*/}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/20 to-pink-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10" />
            </motion.div>
          ))}
        </motion.div>
      </div>
      </section>
    </>


  )
}

export default Skill

