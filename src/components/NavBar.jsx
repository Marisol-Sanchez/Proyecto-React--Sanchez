import React, { useState } from 'react';
import CartWidget from './CartWidget';
import logo from './logo.jpg';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-black">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="relative">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white font-sm hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium focus:outline-none"
              >
                CATEGORIAS
              </button>
              {isMenuOpen && (
                <div className="origin-top-right absolute right-0 mt-2 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    <Link to="/categorias/A" className="block px-4 py-2 text-gray-900 hover:bg-gray-100">Libros A</Link>
                    <Link to="/categorias/B" className="block px-4 py-2 text-gray-900 hover:bg-gray-100">Libros B</Link>
                    <Link to="/categorias/C" className="block px-4 py-2 text-gray-900 hover:bg-gray-100">Libros C</Link>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="flex items-center">
            <img src={logo} alt="Logo" className="h-8 mr-2" />
            <Link to="/" className="text-white font-bold">ARG BOOKS</Link>
          </div>
          <div className="flex items-center">
            <Link to="/cart" className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
              <CartWidget />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
