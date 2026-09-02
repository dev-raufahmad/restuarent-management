import React, { useState } from 'react'
import Header from '../Component/Header.jsx'
import SearchBar from '../Component/Search/SearchBar.jsx'
import searchAPI from '../Context/SearchAPI.jsx'
import FilterAndMain from '../Component/Search/FilterAndMain.jsx'
import Footer from '../Component/Footer.jsx'
import { useLocation } from 'react-router-dom'

const Resturants = () => {

  const locations = useLocation();
  const state = locations.state;

  console.log("The state in the restuarent is : ", state);


  const [consine, setConsine] = useState([]);
  const [location, setLocation] = useState("");
  const [filter, setFilter] = useState("have a nice day");
  const [price, setPrice] = useState("")
  const [data, setData] = useState();

  console.log("The cuisine is in the restuarnt page : " , consine);
  console.log("The location in the restuarants is : " , location);
  console.log("The price in the restuarants is : " , price);
  
  

  return (
    <div className='bg-gray-50 min-h-min boder-2 border-black flex flex-col space-y-5' >
      <searchAPI.Provider value={{ consine, setConsine, location, setLocation, filter, setFilter, price, setPrice, data, setData }}  >
        <Header />
        <SearchBar />
        <FilterAndMain />
        <Footer />
      </searchAPI.Provider>
    </div>
  )
}

export default Resturants
