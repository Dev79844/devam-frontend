import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    handleResize(); // Call on initial render
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-gray-200">
      {/* Hamburger menu */}
      {isMobile && (
        <div className="flex items-center justify-between p-4 bg-gray-500">
          <button
            className="text-white focus:outline-none"
            onClick={toggleSidebar}
          >
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <p className="text-white text-xl font-bold">Devam Enterprise</p>
          <div />
        </div>
      )}

      {/* Sidebar */}
      <div
        className={`${
          isMobile ? 'absolute top-0 left-0 w-64' : 'w-1/4'
        } h-full bg-gray-200`}
        style={{ transform: isMobile ? (isOpen ? 'translateX(0)' : 'translateX(-100%)') : 'translateX(0)' }}
      >
        <div className="p-4">
          <ul className="space-y-2">
            <Link to="/admin">
              <li className="p-2 hover:bg-gray-300">Home</li>
            </Link>
            <Link to="/admin/add">
              <li className="p-2 hover:bg-gray-300">Add Phone</li>
            </Link>
            <Link to="/admin/viewproducts">
              <li className="p-2 hover:bg-gray-300">View Available Phones</li>
            </Link>
            <li className="p-2 hover:bg-gray-300">View Sold Phones</li>
            <li className="p-2 hover:bg-gray-300 hover:cursor-pointer">
              Logout
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
