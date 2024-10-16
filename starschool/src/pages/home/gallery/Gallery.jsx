import React from 'react';

import image1 from '../../../assets/events/1.jpg';
import image2 from '../../../assets/events/2.jpg';
import image3 from '../../../assets/events/3.jpg';
import image4 from '../../../assets/events/4.jpg';
import image5 from '../../../assets/events/5.jpg';
import image6 from '../../../assets/events/6.jpg';

// Sample image URLs (you can replace these with your actual image paths)
const galleryImages = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image1,
  image2,
  image4,
  image5,
  // Add more images as needed
];

const Gallery = () => {
  return (
    <div className="p-8 bg-gradient-to-b from-gray-100 to-gray-300 min-h-screen">
      <h1 className="text-4xl font-extrabold mb-4 text-center text-gray-800">Our Gallery</h1>
      <p className="text-center text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
        Welcome to our gallery, where we showcase memorable moments and events through captivating images. 
        Each picture tells a unique story, capturing the essence of our activities and the spirit of our community. 
        Browse through our collection and relive these moments with us.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {galleryImages.map((image, index) => (
          <div
            className="overflow-hidden rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
            key={index}
          >
            <img
              src={image}
              alt={`Gallery Image ${index + 1}`}
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
