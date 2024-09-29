import { useState } from 'react'

import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

// style
import './styles/main.css'

// components
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'

// pages
import Home from './pages/Home'
import Projects from './pages/Projects'
import Project from './pages/Project'
import Contact from './pages/Contact'


//utils 
import ScrollToTop from './utils/scrolltotop'




function App() {

  return (
    <div className="App">
      <Router>
        <ScrollToTop />

        <Navbar />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/projects' element={<Projects />}/>
          <Route path='/project/:id' element={<Project />}/>
          <Route path='/Contacts' element={<Contact />}/>
        </Routes>
      

        <Footer />
      </Router>
    </div>
  )
}

export default App
