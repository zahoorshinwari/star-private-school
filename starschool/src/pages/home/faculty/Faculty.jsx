import React from 'react';
import { FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa'; // Import icons

import img1 from '../../../assets/1.jpg'
import img2 from '../../../assets/2.jpg'
import img3 from '../../../assets/3.jpg'
import img4 from '../../../assets/4.jpg'
import img5 from '../../../assets/5.jpg'
import img0 from '../../../assets/0.jpg'

// Sample faculty data with social media
const facultyData = [
  {
    name: 'Dr. John Smith',
    role: 'Principal',
    qualifications: 'PhD in Education',
    image: img1,
    social: {
      linkedin: 'https://www.linkedin.com/in/johnsmith',
      twitter: 'https://twitter.com/johnsmith',
      facebook: 'https://facebook.com/johnsmith',
    },
  },
  {
    name: 'Ms. Jane Doe',
    role: 'Mathematics Teacher',
    qualifications: 'MSc in Mathematics',
    image: img2,
    social: {
      linkedin: 'https://www.linkedin.com/in/janedoe',
      twitter: 'https://twitter.com/janedoe',
      facebook: 'https://facebook.com/janedoe',
    },
  },
  {
    name: 'Mr. Richard Roe',
    role: 'Science Teacher',
    qualifications: 'MSc in Physics',
    image: img3,
    social: {
      linkedin: 'https://www.linkedin.com/in/richardroe',
      twitter: 'https://twitter.com/richardroe',
      facebook: 'https://facebook.com/richardroe',
    },
  },
  {
    name: 'Ms. Emily Clark',
    role: 'English Teacher',
    qualifications: 'M.A. in English Literature',
    image: img4,
    social: {
      linkedin: 'https://www.linkedin.com/in/emilyclark',
      twitter: 'https://twitter.com/emilyclark',
      facebook: 'https://facebook.com/emilyclark',
    },
  },
  {
    name: 'Mr. David Brown',
    role: 'History Teacher',
    qualifications: 'M.A. in History',
    image: img5,
    social: {
      linkedin: 'https://www.linkedin.com/in/davidbrown',
      twitter: 'https://twitter.com/davidbrown',
      facebook: 'https://facebook.com/davidbrown',
    },
  },
  {
    name: 'Ms. Sarah Green',
    role: 'Art Teacher',
    qualifications: 'B.A. in Fine Arts',
    image: img0,
    social: {
      linkedin: 'https://www.linkedin.com/in/sarahgreen',
      twitter: 'https://twitter.com/sarahgreen',
      facebook: 'https://facebook.com/sarahgreen',
    },
  },
  {
    name: 'Mr. Robert White',
    role: 'Physical Education Teacher',
    qualifications: 'BSc in Sports Science',
    image: img3,
    social: {
      linkedin: 'https://www.linkedin.com/in/robertwhite',
      twitter: 'https://twitter.com/robertwhite',
      facebook: 'https://facebook.com/robertwhite',
    },
  },
  {
    name: 'Ms. Jessica Black',
    role: 'Music Teacher',
    qualifications: 'M.A. in Music Education',
    image: img4,
    social: {
      linkedin: 'https://www.linkedin.com/in/jessicablack',
      twitter: 'https://twitter.com/jessicablack',
      facebook: 'https://facebook.com/jessicablack',
    },
  },
];

const Faculty = () => {
  return (
    <div className="p-8 text-center">
      {/* Introduction about faculty */}
      <div className="mb-10">
        <h1 className="text-4xl font-bold mb-4">Meet Our Faculty</h1>
        <p className="text-lg text-gray-700 mb-6">
          Our esteemed faculty consists of experienced educators who are dedicated to providing a high-quality education. They bring a wealth of knowledge and expertise to the classroom, ensuring that every student receives the guidance and support they need to succeed.
        </p>
        <p className="text-lg text-gray-700">
          Below you can learn more about the qualifications and roles of each of our dedicated faculty members.
        </p>
      </div>

      {/* Faculty grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {facultyData.map((faculty, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-4"
          >
            <img
              src={faculty.image}
              alt={faculty.name}
              className="w-24 h-24 rounded-full mx-auto mb-4"
            />
            <h2 className="text-xl font-semibold">{faculty.name}</h2>
            <h3 className="text-gray-600">{faculty.role}</h3>
            <p className="text-gray-500">{faculty.qualifications}</p>

            {/* Social media icons */}
            <div className="flex justify-center mt-4 space-x-4">
              {faculty.social.linkedin && (
                <a href={faculty.social.linkedin} target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className="text-blue-600 hover:text-blue-800" size={24} />
                </a>
              )}
              {faculty.social.twitter && (
                <a href={faculty.social.twitter} target="_blank" rel="noopener noreferrer">
                  <FaTwitter className="text-blue-400 hover:text-blue-600" size={24} />
                </a>
              )}
              {faculty.social.facebook && (
                <a href={faculty.social.facebook} target="_blank" rel="noopener noreferrer">
                  <FaFacebook className="text-blue-800 hover:text-blue-900" size={24} />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faculty;
