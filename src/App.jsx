import { useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import Resume from './Pages/Resume';
import Projects from "./Pages/Projects";

function App() {
  const [isDark, setIsDark] = useState(false);

  return (

    <div className={isDark ? 'dark' : ''}>
      <div className="min-h-screen lg:mx-50 md:mx-20 sm:mx-10 bg-white text-black dark:bg-[#0F0D0C]  dark:text-white transition-colors duration-300">

        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<Resume/>} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
        

      </div>
      <Footer/>
    </div>
  );
}

export default App;
