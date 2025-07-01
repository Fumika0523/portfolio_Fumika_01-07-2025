import React from 'react'
import {ThemeProvider} from "./context/ThemeContext"
import Navbar from './components/Section/Navbar'
import Home from './components/Section/Home'

const App = () => {
  return (
   <>
    <ThemeProvider>
        <div>
          <Navbar/>
          <Home/>
        </div>

    </ThemeProvider>
   </>
  )
}

export default App