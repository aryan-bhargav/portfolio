import React from 'react'

const Skill = ({icon,name}) => {
  return (
    <div className='w-fit hover:shadow-[0_0_15px_2px_rgba(255,255,255,0.3)] hover:-translate-y-1 duration-500 flex items-center gap-5 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-3 shadow-sm '>
      <div className=''>{icon}</div>
      <h2 className=' text-xl'>{name}</h2>
    </div>
  )
}

export default Skill;
