import React, { useContext } from 'react'
import searchAPI from '../../Context/SearchAPI'
import RestuentBox from './RestuentBox';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer'

function Main() {

  const { ref , inView } = useInView({
    threshold : 0,
  });
  const [ page , setPage ] = React.useState(1);
  const { consine, setConsine, location, setLocation, filter, setFilter, price, setPrice, } = useContext(searchAPI);
  const [ data , setData ] = React.useState([]);
  

  useEffect(() => {
    const funt = async () => {
      console.log("WE have entered the function in the main of the restuarants route");
      
      const params = new URLSearchParams();
      if (consine.length > 0) {
        params.append('cuisine', consine.join(','));
      }
      if(location) {
        params.append('location', location);
      }
      if(price) {
        params.append('price', price);
      }
      if(filter) {
        params.append('filter', filter);
      }
      params.append('page', page);
      console.log("The param is : " , params.toString());
      
      const response = await fetch(`http://localhost:3000/restuarants/?${params.toString()}`, {
        credentials: 'include',
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        },
      })
      if(response.status == 200){
        const result = await response.json();
        setData((prev) => [...prev, ...result.restaurants]);
      }
      setPage((prev) => prev + 1);
    }
    if(inView || page == 1){
      funt();
    }
  } , [ inView, page ])

  useEffect(() => {
    setData([]);
    setPage(1);
  }, [consine.length, location, price, filter]);

  return (
    <div className='flex flex-col h-full w-full' >
      <div className='w-full p-8 h-1/10  flex flex-row justify-between items-center ' >
        <h1>{data && data.length > 0 ? `${data.length}` : '0'} Resturant available</h1>
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
          data && data.length > 0 ? (
            data.map((e, index) => {
              if (index === data.length - 1) {
                return (
                  <div ref={ref} key={e.id} >
                    <RestuentBox prop={e} />
                  </div>
                )
              } else {
                return (
                  <div key={e.id} >
                    <RestuentBox prop={e} />
                  </div>
                )
              }
            })
          ) : (
            <p>No restaurants found.</p>
          )
        }
      </div>

    </div>
  )
}

export default Main