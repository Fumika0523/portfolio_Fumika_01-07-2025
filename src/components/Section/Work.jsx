import React from 'react'
import { useTheme } from "../../context/ThemeContext"

export const Work = () => {

       const { isDarkMode} = useTheme("")
              const styleBg = isDarkMode
              ? "bg-gradient-to-br text-gray-200 from-[#e86b80]  to-pink-700/80"
              :
              "bg-gradient-to-br text-gray-100 from-pink-400/60  to-[#e86b80]"
    
  return (
    
    <>
<section
    id="skill" className={` section-padding ${
      isDarkMode? "bg-gray-950 text-white":"bg-gray-50 text-gray-900"
    }  py-8`}>
        Work
    </section>
    </>
  )
}
