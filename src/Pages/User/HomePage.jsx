import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../Components/User/Navbar';
import { ThemeContext } from '../../Components/User/ThemeContext';
import Footer from '../../Components/User/Footer';

function Homepage() {
  const { darkTheme } = useContext(ThemeContext);

  return (
    <>
      <Navbar />
      <div className={darkTheme ? 'bg-[#854A2D] text-white' : 'bg-[#efe3b8] text-black'}>
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
        <Footer/>
      </div>
    </>
  );
}

export default Homepage;


