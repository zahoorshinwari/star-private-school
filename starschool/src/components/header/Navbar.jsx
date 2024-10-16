import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation
import { FaBars, FaTimes } from 'react-icons/fa'; // Importing icons from react-icons
import logo from '../../assets/logo.png';

const Navbar = () => {
  // State to manage the mobile menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle menu function
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to handle link clicks
  const handleLinkClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to the top smoothly
    setIsMenuOpen(false); // Close the mobile menu after clicking
  };

  return (
    <nav className="bg-gray-300 text-dark shadow-md fixed top-0 w-full z-50">
      <div className="container mx-auto px-10 py-2 flex items-center justify-between">
        {/* Logo and Title */}
        <div className="flex items-center">
          <Link to="/" onClick={handleLinkClick} className="hover:text-blue-400 flex items-center">
            <img src={logo} alt="logo" width={80} height={30} />
            <span className="ml-2 text-xl font-bold">Star Private School</span>
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-4">
          <Link to="/dashboard" onClick={handleLinkClick} className="relative group hover:text-blue-400">
            Dashboard
            <span className="absolute left-0 bottom-0 h-0.5 w-full bg-blue-400 transform scale-x-0 transition-transform duration-200 ease-in-out group-hover:scale-x-100" />
          </Link>
          <div className="border-r border-gray-400 h-6"></div> {/* Vertical separator */}
          <Link to="/gallery" onClick={handleLinkClick} className="relative group hover:text-blue-400">
            Gallery
            <span className="absolute left-0 bottom-0 h-0.5 w-full bg-blue-400 transform scale-x-0 transition-transform duration-200 ease-in-out group-hover:scale-x-100" />
          </Link>
          <div className="border-r border-gray-400 h-6"></div> {/* Vertical separator */}
          <Link to="/courses" onClick={handleLinkClick} className="relative group hover:text-blue-400">
            Courses
            <span className="absolute left-0 bottom-0 h-0.5 w-full bg-blue-400 transform scale-x-0 transition-transform duration-200 ease-in-out group-hover:scale-x-100" />
          </Link>
          <div className="border-r border-gray-400 h-6"></div> {/* Vertical separator */}
          <Link to="/faculty" onClick={handleLinkClick} className="relative group hover:text-blue-400">
            Faculty
            <span className="absolute left-0 bottom-0 h-0.5 w-full bg-blue-400 transform scale-x-0 transition-transform duration-200 ease-in-out group-hover:scale-x-100" />
          </Link>
          <div className="border-r border-gray-400 h-6"></div> {/* Vertical separator */}
          <Link to="/events" onClick={handleLinkClick} className="relative group hover:text-blue-400">
            Events
            <span className="absolute left-0 bottom-0 h-0.5 w-full bg-blue-400 transform scale-x-0 transition-transform duration-200 ease-in-out group-hover:scale-x-100" />
          </Link>
          <div className="border-r border-gray-400 h-6"></div> {/* Vertical separator */}
          <Link to="/contact" onClick={handleLinkClick} className="relative group hover:text-blue-400">
            Contact
            <span className="absolute left-0 bottom-0 h-0.5 w-full bg-blue-400 transform scale-x-0 transition-transform duration-200 ease-in-out group-hover:scale-x-100" />
          </Link>
          <div className="border-r border-gray-400 h-6"></div> {/* Vertical separator */}
          <Link to="/about" onClick={handleLinkClick} className="relative group hover:text-blue-400">
            About
            <span className="absolute left-0 bottom-0 h-0.5 w-full bg-blue-400 transform scale-x-0 transition-transform duration-200 ease-in-out group-hover:scale-x-100" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            className="text-white-300 hover:text-white focus:outline-none"
            aria-label="Toggle menu"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <FaTimes className="h-6 w-6" />
            ) : (
              <FaBars className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="bg-gray-700">
          <Link to="/dashboard" onClick={handleLinkClick} className="block px-4 py-2 text-white hover:bg-gray-600 relative group">
            Dashboard
            <span className="absolute left-0 bottom-0 h-0.5 w-full bg-blue-400 transform scale-x-0 transition-transform duration-200 ease-in-out group-hover:scale-x-100" />
          </Link>
          <div className="border-b border-gray-600"></div> {/* Horizontal separator */}
          <Link to="/gallery" onClick={handleLinkClick} className="block px-4 py-2 text-white hover:bg-gray-600 relative group">
            Gallery
            <span className="absolute left-0 bottom-0 h-0.5 w-full bg-blue-400 transform scale-x-0 transition-transform duration-200 ease-in-out group-hover:scale-x-100" />
          </Link>
          <div className="border-b border-gray-600"></div> {/* Horizontal separator */}
          <Link to="/courses" onClick={handleLinkClick} className="block px-4 py-2 text-white hover:bg-gray-600 relative group">
            Courses
            <span className="absolute left-0 bottom-0 h-0.5 w-full bg-blue-400 transform scale-x-0 transition-transform duration-200 ease-in-out group-hover:scale-x-100" />
          </Link>
          <div className="border-b border-gray-600"></div> {/* Horizontal separator */}
          <Link to="/faculty" onClick={handleLinkClick} className="block px-4 py-2 text-white hover:bg-gray-600 relative group">
            Faculty
            <span className="absolute left-0 bottom-0 h-0.5 w-full bg-blue-400 transform scale-x-0 transition-transform duration-200 ease-in-out group-hover:scale-x-100" />
          </Link>
          <div className="border-b border-gray-600"></div> {/* Horizontal separator */}
          <Link to="/events" onClick={handleLinkClick} className="block px-4 py-2 text-white hover:bg-gray-600 relative group">
            Events
            <span className="absolute left-0 bottom-0 h-0.5 w-full bg-blue-400 transform scale-x-0 transition-transform duration-200 ease-in-out group-hover:scale-x-100" />
          </Link>
          <div className="border-b border-gray-600"></div> {/* Horizontal separator */}
          <Link to="/contact" onClick={handleLinkClick} className="block px-4 py-2 text-white hover:bg-gray-600 relative group">
            Contact
            <span className="absolute left-0 bottom-0 h-0.5 w-full bg-blue-400 transform scale-x-0 transition-transform duration-200 ease-in-out group-hover:scale-x-100" />
          </Link>
          <div className="border-b border-gray-600"></div> {/* Horizontal separator */}
          <Link to="/about" onClick={handleLinkClick} className="block px-4 py-2 text-white hover:bg-gray-600 relative group">
            About
            <span className="absolute left-0 bottom-0 h-0.5 w-full bg-blue-400 transform scale-x-0 transition-transform duration-200 ease-in-out group-hover:scale-x-100" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
