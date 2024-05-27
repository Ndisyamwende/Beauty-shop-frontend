import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from './ThemeContext'; 

const Footer = () => {
  const { darkTheme } = useContext(ThemeContext);

  return (
    <footer style={{ backgroundColor: "#A6603A", minHeight: "5vh" }}>
      <div className="container mx-auto flex flex-col md:flex-row justify-around items-start p-4">
        <div className="mb-4 md:mb-0">
          <h1 className={`text-3xl font-bold ${darkTheme ? 'text-white' : 'text-black'}`}>Celestial Skins</h1>
          <p className={darkTheme ? 'text-white' : 'text-black'}>Beauty Shop</p>
        </div>
        <div className="w-full sm:w-auto mb-4 sm:mb-0">
          <h3 className={`font-bold mb-2 ${darkTheme ? 'text-white' : 'text-black'}`}>ABOUT US</h3>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/contactus">Contact Us</Link>
            </li>
          </ul>
        </div>
        <div className="w-full sm:w-auto mb-4 sm:mb-0">
          <h3 className={`font-bold mb-2 ${darkTheme ? 'text-white' : 'text-black'}`}>SHOP</h3>
          <ul>
            <li className="mb-1">
              <Link to="/fragrances" className="hover:underline">
                Fragrances
              </Link>
            </li>
            <li className="mb-1">
              <Link to="/makeup" className="hover:underline">
                Makeup
              </Link>
            </li>
            <li>
              <Link to="/skincare" className="hover:underline">
                Skin Care
              </Link>
            </li>
            <li>
              <Link to="/beardgang" className="hover:underline">
                Beard Gang
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-full sm:w-auto">
          <h3 className={`font-bold mb-2 ${darkTheme ? 'text-white' : 'text-black' }`}>ADDRESS</h3>
          <p className={darkTheme ? 'text-white' : 'text-black'}>Ngong Lane</p>
          <p className={darkTheme ? 'text-white' : 'text-black'}>0779100618</p>
          <p className={darkTheme ? 'text-white' : 'text-black'}>Celestialskin@gmail.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
