import React, { useState } from 'react'
import Header from '../Component/Header'
import { NavLink, useNavigate } from 'react-router-dom';
import Footer from '../Component/Footer.jsx'
import { useForm } from 'react-hook-form'

const benefits = [
  {
    title: "Last-Minute Reservations",
    description:
      "Unlock tables held exclusively for club members during peak weekends.",
    icon: (
      <svg
        className="h-6 w-6"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M12 3l2.1 2.1 3-.2.8 2.9 2.5 1.7-1.2 2.8 1.2 2.8-2.5 1.7-.8 2.9-3-.2L12 21l-2.1-2.1-3 .2-.8-2.9-2.5-1.7 1.2-2.8-1.2-2.8 2.5-1.7.8-2.9 3 .2L12 3z" />
        <path d="m9.5 12 1.7 1.7 3.5-3.5" />
      </svg>
    ),
  },
  {
    title: "Curated Tasting Invites",
    description:
      "Receive personalized invitations to private kitchen tasting sessions.",
    icon: (
      <svg
        className="h-6 w-6"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <rect x="4" y="8" width="16" height="10" rx="2" />
        <path d="M7 8V6h10v2M8 18v2M16 18v2" />
        <path d="M4 12h16" />
      </svg>
    ),
  },
];

const restaurants = [
  {
    name: "The Garden Restaurant",
    image:
      "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1000&q=80",
  },
  {
    name: "Skyline Rooftop",
    image:
      "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1000&q=80",
  },
  {
    name: "Japanese Fine Dining",
    image:
      "https://images.unsplash.com/photo-1579027989536-b7b1f875659b?auto=format&fit=crop&w=1000&q=80",
  },
];


const cuisines = [
  {
    name: "ITALIAN",
    icon: (
      <svg className="h-9 w-9" viewBox="0 0 48 48" fill="none">
        <path d="M15 11L34 30M34 11L15 30" stroke="currentColor" strokeWidth="1.5" />
        <path d="M10 16L17 23M31 25L38 32" stroke="currentColor" strokeWidth="1.5" />
        <path d="M24 20L29 15M24 20L19 25" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    name: "SUSHI",
    icon: (
      <svg className="h-9 w-9" viewBox="0 0 48 48" fill="none">
        <ellipse cx="24" cy="24" rx="14" ry="8" stroke="currentColor" strokeWidth="1.5" />
        <path d="M13 20C15 14 21 12 27 14C33 16 36 21 35 26" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="27" cy="21" r="3" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    name: "FRENCH",
    icon: (
      <svg className="h-9 w-9" viewBox="0 0 48 48" fill="none">
        <path d="M13 27C13 20 18 15 25 15C32 15 36 20 36 26C36 31 32 34 27 34H21C16 34 13 31 13 27Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M27 15L31 22M20 16L24 23M13 25L20 27" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    name: "ROOFTOP",
    icon: (
      <svg className="h-9 w-9" viewBox="0 0 48 48" fill="none">
        <rect x="12" y="15" width="24" height="20" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M18 35V27H23V35M27 35V22H32V35M17 20H22M17 24H22" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    name: "STEAKHOUSE",
    icon: (
      <svg className="h-9 w-9" viewBox="0 0 48 48" fill="none">
        <path d="M12 28C15 20 20 15 28 15C34 15 37 19 35 25C33 32 26 35 19 34C15 34 12 32 12 28Z" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="27" cy="23" r="3" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    name: "VEGETARIAN",
    icon: (
      <svg className="h-9 w-9" viewBox="0 0 48 48" fill="none">
        <path d="M35 12C25 13 17 18 14 25C11 32 15 36 21 35C29 34 34 27 35 12Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M14 35C19 29 24 25 31 21" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
];

function Home() {
  const { register , handleSubmit } = useForm();
  const naviagte = useNavigate();

  const searching = (data) => {
    naviagte('/restaurants' , {
      state : data
    })
  }
  return (
    <div>
      <div className="bg-[url('../public/restaurant_1.png')]" >
        <Header />
        {/* <LogInAndSignIn prop={ {setLonIn , setSignIn , logIn , signIn} } /> */}
        <div className='w-screen h-screen text-white space-y-10 flex flex-col justify-center items-center' >
          <p className='text-amber-400 text-2xl' >EXQUISITIC DINER EXPERIANCE</p>
          <h1 className='font-extrabold text-6xl'>Curation For The Discering Palete</h1>
          <form onSubmit={handleSubmit(searching)} className="flex w-full max-w-6xl items-center bg-white p-3 shadow-lg">

            {/* Cuisine */}
            <div className="p-3 focus-within:border focus-within:border-black flex flex-1 items-center border-r border-gray-200 px-4">
              <span className="mr-3 text-gray-400">⌕</span>
              <input
              {...register("cuisine")}
                type="text"
                placeholder="Search cuisines, restaurants..."
                className="w-full outline-none text-gray-700 placeholder:text-gray-400"
              />
            </div>

            {/* Location */}
            <div className="p-3 focus-within:border focus-within:border-black flex flex-1 items-center border-r border-gray-200 px-4">
              <span className="mr-3 text-gray-400">⌖</span>
              <input
              {...register("location")}
                type="text"
                placeholder="Location (e.g. McDonald's)"
                className="w-full outline-none text-gray-700 placeholder:text-gray-400"
              />
            </div>

            {/* Date */}
            <div className="p-3 focus-within:border focus-within:border-black flex flex-1 items-center border-r border-gray-200 px-4">
              <span className="mr-3 text-gray-400">▣</span>
              <input
              {...register("date")}
                min={new Date().toISOString().split('T')[0]}
                type="date"
                className="w-full outline-none text-gray-700"
              />
            </div>

            {/* Guests */}
            <div className="p-3 focus-within:border focus-within:border-black flex w-48 items-center border-r border-gray-200 px-4">
              <span className="mr-3 text-gray-400">♙</span>

              <select  {...register("guests")} className="w-full bg-transparent outline-none text-gray-700">
                <option>2 Guests</option>
                <option>3 Guests</option>
                <option>4 Guests</option>
                <option>5 Guests</option>
                <option>6 Guests</option>
              </select>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="hover:bg-gray-800 hover:cursor-grab ml-3 bg-black px-8 py-4 text-sm font-semibold tracking-wide text-white"
            >
              FIND A TABLE
            </button>

          </form>

        </div>

      </div>
      <section className="border-t border-[#e5e5e5] px-6 py-12 sm:px-10 lg:px-16 xl:px-24">

        <div className="mx-auto max-w-[1400px]">

          {/* Heading */}
          <div className="mb-14 flex items-end justify-between">
            <div>
              <p className="mb-3 text-[11px] font-medium tracking-[0.25em] text-[#77734d]">
                CURATED SELECTION
              </p>

              <h2 className="font-serif text-4xl font-medium tracking-[-0.02em] sm:text-5xl">
                Browse by Cuisine
              </h2>
            </div>

            <NavLink to='/restaurants' className="hidden items-center gap-2 text-[12px] font-medium tracking-wide text-[#77734d] sm:flex">
              EXPLORE ALL
              <span className="text-lg">→</span>
            </NavLink>
          </div>

          {/* Cuisine Cards */}
          <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-6">
            {cuisines.map((cuisine) => (
              <button
                key={cuisine.name}
                className="group flex h-[150px] flex-col items-center justify-center bg-white shadow-[0_0_15px_rgba(0,0,0,0.025)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_25px_rgba(0,0,0,0.08)]"
              >
                <div className="mb-5 text-[#777] transition-colors duration-300 group-hover:text-[#77734d]">
                  {cuisine.icon}
                </div>

                <span className="text-[11px] font-medium tracking-[0.12em]">
                  {cuisine.name}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>
      <section className="mt-12 bg-[#f6f6f6] px-6 py-24 sm:px-10 lg:px-16 xl:px-24">

        <div className="mx-auto max-w-[1400px]">

          {/* Heading */}
          <div className="mb-14 flex items-end justify-between">
            <div>
              <p className="mb-3 text-[11px] font-medium tracking-[0.25em] text-[#77734d]">
                CURRENTLY TRENDING
              </p>

              <h2 className="font-serif text-4xl font-medium tracking-[-0.02em] sm:text-5xl">
                Trending Fine Dining
              </h2>
            </div>

            <NavLink to='/restaurants' className="hidden items-center gap-2 text-[12px] font-medium tracking-wide text-[#77734d] sm:flex">
              VIEW ALL
              <span className="text-lg">→</span>
            </NavLink>
          </div>

          {/* Restaurant Cards */}
          <div className="grid gap-6 md:grid-cols-3">
            {restaurants.map((restaurant) => (
              <div
                key={restaurant.name}
                className="group relative aspect-[1.55/1] overflow-hidden rounded-[5px] bg-gray-200"
              >
                <img
                  src={restaurant.image}
                  alt={restaurant.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-70" />

                {/* Card Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <p className="text-[10px] tracking-[0.2em] opacity-80">
                    FINE DINING
                  </p>

                  <h3 className="mt-1 font-serif text-xl">
                    {restaurant.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      <section className="w-full bg-white px-6 py-20 sm:px-10 lg:px-16 xl:px-24">
        <div className="mx-auto flex max-w-[1500px] flex-col items-center gap-12 lg:flex-row lg:gap-20">

          {/* Image */}
          <div className="w-full lg:w-[56%]">
            <div className="aspect-[1.5/1] w-full overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1400&q=85"
                alt="Elegant fine dining table"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="w-full max-w-[570px] lg:w-[44%]">

            {/* Small Heading */}
            <p className="mb-5 text-[11px] font-medium tracking-[0.25em] text-[#77734d]">
              PREMIUM CLUB MEMBERSHIP
            </p>

            {/* Main Heading */}
            <h2 className="font-serif text-4xl leading-[1.08] tracking-[-0.025em] text-[#171717] sm:text-5xl">
              Access the Exquisite Chef's Table
            </h2>

            {/* Description */}
            <p className="mt-8 max-w-[540px] text-[15px] leading-7 text-[#777]">
              Join GourmetReserve and receive priority access to seasonal chef
              collaborations, private dining club events, and table guarantees
              at high-demand tables.
            </p>

            {/* Benefits */}
            <div className="mt-10 space-y-7">
              {benefits.map((benefit) => (
                <div
                  key={benefit.title}
                  className="flex items-start gap-5"
                >
                  {/* Icon */}
                  <div className="mt-0.5 shrink-0 text-[#77734d]">
                    {benefit.icon}
                  </div>

                  {/* Text */}
                  <div>
                    <h3 className="text-[15px] font-medium text-[#171717]">
                      {benefit.title}
                    </h3>

                    <p className="mt-2 text-[13px] leading-6 text-[#777]">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default Home
