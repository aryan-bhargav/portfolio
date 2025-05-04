import React from 'react';
import Project from '../Components/Project';

const Projects = () => {
  return (
    <div className="p-8 mt-16 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      <h2 className='text-xl font-bold'>Projects</h2>
      <Project
        className=""
        title="Kampuss"
        img="/projects/kampuss.png"
        link="https://github.com/yourusername/kampuss"
      />
      <Project
        className=""
        title="Blogify"
        img="/projects/blogify.png"
        link="https://github.com/aryan-bhargav/blogify"
      /><Project
        className=""
        title="Weather app"
        img="/projects/weatherapp.png"
        link="https://github.com/aryan-bhargav/weather-app"
        live="https://aryan-bhargav.github.io/weather-app/"
      /><Project
        className=""
        title="URL Shortner"
        img="/projects/url.png"
        link="https://github.com/aryan-bhargav/url-shortner"
      />

      <Project
        className=""
        title="Postercon"
        img="/projects/postercon2.png"
        link="https://github.com/aryan-bhargav/postercon"
        live="https://postercon.vercel.app"
      />
      <Project
        className=""
        title="Tic Tac Toe"
        img="/projects/tictactoe.png"
        link="https://github.com/aryan-bhargav/Tic-Tact-Toe"
        live="https://tictactoe-reacta-app.vercel.app/"
      />
    </div>
  );
};

export default Projects;
