// src/components/Navbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link to="/">MySite</Link>
        </div>
        
        {/* Hamburger Icon */}
        <button 
          className="block lg:hidden px-3 py-2 border border-gray-700 rounded-md"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        
        {/* Nav Links */}
        <div className={`lg:flex lg:items-center lg:space-x-4 ${isOpen ? 'block' : 'hidden'}`}>
          <Link 
            to="/" 
            className="block lg:inline-block px-3 py-2 rounded-md hover:bg-gray-700"
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className="block lg:inline-block px-3 py-2 rounded-md hover:bg-gray-700"
          >
            About
          </Link>
          <Link 
            to="/services" 
            className="block lg:inline-block px-3 py-2 rounded-md hover:bg-gray-700"
          >
            Services
          </Link>
          <Link 
            to="/contact" 
            className="block lg:inline-block px-3 py-2 rounded-md hover:bg-gray-700"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
