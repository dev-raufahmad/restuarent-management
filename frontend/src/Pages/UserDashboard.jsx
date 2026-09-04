import React, { useEffect, useState } from "react";
import Header from "../Component/Header";
import Footer from "../Component/Footer";
import RestuentBox from "../Component/Search/RestuentBox";

import {
    CalendarDays,
    MapPin,
    Users,
    Clock
} from "lucide-react";
import RequestedBooking from "../Component/UserDashboard/RequestedBooking";
import UpcomingRequest from "../Component/UserDashboard/UpcomingRequest";
import DiningHistory from "../Component/UserDashboard/DiningHistory";


function UserDashboard() {

    // ================= UPCOMING BOOKINGS =================
    

    


    // ================= DINING HISTORY =================

   


    // ================= RECOMMENDED RESTAURANTS =================

    const [recommended, setRecommended] = useState([]);

    useEffect(() => {
        const fetchRecommended = async () => {
            try {
                const response = await fetch(
                    "http://localhost:3000/restuarants/recommended",
                    { credentials: "include" }
                );

                if (response.ok) {
                    const data = await response.json();
                    setRecommended(data.restaurants || []);
                }
            } catch (error) {
                console.error("Error fetching recommended restaurants:", error);
            }
        };

        fetchRecommended();
    }, []);


    // ================= USER =================

    const myCookie = {
        name: "Rauf Ahmad Khan",
        gmail: "devraufahmadniazi@gmail.com",
        role: ""
    };


    return (
        <div className="min-h-dvh w-full bg-gray-50 flex flex-col">
            <Header />
            <div className="
                w-full
                px-8
                md:px-12
                py-10
                md:py-14
                bg-white
            ">

                <h1 className="
                    text-3xl
                    md:text-4xl
                    font-serif
                    font-semibold
                    text-gray-900
                ">
                    Welcome Back, {myCookie.name.split(" ")[0]}
                </h1>

                <p className="
                    mt-2
                    text-gray-500
                    text-sm
                    md:text-base
                ">
                    Manage your upcoming dining experiences.
                </p>

            </div>
            <RequestedBooking />
            <UpcomingRequest />
            <DiningHistory />


            {/* ========================================================= */}
            {/* ================= RECOMMENDED =========================== */}
            {/* ========================================================= */}

            <section className="
                w-full
                px-6
                md:px-10
                py-10
            ">

                <div className="mb-7">

                    <h2 className="
                        text-3xl
                        md:text-4xl
                        font-serif
                        font-semibold
                        text-gray-900
                    ">
                        Recommended for you
                    </h2>

                    <p className="
                        mt-2
                        text-sm
                        text-gray-500
                    ">
                        Discover restaurants selected for your taste.
                    </p>
                </div>
                <div className="
                    flex
                    flex-wrap
                    justify-center
                    gap-6
                ">

                    {recommended.map((restaurant) => (

                        <RestuentBox
                            prop={restaurant}
                            key={restaurant.id}
                        />

                    ))}

                </div>
            </section>
            <Footer />

        </div>
    );
}

export default UserDashboard;