// components/Stars.js
import React from 'react';

const StarRating = ({ rating }) => {
  const stars = Array.from({ length: 5 }, (_, index) => index < rating);

  return (
    <div className="flex">
      {stars.map((filled, index) => (
        <svg
          key={index}
          className={`w-6 h-6 ${filled ? 'text-yellow-400' : 'text-gray-400'}`}
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 17.27l6.18 3.73-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73-1.64 7.03L12 17.27z"
          />
        </svg>
      ))}
    </div>
  );
};

export default StarRating;
