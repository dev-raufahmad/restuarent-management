import React from "react";
import Header from "../Component/Header";
import Footer from "../Component/Footer";
import RestuentBox from "../Component/Search/RestuentBox";

import {
    CalendarDays,
    MapPin,
    Users,
    Clock
} from "lucide-react";


function UserDashboard() {

    // ================= UPCOMING BOOKINGS =================

    const upcomingBookings = [
        {
            id: "QD-10245",
            restaurant: "L'Essence",
            date: "June 25, 2026",
            time: "10:00 PM",
            guests: 2,
            status: "CONFIRMED",
            location: "Downtown, New York"
        },
        {
            id: "QD-10251",
            restaurant: "Terraza Cielo",
            date: "June 28, 2026",
            time: "8:00 PM",
            guests: 4,
            status: "CONFIRMED",
            location: "Manhattan, New York"
        }
    ];


    // ================= DINING HISTORY =================

    const bookings = [
        {
            id: 1,
            restaurant: "L'Essence",
            date: "6/25/2026",
            time: "22:00 PM",
            party: "2 Guests",
            status: "CONFIRMED"
        },
        {
            id: 2,
            restaurant: "Terraza Cielo",
            date: "6/19/2026",
            time: "20:00 PM",
            party: "2 Guests",
            status: "CONFIRMED"
        },
        {
            id: 3,
            restaurant: "L'Artiste",
            date: "6/19/2026",
            time: "19:00 PM",
            party: "2 Guests",
            status: "CONFIRMED"
        }
    ];


    // ================= RECOMMENDED RESTAURANTS =================

    const good = [
        {
            src: "../../public/restaurant_5.png",
            cuisine: "French",
            name: "LEssence",
            location: "USA",
            price: "1000$",
            rating: "4.4"
        },
        {
            src: "../../public/restaurant_5.png",
            cuisine: "French",
            name: "LEssence",
            location: "USA",
            price: "1000$",
            rating: "4.4"
        },
        {
            src: "../../public/restaurant_5.png",
            cuisine: "French",
            name: "LEssence",
            location: "USA",
            price: "1000$",
            rating: "4.4"
        }
    ];


    // ================= USER =================

    const myCookie = {
        name: "Rauf Ahmad Khan",
        gmail: "devraufahmadniazi@gmail.com",
        role: ""
    };


    return (

        <div className="min-h-dvh w-full bg-gray-50 flex flex-col">

            {/* ================= HEADER ================= */}

            <Header />


            {/* ================= WELCOME SECTION ================= */}

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


            {/* ========================================================= */}
            {/* ================= UPCOMING BOOKINGS ===================== */}
            {/* ========================================================= */}

            <section className="
                w-full
                px-6
                md:px-10
                py-10
            ">

                {/* Heading */}

                <div className="mb-7">

                    <h2 className="
                        text-3xl
                        md:text-4xl
                        font-serif
                        font-semibold
                        text-gray-900
                    ">
                        Upcoming Bookings
                    </h2>

                    <p className="
                        mt-2
                        text-sm
                        text-gray-500
                    ">
                        Your upcoming dining experiences.
                    </p>

                </div>


                {/* ================= EMPTY STATE ================= */}

                {upcomingBookings.length === 0 && (

                    <div className="
                        w-full
                        min-h-[310px]
                        bg-white
                        rounded-2xl
                        shadow-sm
                        flex
                        flex-col
                        justify-center
                        items-center
                        text-center
                        px-5
                    ">

                        {/* Calendar Icon */}

                        <div className="
                            mb-5
                            text-gray-300
                        ">

                            <CalendarDays
                                size={50}
                                strokeWidth={1.4}
                            />

                        </div>


                        {/* Message */}

                        <p className="
                            text-gray-500
                            italic
                            text-base
                            md:text-lg
                            mb-6
                        ">
                            No upcoming reservations scheduled.
                        </p>


                        {/* Book Button */}

                        <button
                            className="
                                bg-black
                                text-white
                                px-9
                                py-4
                                text-sm
                                font-semibold
                                tracking-widest
                                rounded-sm
                                hover:bg-gray-800
                                hover:scale-[1.02]
                                active:scale-[0.98]
                                transition-all
                                duration-200
                            "
                        >
                            BOOK A TABLE
                        </button>

                    </div>

                )}


                {/* ================= BOOKINGS ================= */}

                {upcomingBookings.length > 0 && (

                    <div className="
                        w-full
                        space-y-4
                    ">

                        {upcomingBookings.map((booking) => (

                            <div
                                key={booking.id}
                                className="
                                    w-full
                                    bg-white
                                    rounded-2xl
                                    shadow-sm
                                    hover:shadow-md
                                    transition-shadow
                                    duration-300
                                    overflow-hidden
                                "
                            >

                                {/* ================= TOP ================= */}

                                <div className="
                                    px-6
                                    md:px-8
                                    py-6
                                    flex
                                    flex-col
                                    md:flex-row
                                    md:items-center
                                    md:justify-between
                                    gap-5
                                ">

                                    {/* Restaurant */}

                                    <div>

                                        <div className="
                                            flex
                                            flex-wrap
                                            items-center
                                            gap-3
                                        ">

                                            <h3 className="
                                                text-xl
                                                md:text-2xl
                                                font-serif
                                                font-semibold
                                                text-gray-900
                                            ">
                                                {booking.restaurant}
                                            </h3>


                                            {/* Status */}

                                            <span className="
                                                px-3
                                                py-1
                                                rounded-full
                                                bg-amber-50
                                                text-amber-700
                                                text-[11px]
                                                font-semibold
                                                tracking-wider
                                            ">
                                                {booking.status}
                                            </span>

                                        </div>


                                        {/* Location */}

                                        <div className="
                                            flex
                                            items-center
                                            gap-2
                                            mt-2
                                            text-gray-500
                                            text-sm
                                        ">

                                            <MapPin
                                                size={15}
                                                strokeWidth={1.5}
                                            />

                                            <span>
                                                {booking.location}
                                            </span>

                                        </div>

                                    </div>


                                    {/* Booking ID */}

                                    <div className="
                                        md:text-right
                                    ">

                                        <p className="
                                            text-[10px]
                                            text-gray-400
                                            tracking-[0.2em]
                                            mb-1
                                        ">
                                            BOOKING ID
                                        </p>

                                        <p className="
                                            text-sm
                                            font-medium
                                            text-gray-700
                                        ">
                                            {booking.id}
                                        </p>

                                    </div>

                                </div>


                                {/* ================= INFORMATION ================= */}

                                <div className="
                                    bg-gray-50/80
                                    px-6
                                    md:px-8
                                    py-5
                                    flex
                                    flex-col
                                    sm:flex-row
                                    sm:items-center
                                    gap-6
                                    sm:gap-12
                                ">

                                    {/* DATE */}

                                    <div className="
                                        flex
                                        items-center
                                        gap-3
                                    ">

                                        <CalendarDays
                                            size={19}
                                            className="text-gray-400"
                                            strokeWidth={1.5}
                                        />

                                        <div>

                                            <p className="
                                                text-[10px]
                                                text-gray-400
                                                uppercase
                                                tracking-widest
                                            ">
                                                Date
                                            </p>

                                            <p className="
                                                text-sm
                                                font-medium
                                                text-gray-800
                                                mt-0.5
                                            ">
                                                {booking.date}
                                            </p>

                                        </div>

                                    </div>


                                    {/* TIME */}

                                    <div className="
                                        flex
                                        items-center
                                        gap-3
                                    ">

                                        <Clock
                                            size={19}
                                            className="text-gray-400"
                                            strokeWidth={1.5}
                                        />

                                        <div>

                                            <p className="
                                                text-[10px]
                                                text-gray-400
                                                uppercase
                                                tracking-widest
                                            ">
                                                Time
                                            </p>

                                            <p className="
                                                text-sm
                                                font-medium
                                                text-gray-800
                                                mt-0.5
                                            ">
                                                {booking.time}
                                            </p>

                                        </div>

                                    </div>


                                    {/* GUESTS */}

                                    <div className="
                                        flex
                                        items-center
                                        gap-3
                                    ">

                                        <Users
                                            size={19}
                                            className="text-gray-400"
                                            strokeWidth={1.5}
                                        />

                                        <div>

                                            <p className="
                                                text-[10px]
                                                text-gray-400
                                                uppercase
                                                tracking-widest
                                            ">
                                                Guests
                                            </p>

                                            <p className="
                                                text-sm
                                                font-medium
                                                text-gray-800
                                                mt-0.5
                                            ">
                                                {booking.guests} Guests
                                            </p>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        ))}

                    </div>

                )}

            </section>


            {/* ========================================================= */}
            {/* ===================== DINING HISTORY ==================== */}
            {/* ========================================================= */}

            <section className="
                w-full
                px-6
                md:px-10
                py-10
            ">

                {/* Heading */}

                <h2 className="
                    text-3xl
                    md:text-4xl
                    font-serif
                    font-semibold
                    text-gray-900
                    mb-7
                ">
                    Dining History
                </h2>


                {/* Table */}

                <div className="
                    w-full
                    overflow-hidden
                    rounded-2xl
                    bg-white
                    shadow-sm
                ">

                    {/* Table Header */}

                    <div className="
                        grid
                        grid-cols-4
                        bg-gray-100
                    ">

                        <div className="
                            px-6
                            py-5
                            text-sm
                            font-semibold
                            tracking-wide
                            text-gray-500
                        ">
                            RESTAURANT
                        </div>


                        <div className="
                            px-6
                            py-5
                            text-sm
                            font-semibold
                            tracking-wide
                            text-gray-500
                        ">
                            DATE & TIME
                        </div>


                        <div className="
                            px-6
                            py-5
                            text-sm
                            font-semibold
                            tracking-wide
                            text-gray-500
                        ">
                            PARTY
                        </div>


                        <div className="
                            px-6
                            py-5
                            text-sm
                            font-semibold
                            tracking-wide
                            text-gray-500
                        ">
                            STATUS
                        </div>

                    </div>


                    {/* Table Rows */}

                    {bookings.map((booking) => (

                        <div
                            key={booking.id}
                            className="
                                grid
                                grid-cols-4
                                bg-white
                                hover:bg-gray-50
                                transition-colors
                                duration-200
                            "
                        >

                            {/* Restaurant */}

                            <div className="
                                px-6
                                py-6
                                flex
                                items-center
                            ">

                                <span className="
                                    font-medium
                                    text-gray-900
                                ">
                                    {booking.restaurant}
                                </span>

                            </div>


                            {/* Date & Time */}

                            <div className="
                                px-6
                                py-6
                                flex
                                items-center
                            ">

                                <span className="
                                    text-gray-800
                                ">
                                    {booking.date} at {booking.time}
                                </span>

                            </div>


                            {/* Party */}

                            <div className="
                                px-6
                                py-6
                                flex
                                items-center
                            ">

                                <span className="
                                    text-gray-800
                                ">
                                    {booking.party}
                                </span>

                            </div>


                            {/* Status */}

                            <div className="
                                px-6
                                py-6
                                flex
                                items-center
                            ">

                                <span className="
                                    px-3
                                    py-1
                                    rounded-full
                                    bg-amber-50
                                    text-amber-800
                                    text-xs
                                    font-semibold
                                    tracking-wide
                                ">
                                    {booking.status}
                                </span>

                            </div>

                        </div>

                    ))}

                </div>

            </section>


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


                {/* Restaurant Cards */}

                <div className="
                    flex
                    flex-wrap
                    justify-center
                    gap-6
                ">

                    {good.map((restaurant, index) => (

                        <RestuentBox
                            prop={restaurant}
                            key={index}
                        />

                    ))}

                </div>

            </section>


            {/* ================= FOOTER ================= */}

            <Footer />

        </div>
    );
}

export default UserDashboard;