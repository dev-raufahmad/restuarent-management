import React, { useContext } from 'react'
import searchAPI from '../../Context/SearchAPI'
import RestuentBox from './RestuentBox';

function Main() {

    const {data , setFilter , filter} = useContext(searchAPI);
    console.log("THe filter in the main is : " , filter);
    
    const good = [{
      src : '../../public/restaurant_5.png',
      cuisine : 'French',
      name : "LEssence",
      location : 'USA',
      price : '1000$',
      rating : '4.4'
    },{
      src : '../../public/restaurant_5.png',
      cuisine : 'French',
      name : "LEssence",
      location : 'USA',
      price : '1000$',
      rating : '4.4'
    },{
      src : '../../public/restaurant_5.png',
      cuisine : "French",
      name : "LEssence",
      location : 'USA',
      price : '1000$',
      rating : '4.4'
    },{
      src : '../../public/restaurant_5.png',
      cuisine : 'French',
      name : "LEssence",
      location : 'USA',
      price : '1000$',
      rating : '4.4'
    },{
      src : '../../public/restaurant_5.png',
      cuisine : 'French',
      name : "LEssence",
      location : 'USA',
      price : '1000$',
      rating : '4.4'
    },{
      src : '../../public/restaurant_5.png',
      cuisine : 'French',
      name : "LEssence",
      location : 'USA',
      price : '1000$',
      rating : '4.4'
    },{
      src : '../../public/restaurant_5.png',
      cuisine : 'French',
      name : "LEssence",
      location : 'USA',
      price : '1000$',
      rating : '4.4'
    },{
      src : '../../public/restaurant_5.png',
      cuisine : 'French',
      name : "LEssence",
      location : 'USA',
      price : '1000$',
      rating : '4.4'
    }]

  return (
    <div className='flex flex-col h-full w-full' >
      <div className='w-full p-8 h-1/10  flex flex-row justify-between items-center ' >
        <h1>{data && data.length>0 ? `${data.length}` : '0' } Resturant available</h1>
        <div>
          <label className='mr-5' >Sort by</label>
          <select
          className='h-8 w-30 rounded-2xl pl-2 bg-gray-200'
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="newest">Newest</option>
          <option value="ascending">Low to high</option>
          <option value="descending">High to low</option>
        </select>
        </div>
      </div>
      <div className='w-full p-4 h-9/10 gap-x-5 scrollbar-none overflow-y-scroll flex justify-center flex-row flex-wrap' >
        {
          good.map((e , index) => {
            return <RestuentBox prop={e} key={index}/>
          })
        }
      </div>

    </div>
  )
}

export default Main