import React from 'react';

const Skill = ({ icon, name }) => {
  return (
    <div className="
      w-fit flex items-center gap-4 p-3 rounded-xl shadow-sm border
      bg-white/60 border-gray-300 text-black
      dark:bg-white/10 dark:border-white/20 dark:text-white
      backdrop-blur-md hover:shadow-[0_0_15px_2px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_0_15px_2px_rgba(255,255,255,0.3)]
      hover:-translate-y-1 transition-transform duration-500 ease-in-out
    ">
      <div>{icon}</div>
      <h2 className="select-none text-[0.85rem] sm:text-xl md:text-xl lg:text-xl">{name}</h2>
    </div>
  );
};

export default Skill;
