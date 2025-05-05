import React, { useEffect, useState } from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { MdEmail, MdPhone } from 'react-icons/md';

function ResumeComponent() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  return (
    <div className="min-h-screen py-10 px-6 md:px-20 lg:px-40  dark:bg-none transition-colors duration-300">
      {/* Toggle Button */}
      <div className="flex justify-end mb-4">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="px-4 py-2 text-sm bg-gray-300 dark:bg-gray-700 text-black dark:text-white rounded-md"
        >
          Toggle {darkMode ? 'Light' : 'Dark'} Mode
        </button>
      </div>

      <div className="bg-white dark:bg-gray-800 mt-6 shadow-md rounded-lg p-8 text-gray-800 dark:text-gray-200">
        {/* Header/Profile Section */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-6">
          <div className="text-center md:text-left">
            <h1 className="text-3xl font-bold">Aryan Bhargav</h1>
            <p className="text-gray-600 dark:text-gray-400">Full-Stack Developer</p>
          </div>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <a href="mailto:bhargavaryan5@gmail.com" className="hover:text-blue-400">
              <MdEmail className="text-xl" />
            </a>
            <a href="tel:9315409747" className="hover:text-blue-400">
              <MdPhone className="text-xl" />
            </a>
            <a href="https://github.com/Github" className="hover:text-blue-400">
              <AiFillGithub className="text-xl" />
            </a>
            <a href="https://linkedin.com/in/LinkedIn" className="hover:text-blue-400">
              <AiFillLinkedin className="text-xl" />
            </a>
          </div>
        </div>

        {/* Profile Summary */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Profile</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Motivated and detail-oriented full-stack developer with a strong passion for frontend technologies
            and graphic design. Skilled in JavaScript, React, Node.js, Express, and MongoDB, with experience in
            building scalable web applications. Adept at problem-solving, with experience solving multiple
            LeetCode challenges and a solid understanding of data structures and algorithms.
          </p>
        </section>

        {/* Education */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Education</h2>
          <div className="mb-3">
            <h3 className="text-lg font-semibold">Bachelor of Technology in Information Technology</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Maharaja Agrasen Institute Of Technology, Delhi
            </p>
            <p className="text-gray-600 dark:text-gray-300">CGPA - 8.2</p>
            <p className="text-gray-600 dark:text-gray-300">(September 2023 - September 2027)</p>
          </div>
        </section>

        {/* Technical Skills */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-lg font-semibold mb-1">Languages</h3>
              <p className="text-gray-600 dark:text-gray-300">JavaScript, Java, HTML, CSS</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-1">Frameworks</h3>
              <p className="text-gray-600 dark:text-gray-300">NodeJS, Express, ReactJS, EJS</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-1">Databases</h3>
              <p className="text-gray-600 dark:text-gray-300">MongoDB, MySQL</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-1">Tools</h3>
              <p className="text-gray-600 dark:text-gray-300">Postman, GitHub</p>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section>
          <h2 className="text-xl font-semibold mb-2">Projects</h2>
          <div className="mb-4">
            <h3 className="text-lg font-semibold">Blogify</h3>
            <a
              href="https://github.com/Github"
              className="text-blue-500 hover:underline mb-1 inline-block"
            >
              GitHub Link
            </a>
            <p className="text-gray-600 dark:text-gray-300">
              A dynamic blogging platform allowing users to create, edit, and manage posts. Integrated user
              authentication and a clean, responsive UI with EJS templating. (Express, Node.js, EJS, MongoDB)
            </p>
          </div>
          <div className="mb-4">
            <h3 className="text-lg font-semibold">Kampus (In Progress)</h3>
            <a
              href="https://github.com/Github"
              className="text-blue-500 hover:underline mb-1 inline-block"
            >
              GitHub Link
            </a>
            <p className="text-gray-600 dark:text-gray-300">
              Developing a full-stack social networking platform for students to connect, share real-time
              locations, and interact. Implementing authentication, chat system, and notifications using React,
              Node.js, Express, and MongoDB. (MERN Stack)
            </p>
          </div>
          <div className="mb-4">
            <h3 className="text-lg font-semibold">URL Shortener</h3>
            <a
              href="https://github.com/Github"
              className="text-blue-500 hover:underline mb-1 inline-block"
            >
              GitHub Link
            </a>
            <p className="text-gray-600 dark:text-gray-300">
              A custom URL shortening service that generates short links for long URLs. Features database storage,
              analytics tracking, and an intuitive user interface. (Express, Node.js, EJS, MongoDB)
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Weather App</h3>
            <a
              href="https://github.com/Github"
              className="text-blue-500 hover:underline mb-1 inline-block"
            >
              GitHub Live
            </a>
            <p className="text-gray-600 dark:text-gray-300">
              A weather forecasting app fetching real-time weather data using an API. Designed with a responsive
              UI and a clean user experience. (React.js)
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default ResumeComponent;
