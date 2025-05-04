import React from 'react';
import { SiGithub } from 'react-icons/si';
import { FaExternalLinkAlt } from 'react-icons/fa';

const Project = ({ img, title, live, link }) => {
    return (

        <div
            className=" relative group cursor-pointer overflow-hidden rounded-md shadow-xl bg-cover bg-center aspect-[2/1] w-[18rem] h-sm"
            style={{ backgroundImage: `url(${img})` }}
        >
            {/* Dark overlay on hover */}
            <div className="absolute inset-0 bg-black opacity-40 group-hover:opacity-60 transition duration-300"></div>

            {/* Bottom-left text and buttons */}
            <div className="absolute bottom-0 left-0 p-4 z-10 w-full bg-gradient-to-t from-black/70 to-transparent">
                <h1 className="text-md font-medium text-white">{title}</h1>
                <div className="flex gap-2 mt-2">
                    {link && (
                        <a
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 aspect-square scale-75 flex items-center justify-center bg-gray-900 text-white text-sm rounded hover:bg-blue-600"
                        >
                            <SiGithub />
                        </a>
                    )}
                    {live && (
                        <a
                            href={live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-3 py-1 aspect-square flex items-center justify-center bg-gray-900 text-white text-sm rounded hover:bg-green-600"
                        >
                            <FaExternalLinkAlt />
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Project;
