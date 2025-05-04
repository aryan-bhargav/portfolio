import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Pages/Home';
function App() {
  const [isDark, setIsDark] = useState(false);

  return (
    <div className={isDark ? 'dark' : ''}>
      <div className="min-h-screen lg:mx-50 md:mx-20 sm:mx-10 bg-white text-black dark:bg-[#0F0D0C]  dark:text-white transition-colors duration-300">
        <Navbar></Navbar>
        <Home></Home>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
