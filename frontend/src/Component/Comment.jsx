import React from "react";

const Comment = ({ prop }) => {
  console.log("The prop in the comment is:", prop);

  return (
    <div className="w-full p-5 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
      
      {/* Top Section */}
      <div className="flex justify-between items-start">
        
        {/* User Information */}
        <div className="flex items-center gap-3">
          
          {/* Avatar */}
          <div className="w-11 h-11 rounded-full bg-yellow-500 text-white flex items-center justify-center font-bold text-lg">
            {prop.name.charAt(0).toUpperCase()}
          </div>

          <div>
            <h1 className="font-semibold text-gray-800 text-lg">
              {prop.name}
            </h1>

            <p className="text-sm text-gray-400">
              Visited {prop.date}
            </p>
          </div>

        </div>

        {/* Rating */}
        <div className="flex items-center gap-1 bg-yellow-50 px-3 py-1.5 rounded-lg">
          {Array.from({ length: 5 }).map((_, index) => (
            <span
              key={index}
              className={
                index + 1 <= prop.rating
                  ? "text-yellow-500 text-lg"
                  : "text-gray-300 text-lg"
              }
            >
              ★
            </span>
          ))}

          <span className="ml-1 text-sm font-semibold text-gray-700">
            {prop.rating}
          </span>
        </div>
      </div>

      {/* Review */}
      <p className="mt-4 text-gray-600 leading-relaxed">
        {prop.content}
      </p>

    </div>
  );
};

export default Comment;