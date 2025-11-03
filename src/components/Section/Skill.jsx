import React from "react";
import { useTheme } from "../../context/ThemeContext"
import { IoLogoNodejs } from "react-icons/io";
import { useState, useMemo, useCallback, useEffect, useRef } from "react";
import { DiVisualstudio } from "react-icons/di";
import { FaLock, FaLaptopCode, FaServer, FaToolbox } from "react-icons/fa";
import { MdApi } from "react-icons/md";
import {
  SiHtml5, SiCss3, SiJavascript,
  SiReact, SiTailwindcss,
  SiNodedotjs, SiExpress, SiMongodb, SiGithub,
  SiPostman, SiNetlify, SiRender, SiBootstrap, SiMui, SiJson, SiNextdotjs, SiFramer, SiRedux, SiMongoosedotws 
} from 'react-icons/si';
import { IoLogoVercel } from "react-icons/io5";
import { Code2 } from "lucide-react";
import { motion } from "framer-motion";


const Skill = ({isDarkMode,toggleDarkMode}) => {

  const styleBg = isDarkMode
    ? "bg-gradient-to-br text-gray-200 from-[#e86b80]  to-pink-700/80"
    : "bg-gradient-to-br text-gray-100 from-pink-400/60  to-[#e86b80]";

  const skillIcons = {
    HTML: <SiHtml5 className="w-8 h-8" style={{ color: "#E34F26" }} />,
    CSS: <SiCss3 className="w-8 h-8" style={{ color: "#1572B6" }} />,
    JavaScript: <SiJavascript className="w-8 h-8" style={{ color: "#F7DF1E" }} />,
    React: <SiReact className="w-8 h-8" style={{ color: "#61DAFB" }} />,
    "Tailwind CSS": <SiTailwindcss className="w-8 h-8" style={{ color: "#06B6D4" }} />,
    "Node.js": <SiNodedotjs className="w-8 h-8" style={{ color: "#339933" }} />,
    Express: <SiExpress className={`w-6 h-6 ${isDarkMode ? "text-gray-300" : "text-gray-800"}`} />,
    MongoDB: <SiMongodb className="w-8 h-8" style={{ color: "#47A248" }} />,
    Mongoose: <SiMongoosedotws  className="w-8 h-8" style={{ color: "#FF5000" }} />,
    "Git/GitHub": <SiGithub className={`w-6 h-6 ${isDarkMode ? "text-gray-300" : "text-gray-800"}`} />,
    "VS Code": <DiVisualstudio className="w-8 h-8" style={{ color: "#007ACC" }} />,
    POSTMAN: <SiPostman className="w-8 h-8" style={{ color: "#FF6C37" }} />,
    Netlify: <SiNetlify className="w-6 h-6 text-[#00C7B7]" />,
    Render: <SiRender className="w-6 h-6 text-[#46E3B7]" />,
    Vercel: <IoLogoVercel  className="w-6 h-6 text-[#000806]" />,
    Bootstrap: <SiBootstrap className="w-6 h-6 text-[#7952B3]" />,
    MUI: <SiMui className="w-6 h-6 text-[#007FFF]" />,
    JWT: <SiJson className="w-6 h-6 text-yellow-500" />,
    "Next.js": <SiNextdotjs className="w-6 h-6 text-black dark:text-white" />,
    "Framer Motion": <SiFramer className="w-6 h-6 text-[#0055FF]" />,
    Redux: <SiRedux className="w-6 h-6 text-[#764ABC]" />,
    bcrypt: <FaLock className="w-6 h-6 text-gray-600" />,
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
    { name: "Mongoose", category: "backend" },
    { name: "Git/GitHub", category: "tools" },
    { name: "VS Code", category: "tools" },
    { name: "POSTMAN", category: "tools" },
    { name: "Netlify", category: "tools" },
    { name: "Render", category: "tools" },
    { name: "Vercel", category: "tools" },
    { name: "MUI", category: "frontend" },
    { name: "Bootstrap", category: "frontend" },
    { name: "Next.js", category: "frontend" },
    { name: "Framer Motion", category: "frontend" },
    { name: "bcrypt", category: "backend" },
    { name: "JWT", category: "backend" },
  ];

  const [activeCategory, setActiveCategory] = useState("frontend");
  const pauseRef = useRef(false);
  const pauseTimeoutRef = useRef(null);

  const categories = [
    { id: "frontend", name: "Frontend", icon: <FaLaptopCode className="w-4 h-4 " /> },
    { id: "backend", name: "Backend", icon: <FaServer className="w-4 h-4" /> },
    { id: "tools", name: "Tools", icon: <FaToolbox className="w-4 h-4" /> },
  ];

  // user click → pause auto cycle for 3s
  const handleCategory = useCallback((id) => {
    setActiveCategory(id);
    pauseRef.current = true;

    if (pauseTimeoutRef.current) {
      clearTimeout(pauseTimeoutRef.current);
    }
    pauseTimeoutRef.current = setTimeout(() => {
      pauseRef.current = false;
    }, 5000);
  }, []);

  // Auto-cycle categories every 3s
  useEffect(() => {
    let index = categories.findIndex((c) => c.id === activeCategory);

    const interval = setInterval(() => {
      if (!pauseRef.current) {
        index = (index + 1) % categories.length;
        setActiveCategory(categories[index].id);
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [activeCategory, categories]);

  const filteredSkills = useMemo(
    () => skills.filter((skill) => skill.category === activeCategory),
    [activeCategory]
  );

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 2, ease: "easeInOut"} },
  };

  return (
    <section id="skill" className="section-padding py-8">
      <div
  className={`heading-lg text-center mb-2 text-3xl ${
    isDarkMode ? "text-gray-100" : "text-gray-700"
  }`}
>
  My Developer Toolkit
</div>

      <div className="h-1 w-20 bg-[#e86b80] mx-auto mb-8"></div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Category filter buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
        >
    <div className={`rounded-full border-2  p-1.5 shadow-md space-x-10 flex flex-wrap justify-center ${isDarkMode? "bg-[#25265c] border-[#35366c]" : " border-gray-100 bg-[#fdfdfa]"}`}>
          {categories.map((category) => (
    <motion.button
    key={category.id}
    onClick={() => handleCategory(category.id)}
    className={`px-4 py-2 rounded-full flex items-center gap-1 text-[16 px]  cursor-pointer transition-all duration-300 border
      ${
        activeCategory === category.id
          ? "bg-gradient-to-br from-[#efafb9] to-pink-800 text-gray-200 shadow-lg shadow-primary/25 border-0"
          : `bg-card/50 border-0 ${
              isDarkMode
                ? "text-gray-300 hover:bg-gray-700/30"
                : "text-gray-700 hover:bg-pink-100/50"
            }`
      }`}
  >
    {category.icon}
    {category.name}
  </motion.button>
          ))}
            </div>
        </motion.div>

      {/* Skills */}
<motion.div
  className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-6"
  variants={containerVariants}
  initial="hidden"
  animate="visible"
  key={activeCategory}
>
  {filteredSkills.map((skill) => (
    <motion.div
      key={skill.name}
      variants={cardVariants}
      className="group relative"
    >
      {/* Card container */}
      <div
        className={`relative overflow-hidden rounded-2xl border transition-all duration-900 p-4 shadow-sm
          ${isDarkMode
            ? "bg-[#25265c] border-gray-500/70 text-gray-300"
            : "bg-white  border-gray-200"
          }`}
      >
        {/* Hover glow overlay */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#efafb9]/20 to-[#ff6ea4]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-800 blur-xl z-0 pointer-events-none" />

        {/* Card content */}
        <div className="relative z-10 flex flex-col items-center text-center">
          <div className="p-2 rounded-xl group-hover:scale-110 transition-transform duration-700">
            {skillIcons[skill.name] || (
              <Code2 className="w-8 h-8 text-muted-foreground" />
            )}
          </div>
          <div>
            <h3 className="font-bold text-lg group-hover:text-primary transition-colors mb-2">
              {skill.name}
            </h3>
            {/* <span
            className={`px-3 py-1 text-xs font-medium  rounded-full capitalize 
              ${
                skill.category === "frontend"
                  ? "bg-gradient-to-r from-pink-700/50 to-pink-500/50 text-pink-100"
                  : skill.category === "backend"
                  ? "bg-gradient-to-r from-blue-700/60 to-blue-500/60 text-blue-100"
                  : "bg-gradient-to-r from-green-700/60 to-green-500/60 text-green-100"
              }`}
          >
            {skill.category}
          </span> */}

          </div>
        </div>
      </div>
    </motion.div>
  ))}
</motion.div>

      </div>
    </section>
  );
};

export default Skill;
