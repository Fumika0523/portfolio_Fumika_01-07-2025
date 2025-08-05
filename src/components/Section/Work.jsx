import React from 'react'
import { useTheme } from "../../context/ThemeContext"
import { useState } from "react";
import MovieStationImg from "../../assets/image/Moviestation.png";
import { motion } from "framer-motion";
import { FiGithub, FiExternalLink, FiCode, FiFolder, FiArrowRight } from "react-icons/fi";

export const Work = () => {

  const { isDarkMode} = useTheme("")
  const styleBg = isDarkMode
    ? "bg-gradient-to-br text-gray-200 from-[#e86b80]  to-pink-700/80"
    :
    "bg-gradient-to-br text-gray-100 from-pink-400/60  to-[#e86b80]"
  
  const [activeCategory, setActiveCategory] = useState("all");
  const categories = [
    { id: "all", label: "All" },
    { id: "fullstack", label: "Full Stack" },
    { id: "frontend", label: "Frontend" },
  ];
  
  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "A full-stack e-commerce platform with user authentication, product management, and payment integration.",
      image: MovieStationImg,
      github: "https://github.com/asma019/ecommerce-platform",
      demo: "#",
      category: "fullstack",
      tags: ["React", "Node.js", "MongoDB"],
    },
  
  ];

  // Filter projects based on active category
  const filteredProjects = activeCategory === "all" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);
  return (
    
    <>
<section
    id="skill" className={` section-padding ${
      isDarkMode? "bg-gray-950 text-white":"bg-gray-50 text-gray-900"
    }  py-8`}>
       <div className="container mx-auto container-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="heading-lg mb-2 text-3xl">Featured Projects</h2>
          <div className="h-1 w-20 bg-[#e86b80] mx-auto"></div>
          <p  className={`${isDarkMode ? "text-gray-400" : "text-gray-800" } mb-12 mt-6 font-light leading-relaxed `}>
            A collection of projects I&apos;ve worked on, showcasing my skills and experience.
          </p>
        </motion.div>

        {/* Category filter */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-16"
        >
          <div className={`rounded-full p-1.5 shadow-md space-x-10 flex flex-wrap justify-center ${isDarkMode? "border-gray-700" : "bg-white border-gray-100 "}`}>
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={` px-8 py-3 rounded-full  text-md font-medium transition-all duration-300 ${
                  activeCategory === category.id
                   ? "bg-gradient-to-br text-gray-200 from-[#efafb9]  to-pink-800/80 shadow-lg shadow-primary/25"
                : "bg-card/50 border border-gray-400/50 text-muted-foreground hover:bg-pink-400/30 hover:border-pink-400/30 hover:text-white"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 place-items-center mx-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border  group hover:-translate-y-2 ${isDarkMode? "bg-gray-800/40 border-gray-700" : "bg-white border-gray-100 "}`}
            >
              <div className="relative h-56 w-full overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 flex space-x-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white hover:text-pink-600 transition-colors duration-300"
                    aria-label={`View GitHub repository for ${project.title}`}
                  >
                    <FiGithub size={16} />
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white hover:text-pink-600 transition-colors duration-300"
                    aria-label={`View live demo for ${project.title}`}
                  >
                    <FiExternalLink size={16} />
                  </a>
                </div>
                <div className="absolute bottom-4 left-4 right-4 ">
                  <div className="flex flex-wrap  gap-2 mb-2">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-white/20 backdrop-blur-sm text-white"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-pink-200 transition-colors duration-300">
                    {project.title}
                  </h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className={`flex items-center border border-gray-400 rounded-full px-3 py-1 ${isDarkMode? "text-gray-400":"text-gray-500"}`}>
                    <FiFolder className="mr-2" />
                    <span className="text-sm font-medium capitalize">{project.category}</span>
                  </div>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center text-sm font-medium group/link ${isDarkMode? "text-pink-200/70":"text-pink-600 "}`}
                  >
                    View Project 
                    <FiArrowRight className="ml-1 transform group-hover/link:translate-x-1 transition-transform duration-300" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Projects button */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center mt-12"
        >
          <a 
            href="https://github.com/asma019" 
            target="_blank" 
            rel="noopener noreferrer"
            className={`inline-flex items-center px-6 py-3 bg-gradient-to-r from-pink-600/60 to-pink-500/60 hover:from-pink-700/60 hover:to-pink-600/60 text-gray-300 font-medium rounded-full shadow-md hover:shadow-lg transition-all duration-300`}
          >
            View All Projects
            <FiArrowRight className="ml-2" />
          </a>
        </motion.div>
      </div>
    </section>
    </>
  )
}
