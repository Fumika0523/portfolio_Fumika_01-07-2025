import React from 'react'
import {ThemeProvider} from "./context/ThemeContext"
import Navbar from './components/Section/Navbar'
import Hero from './components/Section/Hero'

const App = () => {
  return (
   <>
    <ThemeProvider>
        <div className=''>
          <Navbar/>
          <Hero/>
        </div>

    </ThemeProvider>
   </>
  )
}

export default App