import React, { useState } from 'react'
import Header from '../Component/Header'
import Footer from '../Component/Footer'
import {
  User,
  History,
  ClipboardList,
} from "lucide-react";
import OwnerProfile from '../Component/Owner/OwnerProfile,';
import ReservationHistory from '../Component/Owner/ReservationHistory';
import RequestReservations from '../Component/Owner/RequestReservations';

const OwnerDashboard = () => {
    const [ page , setPage ] = useState("profile")
    const data = {
        name : "Lorrance",
        staus : "Approved", 
    }

  return (
    <div>
      <Header />
      {/* Herer is the main div */}
      <div className='flex flex-col' >
        <div className='flex flex-row justify-between items-center p-5' >
        <div className='flex flex-col' >
            <h1>Restaurant Portal</h1>
            <p>Review capacity limits and process live reservations.</p>
        </div>
        <button className='bg-red-400 text-white text-center content-center w-20 h-10 rounded-2xl' >Sign out</button>
        </div>
        <div className='flex flex-row' >
            <div className="w-[405px] rounded-xl bg-white p-9 shadow-md">
    
    {/* Restaurant Header */}
    <div className="flex items-center gap-5">
      <div className="flex h-[72px] w-[72px] shrink-0 items-center justify-center rounded-full bg-gray-200 text-2xl">
        {data.name.charAt(0)}
      </div>

      <div>
        <h2 className="font-serif text-[25px] text-black">
          {data.name}
        </h2>

        <span className="mt-2 inline-block rounded-md bg-[#fff5e6] px-3 py-1 text-xs tracking-[1.5px] text-[#9a5b00]">
          {data.staus}
        </span>
      </div>
    </div>

    {/* Divider */}
    <div className="my-8 border-t border-gray-100"></div>

    {/* Options */}
    <div className="flex flex-col gap-2">

  {/* View Profile */}
  <div onClick={() => setPage("profile")} className="flex h-[60px] cursor-pointer items-center gap-5 rounded-md px-6 text-gray-500 transition hover:bg-gray-50 hover:text-black">
    <User size={21} strokeWidth={1.7} />

    <span className="text-[16px] tracking-wide">
      VIEW PROFILE
    </span>
  </div>

  {/* Reservation History */}
  <div onClick={() => setPage("history")} className="flex h-[60px] cursor-pointer items-center gap-5 rounded-md px-6 text-gray-500 transition hover:bg-gray-50 hover:text-black">
    <History size={21} strokeWidth={1.7} />

    <span className="text-[16px] tracking-wide">
      RESERVATION HISTORY
    </span>
  </div>

  {/* Reservation Requests */}
  <div onClick={() => setPage("request")} className="flex h-[60px] cursor-pointer items-center gap-5 rounded-md px-6 text-gray-500 transition hover:bg-gray-50 hover:text-black">
    <ClipboardList size={21} strokeWidth={1.7} />

    <span className="text-[16px] tracking-wide">
      RESERVATION REQUESTS
    </span>
  </div>

</div>
  </div>
        {
            page == "profile" &&  <OwnerProfile />
        }
        {
            page == "history" && <ReservationHistory />
        }
        {
            page == "request" && <RequestReservations />
        }
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default OwnerDashboard
