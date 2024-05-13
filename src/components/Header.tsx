import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 text-white py-4">
      <nav className="container mx-auto flex justify-between">
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="hover:text-gray-300">
              Hotels
            </Link>
          </li>
          <li>
            <Link to="/bookings" className="hover:text-gray-300">
              Bookings
            </Link>
          </li>
        </ul>
        <div>
          <Link to="/login" className="hover:text-gray-300">
            Login
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
