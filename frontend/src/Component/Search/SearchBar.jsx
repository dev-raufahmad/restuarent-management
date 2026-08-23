import React, { useContext } from 'react'
import searchAPI from '../../Context/SearchAPI'

function SearchBar(prop) {

  const {} = useContext(searchAPI);

  return (
    <div className='flex flex-row space-x-2 bg-white pl-5' >
      <div className='relative' > 
        <input className='w-70 h-10 pl-10 focus:border focus:border-yellow-600 rounded-2xl focus:outline-none bg-gray-200' type="text" value={prop.cosine || ""} onChange={(e) => prop.setCosine(e.target.value)} placeholder='Enter cosine name' />   
        <img className='absolute w-8 h-8 left-1 top-1' src="https://cdn-icons-png.flaticon.com/128/5636/5636698.png"  />
      </div>
      <div className='relative' > 
        <input className='w-70 h-10 pl-10 focus:border focus:border-yellow-600 rounded-2xl focus:outline-none bg-gray-200' type="text" value={prop.location || ""} onChange={(e) => prop.setLocation(e.target.value)} placeholder='Enter location' />   
        <img className='absolute w-8 h-6 left-1 top-2' src="https://cdn-icons-png.flaticon.com/128/2838/2838912.png"  />
      </div>
      <button className='bg-black opacity-75 hover:opacity-100 p-2 rounded-2xl text-white hover:bg-yellow-600' >Update</button>
    </div>
  )
}

export default SearchBar