import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../Components/User/Navbar';
import { ThemeContext } from '../../Components/User/ThemeContext';

function Homepage() {
  const { darkTheme } = useContext(ThemeContext);

  return (
    <>
      <Navbar />
      <div className={darkTheme ? 'bg-gray-800 text-white' : 'bg-[#efe3b8] text-black'}>
        <div className="py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between">
          </div>

          <div className="flex flex-wrap justify-center lg:justify-between items-center mt-10 mx-4">
            <div className="flex flex-col items-center mb-4 lg:mb-0">
              <Link to="/skincare">
                <img src="/src/assets/images/careskin.png" alt="Skin Care" className="max-w-full h-auto" />
              </Link>
              <h2 className="mt-5">Skin Care</h2>
            </div>
            <div className="flex flex-col items-center mb-4 lg:mb-0">
              <Link to="/makeups">
                <img src="/src/assets/images/makeup.png" alt="Make Up" className="max-w-full h-auto" />
              </Link>
              <h2 className="mt-7">Make Up</h2>
            </div>
            <div className="flex flex-col items-center">
              <Link to="/fragrances">
                <img src="/src/assets/images/frag.png" alt="Fragrance" className="max-w-full h-auto" />
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
                <li className="mb-1"><Link to="/fragrances" className="hover:underline">Fragrances</Link></li>
                <li className="mb-1"><Link to="/makeups" className="hover:underline">MakeUp</Link></li>
                <li className="mb-1"><Link to="/skincare" className="hover:underline">Skin Care</Link></li>
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
      </div>
    </>
  );
}

export default Homepage;


