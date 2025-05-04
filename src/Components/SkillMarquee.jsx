import React from 'react'
import {
    SiHtml5,
    SiCss3,
    SiJavascript,
    SiTypescript,
    SiReact,
    SiTailwindcss,
    SiExpress,
    SiMongodb,
    SiMysql,
    SiZod,
    SiGit,
    SiGithub,
    SiPostman,
} from "react-icons/si";
import Skill from './Skill';
import "../App.css"

const SkillMarquee = () => {
    const size = 20;
    const skills = [
        { name: "HTML", icon: <SiHtml5 size={size} /> },
        { name: "CSS", icon: <SiCss3 size={size} /> },
        { name: "JavaScript", icon: <SiJavascript size={size} /> },
        { name: "TypeScript", icon: <SiTypescript size={size} /> },
        { name: "React", icon: <SiReact size={size} /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss size={size} /> },
        { name: "ExpressJS", icon: <SiExpress size={size} /> },
        { name: "MongoDB", icon: <SiMongodb size={size} /> },
        { name: "MySQL", icon: <SiMysql size={size} /> },
        { name: "Zod", icon: <SiZod size={size} /> },
        { name: "Git", icon: <SiGit size={size} /> },
        { name: "GitHub", icon: <SiGithub size={size} /> },
        { name: "Postman", icon: <SiPostman size={size} /> },
    ];

    return (
        <div className="py-5 flex mx-auto justify-center flex-wrap gap-4 overflow-hidden ">
            {skills.map((skill, index) => (
                <Skill key={index} name={skill.name} icon={skill.icon} />
            ))}
        </div>
    );
};

export default SkillMarquee;
