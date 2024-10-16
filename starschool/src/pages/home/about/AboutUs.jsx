import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import Link and useNavigate from react-router-dom
import starschool from '../../../assets/5.jpg';

const AboutUs = () => {
  const navigate = useNavigate(); // Hook to programmatically navigate

  const handleLearnMoreClick = () => {
    window.scrollTo(0, 0); // Scroll to the top of the page
    navigate('/about'); // Navigate to /about
  };

  return (
    <div className="container mx-auto p-6">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 mb-6 md:mb-0">
          <h1 className="text-3xl font-bold mb-4 text-gray-800">About Us</h1>
          <p className="mb-4 text-gray-600">
            Welcome to Star Private School, where we foster a love of learning in a supportive and nurturing environment. Our dedicated educators are committed to providing high-quality education, encouraging students to reach their full potential academically and socially.
          </p>
          <p className="mb-6 text-gray-600">
            We believe in holistic education that not only focuses on academic excellence but also emphasizes character development and extracurricular activities.
          </p>
          <button 
            onClick={handleLearnMoreClick} // Call the custom function on click
            className="bg-blue-600 text-white py-2 px-6 rounded-lg shadow hover:bg-blue-500 transition duration-200"
          >
            Learn More
          </button>
        </div>
        <div className="md:w-1/2 md:ml-6"> {/* Add margin-left for spacing */}
          <img
            src={starschool} // Replace with your image URL
            alt="Star Private School"
            className="rounded-lg shadow-lg w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
