import React from 'react'

function AboutCard({imgSrc}) {
  return (
    <div className='w-[100%] h-[100%] rounded-xl'>
        <img className='w-full h-full rounded-xl' src={imgSrc} alt="" />
    </div>
  )
}

export default AboutCard