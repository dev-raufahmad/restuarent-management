import {
  MapPin,
  Clock,
  Utensils,
  DollarSign,
} from "lucide-react";

const OwnerProfile = (props) => {

  const name = props.name || "Restaurant Name";
  const cuisineType = props.cuisineType || "International Cuisine";

  const description =
    props.description ||
    "A wonderful restaurant offering delicious food in a comfortable and welcoming atmosphere.";

  const price = props.price || "$$";
  const location = props.location || "Lahore";
  const address = props.address || "Main Boulevard, Lahore";

  const availableTimeSlots =
    props.availableTimeSlots || [
      "12:00 PM",
      "1:00 PM",
      "3:00 PM",
      "7:00 PM",
    ];

  const allTimeSlots =
    props.allTimeSlots || [
      "12:00 PM",
      "1:00 PM",
      "2:00 PM",
      "3:00 PM",
      "4:00 PM",
      "5:00 PM",
      "6:00 PM",
      "7:00 PM",
      "8:00 PM",
      "9:00 PM",
    ];

  return (
    <div className="w-full rounded-xl bg-white p-8 shadow-sm">

      {/* Restaurant Name */}
      <div className="mb-6">
        <h1 className="font-serif text-3xl font-medium text-gray-900">
          {name}
        </h1>

        <p className="mt-2 text-sm uppercase tracking-wider text-gray-500">
          {cuisineType}
        </p>
      </div>

      {/* Description */}
      <div className="mb-7">
        <h2 className="mb-2 text-lg font-medium text-gray-900">
          About the restaurant
        </h2>

        <p className="leading-7 text-gray-600">
          {description}
        </p>
      </div>

      {/* Restaurant Information */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

        {/* Price */}
        <div className="flex items-start gap-3">
          <DollarSign
            size={20}
            strokeWidth={1.7}
            className="mt-1 text-gray-500"
          />

          <div>
            <p className="text-sm text-gray-400">
              Price
            </p>

            <p className="mt-1 text-gray-800">
              {price}
            </p>
          </div>
        </div>

        {/* Cuisine */}
        <div className="flex items-start gap-3">
          <Utensils
            size={20}
            strokeWidth={1.7}
            className="mt-1 text-gray-500"
          />

          <div>
            <p className="text-sm text-gray-400">
              Cuisine
            </p>

            <p className="mt-1 text-gray-800">
              {cuisineType}
            </p>
          </div>
        </div>

        {/* Location */}
        <div className="flex items-start gap-3">
          <MapPin
            size={20}
            strokeWidth={1.7}
            className="mt-1 text-gray-500"
          />

          <div>
            <p className="text-sm text-gray-400">
              Location
            </p>

            <p className="mt-1 text-gray-800">
              {location}
            </p>
          </div>
        </div>

        {/* Address */}
        <div className="flex items-start gap-3">
          <MapPin
            size={20}
            strokeWidth={1.7}
            className="mt-1 text-gray-500"
          />

          <div>
            <p className="text-sm text-gray-400">
              Address
            </p>

            <p className="mt-1 text-gray-800">
              {address}
            </p>
          </div>
        </div>

      </div>

      {/* Available Time Slots */}
      <div className="mt-8">
        <div className="mb-3 flex items-center gap-2">
          <Clock
            size={20}
            strokeWidth={1.7}
            className="text-gray-500"
          />

          <h2 className="text-lg font-medium text-gray-900">
            Available Time Slots
          </h2>
        </div>

        <div className="flex flex-wrap gap-2">
          {availableTimeSlots.map((slot, index) => (
            <div
              key={index}
              className="rounded-md bg-gray-100 px-4 py-2 text-sm text-gray-700"
            >
              {slot}
            </div>
          ))}
        </div>
      </div>

      {/* All Time Slots */}
      <div className="mt-8">
        <div className="mb-3 flex items-center gap-2">
          <Clock
            size={20}
            strokeWidth={1.7}
            className="text-gray-500"
          />

          <h2 className="text-lg font-medium text-gray-900">
            All Time Slots
          </h2>
        </div>

        <div className="flex flex-wrap gap-2">
          {allTimeSlots.map((slot, index) => (
            <div
              key={index}
              className="rounded-md border border-gray-200 px-4 py-2 text-sm text-gray-600"
            >
              {slot}
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default OwnerProfile;