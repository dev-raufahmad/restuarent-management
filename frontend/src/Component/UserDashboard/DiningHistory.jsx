import React, { useEffect, useState } from 'react'
import { useInView } from "react-intersection-observer";

const DiningHistory = () => {
    const infoCookies = { id: 1 };
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [bookings, setBookings] = useState([]);
    const [allLoaded, setAllLoaded] = useState(false);
    const { ref, inView } = useInView({ threshold: 0 });

    useEffect(() => {
        const fetchHistory = async () => {
            try {
                setLoading(true);
                const response = await fetch(
                    `http://localhost:3000/restuarants/dining-history/${infoCookies.id}?page=${page}`,
                    { credentials: "include", method: "GET" }
                );

                if (response.ok) {
                    const data = await response.json();
                    const newBookings = data.bookings || [];
                    setBookings((previous) => [...previous, ...newBookings]);

                    if (newBookings.length === 0) {
                        setAllLoaded(true);
                    } else {
                        setPage((previous) => previous + 1);
                    }
                }
            } catch (error) {
                console.error("Error fetching dining history:", error);
            } finally {
                setLoading(false);
            }
        };

        if (!loading && !allLoaded && (inView || page === 1)) {
            fetchHistory();
        }
    }, [allLoaded, inView, loading, page]);

  return (
    <section className="
                w-full
                px-6
                md:px-10
                py-10
            ">
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


                {bookings.length > 0 ? (
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
                            REVIEW
                        </div>

                    </div>


                    {/* Table Rows */}

                    {bookings.map((booking, index) => (

                        <div
                            key={booking.id}
                            ref={index === bookings.length - 1 ? ref : undefined}
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

                                {booking.review == null ? (
                                    <button
                                        type="button"
                                        className="
                                            rounded-md
                                            bg-amber-600
                                            px-4
                                            py-2
                                            text-xs
                                            font-semibold
                                            tracking-wide
                                            text-white
                                            transition-colors
                                            hover:bg-amber-700
                                        "
                                    >
                                        Review
                                    </button>
                                ) : (
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
                                    Reviewed
                                </span>
                                )}

                            </div>

                        </div>

                    ))}

                </div>
                ) : !loading && (
                    <div className="
                        flex
                        min-h-62.5
                        w-full
                        flex-col
                        items-center
                        justify-center
                        rounded-2xl
                        bg-white
                        px-5
                        text-center
                        shadow-sm
                    ">
                        <p className="text-base italic text-gray-500 md:text-lg">
                            You don&apos;t have any dining history yet.
                        </p>
                    </div>
                )}

            </section>
  )
}

export default DiningHistory