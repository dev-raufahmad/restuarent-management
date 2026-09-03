import React from "react";
import { useNavigate , NavLink } from 'react-router-dom'

  

const RestuentBox = ({prop}) => {
    // console.log("THe prop is :" , prop);
    const navigate = useNavigate();
  const handler = () => {
      console.log("Naviagate has been called");
      
      navigate(`/restuarant/${prop.id}` , {
        state : {
          ...prop
        }}
      ) 
  }

  return (
    <div onClick={() => handler()} className="p-5 mb-5 bg-white hover:shadow-2xl transition-all duration-400 shadow-gray-400  group w-[400px] h-[500px] flex-shrink-0 flex flex-col">
      <img
        className="w-full h-3/5 object-cover transition-all hover:scale-105 duration-400"
        src="/restaurant_5.png"
        alt=""
      />
      <div className="flex flex-row justify-between text-yellow-600 mt-2 p-5" >
        <h2>{prop.cuisine}</h2>
        <h2>{prop.price } { prop.rating }</h2>
      </div>
      <div className="p-5 block group-hover:text-yellow-600 text-2xl font-normal pt-2" >
        { prop.name }
      </div>
      <div className="p-5 block  font-normal pt-2" >
        { prop.location }
      </div>
    </div>
  )

}

export default RestuentBox