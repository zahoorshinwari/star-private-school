import React from 'react';
import image1 from '../../../assets/events/1.jpg';
import image2 from '../../../assets/events/2.jpg';
import image3 from '../../../assets/events/3.jpg';
import image4 from '../../../assets/events/4.jpg';
import image5 from '../../../assets/events/5.jpg';
import image6 from '../../../assets/events/6.jpg';

const classesData = [
  {
    name: 'Programming',
    image: image1,
    description: 'Learn the basics of coding and programming languages. Create fun projects while developing problem-solving skills.',
  },
  {
    name: 'Robotics',
    image: image2,
    description: 'Discover the world of robots and automation. Build and program your own robots for exciting challenges.',
  },
  {
    name: 'Arts and Crafts',
    image: image3,
    description: 'Explore your creativity through various art projects. Use different materials to create beautiful crafts.',
  },
  {
    name: 'Drawing',
    image: image4,
    description: 'Enhance your drawing skills with fun techniques. Learn to sketch and shade like a pro.',
  },
  {
    name: 'Language Learning',
    image: image5,
    description: 'Immerse yourself in a new language through games and conversations. Build vocabulary and grammar skills.',
  },
  {
    name: 'Labs',
    image: image6,
    description: 'Engage in hands-on experiments and science projects. Learn the scientific method and explore various fields.',
  },
];

const ClassCard = ({ name, image, description }) => (
  <div className="class-card border border-gray-200 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 m-4">
    <img src={image} alt={name} className="w-full h-48 object-cover rounded-t-lg" />
    <div className="p-4 bg-white">
      <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
      <p className="mt-2 text-gray-600">{description}</p>
      <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200">View</button>
    </div>
  </div>
);

const Classes = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold text-center mb-6">Our Classes</h1>
      <div className="flex flex-wrap justify-center">
        {classesData.map((classItem, index) => (
          <div className="w-full md:w-1/3 lg:w-1/3 px-2" key={index}>
            <ClassCard 
              name={classItem.name} 
              image={classItem.image} 
              description={classItem.description} 
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Classes;
