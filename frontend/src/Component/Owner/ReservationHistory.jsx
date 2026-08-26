import {
  CalendarDays,
  Clock,
  User,
  Users,
  Phone,
  Mail,
  Star,
} from "lucide-react";

const ReservationHistory = (props) => {

  const reservations = props.reservations || [
    {
      customerName: "Ali Ahmad",
      date: "August 20, 2026",
      time: "7:30 PM",
      guests: 4,
      phone: "+92 300 1234567",
      email: "ali@example.com",
      status: "Completed",
      review: "Amazing food and excellent service. We really enjoyed our dinner.",
      rating: 5,
    },
    {
      customerName: "Sarah Khan",
      date: "August 18, 2026",
      time: "8:00 PM",
      guests: 2,
      phone: "+92 301 7654321",
      email: "sarah@example.com",
      status: "Completed",
      review: "The atmosphere was great and the food was delicious.",
      rating: 4,
    },
  ];

  return (
    <div className="w-full rounded-xl bg-white p-8 shadow-sm">

      {/* Header */}
      <div className="mb-7">
        <h1 className="font-serif text-3xl font-medium text-gray-900">
          Reservation History
        </h1>

        <p className="mt-2 text-sm text-gray-500">
          View your restaurant's previous reservations and customer reviews.
        </p>
      </div>

      {/* Reservations */}
      <div className="flex flex-col gap-5 flex-wrap overflow-scroll scrollbar-none">

        {reservations.map((reservation, index) => (
          <div
            key={index}
            className="rounded-xl border border-gray-200 p-6"
          >

            {/* Customer + Status */}
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">

              <div className="flex items-center gap-4">

                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100">
                  <User
                    size={22}
                    strokeWidth={1.7}
                    className="text-gray-500"
                  />
                </div>

                <div>
                  <h2 className="text-lg font-medium text-gray-900">
                    {reservation.customerName}
                  </h2>

                  <p className="text-sm text-gray-500">
                    {reservation.status}
                  </p>
                </div>

              </div>

              <span className="w-fit rounded-md bg-gray-100 px-3 py-1 text-xs uppercase tracking-wider text-gray-600">
                {reservation.status}
              </span>

            </div>

            {/* Reservation Information */}
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">

              {/* Date */}
              <div className="flex items-center gap-3">
                <CalendarDays
                  size={19}
                  strokeWidth={1.7}
                  className="text-gray-500"
                />

                <div>
                  <p className="text-xs text-gray-400">
                    DATE
                  </p>

                  <p className="mt-1 text-sm text-gray-800">
                    {reservation.date}
                  </p>
                </div>
              </div>

              {/* Time */}
              <div className="flex items-center gap-3">
                <Clock
                  size={19}
                  strokeWidth={1.7}
                  className="text-gray-500"
                />

                <div>
                  <p className="text-xs text-gray-400">
                    TIME
                  </p>

                  <p className="mt-1 text-sm text-gray-800">
                    {reservation.time}
                  </p>
                </div>
              </div>

              {/* Guests */}
              <div className="flex items-center gap-3">
                <Users
                  size={19}
                  strokeWidth={1.7}
                  className="text-gray-500"
                />

                <div>
                  <p className="text-xs text-gray-400">
                    PARTY SIZE
                  </p>

                  <p className="mt-1 text-sm text-gray-800">
                    {reservation.guests} Guests
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3">
                <Phone
                  size={19}
                  strokeWidth={1.7}
                  className="text-gray-500"
                />

                <div>
                  <p className="text-xs text-gray-400">
                    PHONE
                  </p>

                  <p className="mt-1 text-sm text-gray-800">
                    {reservation.phone}
                  </p>
                </div>
              </div>

            </div>

            {/* Email */}
            <div className="mt-5 flex items-center gap-3">
              <Mail
                size={19}
                strokeWidth={1.7}
                className="text-gray-500"
              />

              <div>
                <p className="text-xs text-gray-400">
                  EMAIL
                </p>

                <p className="mt-1 text-sm text-gray-800">
                  {reservation.email}
                </p>
              </div>
            </div>

            {/* Review */}
            <div className="mt-6 border-t border-gray-100 pt-5">

              <div className="flex items-center justify-between">

                <h3 className="text-sm font-medium uppercase tracking-wider text-gray-500">
                  Customer Review
                </h3>

                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={17}
                      fill={
                        star <= reservation.rating
                          ? "currentColor"
                          : "none"
                      }
                      className={
                        star <= reservation.rating
                          ? "text-yellow-500"
                          : "text-gray-300"
                      }
                    />
                  ))}
                </div>

              </div>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                {reservation.review || "No review was provided."}
              </p>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
};

export default ReservationHistory;