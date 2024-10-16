import React, { useState } from 'react';

// Dummy components for each section
const Overview = () => <div>Overview/Analytics</div>;
const UserManagement = () => <div>User Management</div>;
const AcademicManagement = () => <div>Academic Management</div>;
const AttendanceManagement = () => <div>Attendance Management</div>;
const FeeManagement = () => <div>Fee and Finance Management</div>;
const Communication = () => <div>Communication</div>;
const ExamsResults = () => <div>Exams and Results</div>;
const LibraryManagement = () => <div>Library Management</div>;
const ClassSchedule = () => <div>Class Schedule/Timetable</div>;
const Assignments = () => <div>Assignments</div>;
const Grades = () => <div>Grades/Report Cards</div>;
const Fees = () => <div>Fees</div>;
const ParentCommunication = () => <div>Communication with Parents</div>;
const EventsCalendar = () => <div>Events Calendar</div>;

const Dashboard = () => {
  const [activeSection, setActiveSection] = useState('Overview');

  // List of menu items for each role
  const adminMenu = [
    { name: 'Overview', component: <Overview /> },
    { name: 'User Management', component: <UserManagement /> },
    { name: 'Academic Management', component: <AcademicManagement /> },
    { name: 'Attendance Management', component: <AttendanceManagement /> },
    { name: 'Fee and Finance Management', component: <FeeManagement /> },
    { name: 'Communication', component: <Communication /> },
    { name: 'Exams and Results', component: <ExamsResults /> },
    { name: 'Library Management', component: <LibraryManagement /> },
  ];

  const teacherMenu = [
    { name: 'Class Schedule/Timetable', component: <ClassSchedule /> },
    { name: 'Assignments', component: <Assignments /> },
    { name: 'Grades/Report Cards', component: <Grades /> },
    { name: 'Attendance Management', component: <AttendanceManagement /> },
    { name: 'Communication', component: <Communication /> },
  ];

  const studentMenu = [
    { name: 'Class Schedule/Timetable', component: <ClassSchedule /> },
    { name: 'Assignments', component: <Assignments /> },
    { name: 'Grades/Report Cards', component: <Grades /> },
    { name: 'Fees', component: <Fees /> },
    { name: 'Exams and Results', component: <ExamsResults /> },
  ];

  const parentMenu = [
    { name: 'Child’s Performance Overview', component: <Grades /> },
    { name: 'Fee and Payment Overview', component: <Fees /> },
    { name: 'Communication with Teachers', component: <ParentCommunication /> },
    { name: 'Events Calendar', component: <EventsCalendar /> },
  ];

  // Sidebar menu based on user role
  const sidebarMenu = [
    { role: 'Admin', items: adminMenu },
    { role: 'Teacher', items: teacherMenu },
    { role: 'Student', items: studentMenu },
    { role: 'Parent', items: parentMenu },
  ];

  const currentRole = 'Admin'; // Change this to switch between roles

  // Get the menu based on the current role
  const menuItems = sidebarMenu.find((menu) => menu.role === currentRole).items;

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg">
        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-800">Dashboard</h2>
          <ul className="mt-6">
            {menuItems.map((item, index) => (
              <li
                key={index}
                className={`mt-4 text-gray-600 cursor-pointer hover:bg-blue-100 hover:text-blue-600 p-2 rounded ${activeSection === item.name ? 'bg-blue-200 text-blue-800' : ''
                  }`}
                onClick={() => setActiveSection(item.name)}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <h1 className="text-3xl font-semibold text-gray-800 mb-4">{activeSection}</h1>
        <div className="bg-white p-6 rounded-lg shadow-md">
          {menuItems.find((item) => item.name === activeSection)?.component}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
