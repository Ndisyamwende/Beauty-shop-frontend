

import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaCartPlus, FaUser } from 'react-icons/fa';
import { PiSignOutBold } from 'react-icons/pi';
import { IoMoonSharp, IoSunnySharp } from 'react-icons/io5';
import { ThemeContext } from './ThemeContext';

const Navbar = ({ setSearchQuery }) => {
  const { darkTheme, toggleTheme } = useContext(ThemeContext);
  const [localSearchQuery, setLocalSearchQuery] = useState("");

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setLocalSearchQuery(query);
    setSearchQuery(query);
  };

  return (
    <div className={`py-4 ${darkTheme ? 'bg-[#A6603A]' : 'bg-[#efe3b8]'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between">
        <div className="flex items-center w-full lg:w-auto mb-4 lg:mb-0">
         
        </div>

        <div className="relative flex-grow flex justify-center w-full lg:w-auto">
          <div className="relative w-full max-w-lg">
            <input
              className={`w-full h-[40px] ${darkTheme ? 'bg-[#A6603A] text-white border-black' : 'bg-[#efe3b8] text-black border-black'} rounded-[15px] border border-solid pl-10 pr-4 [font-family:'Inter-Regular',Helvetica] font-normal text-[12px]`}
              placeholder="Search for beauty Brands and Products"
              value={localSearchQuery}
              onChange={handleSearchChange}
            />
            <FaSearch className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${darkTheme ? 'text-white' : 'text-black'} text-lg`} />
          </div>
        </div>

        <div className="flex space-x-4 items-center mt-4 lg:mt-0">
          <Link to="/menu" className={darkTheme ? "text-white" : "text-black cursor-pointer text-2xl"}>
            <FaUser />
          </Link>
          <Link to="/cart" className={darkTheme ? "text-white" : "text-black cursor-pointer text-2xl"}>
            <FaCartPlus />
          </Link>
          <button onClick={toggleTheme} className={darkTheme ? "text-white" : "text-black cursor-pointer text-2xl"}>
            {darkTheme ? <IoMoonSharp /> : <IoSunnySharp />}
          </button>
          <Link to="/signup" className={darkTheme ? "text-white" : "text-black cursor-pointer text-2xl"}>
            <PiSignOutBold />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
