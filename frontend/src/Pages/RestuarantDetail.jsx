import React from "react";
import { useLocation } from "react-router-dom";
import Header from "../Component/Header";
import Footer from "../Component/Footer";
import Comment from "../Component/Comment";

const comment = [
  {
    name: "Rauf Ahmad Khan Niazi",
    rating: 0,
    date: "16/10/2026",
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, minus rem ex debitis nostrum laboriosam sed, dolorum mollitia, officia voluptatum laudantium amet deleniti saepe! Quia ipsum odit molestias ab ea?'
  }, {
    name: "Rauf Ahmad",
    rating: 4,
    date: "6/10/2026",
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, minus rem ex debitis nostrum laboriosam sed, dolorum mollitia, officia voluptatum laudantium amet deleniti saepe! Quia ipsum odit molestias ab ea?'
  }, {
    name: "Rauf Ahmad",
    rating: 5,
    date: "6/10/2026",
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, minus rem ex debitis nostrum laboriosam sed, dolorum mollitia, officia voluptatum laudantium amet deleniti saepe! Quia ipsum odit molestias ab ea?'
  }
]

const time = [
  '18:00',
  '19:00',
  '20:00',
  '21:00',
  '22:00',
  '23:00',
]

const RestuarantDetail = () => {
  const location = useLocation();
  const restuarant = location.state;

  console.log(
    "The restuarant in the restuarant detail is : ",
    restuarant
  );

  return (
    <div className="flex flex-col min-h-lvh min-w-lvw bg-gray-50">
      <Header />

      {/* Hero Section */}
      <div className="w-full h-[500px] relative overflow-hidden">

        {/* Restaurant Image */}
        <img
          className="w-full h-full object-cover"
          src={restuarant.src}
          alt={restuarant.name}
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Restaurant Information */}
        <div className="absolute bottom-[8%] left-[5%] w-[90%] md:w-[45%] lg:w-[35%] text-white">

          {/* Cuisine */}
          <div className="inline-block bg-yellow-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            {restuarant.cuisine}
          </div>

          {/* Name */}
          <h1 className="text-4xl md:text-5xl font-bold mb-5">
            {restuarant.name}
          </h1>

          {/* Restaurant Stats */}
          <div className="flex flex-wrap items-center gap-3">

            <div className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-lg">
              ⭐ {restuarant.rating}
            </div>

            <div className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-lg">
              💬 {restuarant.totalReviews} Reviews
            </div>

            <div className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-lg">
              💰 {restuarant.price}
            </div>

          </div>
        </div>
      </div>

      <div className="relative px-7 md:px-12 lg:px-16 py-10 flex flex-col gap-10 bg-gray-50">

        {/* About & Guest Experiences */}
        <div className="w-full lg:w-3/5 flex flex-col gap-10">

          {/* About the Dining */}
          <section className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100">

            <h1 className="text-2xl font-bold text-gray-800 mb-4">
              About the Dining
            </h1>

            <p className="text-gray-600 leading-7">
              {restuarant.description
                ? restuarant.description
                : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ratione labore pariatur omnis iusto provident tenetur minus voluptate nemo tempore neque, ea harum dolores incidunt numquam dolor aliquam tempora. Suscipit totam qui possimus voluptatem officia laudantium at repudiandae laborum quam, alias minus inventore sint natus perspiciatis aperiam, expedita dolorum iste."
              }
            </p>

            {/* Location */}
            <div className="mt-6 flex items-center gap-3 text-gray-600">
              <div className="w-9 h-9 rounded-full bg-yellow-100 flex items-center justify-center">
                📍
              </div>

              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wide">
                  Location
                </p>

                <p className="font-medium text-gray-700">
                  {restuarant.location}
                </p>
              </div>
            </div>

          </section>


          {/* Guest Experiences */}
          <section className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100">

            <div className="flex items-center justify-between mb-7">

              <div>
                <h1 className="text-2xl font-bold text-gray-800">
                  Guest Experiences
                </h1>

                <p className="text-gray-400 text-sm mt-1">
                  What our guests have to say
                </p>
              </div>

              {/* Overall Rating */}
              <div className="flex items-center gap-2 bg-yellow-50 px-4 py-2 rounded-xl">
                <span className="text-yellow-500 text-xl">
                  ★
                </span>

                <span className="font-bold text-gray-700">
                  {restuarant.rating}
                </span>
              </div>

            </div>


            {/* Comments */}
            <div className="flex flex-col gap-4">

              {comment.map((e, index) => (
                <Comment
                  prop={e}
                  key={index}
                />
              ))}

            </div>

          </section>

        </div>

              {/* Here is the form that will take the reservation details  */}

        <form
  className="
    fixed z-50 flex flex-col gap-y-4 bg-white p-6 rounded-lg shadow-lg
    w-[320px] max-w-[90vw] max-h-[85vh] overflow-y-auto

    top-1/2 right-[2%] -translate-y-1/2

    max-md:right-auto max-md:left-1/2 max-md:top-1/2
    max-md:-translate-x-1/2 max-md:-translate-y-1/2
    max-md:w-[85vw] max-md:p-4
  "
>
  {/* Party Size */}
  <div className="flex flex-col gap-y-1 relative">
    <label htmlFor="guests" className="text-xs font-semibold tracking-wide text-gray-700">
      PARTY SIZE
    </label>
    <div className="relative">
      <img
        className="absolute top-1/2 left-3 -translate-y-1/2 w-5 h-5 pointer-events-none"
        src="https://cdn-icons-png.flaticon.com/128/694/694642.png"
        alt="Guests icon"
      />
      <select
        id="guests"
        className="pl-10 pr-3 bg-gray-100 border border-gray-300 rounded-md h-11 w-full appearance-none focus:outline-none focus:ring-2 focus:ring-black/70"
      >
        <option value="1">1 Guest</option>
        <option value="2">2 Guests</option>
        <option value="4">4 Guests</option>
        <option value="6">6 Guests</option>
        <option value="8">8 Guests</option>
      </select>
    </div>
  </div>

  {/* Date */}
  <div className="flex flex-col gap-y-1">
    <label htmlFor="date" className="text-xs font-semibold tracking-wide text-gray-700">
      DATE
    </label>
    <input
      id="date"
      type="date"
      min={new Date().toISOString().split("T")[0]}
      className="h-11 w-full border border-gray-300 rounded-md px-3 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-black/70"
    />
  </div>

  {/* Time slots */}
  <div className="flex flex-row flex-wrap gap-2">
    {time.map((e, i) => (
      <button
        key={i}
        type="button"
        className="text-sm text-black/70 border border-black/20 rounded-md px-4 py-2 hover:opacity-100 hover:border-black hover:bg-black hover:text-white transition-all duration-200"
      >
        {e}
      </button>
    ))}
  </div>

  {/* Submit */}
  <button
    type="submit"
    className="p-4 text-lg font-medium text-white bg-black rounded-md hover:bg-yellow-600 transition-colors duration-200"
  >
    Reserve now
  </button>

  <p className="text-xs text-gray-500 text-center">
    No reservation fee. Cancel for free up to 24 hours prior.
  </p>
</form>
      </div>
      <Footer />
    </div>
  );
};

export default RestuarantDetail;