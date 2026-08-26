import {
  CalendarDays,
  Clock,
  User,
  Users,
  Phone,
  Mail,
  MessageSquare,
} from "lucide-react";

const RequestReservations = (props) => {

  const requests = props.requests || [
    {
      customerName: "Ali Ahmad",
      reservationDate: "August 28, 2026",
      reservationTime: "7:30 PM",
      guests: 4,
      phone: "+92 300 1234567",
      email: "ali@example.com",
      requestedAt: "August 25, 2026 · 2:15 PM",
      specialRequest: "Window table if available.",
    },
    {
      customerName: "Sarah Khan",
      reservationDate: "August 29, 2026",
      reservationTime: "8:00 PM",
      guests: 2,
      phone: "+92 301 7654321",
      email: "sarah@example.com",
      requestedAt: "August 25, 2026 · 1:40 PM",
      specialRequest: "This is a birthday dinner.",
    },
  ];

  return (
    <div className="w-full rounded-xl bg-white p-8 shadow-sm">

      {/* Header */}
      <div className="mb-7">
        <h1 className="font-serif text-3xl font-medium text-gray-900">
          Reservation Requests
        </h1>

        <p className="mt-2 text-sm text-gray-500">
          Review and manage incoming reservation requests.
        </p>
      </div>

      {/* Requests */}
      <div className="flex flex-col gap-5">

        {requests.map((request, index) => (
          <div
            key={index}
            className="rounded-xl border border-gray-200 p-6"
          >

            {/* Customer */}
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
                    {request.customerName}
                  </h2>

                  <p className="mt-1 text-xs text-gray-400">
                    Requested on {request.requestedAt}
                  </p>
                </div>

              </div>

              <span className="w-fit rounded-md bg-amber-50 px-3 py-1 text-xs uppercase tracking-wider text-amber-700">
                Pending
              </span>

            </div>

            {/* Reservation Information */}
            <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">

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
                    {request.reservationDate}
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
                    {request.reservationTime}
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
                    {request.guests} Guests
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
                    {request.phone}
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
                  {request.email}
                </p>
              </div>
            </div>

            {/* Special Request */}
            <div className="mt-5 flex items-start gap-3">
              <MessageSquare
                size={19}
                strokeWidth={1.7}
                className="mt-1 text-gray-500"
              />

              <div>
                <p className="text-xs text-gray-400">
                  SPECIAL REQUEST
                </p>

                <p className="mt-1 text-sm leading-6 text-gray-600">
                  {request.specialRequest || "No special request."}
                </p>
              </div>
            </div>

            {/* Actions */}
            <div className="mt-6 flex gap-3 border-t border-gray-100 pt-5">

              <button
                className="rounded-md bg-black px-7 py-3 text-sm font-medium tracking-wide text-white transition hover:bg-gray-800"
              >
                ACCEPT
              </button>

              <button
                className="rounded-md border border-gray-300 px-7 py-3 text-sm font-medium tracking-wide text-gray-600 transition hover:bg-gray-50"
              >
                REJECT
              </button>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
};

export default RequestReservations;