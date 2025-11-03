import { useTheme } from "../../context/ThemeContext"
import {motion,useScroll,useTransform} from "framer-motion"
import React from 'react'
import {ArrowDown,Mail} from "lucide-react"
import { FiGithub,FiLinkedin } from "react-icons/fi"
import { containerVariants, itemVariants } from "../../utils/helper"

const Hero = () => {
      const { isDarkMode} = useTheme();
      const {scrollY} = useScroll()
      const heroY = useTransform(scrollY,[0,500],[0,-100])

      const scrollToSection = (sectionId)=>{
        const element = document.getElementById(sectionId)
        if(element){
          element.scrollIntoView({behavior:"smooth"})
        }}

      const textVariants = {
        hidden:{ y:20, opacity:0 },
        visible:{ y:0, opacity:1, transition:{ duration:0.6, ease:"easeOut" } }
      };

      const imageVariants = {
        hidden:{x:50,opacity:0},
        visible:{ x:0, opacity:1, transition:{ duration:1, ease:"easeOut", delay:0.5 } }
      }

      const styleBg = isDarkMode
        ? "bg-gradient-to-br from-[#E56389] to-[#6F50F1]/80 text-gray-200 hover:bg-[#6F50F1]/60"
        : "bg-gradient-to-br from-[#7C5CFF]/60 to-[#E56389] text-white";

  return (
    <div >
      <motion.section
      id="home"
      style={{y:heroY}}
      className="min-h-screen flex items-center justify-center relative px-6 pt-10"
      >
       <div className="absolute  inset-0 overflow-hidden">
        <motion.div
        animate={{
          scale:[1,1.1,1],
          rotate:[0,180,360]
        }}
        transition={{
          duration:20,
          repeat:Infinity,
          ease:"linear",
        }}
        className={`absolute top-20 right-20 w-64 h-64 rounded-full blur-3xl opacity-10 ${
          isDarkMode ? "bg-[#E56389]" :"bg-[#E56389]"
        } `}/>

        <motion.div
        animate={{
          scale: [1.1, 1, 1.1],
          rotate:[36,180,0],
        }}
          transition={{
          duration:25,
          repeat:Infinity,
          ease:"linear",
        }}
        className={`absolute bottom-20 left-20 w-48 h-48 rounded-full blur-3xl opacity-10 ${
          isDarkMode ? "bg-[#7C5CFF]" :"bg-[#6F50F1]"
        } `}/>
        </div>

        <div className="max-w-7xl mx-auto  w-full z-10 mt-20">
          <div className="block lg:hidden">
            <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="text-center"
            >

          <motion.div
              variants={itemVariants}
              className=" flex justify-center items-cenyer space-x-6 text-[16px] uppercase tracking-widest flex-wrap pb-20">
                <span className={isDarkMode? "text-[#f7c848eb]"  : "text-gray-500"}>
                  Frontend
                </span>
                <span className={isDarkMode? "text-[#F7C948AA]" : "text-gray-400"}>
                  .
                </span>
                <span className={isDarkMode? "text-[#f7c848eb]"  : "text-gray-500"}>
                  Backend
                </span>
                <span className={isDarkMode? "text-[#F7C948AA]" : "text-gray-400"}>
                  .
                </span>
                <span className={isDarkMode? "text-[#f7c848eb]"  : "text-gray-500"}>
                  Freelance
                </span>
          </motion.div>

            <motion.div variants={imageVariants}
            className="mb-8">
              <div className="w-35 h-35 mx-auto mb-16 relative">
                <motion.div
                whileHover={{scale:1.05}}
                className={`w-full h-32 rounded-2xl overflow-hidden 
                  ${
                    isDarkMode ? "border-[#E56389]":"border-gray-300"
                  } shadow-2xl`}>
                    <img
                    src={"https://img.freepik.com/premium-vector/software-developer-vector-illustration-communication-technology-cyber-security_1249867-5464.jpg?semt=ais_hybrid&w=740"} alt="Profile" className="w-full h-full object"/>
                    </motion.div>

              <motion.div
               animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-2 rounded-2xl border border-[#FF9CB3]"  />
                        </div>
              </motion.div>

              <motion.div
              variants={textVariants}
              className={` text-xl uppercase font-bold tracking-widest ${isDarkMode ? "text-[#f7f5b9] " : "text-yellow-600" } mb-4`}
              >
                Full Stack Developer
              </motion.div>

            <motion.h1 variants={itemVariants}
            className="text-4xl xl:text-4xl font-light mb-8 ">
              <span className={`${isDarkMode ? "text-white":"text-gray-900"}`}>
              Code That 
              <span className={`mx-2.5 text-[#E56389] font-medium`}>
              Moves
              </span>    
              People  
              </span>
            </motion.h1>

              {/* Description */}
              <motion.p
              variants={itemVariants}
              className={`text-center md:text-lg mb-5 ${isDarkMode ? "text-[#dad2d9]" : "text-gray-800" }`}>
              I'm a junior full-stack developer currently building my skills in modern web development. I enjoy working with technologies like React, Node.js, and MongoDB, and I’m passionate about creating clean, functional, and responsive web applications. While I'm still learning, I'm committed to writing better code every day and building real-world projects that challenge and grow my abilities.
              </motion.p>

              {/* Buttons */}
              <motion.div variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                {/* View Work */}
              <motion.button
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={()=> scrollToSection("work")}
              className={`w-40 h-12 rounded-full flex items-center justify-center shadow-md ${styleBg}`}>
              View Work
            </motion.button>

                  {/* Contact */}
                <motion.button
                whileHover={{y:-2}}
                whileTap={{scale:0.98}}
                onClick={()=> scrollToSection("contact")}
                className={`
                  w-40 h-12 rounded-full flex items-center justify-center shadow-md ${isDarkMode?
      
                " border-pink-200 border-2 text-pink-300 hover:border-gray-200" : 
                "border-gray-300 hover:border-pink-400 text-[#F7C948AA]"} px-8 py-3 rounded-full text-sm uppercase tracking-wider font-medium transition-all duration-300`}>
                  Contact
                </motion.button>
              </motion.div>

              <motion.div variants={imageVariants}
            className="flex justify-center space-x-6 mb-8"
          >
            {[
              { icon: FiGithub, href: "#" },
              { icon: FiLinkedin, href: "#" },
              { icon: Mail, href: "#" },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                whileHover={{ y: -3, scale: 1.1 }}
                className={`p-3 rounded-full transition-colors ${
                  isDarkMode
                    ? "text-gray-400 hover:text-white hover:bg-gray-800"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-200"
                }`}
              >
                <social.icon size={20} />
              </motion.a>
            ))}
              </motion.div>
        </motion.div>
        </div>

        <div className="hidden lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center mx-9">
          <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="text-center">
            <motion.div
              variants={textVariants}
              className={`text-2xl font-bold uppercase tracking-widest mb-6 ${
                isDarkMode
                  ? "text-[#F7C948] "
                  : "text-[#fdbc0c] "
              }`}
            >
              Full Stack Developer
            </motion.div>

            <motion.h1 variants={itemVariants}
            className="text-5xl xl:text-4xl font-light mb-8 ">
              <span className={`${isDarkMode ? "text-white":"text-gray-900"}`}>
          Code That 
              <span className={`mx-2.5 text-[#E56389] font-medium`}>
              Moves
              </span>    
              People  
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className={`text-xl  ${isDarkMode ? "text-[#FFDCE6]/80" : "text-gray-800" } mb-12 font-light leading-relaxed text-center`}>
              I'm a junior full-stack developer currently building my skills in modern web development. I enjoy working with technologies like React, Node.js, and MongoDB, and I’m passionate about creating clean, functional, and responsive web applications. While I'm still learning, I'm committed to writing better code every day and building real-world projects that challenge and grow my abilities.
            </motion.p>

            <motion.div
            variants={itemVariants} className="flex justify-center gap-6 mb-8 ">

          <motion.button
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.98 }}
               onClick={()=> scrollToSection("work")}
          className={`w-40 h-12 rounded-full flex items-center justify-center bg-gradient-to-br shadow-md text-sm uppercase tracking-wider font-medium  ${isDarkMode
          ? "bg-gradient-to-br text-gray-200 from-[#efafb9]  to-pink-800/80 shadow-lg shadow-primary/25 border-0"
          : "bg-card/50 text-muted-foreground hover:bg-pink-400/30 hover:border-pink-400/30 hover:text-white"}`}>
          View Work
        </motion.button>

          <motion.a
            whileHover={{y:-2}}
             href="/Fumika_Mikami_CV.pdf"
            download="Fumika_Mikami_CV.pdf"
            whileTap={{scale:0.98}}
            // onClick={()=> scrollToSection("contact")}
            className={`border flex flex-row ${isDarkMode? "border-2 border-[#8b868a] hover:border-[#F7C948]/80 hover:text-[#F7C948] text-yellow-300"
              : 
            "border-gray-300 hover:border-pink-400 text-[#e3a90bd4]"} px-8 py-3 rounded-full text-sm uppercase tracking-wider font-medium transition-all duration-300`}>
                   View my CV
                 <ArrowDown size={18} />  
            </motion.a>
        </motion.div>

              <motion.div variants={imageVariants}
            className="flex items-center justify-center space-x-4 mb-12"
          >
            {[
              { icon: FiGithub, href: "#" },
              { icon: FiLinkedin, href: "#" },
              { icon: Mail, href: "#" },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                whileHover={{ y: -3, scale: 1.1 }}
                className={`p-3 rounded-full transition-colors ${
                  isDarkMode
                    ? "text-gray-400 hover:text-white hover:bg-gray-800"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-200"
                }`}
              >
                <social.icon size={20} />
              </motion.a>
            ))}
              </motion.div>

          </motion.div>

          <motion.div
          initial="hidden"
          animate="visible"
          variant={imageVariants}
          className="flex justify-center ">
            <div className="relative">
              <motion.div variants={itemVariants}
              className="flex items-center justify-center space-x-8 text-md uppcercase tracking-widest absolute -top-40  ">
                <span className={isDarkMode ? "text-[#F7C948]" : "text-gray-500"}>
                  Frontend
                </span>
                <span className={isDarkMode ? "text-[#FF9CB3]"  : "text-gray-400"}>
                  .
                </span>
                <span className={isDarkMode ? "text-[#F7C948]": "text-gray-500"}>
                  Beckend
                </span>
                <span className={isDarkMode ? "text-[#FF9CB3]" : "text-gray-400"}>
                  .
                </span>
                <span className={isDarkMode ? "text-[#F7C948]"  : "text-gray-500"}>
                  Freelance
                </span>
                <span className={isDarkMode ? "text-[#FF9CB3]" : "text-gray-400"}>
                  .
                </span>
              </motion.div>
              <motion.div
              whileHover={{scale:1.02}}
              className={`w-80 h-75 rounded-3xl overflow-hidden border-4 ${isDarkMode ? "border-gray-800" : "border-gray-300"} shadow-2xl`}>
              <img
               src={"https://img.freepik.com/premium-vector/software-developer-vector-illustration-communication-technology-cyber-security_1249867-5464.jpg?semt=ais_hybrid&w=740"} alt="Profile" className="w-full h-full object-cover"/>
              </motion.div>

              <motion.div 
              animate={{rotate:360}}
              transition={{duration:20, repeat:Infinity, ease:"linear"}}
              className="absolute -inset-4 rounded-3xl  border-2 border-[#F7C948]"/>

             <motion.div 
            animate={{rotate:-360}}
             transition={{duration:30, repeat:Infinity, ease:"linear"}}
             className="absolute -inset-8 rounded-3xl border-2 border-[#FF9CB3]"/>
            </div>
          </motion.div>
        </div>
    </div>
      </motion.section>
    </div>
  )
}

export default Hero
