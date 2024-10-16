import React, { useState, useEffect } from 'react';

// Import your images
import image1 from '../../../assets/1.jpg';
import image2 from '../../../assets/2.jpg';
import image3 from '../../../assets/3.jpg';
import image4 from '../../../assets/4.jpg';
import image5 from '../../../assets/5.jpg';

const images = [
  {
    src: image1,
    caption: "Welcome to Star Private School",
    text: "A place where students are nurtured to achieve excellence and reach their full potential.",
  },
  {
    src: image2,
    caption: "Explore Our Campus",
    text: "Discover our vibrant learning environments, designed to foster creativity and collaboration.",
  },
  {
    src: image3,
    caption: "Unlock Your Potential",
    text: "Join a community of dedicated learners and educators, pushing the boundaries of knowledge.",
  },
  {
    src: image4,
    caption: "Nurturing Creativity",
    text: "We believe in fostering a love for learning and nurturing curiosity in our students.",
  },
  {
    src: image5,
    caption: "A World-Class Education",
    text: "Providing students with the tools and opportunities to succeed in a rapidly evolving world.",
  },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  // Handle auto-slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-between w-full h-[500px] px-6">
      {/* Left Side - Text */}
      <div className="w-1/2">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          {images[current].caption}
        </h2>
        <p className="text-lg text-gray-600">
          {images[current].text}
        </p>
      </div>

      {/* Middle Design Element */}
      <div className="h-[300px] w-1 bg-gradient-to-b from-blue-500 to-green-500 mx-8"></div>

      {/* Right Side - Image Carousel */}
      <div className="relative w-1/2 h-full">
        <img
          src={images[current].src}
          alt="carousel slide"
          className="w-full h-full object-cover rounded-lg shadow-lg"
        />

        {/* Buttons to manually change slide */}
        <button
          className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75"
          onClick={() => setCurrent(current === 0 ? images.length - 1 : current - 1)}
        >
          &#10094;
        </button>
        <button
          className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75"
          onClick={() => setCurrent(current === images.length - 1 ? 0 : current + 1)}
        >
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default Hero;
