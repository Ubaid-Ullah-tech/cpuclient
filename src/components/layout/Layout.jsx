import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../navbar/Navbar.jsx';
import Footer from '../cpu/Footer.jsx';

const Layout = () => {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main className="mt-16">
        <Outlet />
      </main>
      <footer>
        <Footer/>
        {/* Add Footer if needed */}
      </footer>
    </div>
  );
};

export default Layout;