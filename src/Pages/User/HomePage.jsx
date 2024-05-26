import React, { useState, useEffect, useContext} from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Footer from "../../Components/User/Footer";
import Navbar from "../../Components/User/Navbar";
import { ThemeContext } from "../../Components/User/ThemeContext";

function Homepage() {
  // const [products, setProducts] = useState(SampleProducts);

  const addToCart = (product, quantity) => {
    console.log(`Added ${quantity} of ${product.name} to the cart.`);
    // Add the product to the cart logic here
  };

  return (
    <>
      <div className="bg-[#efe3b8] py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between">
          <div className="flex items-center w-full lg:w-auto mb-4 lg:mb-0">
            <img src="/src/assets/images/logo.png" alt="Logo" className="h-10 w-auto" />
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
            <Link to="/signout" className="text-black cursor-pointer text-2xl">
              <PiSignOutBold />
            </Link>
          </div>
        </div>

        <div className="flex flex-wrap justify-center lg:justify-between items-center mt-10 mx-4">
          <div className="flex flex-col items-center mb-4 lg:mb-0">
            <Link to="/skincare">
              <img
                src="/src/assets/icons/Skincareicon.png"
                alt="Skin Care"
                className="max-w-full h-50 w-60"
              />
            </Link>
            <h2 className="mt-5">Skin Care</h2>
          </div>
          <div className="flex flex-col items-center mb-4 lg:mb-0">
            <Link to="/makeup">
              <img
                src="/src/assets/icons/makeupicon.png"
                alt="Make Up"
                className="max-w-full h-50 w-60"
              />
            </Link>
            <h2 className="mt-7">Make Up</h2>
          </div>
          <div className="flex flex-col items-center">
            <Link to="/fragrance">
              <img src="/src/assets/images/frag.png" alt="Fragrance" className="max-w-full h-auto" />
            </Link>
            <h2 className="mt-7">Fragrance</h2>
          </div>
          <div className="flex flex-col items-center">
            <Link to="/beardgang">
              <img
                src="/src/assets/icons/Beardgangicon.jpg"
                alt="beardgang"
                className="max-w-full h-50 w-60"
              />
            </Link>
            <h2 className="mt-7">Beard Gang</h2>
          </div>
          </div>
          <div className="w-full sm:w-auto mb-4 sm:mb-0">
            <h3 className="font-bold mb-2">SHOP</h3>
            <ul>
              <li className="mb-1"><Link to="/scents" className="hover:underline">Scents</Link></li>
              <li className="mb-1"><Link to="/makeup" className="hover:underline">Makeup</Link></li>
              <li><Link to="/skincare" className="hover:underline">Skin Care</Link></li>
            </ul>
          </div>
          <div className="w-full sm:w-auto">
            <h3 className="font-bold mb-2">ADDRESS</h3>
            <p>Ngong Lane</p>
            <p>0720856222</p>
            <p>Celestialskin@gmail.com</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Homepage;
