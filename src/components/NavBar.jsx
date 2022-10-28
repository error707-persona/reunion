import React from 'react'
import { IconChevronDown } from "@tabler/icons"
const NavBar = () => {
    return (
        <div className='flex items-center h-16 shadow-md bg-white'>
            <div className='flex ml-10 text-sm font-semibold'>
            <img width="20px" height="20px" className='mr-2' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAADhklEQVRoge2ZTUhUURTHf5ZlSIJBQi6KMKGVFX2B2M4vKltIIm5sYVntKgvcCoG1TIiwECI3QUQkgbQyoaKNtAhahZjaIgshxVKbxmlxz3Pe3Llv3sfMm5ly/nAYuOfc//2fuV9zz0ABGwtNwAexphxrCYTdwDAQ0+wFUJVDXZ5RCtwEllHCF4AbYgvStiwxpTnS6IozwBRK7BrwBDUzFnYB94GoxHwBzgFF2ZXpjBpgjPjymQBqbf46MQu1EmPFjwlHzlAODAARETQPXAE2i7+S+AxYM7RHfEWo2ZiTvlHUntqZJe0AbNJERESwJWILKiFrT9htCegDSiS2HLgNrGL+MkLDMeCdTdg4cMDmrwc+GhLQ7RNw2tZvP/DS5n8PnAgriWHUEokBM0C7zbcPGPGQgG4j0tdCu3BbB8ZwGInEUEtgACiTtlLUUrGO2yD224Uz43hO4mXWAcymkYBus8JpoUrGDBXjGUxAt/EggoJeRqFMuQ2+dW0KQ0UuYE+kDHUffBcbBLbnQpQDPOt7QPJ6HXQgDWt/WJaWvjlD4FweJZJSn31TORGYNl4uNntKff/lZv+nUUgk31BIJN+w4RN5m1EViXiTLoHpwVMPFAOXgTuop262cBz14LokGhpEk+uvAD3gkbTfsrVFgM7wtK+jk3h1Jgb0S7upepkEPeCqtE9q7RGgNRT5Cq0kJhFDFSsArht0Aol75KdGWCmf01p7MfAYaMyEag2Nwl2stc9omizomoF4udOyGWArcAhYJPmbWCKxopguaoVTH2dRNJSgyqx236SJyLT+7oqvzmGQH8DhDCRRgyrO6fyrQLPE3DP4H5rIjpK8NmNAj/hbMJ8aX4HqNJKoFg7TqdkiMT0GfwQ44kRq6rAGdIm/g3g1Xd+MFQGSqJC+Ol+UeGmoi3hh0G7X3MiHDJ3+AG3i73YgHsNf9aMIeGXgWQMuSkybjK3HDHkZYBuJZX/Teu03+GPABR+JdDtwWHdGM/Hitt0mRKMn7MW8+ZaAU0Cvg4hvqJPODSWoSoiJo1fGMB0u86LNFxowT6ubnfXA3R6ANwqc9JuEhb4AAz71wPssAG9f0CRA3fyjPgec8sA77ZNzlAw8OXaQ/Hsrla144FzxwfeZDP4ldxD45WNwN3jlWSbFpRcUnT4EuMErz3mv4vyW772I9MKbKZ51bNg3u5f39Oss8hSQt/gL7ytpzYDPklEAAAAASUVORK5CYII="/>
                Estatery
            </div>
            <span className='ml-10 h-7 w-10 justify-center flex items-center rounded-md text-xs hover:bg-indigo-300 hover:text-indigo-600 focus:outline-none focus:ring focus:ring-indigo-300'>Rent</span>
            <span className='ml-10 h-7 w-10 justify-center flex items-center rounded-md text-xs hover:bg-indigo-300 hover:text-indigo-600 focus:outline-none focus:ring focus:ring-indigo-300'>Buy</span>
            <span className='ml-10 h-7 w-10 justify-center flex items-center rounded-md text-xs hover:bg-indigo-300 hover:text-indigo-600 focus:outline-none focus:ring focus:ring-indigo-300'>Sell</span>
            <span className='ml-10 flex justify-center flex items-center text-xs rounded-md cursor-pointer'>Manage Property&nbsp;<IconChevronDown /></span>
            <span className='ml-10 flex justify-center flex items-center text-xs rounded-md cursor-pointer'>Resources&nbsp;<IconChevronDown /></span>
            <div className='ml-auto mr-10'>

                <button className='mr-5 rounded-lg text-indigo-500 hover:bg-neutral-200 outline-1 h-10 w-20 border-solid border-2 border-indigo-600 text-xs'>
                    Login
                </button>

                <button className='rounded-lg bg-indigo-500 hover:bg-indigo-600 text-white h-10 w-20 text-xs'>
                    Sign Up
                </button>
            </div>

        </div>
    )
}

export default NavBar