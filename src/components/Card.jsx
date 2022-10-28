import React from 'react'

const Card = () => {
  return (
    <div className='card'>
        <img src="" className='w-full h-1/2' alt="house" />
        
        <div className='flex'>
        <span className='ml-5 text-indigo-400 font-semibold'>$24095</span> <span className='text-neutral-300 text-xs'>/month</span>
        <button className='ml-auto mr-5'>heart</button>
        </div>
        <div>

        </div>
    </div>
  )
}

export default Card