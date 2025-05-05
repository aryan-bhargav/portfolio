import { useEffect, useState } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

const ThemeToggler = () => {
  const [isDark, setIsDark] = useState(() => {
    return (
      localStorage.getItem('theme') === 'dark' ||
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
    );
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full border dark:border-white border-black transition duration-300 hover:bg-gray-200 dark:hover:bg-gray-800"
      aria-label="Toggle Theme"
    >
      {isDark ? <FaSun className="text-yellow-400" size={20} /> : <FaMoon className="text-gray-700" size={20} />}
    </button>
  );
};

export default ThemeToggler;
