import React from 'react';
import Project from '../Components/Project';

const Projects = () => {
  return (
    <div className="p-8 mt-30 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      <Project
        className=""
        title="Kampuss"
        img="/projects/kampuss.png"
        link="https://github.com/yourusername/kampuss"
        live="https://kampuss.live"
      />
      {/* Add more <Project /> components here */}
    </div>
  );
};

export default Projects;
