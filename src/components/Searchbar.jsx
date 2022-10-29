import React, { useState } from 'react'
import { TextField, NativeSelect } from '@mui/material';
import Card from './Card';
import { data } from "../utils/data"
import {IconFilterOff} from "@tabler/icons"
import MuiPicker from './MuiPicker';
import dateContext from '../context/DateContext';
import { useContext } from 'react';
const Searchbar = () => {
    const [location, setlocation] = useState("new york");
    const [price, setprice] = useState("500-2500");
    const [property, setproperty] = useState("house");
    const [search, setsearch] = useState("");
    const a = useContext(dateContext);
    const [items, setitems] = useState(data);
    const handleLocation = (value) => {
        setlocation(value);
    }
    const handlePrice = (value) => {
        setprice(value);
    }
    const handleProperty = (value) => {
        setproperty(value);
    }
    const handlebox = (value) => {
        console.log(value)
        setsearch(value);
    }

    const handleClick = () => {
        setitems(handleSearch());
        
    }
    const handleSearch = () => {
        const arr = price.split("-");
        
        return data.filter((item) => (
            item.property.toLowerCase().includes(search.toLowerCase()) || 
            // Date(item.availabe) <= Date(a.date) ||
            item.propertyType.toLowerCase().includes(property) &&
            item.location.toLowerCase().includes(location) &&
            parseInt(item.price) >= parseInt(arr[0]) && parseInt(item.price) <= parseInt(arr[1])
        ))
    }
    const handleClear = () => {
        setitems(data);
    }
    return (

        <div className='ml-auto mr-auto h-64 addwidth'>
            <div className='flex w-full items-center'>
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
                        onChange={(e) => { handlebox(e.target.value) }}
                        disableUnderline
                    />
                </div>
            </div>

            <div className=' mt-10 flex items-center justify-center bg-white h-28 w-full rounded-lg text-neutral-400 '>
                <div className='flex mx-5'>
                    <div className='mx-5 flex flex-col justify-center items-center'>
                        <span className='text-sm'>Location</span>

                        <NativeSelect
                            defaultValue={location}
                            onChange={(e) => handleLocation(e.target.value)}
                            style={{ minWidth: "100px", fontWeight: 'bold' }}
                            disableUnderline={true}
                        >
                            <option value="new york">New York</option>
                            <option value="paris">Paris</option>
                            <option value="london">London</option>
                            
                        </NativeSelect>
                    </div>
                    {/* divide */}
                    <div className='border-solid border-2 border-neutral-300 h-16'></div>

                    <div className=' mx-5 flex flex-col h-full items-center justify-center'>
                        <span className='text-sm'>When</span>
                        <MuiPicker />
                    </div>

                    {/* divide */}
                    <div className='border-solid border-2 border-neutral-300 h-16'></div>

                    <div className='flex flex-col mx-10 items-center justify-center' >
                        <span className='text-neutral-400 text-sm'>Price</span>
                        <NativeSelect
                            defaultValue={price}
                            onChange={(e) => handlePrice(e.target.value)}
                            style={{ minWidth: "110px", fontWeight: 'bold' }}
                            disableUnderline={true}
                        >
                            
                            <option value="500-2500">500-2500</option>
                            <option value="2500-4500">2500-4500</option>
                            <option value="4500-6500">4500-6500</option>
                        </NativeSelect>
                    </div>

                    {/* divide */}
                    <div className='border-solid border-2 border-neutral-300 h-16'></div>

                    <div className='flex mx-10 flex-col items-center justify-center'>
                        <span className='text-neutral-400 w-full text-sm'>PropertyType</span>

                        <NativeSelect
                            defaultValue={property}
                            onChange={(e) => handleProperty(e.target.value)}
                            style={{ minWidth: "115px", fontWeight: 'bold' }}
                            disableUnderline={true}
                        >
                            
                            <option value="house">Houses</option>
                            <option value="villa">Villa</option>
                            <option value="apartment">Apartments</option>
                        </NativeSelect>
                    </div>
                    {/* divide */}
                    <div className='border-solid border-2 border-neutral-300 h-16'></div>

                    <div className='flex flex-col mx-10 items-center justify-center'>
                        <button className='rounded-lg bg-indigo-500 text-white h-14 w-24 font-semibold hover:bg-indigo-600' onClick={handleClick}>
                            Search
                        </button>
                    </div>
                </div>
            </div>
            <div className=' flex w-full items-center mt-2'>
                <button className='bg-red-600 ml-auto rounded-lg p-1' onClick={handleClear}><IconFilterOff color="white"/></button>
            </div>
            <div className='mt-10 mb-10 ml-auto mr-auto cards grid'>
                {items.map((item) => (
                    <Card price={item.price} imgs={item.img} date={item.availabe} property={item.property} address={item.address} bed={item.bed} bath={item.bath} area={item.area} />
                ))}
            </div>
        </div>

    )
}

export default Searchbar