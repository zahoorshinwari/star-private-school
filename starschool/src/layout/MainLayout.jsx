import React from 'react';
import Navbar from '../components/header/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/footer/Footer';

const MainLayout = () => {
  return (
    <main className='overflow-hidden'>
      <Navbar />
      <div className='pt-[105px]'> {/* Adjust the padding to match the Navbar height */}
        <Outlet />
      </div>
      <Footer />
    </main>
  );
};

export default MainLayout;
