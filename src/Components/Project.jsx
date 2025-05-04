import React from 'react';
import { SiGithub } from 'react-icons/si';
import { FaExternalLinkAlt } from 'react-icons/fa';

const Project = ({ img, title, live, link }) => {
    return (
        <div className="flex flex-col max-w-sm w-full sm:max-w-sm md:max-w-md lg:max-w-lg">
            {/* Image + Overlay */}
            <div
                className="relative group cursor-pointer overflow-hidden rounded-t-md shadow-xl bg-cover bg-center aspect-[2/1]"
                style={{ backgroundImage: `url(${img})` }}
            >
                <div className="absolute bottom-0 left-0 p-4 z-10 w-full bg-gradient-to-t from-black/70 to-transparent">
                    <h1 className="text-md sm:text-lg md:text-xl font-medium text-white">{title}</h1>
                </div>
            </div>

            {/* Buttons Row */}
            <div className="flex w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-b-md shadow-sm divide-x divide-white/30">
                {link && (
                    <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-1/2 p-3 hover:shadow-[0_0_15px_2px_rgba(255,255,255,0.3)] hover:-translate-y-1 transition duration-500 flex items-center justify-center gap-2"
                    >
                        <SiGithub size={18} />
                        <span className="text-sm sm:text-base md:text-lg">Code</span>
                    </a>
                )}
                {live && (
                    <a
                        href={live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-1/2 p-3 hover:shadow-[0_0_15px_2px_rgba(255,255,255,0.3)] hover:-translate-y-1 transition duration-500 flex items-center justify-center gap-2"
                    >
                        <FaExternalLinkAlt size={18} />
                        <span className="text-sm sm:text-base md:text-lg">Live</span>
                    </a>
                )}
            </div>
        </div>
    );
};

export default Project;
