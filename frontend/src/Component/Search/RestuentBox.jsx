const RestuentBox = (prop) => {
    console.log("THe prop is :" , prop);
    
  return (
    <div className="p-5 mb-5 bg-white hover:shadow-2xl transition-all duration-400 shadow-gray-400  group w-[400px] h-[500px] flex-shrink-0 flex flex-col">
      <img
        className="w-full h-3/5 object-cover transition-all hover:scale-105 duration-400"
        src="/restaurant_5.png"
        alt=""
      />
      <div className="flex flex-row justify-between text-yellow-600 mt-2 p-5" >
        <h2>{prop.prop.cuisine}</h2>
        <h2>{prop.prop.price } { prop.prop.rating }</h2>
      </div>
      <div className="p-5 block group-hover:text-yellow-600 text-2xl font-normal pt-2" >
        { prop.prop.name }
      </div>
      <div className="p-5 block  font-normal pt-2" >
        { prop.prop.location }
      </div>
    </div>
  )
}

export default RestuentBox