import React from 'react';
import computer from '../../../assets/books/computer.jpeg'
import maths from '../../../assets/books/maths.jpeg'
import english from '../../../assets/books/english.jpeg'
import history from '../../../assets/books/history.jpeg'
import education from '../../../assets/books/education.jpeg'
import science from '../../../assets/books/science.jpeg'

// Sample course data with images
const coursesData = [
  {
    id: 1,
    title: 'Mathematics',
    description: 'An in-depth exploration of mathematical concepts and problem-solving techniques.',
    image: maths, // Replace with actual image URL
  },
  {
    id: 2,
    title: 'Science',
    description: 'A comprehensive study of the natural sciences including physics, chemistry, and biology.',
    image: science // Replace with actual image URL
  },
  {
    id: 3,
    title: 'History',
    description: 'An overview of world history, exploring key events and their impacts on modern society.',
    image: history, // Replace with actual image URL
  },
  {
    id: 4,
    title: 'English Literature',
    description: 'A study of classic and contemporary literature with a focus on critical analysis and writing skills.',
    image: english, // Replace with actual image URL
  },
  {
    id: 5,
    title: 'Computer Science',
    description: 'An introduction to computer science principles, programming, and software development.',
    image: computer, // Replace with actual image URL
  },
  {
    id: 6,
    title: 'Physical Education',
    description: 'A course focused on physical fitness, health, and wellness activities.',
    image: education, // Replace with actual image URL
  },
];

const Courses = () => {
  return (
    <div className="p-8 bg-gray-100">
      {/* Introduction about courses */}
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">Explore Our Courses</h1>
        <p className="text-lg text-gray-700 mb-4">
          Our curriculum offers a wide variety of courses designed to meet the academic and personal interests of all students. 
          Whether you're passionate about science, mathematics, literature, or physical education, 
          we have something for everyone.
        </p>
        <p className="text-lg text-gray-700">
          Below is a list of the courses currently available, each designed to help you excel in your chosen field of study.
        </p>
      </div>

      {/* Courses grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {coursesData.map((course) => (
          <div className="bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden" key={course.id}>
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800">{course.title}</h2>
              <p className="text-gray-600 mt-2">{course.description}</p>
              <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
                Enroll Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
