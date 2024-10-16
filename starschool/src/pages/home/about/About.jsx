import React from 'react';
import school from '../../../assets/3.jpg';

const About = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 text-center">
      <h1 className="text-4xl font-bold mb-6 text-gray-800">About Us</h1>
      <p className="text-lg text-gray-600 mb-6">
        Welcome to Star Private School, where we nurture and inspire the leaders of tomorrow. Our school is dedicated to providing a comprehensive education that combines academic excellence with character development. We believe in fostering a supportive environment where students can thrive, explore their interests, and achieve their full potential.
      </p>
      
      <img 
        src={school} 
        alt="Star Private School" 
        className="w-full h-auto rounded-lg shadow-md mb-6" 
      />
      
      <h2 className="text-3xl font-semibold my-4 text-gray-700">Our Journey</h2>
      <p className="text-lg text-gray-600 mb-4">
        Our journey began in [Year of Establishment] with a vision to create a nurturing educational environment that prioritizes student growth and achievement. Over the years, we have expanded our curriculum and facilities to meet the needs of our diverse student body. 
      </p>
      <p className="text-lg text-gray-600 mb-4">
        From our humble beginnings, we have grown into a vibrant community, fostering innovation and creativity in education. We pride ourselves on our dedicated faculty, who are committed to guiding students on their academic and personal journeys. Together, we strive to cultivate a love for learning that lasts a lifetime.
      </p>
      <p className="text-lg text-gray-600 mb-4">
        Today, Star Private School stands as a beacon of excellence, dedicated to shaping future leaders equipped with the knowledge and values necessary to make a positive impact in the world. Join us as we continue to inspire generations of students to reach for the stars!
      </p>
    </div>
  );
}

export default About;
