import React from 'react';
import { useContext } from 'react';
import { FaTachometerAlt, FaBoxes, FaUsers, FaUserPlus, FaEnvelope, FaMoon, FaSun, FaSignOutAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../User/ThemeContext';

const Sidebar = () => {
  const { darkTheme, toggleTheme } = useContext(ThemeContext);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    window.location.href = '/login';
  };

  const sidebarStyle = {
<<<<<<< HEAD
    backgroundColor: isDarkMode ? "#A6603A" : "#efe3b8",
    minHeight: "100vh",
    padding: "0px",
    color: isDarkMode ? "#FFF" : "#000",
=======
    backgroundColor: darkTheme ? '#333' : '#A6603A',
    minHeight: '100vh',
    padding: '0px',
    color: darkTheme ? '#FFF' : '#000'
>>>>>>> 4a8fafa6f468f8ecd08f5ec6218a9537e6d0ed0f
  };

  return (
    <div style={sidebarStyle}>
<<<<<<< HEAD
       
      <div className="p-4 border-b border-light-mode">
=======
      <div className="p-4 border-b border-gray-700">
>>>>>>> 4a8fafa6f468f8ecd08f5ec6218a9537e6d0ed0f
        <h1 className="text-3xl font-bold">Welcome back Admin</h1>
      </div>
      <nav className="flex-1 p-4">
        <ul>
          <li className="mb-4">
<<<<<<< HEAD
            <Link to="/admin/dashboard" className="flex items-center  hover:bg-orange-950 rounded">
=======
            <Link to="/admin/dashboard" className="flex items-center  hover:bg-light-mode rounded">
>>>>>>> 4a8fafa6f468f8ecd08f5ec6218a9537e6d0ed0f
              <FaTachometerAlt className="mr-2" />
              Dashboard
            </Link>
          </li>
          <li className="mb-4">
<<<<<<< HEAD
            <Link to="/admin/inventory" className="flex items-center p-2 hover:bg-orange-950 rounded">
=======
            <Link to="/admin/inventory" className="flex items-center p-2 hover:bg-light-mode rounded">
>>>>>>> 4a8fafa6f468f8ecd08f5ec6218a9537e6d0ed0f
              <FaBoxes className="mr-2" />
              Inventory
            </Link>
          </li>
          <li className="mb-4">
<<<<<<< HEAD
            <Link to="/admin/customers" className="flex items-center p-2 hover:bg-orange-950 rounded">
=======
            <Link to="/admin/customers" className="flex items-center p-2 hover:bg-light-mode rounded">
>>>>>>> 4a8fafa6f468f8ecd08f5ec6218a9537e6d0ed0f
              <FaUsers className="mr-2" />
              Customers
            </Link>
          </li>
          <li className="mb-4">
<<<<<<< HEAD
            <Link to="/admin/new-hire" className="flex items-center p-2 hover:bg-orange-950 rounded">
=======
            <Link to="/admin/new-hire" className="flex items-center p-2 hover:bg-light-mode rounded">
>>>>>>> 4a8fafa6f468f8ecd08f5ec6218a9537e6d0ed0f
              <FaUserPlus className="mr-2" />
              New Hire
            </Link>
          </li>
          <li className="mb-4">
<<<<<<< HEAD
            <Link to="/admin/messages" className="flex items-center p-2 hover:bg-orange-950 rounded">
=======
            <Link to="/admin/messages" className="flex items-center p-2 hover:bg-light-mode rounded">
>>>>>>> 4a8fafa6f468f8ecd08f5ec6218a9537e6d0ed0f
              <FaEnvelope className="mr-2" />
              Messages
            </Link>
          </li>
        </ul>
      </nav>
<<<<<<< HEAD
      <div className="p-4 border-t border-light-mode">
        <button onClick={toggleTheme} className="flex items-center p-2 hover:bg-light-mode rounded w-full">
          {isDarkMode ? <FaSun className="mr-2" /> : <FaMoon className="mr-2" />}
          {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
        <button onClick={handleLogout} className="flex items-center p-2 hover:bg-orange rounded w-full mt-2">
=======
      <div className="p-4 border-t border-gray-700">
        <button onClick={toggleTheme} className="flex items-center p-2 hover:bg-light-mode rounded w-full">
          {darkTheme ? <FaSun className="mr-2" /> : <FaMoon className="mr-2" />}
          {darkTheme ? 'Light Mode' : 'Dark Mode'}
        </button>
        <button onClick={handleLogout} className="flex items-center p-2 hover:bg-light-mode rounded w-full mt-2">
>>>>>>> 4a8fafa6f468f8ecd08f5ec6218a9537e6d0ed0f
          <FaSignOutAlt className="mr-2" />
          Logout
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
