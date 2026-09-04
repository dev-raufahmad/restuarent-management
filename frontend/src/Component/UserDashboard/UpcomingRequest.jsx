import React, { useEffect, useState } from "react";
import {
    CalendarDays,
    MapPin,
    Users,
    Clock
} from "lucide-react";
import { useInView } from "react-intersection-observer";

const UpcomingRequest = () => {

    const infoCookies = { id: 1 };

    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [bookings, setBookings] = useState([]);
    const [allLoaded, setAllLoaded] = useState(false);

    const { ref, inView } = useInView({
        threshold: 0
    });

    useEffect(() => {
        const fetchBookings = async () => {
            try {
                setLoading(true);
                console.log("The fetch booking is being called");

                const response = await fetch(
                    `http://localhost:3000/restuarants/upcoming-bookings/${infoCookies.id}?page=${page}`,
                    {
                        credentials: "include",
                        method: "GET"
                    }
                );
                console.log("The responce in the upcoming request is : ", response);

                if (response.status == 200) {
                    const data = await response.json();
                    const newBookings = data.bookings || [];
                    console.log("The data is : ", data);

                    setBookings((prev) => [...prev, ...newBookings]);

                    if (newBookings.length === 0) {
                        setAllLoaded(true);
                    } else {
                        setPage((prev) => prev + 1);
                    }
                }
            } catch (error) {
                console.error("Error fetching upcoming requests:", error);
            } finally {
                setLoading(false);
            }
        };

        if(inView || (!allLoaded && page ==1 )){
            fetchBookings();
        }
            
        
    }, [inView]);


    return (
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
                    Upcoming Bookings
                </h2>
                <p className="
            mt-2
            text-sm
            text-gray-500
        ">
                    Reservations waiting for restaurant confirmation.
                </p>
            </div>
            {bookings.length === 0 && !loading && (
                <div className="
            w-full
            min-h-[250px]
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

                    <CalendarDays
                        size={50}
                        strokeWidth={1.4}
                        className="text-gray-300 mb-5"
                    />

                    <p className="
                text-gray-500
                italic
                text-base
                md:text-lg
            ">
                        No pending booking requests.
                    </p>
                </div>
            )}
            {bookings.length > 0 && (

                <div className="
            w-full
            space-y-4
        ">

                    {bookings.map((booking, index) => (

                        <div className="flex flex-col space-y-4 overflow-y-scroll " >
                            <div
                            key={booking.id}
                            ref={index === bookings.length - 1 ? ref : undefined}
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
                                    bg-yellow-50
                                    text-yellow-700
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

                                <div className="md:text-right">

                                    <p className="
                                text-[10px]
                                text-gray-400
                                tracking-[0.2em]
                                mb-1
                            ">
                                        REQUEST ID
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
                        </div>

                    ))}

                </div>

            )}

        </section>
    )
}

export default UpcomingRequest;