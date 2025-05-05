import React from 'react';
import Project from '../Components/Project';

const Projects = () => {
  return (
    <div className="flex flex-col p-8 gap-6">
      <br /><br /><br /><br /><br />

      <h2 className="text-3xl lg:text-5xl font-bold dark:text-white/80 text-center mb-8">Projects</h2>
      <br /><br />
      <div className="lg:flex lg:flex-col items-center lg:gap-5 lg:max-h-[110vh] lg:overflow-x-auto flex flex-wrap gap-5">
        <Project
          title="Kampuss"
          img="/projects/kampuss.png"
          link="https://github.com/yourusername/kampuss"
          live="https://kampus-connect-frontend.vercel.app/"
        />
        <Project
          title="Blogify"
          img="/projects/blogify.png"
          link="https://github.com/aryan-bhargav/blogify"
          live="https://blogif-nodejs.onrender.com/"
        />
        <Project
          title="Weather app"
          img="/projects/weatherapp.png"
          link="https://github.com/aryan-bhargav/weather-app"
          live="https://aryan-bhargav.github.io/weather-app/"
        />
        <Project
          title="URL Shortner"
          img="/projects/url.png"
          link="https://github.com/aryan-bhargav/url-shortner"
          live="https://url-shortner-0to5.onrender.com"
        />
        <Project
          title="Postercon"
          img="/projects/postercon2.png"
          link="https://github.com/aryan-bhargav/postercon"
          live="https://postercon.vercel.app"
        />
        <Project
          title="Tic Tac Toe"
          img="/projects/tictactoe.png"
          link="https://github.com/aryan-bhargav/Tic-Tact-Toe"
          live="https://tictactoe-reacta-app.vercel.app/"
        />
      </div>
    </div>

  );
};

export default Projects;
