import React from 'react'
import "../App.css"
import { Link } from 'react-router-dom'
import SkillMarquee from '../Components/SkillMarquee'

const Home = () => {
    return (
        <div className='flex flex-col gap-6 my-16 mx-8 mt-36'>

            <div className='sm:flex sm:flex-col md:flex-row-reverse lg:flex-row-reverse flex flex-row-reverse'>
                {/* avatar */}
                <div className='sm:w-1/5 sm:mt-0 sm:mb-10 md- bg-none mx-7 md:bg-gradient-to-b from-gray-800 to-[#0F0D0C]  md:w-2/5 lg:w-2/5 rounded-lg'>
                    <img className='w-3xs' src="/avatar.png" alt="" />
                </div>
                {/* introduction */}
                <div className=' flex flex-col w-full gap-6'>
                    <h3 className='text-lg'>
                        Hi! My Name is
                    </h3>
                    <h1 className='bg-linear-to-b from-white to-black/5 bg-clip-text font-medium text-transparent text-6xl'>
                        Aryan Bhargav
                    </h1>
                    <p className='                                                          text-lg font-light'>
                        Meet Aryan, an enthusiastic and self-motivated software engineering student with a strong foundation in full-stack development and a passion for building real-world solutions. Eager to gain hands-on experience, Aryan is actively seeking internship opportunities to apply his skills, learn from industry experts, and contribute meaningfully to dynamic tech projects.
                    </p>
                </div>
            </div>


            <div className='flex flex-row gap-10 mx-4 my-10 items-center'>
                <Link className='lg:p-3 md:p-2 sm:p-1 rounded-lg hover:bg-gray-800 duration-500' to="https://github.com/aryan-bhargav">
                    <img className='filter invert w-10 h-10 sm:w-9 sm:h-9' src="/github.png" alt="" />
                </Link>

                <Link className='p-3 rounded-lg hover:bg-gray-800 duration-500' to="https://www.linkedin.com/in/aryan-bhargav/"><img className='filter invert w-10 h-10 sm:w-9 sm:h-9' src="linkedin.png" alt="" />
                </Link>
                <Link className='p-3 rounded-lg hover:bg-gray-800 duration-500' to="https://www.instagram.com/aryan_bhargav47/"><img className='filter invert w-10 h-10 sm:w-9 sm:h-9' src="instagram.png" alt="" />
                </Link>
                <button className='bg-gray-800 hover:bg-gray-700 hover:rounded-4xl hover:duration-500 rounded-3xl font-semibold px-8 py-4 flex flex-row items-center'>
                    <a href="mailto:bhargavaryan5@gmail.com">Email me</a>

                </button>

            </div>


            <SkillMarquee></SkillMarquee>

        </div>
    )
}

export default Home
