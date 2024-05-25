import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaCartPlus, FaUser } from 'react-icons/fa';
import { PiSignOutBold } from 'react-icons/pi';
import { IoMoonSharp, IoSunnySharp } from 'react-icons/io5';
import { ThemeContext } from './ThemeContext';

const Navbar = () => {
  const { darkTheme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={`py-4 ${darkTheme ? 'bg-[#854A2D]' : 'bg-[#efe3b8]'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between">
        <div className="flex items-center w-full lg:w-auto mb-4 lg:mb-0">
          <img src="/src/assets/images/logo.png" alt="Logo" className="h-10 w-auto" />
        </div>

        <div className="relative flex-grow flex justify-center w-full lg:w-auto">
          <div className="relative w-full max-w-lg">
            <input
              className={`w-full h-[40px] ${darkTheme ? 'bg-[#854A2D] text-white border-black' : 'bg-[#efe3b8] text-black border-black'} rounded-[15px] border border-solid pl-10 pr-4 [font-family:'Inter-Regular',Helvetica] font-normal text-[12px]`}
              placeholder="Search for beauty Brands and Products"
            />
            <FaSearch className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${darkTheme ? 'text-white' : 'text-black'} text-lg`} />
          </div>
        </div>

        <div className="flex space-x-4 items-center mt-4 lg:mt-0">
          <Link to="/menu" className={darkTheme ? "text-white" : "text-black"}>
            <FaUser className="cursor-pointer text-2xl" />
          </Link>
          <Link to="/cart" className={darkTheme ? "text-white" : "text-black"}>
            <FaCartPlus className="cursor-pointer text-2xl" />
          </Link>
          <button onClick={toggleTheme} className={darkTheme ? "text-white" : "text-black"}>
            {darkTheme ? <IoMoonSharp className="cursor-pointer text-2xl" /> : <IoSunnySharp className="cursor-pointer text-2xl" />}
          </button>
          <Link to="/signin" className={darkTheme ? "text-white" : "text-black"}>
            <PiSignOutBold className="cursor-pointer text-2xl" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
