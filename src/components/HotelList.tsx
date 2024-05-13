import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../redux/store";

const HotelList: React.FC = () => {
  const hotels = useSelector((state: RootState) => state.hotels.data);

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-3xl font-bold mb-6">Hotels</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {hotels.map((hotel) => (
          <div
            key={hotel.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <img
              src={`https://source.unsplash.com/random/400x300?hotel=${hotel.id}`}
              alt={hotel.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{hotel.name}</h3>
              <p className="text-gray-700 mb-4">{hotel.description}</p>
              <Link
                to={`/hotels/${hotel.id}`}
                className="bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors"
              >
                View Rooms
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HotelList;
