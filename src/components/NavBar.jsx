import React from 'react'
import { IconChevronDown } from "@tabler/icons"
const NavBar = () => {
    return (
        <div className='flex items-center h-20 shadow-md'>
            <div className='flex ml-10'>

                Estatery
            </div>
            <span className='ml-10'>Rent</span>
            <span className='ml-10'>Buy</span>
            <span className='ml-10'>Sell</span>
            <span className='ml-10 flex'>Manage Property&nbsp;<IconChevronDown /></span>
            <span className='ml-10 flex'>Resources&nbsp;<IconChevronDown /></span>
            <div className='ml-auto mr-10'>

                <button className='mr-10 rounded-lg text-indigo-500 outline-1 h-14 w-24 font-semibold border-solid border-2 border-indigo-600 '>
                    Login
                </button>

                <button className='rounded-lg bg-indigo-500 text-white h-14 w-24 font-semibold'>
                    Sign Up
                </button>
            </div>

        </div>
    )
}

export default NavBar