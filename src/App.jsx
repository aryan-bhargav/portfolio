import { useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import Resume from './Pages/Resume';
import Projects from "./Pages/Projects";

function App() {

  return (

    <div className='min-h-screen bg-white text-black dark:bg-[#0F0D0C] dark:text-white' >
      <div className="  lg:px-50 md:px-20 sm:px-10 bg-[#F1F2F4] text-black/80 dark:bg-[#0F0D0C] dark:text-white  transition-colors duration-300">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
        <Footer/>
        <br />
        <br />
      </div>
    </div>
  );
}

export default App;
