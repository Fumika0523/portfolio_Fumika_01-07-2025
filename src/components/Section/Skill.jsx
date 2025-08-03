import React from 'react'
import { useTheme } from "../../context/ThemeContext"
import { IoLogoJavascript } from "react-icons/io5";
import { IoLogoNodejs } from "react-icons/io";
import { SiExpress } from "react-icons/si";


import { SiTypescript } from "react-icons/si";
const Skill = () => {
   const { isDarkMode} = useTheme("")
          const styleBg = isDarkMode
          ? "bg-gradient-to-br text-gray-200 from-[#e86b80]  to-pink-700/80"
          :
          "bg-gradient-to-br text-gray-100 from-pink-400/60  to-[#e86b80]"
  return (
    
    <>
    <div
    id="contact" className={` section-padding ${
      isDarkMode? "bg-gray-950 text-white":"bg-gray-50 text-gray-900"
    } py-8`}>
      <div className='text-5xl font-bold text-center mb-8'>My Developer Toolkit</div>
      <div className='text-center text-3xl mb-4'>Programming Languages :</div>
        <div className='flex-row flex space-x-10 justify-center text-center items-center text-2xl'>
          <span><IoLogoJavascript  className='text-amber-400 bg-black text-6xl'/> JavaScript</span>
          <span><SiTypescript className='text-5xl'/>TypeScript</span>
        </div>
      <div className='flex flex-row border justify-center my-8'>
        <div>
      <div  className='text-center text-3xl mb-4'>Backend Technologies:</div>
        <div className='flex-row border flex space-x-10 justify-center text-center items-center text-2xl'>
          <span>Node.js</span>
          <span>Express</span>
          <span>MongoDB</span>
          <span>REST API</span>
          <span>JWT</span>
        </div>
        </div>
        <div>
      <div className='text-center text-3xl mb-4'>Web Technologies:</div>
         <div className='flex-row border flex space-x-10 justify-center text-center items-center text-2xl'>
          <span>HTML</span>
          <span>CSS</span>
          <span>Tailwind</span>
          <span>MUI</span>
          <span>Bootstrap</span>
        </div>
        </div>
      </div>
          <div className='text-center text-3xl mb-4'>Tools and Testing:</div>
        <div className='flex-row flex justify-center space-x-3'>
          <span>Git</span>
          <span>Netlify</span>
        </div>
      </div>
    </>


  )
}

export default Skill