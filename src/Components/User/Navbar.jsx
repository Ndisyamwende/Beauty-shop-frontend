import React from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaCartPlus } from 'react-icons/fa';
import { IoMenu, IoMoonSharp } from 'react-icons/io5';
import { PiSignOutBold } from 'react-icons/pi';

const Navbar = () => {
  return (
    <div className="bg-[#efe3b8] py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between">
        <div className="flex items-center w-full lg:w-auto mb-4 lg:mb-0">
          <img src="/src/assets/logo.png" alt="Logo" className="h-10 w-auto" />
        </div>

        <div className="relative flex-grow flex justify-center w-full lg:w-auto">
          <div className="relative w-full max-w-lg">
            <input
              className="w-full h-[40px] bg-[#efe3b8] rounded-[15px] border border-solid border-black pl-10 pr-4 [font-family:'Inter-Regular',Helvetica] font-normal text-black text-[12px]"
              placeholder="Search for beauty Brands and Products"
            />
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black text-lg" />
          </div>
        </div>

        <div className="flex space-x-4 items-center mt-4 lg:mt-0">
          <Link to="/menu" className="text-black cursor-pointer text-2xl">
            <IoMenu />
          </Link>
          <Link to="/cart" className="text-black cursor-pointer text-2xl">
            <FaCartPlus />
          </Link>
          <Link to="/mode" className="text-black cursor-pointer text-2xl">
            <IoMoonSharp />
          </Link>
          <Link to="/login" className="text-black cursor-pointer text-2xl">
            <PiSignOutBold />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;