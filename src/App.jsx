import React from 'react'
import Navbars from './components/navbar/Navbars'
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import HeroSection from './components/hero/HeroSection';
import Features from './components/features/Features';
import Glallery from './components/glarrery/Glallery';
import Features2 from './components/features2/Features2';
const App = () => {
  return (
    <div>
      <Router>
        <Navbars />
        <HeroSection/>
        <Features/>
        <Glallery/>
        <Features2/>
        <Routes>
          <Route>
            
          </Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App