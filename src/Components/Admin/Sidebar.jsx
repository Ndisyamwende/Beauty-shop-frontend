import React, { useState } from 'react';
import { FaTachometerAlt, FaBoxes, FaUsers, FaUserPlus, FaEnvelope, FaMoon, FaSun, FaSignOutAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleLogout = () => {
    // Logic to handle logout, e.g., clearing tokens, redirecting to login page
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    window.location.href = '/login';
  };

  const sidebarStyle = {
    backgroundColor: isDarkMode ? "#A6603A" : "#efe3b8",
    minHeight: "100vh",
    padding: "0px",
    color: isDarkMode ? "#FFF" : "#000",
  };

  return (
    <div style={sidebarStyle}>
       
      <div className="p-4 border-b border-light-mode">
        <h1 className="text-3xl font-bold">Welcome back Admin</h1>
      </div>
      <nav className="flex-1 p-4">
        <ul>
          <li className="mb-4">
            <Link to="/admin/dashboard" className="flex items-center  hover:bg-orange-950 rounded">
              <FaTachometerAlt className="mr-2" />
              Dashboard
            </Link>
          </li>
          <li className="mb-4">
            <Link to="/admin/inventory" className="flex items-center p-2 hover:bg-orange-950 rounded">
              <FaBoxes className="mr-2" />
              Inventory
            </Link>
          </li>
          <li className="mb-4">
            <Link to="/admin/customers" className="flex items-center p-2 hover:bg-orange-950 rounded">
              <FaUsers className="mr-2" />
              Customers
            </Link>
          </li>
          <li className="mb-4">
            <Link to="/admin/new-hire" className="flex items-center p-2 hover:bg-orange-950 rounded">
              <FaUserPlus className="mr-2" />
              New Hire
            </Link>
          </li>
          <li className="mb-4">
            <Link to="/admin/messages" className="flex items-center p-2 hover:bg-orange-950 rounded">
              <FaEnvelope className="mr-2" />
              Messages
            </Link>
          </li>
        </ul>
      </nav>
      <div className="p-4 border-t border-light-mode">
        <button onClick={toggleTheme} className="flex items-center p-2 hover:bg-light-mode rounded w-full">
          {isDarkMode ? <FaSun className="mr-2" /> : <FaMoon className="mr-2" />}
          {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
        <button onClick={handleLogout} className="flex items-center p-2 hover:bg-orange rounded w-full mt-2">
          <FaSignOutAlt className="mr-2" />
          Logout
        </button>

        
      </div>
    </div>
  );
}

export default Sidebar;