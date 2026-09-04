import React, { useEffect, useState } from "react";
import {
    CalendarDays,
    MapPin,
    Users,
    Clock
} from "lucide-react";
import { useInView } from "react-intersection-observer";

const RequestedBooking = () => {

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

                console.log("Fetching page:", page);

                const response = await fetch(
                    `http://localhost:3000/restuarants/bookings/${infoCookies.id}?page=${page}`,
                    {
                        credentials: "include",
                        method: "GET"
                    }
                );

                console.log("The response is:", response);

                if (response.status === 200) {

                    const data = await response.json();

                    console.log("The data is:", data);

                    setBookings((prev) => [
                        ...prev,
                        ...data.bookings
                    ]);

                    if (data.bookings.length === 0) {

                        setAllLoaded(true);

                    } else {

                        setPage((prev) => prev + 1);

                    }
                }

            } catch (err) {

                console.log(
                    "There is error in calling upcoming bookings:",
                    err
                );

            } finally {

                setLoading(false);

            }
        };


        if (inView && !loading && !allLoaded) {
            fetchBookings();
        }

    }, [inView]);

    console.log("THe data is : " , bookings);
    

    return (

        <section className="
            w-full
            px-6
            md:px-10
            py-10
        ">

            {/* HEADING */}

            <div className="mb-7">

                <h2 className="
                    text-3xl
                    md:text-4xl
                    font-serif
                    font-semibold
                    text-gray-900
                ">
                    Requested Bookings
                </h2>

                <p className="
                    mt-2
                    text-sm
                    text-gray-500
                ">
                    Your upcoming dining experiences.
                </p>

            </div>


            {/* BOOKINGS */}

            <div className="
                flex
                flex-col
                space-y-4
                overflow-y-auto
                max-h-[600px]
            ">

                {bookings.map((booking) => (

                    <div
                        key={booking.id}
                        className="
                            w-full
                            shrink-0
                            bg-white
                            rounded-2xl
                            shadow-sm
                            hover:shadow-md
                            transition-shadow
                            duration-300
                            overflow-hidden
                        "
                    >

                        {/* TOP */}

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

                            {/* RESTAURANT */}

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
                                        {booking.name}
                                    </h3>

                                </div>


                                {/* LOCATION */}

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
                                        {booking.address}
                                    </span>

                                </div>

                            </div>


                            {/* BOOKING ID */}

                            <div className="md:text-right">

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


                        {/* INFORMATION */}

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
                                        {booking.number_of_guest} Guests
                                    </p>

                                </div>

                            </div>

                        </div>

                    </div>

                ))}


                {/* INFINITE SCROLL TRIGGER */}

                {!allLoaded && (

                    <div
                        ref={ref}
                        className="h-10 flex justify-center items-center"
                    >
                        {loading && (
                            <p className="text-sm text-gray-400">
                                Loading...
                            </p>
                        )}
                    </div>

                )}

            </div>


            {/* EMPTY */}

            {!loading && bookings.length === 0 && allLoaded && (

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

                    <CalendarDays
                        size={50}
                        strokeWidth={1.4}
                        className="mb-5 text-gray-300"
                    />

                    <p className="
                        text-gray-500
                        italic
                        text-base
                        md:text-lg
                        mb-6
                    ">
                        No upcoming reservations scheduled.
                    </p>

                    <button className="
                        bg-black
                        text-white
                        px-9
                        py-4
                        text-sm
                        font-semibold
                        tracking-widest
                        rounded-sm
                        hover:bg-gray-800
                        transition-all
                        duration-200
                    ">
                        BOOK A TABLE
                    </button>

                </div>

            )}


            {/* ALL LOADED */}

            {allLoaded && bookings.length > 0 && (

                <p className="
                    bg-gray-800
                    text-white
                    text-center
                    p-3
                    mt-4
                    rounded-md
                ">
                    All the upcoming bookings have been loaded
                </p>

            )}

        </section>
    );
};

export default RequestedBooking;