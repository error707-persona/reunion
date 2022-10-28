import React from 'react'
import houseimg from "./house.jpg"
import {IconHeart,IconAnalyze, IconBath,IconBed } from "@tabler/icons"
const Card = ({price, property, address, bed, bath, area  }) => {
  return (
    <div className='card'>
        <img src={houseimg} className='w-full h-1/2 rounded-md' alt="house" />
        <div className='flex mt-2'>
            <div>
            <span className='ml-5 text-indigo-400 font-semibold'>${price}</span> <span className='text-neutral-300 text-xs'>/month</span>
            </div>
             <button className=' flex justify-center items-center ml-auto mr-5 border-2 border-solid border-neutral-900 rounded-full w-8 h-8'><IconHeart/></button>
        </div>

        <div className='w-full flex'>
            <span className='text-lg font-bold items-end ml-5'>{property}</span>
        </div>
        
        <div className='w-full flex mb-3'>
            <span className='items-end ml-5 text-neutral-400'>{address}</span>
        </div><hr />

        <div className='flex w-full justify-center items-center mt-2'>
            <span className='flex ml-2 text-xs items-center'><IconBed/> &nbsp;{bed} {(bed==="1")?"Bed":"Beds"}</span>
            <span className='flex ml-2 text-xs items-center'><IconBath/>&nbsp;{bath} {(bath==="1")?"Bathroom":"Bathrooms"}</span>
            <span className='flex ml-2 text-xs items-center'><IconAnalyze/>&nbsp; {area}</span>
        </div>
    </div>
  )
}

export default Card