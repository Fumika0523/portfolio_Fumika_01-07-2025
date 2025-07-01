import React from 'react'
import { useTheme } from "../../context/ThemeContext"


const Home = () => {
      const { isDarkMode, toggleDarkMode } = useTheme();
  return (
    <div className=''>Home</div>
  )
}

export default Home