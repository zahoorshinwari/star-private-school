import React from 'react';
import { FaTrophy, FaClipboardList, FaUserGraduate, FaMoneyBillWave } from 'react-icons/fa'; // Import React Icons
import image1 from '../../../assets/3.jpg';

const StudentService = () => {
  return (
    <div className="container mx-auto p-5">
      <h2 className="text-center text-3xl font-bold mb-8 text-blue-600">Student Service</h2>

      {/* Main Row: Image, Achievements/Notice, Admissions/Scholarship */}
      <div className="grid grid-cols-12 gap-6 mb-10">
        {/* Image Section (Left Side) */}
        <div className="col-span-12 md:col-span-4 flex justify-center items-center">
          <img
            src={image1}
            alt="Student Service"
            className="w-full h-full object-cover rounded-lg shadow-lg" // Set fixed height and object-cover for proper cropping
          />
        </div>

        {/* Achievements and Notice Board Section (Center) */}
        <div className="col-span-12 md:col-span-4 bg-gray-100 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4 text-blue-500 flex items-center">
            <FaTrophy className="text-3xl mr-2" /> Our Achievements
          </h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Achieved a 95% pass rate in the last board exams, with 80% of students scoring above 90%.</li>
            <li>Winner of the National Science Olympiad for three consecutive years.</li>
            <li>Recognized for excellence in arts and sports, with students receiving accolades at regional competitions.</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-4 text-blue-500 flex items-center">
            <FaClipboardList className="text-3xl mr-2" /> Notice Board
          </h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Parent-Teacher Meeting scheduled for November 10, 2024. All parents are encouraged to attend.</li>
            <li>Annual Sports Day will be held on December 1, 2024. Registration for events is open until November 20.</li>
            <li>School play auditions will take place on October 25, 2024. Interested students should sign up in the main office.</li>
          </ul>
        </div>

        {/* Admissions and Scholarship Section (Right Side) */}
        <div className="col-span-12 md:col-span-4 bg-gray-100 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4 text-blue-500 flex items-center">
            <FaUserGraduate className="text-3xl mr-2" /> First Admission Now
          </h3>
          <p className="mb-4">Admissions for the academic year 2025-2026 are now open! Visit our website or the school office for application forms and details about our programs.</p>

          <h3 className="text-xl font-semibold mt-4 mb-4 text-blue-500 flex items-center">
            <FaMoneyBillWave className="text-3xl mr-2" /> Scholarship News
          </h3>
          <p>We are pleased to announce that we are offering scholarships for outstanding students in various disciplines. Applications are due by December 15, 2024. For more information, please contact our admissions office.</p>
        </div>
      </div>
    </div>
  );
};

export default StudentService;
