import  { useEffect, useState } from 'react';
import { NavLink, } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import ThemeToggler from './ThemeToggler';
import "../App.css"
import { useNavigate } from 'react-router-dom';
function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [date, setDate] = useState("");
    useEffect(() => {
        const updateDate = () => {
            const now = new Date();
            const options = {
                weekday: 'short',
                hour: '2-digit',
                minute: '2-digit',
                hour12: true,
                timeZone: 'Asia/Kolkata',
            };
            const formatter = new Intl.DateTimeFormat('en-US', options);
            const formatted = formatter.format(now);
            setDate(`${formatted}, New Delhi, India`);
        };

        updateDate();
        const interval = setInterval(updateDate, 10000);
        return () => clearInterval(interval);
    }, []);

    return (
        // date
        <nav id="navbar-date" className="fixed top-0 left-0 w-full px-6 py-4 flex items-center justify-between bg-[#DCDFE4] dark:bg-[#0F0D0C]/80 backdrop-blur-md z-50 shadow-md transition-colors duration-300">
            <div className='flex flex-row gap-10 items-center justify-between'>
                <div className='lg:text-xl md:text-xl sm:text-xl  text-sm'>
                    {date}
                </div>
                <ThemeToggler></ThemeToggler>
            </div>
            {/* menu */}
            <div className='hidden sm:flex font-light text-xl gap-6 mx-6'>
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive
                            ? 'px-4 py-3 text-xl bg-gray-400 dark:text-white text-white/80  dark:bg-gray-600 rounded-lg'
                            : 'px-4 py-3 text-xl hover:bg-gray-200  dark:text-white hover:text-black text-black/80 dark:hover:bg-gray-800 hover:rounded-lg duration-500'
                    }
                >
                    Home
                </NavLink>


                <NavLink to="/projects" className={({ isActive }) =>
                    isActive
                        ? 'px-4 py-3 text-xl bg-gray-400 dark:text-white text-white/80  dark:bg-gray-600 rounded-lg'
                        : 'px-4 py-3 text-xl hover:bg-gray-200  dark:text-white hover:text-black text-black/80 dark:hover:bg-gray-800 hover:rounded-lg duration-500'
                }>Projects</NavLink>

                <NavLink to="/resume" className={({ isActive }) =>
                    isActive
                        ? 'px-4 py-3 text-xl bg-gray-400 dark:text-white text-white/80  dark:bg-gray-600 rounded-lg'
                        : 'px-4 py-3 text-xl hover:bg-gray-200  dark:text-white hover:text-black text-black/80 dark:hover:bg-gray-800 hover:rounded-lg duration-500'
                }>Resume</NavLink>
                <NavLink to="/blog" className={({ isActive }) =>
                    isActive
                        ? 'px-4 py-3 text-xl bg-gray-400 dark:text-white text-white/80  dark:bg-gray-600 rounded-lg'
                        : 'px-4 py-3 text-xl hover:bg-gray-200  dark:text-white hover:text-black text-black/80 dark:hover:bg-gray-800 hover:rounded-lg duration-500'
                }>Blog</NavLink>
            </div>

            {/* Mobile Menu Icon */}
            <div className="sm:hidden">
                <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                </button>
            </div>

            {/* Mobile Menu Dropdown */}
            {isMenuOpen && (
                <div className="absolute top-20 left-4 right-4 z-50 bg-white/95 dark:bg-black/95 backdrop-blur-md rounded-xl py-6 px-4 flex flex-col gap-4 md:hidden shadow-lg animate-slide-down">
                    <NavLink
                        to="/"
                        onClick={() => setIsMenuOpen(false)}
                        className={({ isActive }) =>
                            isActive
                                ? 'px-4 py-3 text-xl bg-gray-400 dark:text-white text-white/80  dark:bg-gray-600 rounded-lg'
                                : 'px-4 py-3 text-xl hover:bg-gray-200  dark:text-white hover:text-black text-black/80 dark:hover:bg-gray-800 hover:rounded-lg duration-500'
                        }
                    >
                        Home
                    </NavLink>

                    <NavLink
                        to="/projects"
                        onClick={() => setIsMenuOpen(false)}
                        className={({ isActive }) =>
                            isActive
                                ? 'px-4 py-3 text-xl bg-gray-400 dark:text-white text-white/80  dark:bg-gray-600 rounded-lg'
                                : 'px-4 py-3 text-xl hover:bg-gray-200  dark:text-white hover:text-black text-black/80 dark:hover:bg-gray-800 hover:rounded-lg duration-500'
                        }
                    >
                        Projects
                    </NavLink>

                    <NavLink
                        to="/resume"
                        onClick={() => setIsMenuOpen(false)}
                        className={({ isActive }) =>
                            isActive
                                ? 'px-4 py-3 text-xl bg-gray-400 dark:text-white text-white/80  dark:bg-gray-600 rounded-lg'
                                : 'px-4 py-3 text-xl hover:bg-gray-200  dark:text-white hover:text-black text-black/80 dark:hover:bg-gray-800 hover:rounded-lg duration-500'
                        }
                    >
                        Resume
                    </NavLink>
                    <NavLink
                        to="/blog"
                        onClick={() => setIsMenuOpen(false)}
                        className={({ isActive }) =>
                            isActive
                                ? 'px-4 py-3 text-xl bg-gray-400 dark:text-white text-white/80  dark:bg-gray-600 rounded-lg'
                                : 'px-4 py-3 text-xl hover:bg-gray-200  dark:text-white hover:text-black text-black/80 dark:hover:bg-gray-800 hover:rounded-lg duration-500'
                        }
                    >
                        Blog
                    </NavLink>
                </div>
            )}


        </nav>
    );
}

export default Navbar;
