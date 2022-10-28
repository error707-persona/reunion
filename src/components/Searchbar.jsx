import React, { useState } from 'react'
import { TextField, Select, InputLabel, MenuItem, NativeSelect } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Dayjs } from 'dayjs';


const Searchbar = () => {
    const [location, setlocation] = useState("new york");
    const [price, setprice] = useState("500-2500");
    const [property, setproperty] = useState("house");
    const handleLocation = (value) => {
        setlocation(value);
    }
    const handlePrice = (value) => {
        setprice(value);
    }
    const handleProperty = (value) => {
        setproperty(value);
    }
    const [value, setvalue] = useState(Dayjs);
    
    return (
        <div className='ml-auto mr-auto h-64 addwidth'>
            <div className='flex w-full'>
                <div className='font-semibold text-4xl'>
                    Search properties to rent
                </div>
                <div className='ml-auto'>
                    <TextField
                        id="outlined"
                        label="Search with searchbar..."
                        type="search"
                        variant="outlined"
                        style={{
                            backgroundColor: "white"
                        }}
                        disableUnderline
                    />
                </div>
            </div>

            <div className=' mt-10 flex items-center bg-white h-24 w-full rounded-lg text-neutral-400 '>
                
                <div className='mx-10 flex flex-col'>
                    <span className='text-sm'>Location</span>
                           
                    <NativeSelect
                        defaultValue={location}
                        onChange={(e) => handleLocation(e.target.value)}
                        style={{minWidth:"100px", fontWeight: 'bold' }}
                        disableUnderline={true}
                        
                    >
                        <option value=""><em>None</em></option>
                        <option value="new york">New York</option>
                        <option value="paris">Paris</option>
                        <option value="london">London</option>
                    </NativeSelect>
                </div>
                {/* divide */}
                <div className='border-solid border-2 border-neutral-300 h-16'></div>

                <div className=' mx-10 flex flex-col '>
                    <span className='text-sm '>When</span>
                    <NativeSelect
                        defaultValue={location}
                        style={{minWidth:"100px", fontWeight: 'bold' }}
                        disableUnderline={true}
                        
                    >
                        <option value=""><em>None</em></option>
                        <option value="new york">New York</option>
                        <option value="paris">Paris</option>
                        <option value="london">London</option>
                    </NativeSelect>
                </div>
                {/* divide */}
                <div className='border-solid border-2 border-neutral-300 h-16'></div>

                <div className='flex flex-col mx-10 ' >
                    <span className='text-neutral-400 text-sm'>Price</span>
                    <NativeSelect
                        defaultValue={price}
                        onChange={(e) => handlePrice(e.target.value)}
                        style={{minWidth:"110px", fontWeight: 'bold' }}
                        disableUnderline={true}
                    >
                        <option value=""><em>None</em></option>
                        <option value="500-2500">500-2500</option>
                        <option value="2500-4500">2500-4500</option>
                        <option value="4500-6500">4500-6500</option>
                    </NativeSelect>
                </div>

                {/* divide */}
                <div className='border-solid border-2 border-neutral-300 h-16'></div>

                <div className='flex mx-10 flex-col '>
                    <span className='text-neutral-400 w-full text-sm'>PropertyType</span>
                    
                    <NativeSelect
                        defaultValue={property}
                        onChange={(e) => handleProperty(e.target.value)}
                        style={{minWidth:"100px", fontWeight: 'bold' }}
                        disableUnderline={true}
                    >
                        <option value=""><em>None</em></option>
                        <option value="house">Houses</option>
                        <option value="villa">Villa</option>
                        <option value="apartment">Apartments</option>
                    </NativeSelect>
                </div>

                {/* divide */}
                <div className='border-solid border-2 border-neutral-300 h-16'></div>

                <div className='flex flex-col mx-10'>
                    <button className='rounded-lg bg-indigo-500 text-white h-14 w-24 font-semibold'>
                        Search
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Searchbar