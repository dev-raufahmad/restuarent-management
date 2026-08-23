import React, { useContext } from 'react'
import searchAPI from '../../Context/SearchAPI'
import Main from './Main';

export default function FilterAndMain() {

    const {consine , setConsine} = useContext(searchAPI);
    const cosineNames = ["Italian" , "French" , "Japanese" , "Vegetarian"];
  return (
    <div className='relative h-screen space-y-2 flex flex-row bg-gray-200' >
        <div className='pt-10 sticky top-0 left-0 h-full w-2/10  bg-gray-200 ' >
            <div className='flex flex-row justify-between m-2 mb-10' >
                <h1 className='text-2xl' >Filters</h1>
                <button className='text-yellow-600 hover:cursor-grabbing hover:text-black transition-all duration-200' >Clear all</button>
            </div>
            <h3 className='pl-3 mb-5' >CUISINE</h3>
            {
                cosineNames.map((e , index) => {
                    return <div key={index} className='pl-3 mb-2 pr-3 flex flex-row justify-between group' > 
                        <h2 className='text-black opacity-60 group-hover:opacity-100' >{e}</h2>
                        <input type="checkbox" />
                    </div>
                })
            }
            <h3 className='text-black font-medium mt-10 mb-5 pl-5' >PRICE RANGES</h3>
            <div className='flex flex-row gap-x-1'>
                <button className='w-20 h-10 bg-white hover:border hover:border-black font-bold' >$1000</button>
                <button className='w-20 h-10 bg-white hover:border hover:border-black font-bold' >$2000</button>
                <button className='w-20 h-10 bg-white hover:border hover:border-black font-bold' >$3000</button>
                <button className='w-20 h-10 bg-white hover:border hover:border-black font-bold' >$4000</button>
            </div>
        </div>
        <div className='h-full w-8/10' >
            <Main />
        </div>
    </div>
  )
}
