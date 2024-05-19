import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { FaSearch, FaCartPlus } from 'react-icons/fa';
import { IoMenu, IoMoonSharp } from 'react-icons/io5';
import { PiSignOutBold } from 'react-icons/pi';

const MenuComponent = () => <div>Menu Component</div>;
const CartComponent = () => <div>Cart Component</div>;
const ModeComponent = () => <div>Dark Mode Component</div>;
const SignOutComponent = () => <div>SignOut Component</div>;
const SkinCareComponent = () => <div>Skin Care Component</div>;
const MakeUpComponent = () => <div>Make Up Component</div>;
const FragranceComponent = () => <div>Fragrance Component</div>;

function Navbar() {
  return (
    <>
      <div className="bg-[#efe3b8] py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between">
          <div className="flex items-center w-full lg:w-auto mb-4 lg:mb-0">
            <img src="/src/Pages/Logo/logo.png" alt="Logo" className="h-10 w-auto" />
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
              <img src="/src/Pages/Logo/skin care.png" alt="Skin Care" className="max-w-full h-auto" />
            </Link>
            <h2 className="mt-5">Skin Care</h2>
          </div>
          <div className="flex flex-col items-center mb-4 lg:mb-0">
            <Link to="/makeup">
              <img src="/src/Pages/Logo/makeup.png" alt="Make Up" className="max-w-full h-auto" />
            </Link>
            <h2 className="mt-7">Make Up</h2>
          </div>
          <div className="flex flex-col items-center">
            <Link to="/fragrance">
              <img src="/src/Pages/Logo/fragnaces.png" alt="Fragrance" className="max-w-full h-auto" />
            </Link>
            <h2 className="mt-7">Fragrance</h2>
          </div>
        </div>
      </div>

      <footer style={{ backgroundColor: '#A6603A', minHeight: '5vh' }}>
        <div className="container mx-auto flex flex-col md:flex-row justify-around items-start p-4">
          <div className="mb-4 md:mb-0">
            <h1 className="text-3xl font-bold">Celestial Skins</h1>
            <p>Beauty Shop</p>
          </div>
          <div className="w-full sm:w-auto mb-4 sm:mb-0">
            <h3 className="font-bold mb-2">ABOUT US</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/contactus">Contact Us</Link></li>
            </ul>
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

      <Routes>
        <Route path="/menu" element={<MenuComponent />} />
        <Route path="/cart" element={<CartComponent />} />
        <Route path="/mode" element={<ModeComponent />} />
        <Route path="/signout" element={<SignOutComponent />} />
        <Route path="/skincare" element={<SkinCareComponent />} />
        <Route path="/makeup" element={<MakeUpComponent />} />
        <Route path="/fragrance" element={<FragranceComponent />} />
      </Routes>
    </>
  );
}

export default Navbar;

