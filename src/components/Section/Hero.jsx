import { useTheme } from "../../context/ThemeContext"
import {motion,useScroll,useTransform} from "framer-motion"
import React from 'react'
import {ArrowDown,Mail} from "lucide-react"
import { FiGithub,FiLinkedin } from "react-icons/fi"
import { containerVariants, itemVariants } from "../../utils/helper"

const Hero = () => {
      const { isDarkMode} = useTheme(); //This uses a custom hook useTheme() to get the current theme state. isDarkMode is a boolean indicating whether dark mode is enabled.
      const {scrollY} = useScroll() //useScroll() is a Framer Motion hook that tracks the vertical scroll position. scrollY is a MotionValue that updates in real time as the user scrolls.
      const heroY = useTransform(scrollY,[0,500],[0,-100])
      //useTransform() maps the scroll range [0, 500] to the output range [0, -100].As the user scrolls from 0 to 500 px, heroY will animate from 0 to -100.Typically used to create parallax or scroll-linked animation effects.
      // When a nav item is clicked, this function scrolls smoothly to the section with that ID.
      const scrollToSection = (sectionId)=>{
        const element = document.getElementById(sectionId)
        if(element){
          element.scrollIntoView({behavior:"smooth"})
        }}
   
      const textVariants = {
        hidden:{
          y:20,opacity:0 },
          visible:{
            y:0,
            opacity:1,
            transition:{
              duration:0.6,
              ease:"easeOut"
            }
          }
      };

      const imageVariants = {
        hidden:{x:50,opacity:0},
        visible:{
          x:0,
          opacity:1,
          transition:{
          duration:1,
          ease:"easeOut",
          delay:0.5,
        }
      }
    }


      const styleBg = isDarkMode
        ? "bg-gradient-to-br from-[#e86b80]  to-pink-700/80 text-gray-200"
        : "bg-gradient-to-br from-pink-400/60 to-[#e86b80] text-white";


  return (
    <div className={`min-h-screen transition-all duration-500 ${
      isDarkMode? "bg-gray-950 text-white":"bg-gray-50 text-gray-900"
    }`}>
      {/* Hero Section */}
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
          isDarkMode ? "bg-[#e86b80]" :"bg-[#e86b80]"
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
          isDarkMode ? "bg-purple-500" :"bg-purple-400"
        } `}/>
        </div> 

        <div className="max-w-7xl mx-auto  w-full z-10 mt-20">
          {/* Mobile Layout-centered */}
        <div className="block lg:hidden">
            <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="text-center"
            >
            {/* Profile Image - Mobile */}
            <motion.div variants={imageVariants}
            className="mb-8">
              <div className="w-35 h-35 mx-auto  relative">
                <motion.div
                whileHover={{scale:1.05}}
                className={`w-full h-32 rounded-2xl overflow-hidden 
                  ${
                    isDarkMode ? "border-[#e86b80]":"border-gray-300"
                  } shadow-2xl`}>
                    <img
                    src={"https://img.freepik.com/premium-vector/software-developer-vector-illustration-communication-technology-cyber-security_1249867-5464.jpg?semt=ais_hybrid&w=740"} alt="Profile" className="w-full h-full object"/>
                    </motion.div>

                    {/* Decorative Ring */}
                    <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute -inset-2 rounded-2xl border border-[#f07fb0]"
                  />
                        </div>
              </motion.div>

              {/* Content - Mobile */}
              <motion.div
              variants={textVariants}
              className={`text-sm uppercase tracking-widest ${isDarkMode ? "text-gray-500" : "text-gray-300" } mb-4`}
              >
                Full Stack Developer
              </motion.div>

              <motion.h1
              variants={itemVariants}
              className="text-3xl md:text-5xl font-light mb-6 leading-tight"
              >
                <span className={`${isDarkMode ? "text-white" : "text-gray-900"}`}>
                  Building digital
                </span>
                <span className="text-[#e86b80] font-medium ml-2">
                  experiences
                </span>
                <br />
                <span className={isDarkMode ? "text-white" : "text-gray-900"}>
                  that matter
                </span>
              </motion.h1>

              <motion.p
              variants={itemVariants}
              className={`text-center md:text-lg mb-5 ${isDarkMode ? "text-gray-400" : "text-gray-400" }`}>
              I'm a junior full-stack developer currently building my skills in modern web development. I enjoy working with technologies like React, Node.js, and MongoDB, and I’m passionate about creating clean, functional, and responsive web applications. While I'm still learning, I'm committed to writing better code every day and building real-world projects that challenge and grow my abilities.
              </motion.p>

              {/* CTA Buttons - Mobile */}
              <motion.div variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                  <motion.button
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.98 }}
          className={`w-40 h-12 rounded-full flex items-center justify-center shadow-md ${styleBg}`}>
          View Work
        </motion.button>

                <motion.button
                whileHover={{y:-2}}
                whileTap={{scale:0.98}}
                onClick={()=> scrollToSection("contact")}
                className={`border ${isDarkMode? "border border-[#b78890] hover:border-pink-200 text-pink-100/70" : "border-gray-300 hover:border-gray-400 text-gray-700"} px-8 py-3 rounded-full text-sm uppercase tracking-wider font-medium transition-all duration-300`}>
                  Get in Touch
                </motion.button>
              </motion.div>

              {/* Social Links - Mobile */}
              <motion.div variants={imageVariants}
            className="flex justify-center space-x-6 mb-8 border"
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


          {/* Tech Stack - Mobile */}
          <motion.div
              variants={itemVariants}
              className=" flex justify-center items-cenyer space-x-6 text-xs uppercase tracking-widest flex-wrap">
                <span className={isDarkMode? "text-[#b78890]"  : "text-gray-500"}>
                  Frontend
                </span>
                <span className={isDarkMode? "text-gray-700" : "text-gray-400"}>
                  .
                </span>
                        <span className={isDarkMode? "text-[#b78890]"  : "text-gray-500"}>
                  Backend
                </span>
                <span className={isDarkMode? "text-gray-700" : "text-gray-400"}>
                  .
                </span>
                <span className={isDarkMode? "text-[#b78890]"  : "text-gray-500"}>
                  Freelance
                </span>

          </motion.div>
        </motion.div>
        </div>

        {/* DeskTop Layout - Split */}
        <div className="hidden lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center  mx-10">
          {/* Left Column - Content*/}
          <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="text-center">
            <motion.div
              variants={textVariants}
              className={`text-lg uppercase tracking-widest mb-6 ${
                isDarkMode
                  ? "text-[#e69fab]  "
                  : "text-gray-600"
              }`}
            >
              Full Sack Developer
            </motion.div>

            <motion.h1 variants={itemVariants}
            className="text-5xl xl:text-7xl font-light mb-8 leading-tight">
              <span className={`${isDarkMode ? "text-white":"text-gray-900"}`}>
                Building ditital
              </span>
              <br />
              <span className={` text-[#e86b80] font-medium`}>
                experiences
              </span>
              <br />
              <span className={`${isDarkMode ? "text-white":"text-gray-900"}`}>
                that matter
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className={`text-xl  ${isDarkMode ? "text-gray-400" : "text-gray-800" } mb-12 font-light leading-relaxed max-w-lg`}>
              I'm a junior full-stack developer currently building my skills in modern web development. I enjoy working with technologies like React, Node.js, and MongoDB, and I’m passionate about creating clean, functional, and responsive web applications. While I'm still learning, I'm committed to writing better code every day and building real-world projects that challenge and grow my abilities.
            </motion.p>
            {/* CTA Button - DeskTop */}
            <motion.div
            variants={itemVariants} className="flex justify-center gap-6 mb-8 ">
  
          <motion.button
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.98 }}
          className={`w-40 h-12 rounded-full flex items-center justify-center bg-gradient-to-br shadow-md ${isDarkMode
          ? " from-[#e18191]  to-pink-600 text-gray-200"
          : "  from-pink-400/60  to-[#e86b80] text-gray-100"}`}>
          View Work
        </motion.button>

          <motion.button whileHover={{y:-2}}
              whileTap={{scale:0.98}}
              onClick={()=>scrollToSection("contact")}
              className={`border ${isDarkMode? "border-gray-700 hover:border-gray-300 text-gray-300" : "border-gray-300 hover:border-gray-400 text-gray-700"} px-8 py-4 rounded-full text-sm uppercase tracking-wider font-medium transition-all duration-300`}>
                Get In Touch
              </motion.button>
            </motion.div>

            {/* Social Links - Desktop */}
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

          {/* Right Layout - Solit */}
          <motion.div
          initial="hidden"
          animate="visible"
          variant={imageVariants}
          className="flex justify-center ">
            <div className="relative">
              {/* Tech Stack - DeskTop */}
              <motion.div variants={itemVariants}
              className="flex items-center justify-center space-x-8 text-sm uppcercase tracking-widest absolute -top-40  ">
                <span className={isDarkMode ? "text-pink-200/60" : "text-gray-500"}>
                  Frontend
                </span>
                <span className={isDarkMode ? "text-pink-200"  : "text-gray-400"}>
                  .
                </span>
                <span className={isDarkMode ? "text-pink-200/60"  : "text-gray-500"}>
                  Beckend
                </span>
                <span className={isDarkMode ? "text-pink-200" : "text-gray-400"}>
                  .
                </span>
                <span className={isDarkMode ? "text-pink-200/60"  : "text-gray-500"}>
                  Freelance
                </span>
                <span className={isDarkMode ? "text-pink-200" : "text-gray-400"}>
                  .
                </span>
              </motion.div>
              <motion.div
              whileHover={{scale:1.02}}
              className={`w-80 h-75 rounded-3xl overflow-hidden border-4 ${isDarkMode ? "border-gray-800" : "border-gray-300"} shadow-2xl`}>
              <img
               src={"https://img.freepik.com/premium-vector/software-developer-vector-illustration-communication-technology-cyber-security_1249867-5464.jpg?semt=ais_hybrid&w=740"} alt="Profile" className="w-full h-full object-cover"/>
              </motion.div> 

              {/* Decorative elements */}
              <motion.div 
              animate={{rotate:360}}
              transition={{duration:20, repeat:Infinity, ease:"linear"}}
              className="absolute -inset-4 rounded-3xl border border-gray-200/30"/>

             <motion.div 
            animate={{rotate:-360}}
             transition={{duration:30, repeat:Infinity, ease:"linear"}}
             className="absolute -inset-8 rounded-3xl border border-pink-400/80"/>
            </div>
          </motion.div>
        </div>
    </div>
        
        {/* Scroll Indicator */}
        <motion.div animate={{y:[0,8,0]}}
        transition={{duration:2,repeat:Infinity}}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ArrowDown
          size={20}
          className={isDarkMode? "text-orange-300" : "text-gray-400"}/>
        </motion.div>
      </motion.section>
    </div>
  )
}

export default Hero