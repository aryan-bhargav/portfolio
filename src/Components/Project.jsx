// import React from 'react';
// import { SiGithub } from 'react-icons/si';

// const Project = ({ img, title, live, link }) => {
//     return (

//         <div
//             className=" relative group hover:blur-sm cursor-pointer overflow-hidden rounded-md shadow-xl bg-cover bg-center aspect-[2/1] w-[18rem] h-sm"
//             style={{ backgroundImage: `url(${img})` }}
//         >
//             {/* Dark overlay on hover */}
//             <div className="absolute inset-0 bg-black opacity-40 group-hover:opacity-60 transition duration-300"></div>

//             {/* Bottom-left text and buttons */}
//             <div className="absolute bottom-0 left-0 p-4 z-10 w-full bg-gradient-to-t from-black/70 to-transparent">
//                 <h1 className="text-md font-medium text-white">{title}</h1>
//                 <div className="flex gap-2 mt-2">
//                     {link && (
//                         <a
//                             href={link}
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             className="p-3 aspect-square scale-75 flex items-center justify-center bg-gray-900 text-white text-sm rounded hover:bg-blue-600"
//                         >
//                             <SiGithub />
//                         </a>
//                     )}
//                     {live && (
//                         <a
//                             href={live}
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             className="px-3 py-1 aspect-square flex items-center justify-center bg-gray-900 text-white text-sm rounded hover:bg-green-600"
//                         >
//                             <FaExternalLinkAlt />
//                         </a>
//                     )}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Project;



import React from 'react';
import { SiGithub } from 'react-icons/si';
import { FaExternalLinkAlt } from 'react-icons/fa';

const Project = ({ img, title, live, link }) => {
    return (
        <div className='flex flex-col'>
            <div
                className=" relative group cursor-pointer overflow-hidden rounded-md shadow-xl bg-cover bg-center aspect-[2/1] w-fullh-sm"
                style={{ backgroundImage: `url(${img})` }}>
                <div className="absolute bottom-0 left-0 p-4 z-10 w-full bg-gradient-to-t from-black/70 to-transparent">
                    <h1 className="text-md font-medium text-white">{title}</h1>
                </div>
            </div>

            <div className="flex gap-4 w-full  bg-white/10 backdrop-blur-md border border-white/20 rounded-bl-md rounded-br-md p-1 shadow-sm">
                
                {/* Code Button */}
                {link && (
                    <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-1/2 hover:shadow-[0_0_15px_2px_rgba(255,255,255,0.3)] hover:-translate-y-1 transition duration-500 flex items-center justify-center gap-5"
                    >
                        <SiGithub size={20} />
                        <span className="text-sm sm:text-base md:text-lg">Code</span>
                    </a>
                )}
                <div className="w-px h-12 bg-white opacity-30 mx-4" />

                {/* Go Live Button */}
                {live && (
                    <a
                        href={live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-1/2 hover:shadow-[0_0_15px_2px_rgba(255,255,255,0.3)] hover:-translate-y-1 transition duration-500 flex items-center justify-center gap-5"
                    >
                        <FaExternalLinkAlt size={20} />
                        <span className="text-sm sm:text-base md:text-lg">Live</span>
                    </a>
                )}
            </div>

        </div>
    );
};

export default Project;

