import React from 'react'
import {ThemeProvider} from "./context/ThemeContext"
import Navbar from './components/Section/Navbar'
import Hero from './components/Section/Hero'
import Skill from './components/Section/Skill'
import Contact from './components/Section/Contact'
import { Work } from './components/Section/Work'

const App = () => {
  return (
   <>
    <ThemeProvider>
        <div className='pb-[100vh]'>
          <Navbar/>
          <Hero/>
          <Skill/>
          <Work/>
          <Contact/>
        </div>

    </ThemeProvider>
   </>
  )
}

export default App