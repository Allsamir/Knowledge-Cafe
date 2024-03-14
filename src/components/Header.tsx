import React from 'react'
import Profile from '/images/profile.png'

export const Header: React.FC = () => {
  return (
    <>
    <div className="flex justify-between items-center mt-12 mb-8">
          <h1 className="text-4xl font-bold text-black">Knowledge Cafe</h1>
          <img src={Profile} alt="" className='w-[3.75rem] h-[3.75rem] rounded-[3.75rem]'/>
    </div>
     <hr />
     </>
  )
}
