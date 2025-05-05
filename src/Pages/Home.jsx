import React from 'react'
import "../App.css"
import { Link } from 'react-router-dom'
import SkillMarquee from '../Components/SkillMarquee'
import ContactForm from '../Components/ContactForm'

const Home = () => {

    const iconLinkClass = "lg:p-3 md:p-2 sm:p-1 p-1 rounded-lg bg-gray-200 dark:bg-[#141110] hover:bg-gray-800 duration-500";
    const iconImgClass = 'dark:filter dark:invert hover:filter hover:invert w-5 h-5 sm:w-9 sm:h-9'

    return (
        <div className='flex flex-col gap-6  mx-8'>

            <div className='sm:flex sm:flex-col lg:mt-40 mt-26 md:flex-row-reverse lg:flex-row-reverse flex flex-col'>
                {/* avatar */}
                <div className=' sm:mt-0 sm:mb-10 w-1/5 bg-none mx-7   sm:w-1/5 md:w-2/5 lg:w-2/5 rounded-lg'>
                    <img className='w-3xs' src="/avatar.png" alt="" />
                </div>
                {/* introduction */}
                <div className=' flex flex-col w-full gap-6'>
                    <h3 className='text-lg  lg:text-[1.5rem] '>
                        Hi! My Name is
                    </h3>
                    <h1 className='text-6xl font-medium 
               bg-gradient-to-b
               from-black
               to-white/5
               text-transparent 
               bg-clip-text
               dark:from-white 
               dark:to-black/5 
               dark:bg-clip-text'>
                        Aryan Bhargav
                    </h1>

                    <p className='hover:scale-101 hover duration-500 lg:text-[1.5rem] text-[1rem] font-light'>
                        Meet Aryan, a backend developer with a solid grasp of frontend technologies. As a software engineering student, he’s passionate about full-stack development and eager to gain hands-on experience through internships.
                    </p>
                </div>
            </div>


            <div className='flex flex-row gap-4 mx-4 lg:my-0 my-10 items-center'>


                <Link className={iconLinkClass} to="https://github.com/aryan-bhargav">
                    <img className={iconImgClass} src="/github.png" alt="" />
                </Link>

                <Link className={iconLinkClass} to="https://www.linkedin.com/in/aryan-bhargav/">
                    <img className={iconImgClass} src="linkedin.png" alt="" />
                </Link>
                <Link className={iconLinkClass} to="https://www.instagram.com/aryan_bhargav47/">
                    <img className={iconImgClass} src="instagram.png" alt="" />
                </Link>
                <button className='bg-gray-500 text-white hover:bg-gray-400  dark:bg-gray-800 dark:hover:bg-gray-700  hover:rounded-4xl hover:duration-500 rounded-3xl font-semibold px-6 py-3 flex flex-row items-center'>
                    <a href="mailto:bhargavaryan5@gmail.com">Email me</a>

                </button>

            </div>


            <SkillMarquee></SkillMarquee>
            <ContactForm></ContactForm>

        </div>
    )
}

export default Home
