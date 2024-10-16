import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa'; // Importing social media icons from react-icons

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-200 py-6">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        {/* Footer Links */}
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
          <a href="/" className="hover:text-gray-400 transition-colors">Home</a>
          <a href="/about" className="hover:text-gray-400 transition-colors">About Us</a>
          <a href="/services" className="hover:text-gray-400 transition-colors">Services</a>
          <a href="/contact" className="hover:text-gray-400 transition-colors">Contact</a>
          <a href="/faq" className="hover:text-gray-400 transition-colors">FAQ</a>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors">
            <FaFacebookF className="h-6 w-6" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors">
            <FaTwitter className="h-6 w-6" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors">
            <FaInstagram className="h-6 w-6" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors">
            <FaLinkedinIn className="h-6 w-6" />
          </a>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center mt-4">
        <p className="text-sm">&copy; {new Date().getFullYear()} Plants Nursery. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
