import React from 'react'
import { useTheme } from "../../context/ThemeContext"
import { useState } from "react";
import MovieStationImg from "../../assets/image/Moviestation.png";
import weatheAppImg from "../../assets/image/WeatherApp.png";
import { motion } from "framer-motion";
import { FiGithub, FiExternalLink, FiCode, FiFolder, FiArrowRight } from "react-icons/fi";
import { IoCodeSlashSharp } from "react-icons/io5";
import { AiFillDatabase } from "react-icons/ai";

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
      description: "MovieStation is a responsive movie app where users can browse, search, filter, and save favorites. Built with React, it offers smooth navigation and dynamic film details for an engaging experience.",
      image: MovieStationImg,
      github_frontend: "https://github.com/Fumika0523/FrontEnd_MovieStation_11-09-2024",
      github_backend:"https://github.com/Fumika0523/FrontEnd_MovieStation_11-09-2024",
      demo: "https://moviestation23.netlify.app/",
      category: "fullstack",
      tags: ["Frontend Code", "Backend Code"],
    },
       {
      id: 2,
      title: "Weather App",
      description: "Responsive weather app showing real-time forecasts, hourly trends, and moon phases. Built with React, Tailwind, and Chart.js for smooth visuals and live OpenWeatherMap data.",
      image: weatheAppImg,
      github_frontend: "https://github.com/Fumika0523/WeatherApp_08-07-2025",
      demo: "https://weatherapp-fm.netlify.app/",
      category: "frontend",
      tags: ["Frontend Code"],
    },
  
  ];

  // Filter projects based on active category
  const filteredProjects = activeCategory === "all" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);
  return (
    
    <>
<section
    id="work" className={` section-padding py-8`}>
       <div className="container mx-auto container-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className={` heading-lg mb-2 text-3xl ${isDarkMode ? "text-gray-300" : "text-gray-800" } `}>
          Featured Projects</h2>
          <div className="h-1 w-20 bg-[#e86b80] mx-auto"></div>
          <p  className={`${isDarkMode ? "text-gray-300" : "text-gray-800" } my-5 font-light leading-relaxed `}>
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
          <div className={`rounded-full p-1.5 shadow-md space-x-10 flex flex-wrap justify-center ${isDarkMode? "border-gray-700" : " border-gray-100 "}`}>
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={` px-8 py-3 rounded-full  text-md font-medium transition-all duration-300 ${
                  activeCategory === category.id
                   ? "bg-gradient-to-br text-gray-200 from-[#efafb9]  to-pink-800/90 shadow-lg shadow-primary/25"
                : "bg-card/50 border border-gray-400/50 text-gray-300/80 text-muted-foreground hover:bg-pink-300/70 hover:border-pink-400/30 hover:text-white"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3  place-items-center mx-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`rounded-xl h-[380px] w-[460px] overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border group hover:-translate-y-2 ${isDarkMode? " bg-[#2e3267] border-gray-500/40 " : "bg-white border-gray-100 "}`}
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                 fill="true"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
               
                <div className="absolute top-4 right-4 flex space-x-2">

                  <a
                    href={project.github_frontend}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-13 h-9 rounded-full gap-1  bg-gray-200/40  items-center backdrop-blur-sm flex  justify-center text-white hover:bg-white/90 hover:text-pink-600 transition-colors duration-300"
                    aria-label={`View GitHub front-end repository for ${project.title}`}
                  >
                    <FiGithub size={16} /> <IoCodeSlashSharp size={16}/>
                  </a>

                   {project.github_backend ? (
                    <a
                      href={project.github_backend}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-13 h-9 rounded-full bg-gray-200/40 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/90 hover:text-pink-600 transition-colors gap-0.5 duration-300"
                      aria-label={`View GitHub back-end repository for ${project.title}`}
                    >
                      <FiGithub size={16} /> <AiFillDatabase />
                    </a>
                  ) : null}

                </div>
                <div className="absolute bottom-4 left-4 right-4 ">
                  <h3 className="text-xl font-bold text-white mb-1  transition-colors duration-300">
                    {project.title}
                  </h3>
                </div>
              </div>
              <div className="p-4">
                <p className={` mb-4  ${isDarkMode? " text-gray-200/80" : "text-gray-400"}`}
                   >
                  {project.description}
                </p>
                <div className="flex justify-between items-center">

                  <div className={`flex items-center border  rounded-full px-3 py-1 ${isDarkMode? "bg-pink-800/60 border-pink-800/20  text-pink-200/80":"text-gray-500"}`}>
                    <FiFolder className="mr-2" />
                    <span className="text-sm font-medium capitalize">{project.category}</span>
                  </div>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center text-sm font-medium group/link ${isDarkMode? "text-[#fcce03]":"text-pink-600 "}`}
                  >
                   <span className='flex items-center flex-nowrap font-bold gap-1'>View Demo <FiExternalLink size={18} className="ml-1 transform group-hover/link:translate-x-1 transition-transform duration-300"  /></span> 
                    {/* <FiArrowRight /> */}
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
            href="https://github.com/Fumika0523" 
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
export default Work