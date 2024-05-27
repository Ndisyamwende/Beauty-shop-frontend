import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from './ThemeContext'; 

const Footer = () => {
  const { darkTheme } = useContext(ThemeContext);

  return (
<<<<<<< HEAD
    <footer style={{ backgroundColor: "#A6603A", minHeight: "5vh" }}>
=======
    <footer style={{ backgroundColor: darkTheme ? "#c0ad68" : "#A6603A", minHeight: "5vh" }}>
>>>>>>> 4a8fafa6f468f8ecd08f5ec6218a9537e6d0ed0f
      <div className="container mx-auto flex flex-col md:flex-row justify-around items-start p-4">
        <div className="mb-4 md:mb-0">
          <h1 className={`text-3xl font-bold ${darkTheme ? 'text-white' : 'text-black'}`}>Celestial Skins</h1>
          <p className={darkTheme ? 'text-white' : 'text-black'}>Beauty Shop</p>
        </div>
        <div className="w-full sm:w-auto mb-4 sm:mb-0">
          <h3 className={`font-bold mb-2 ${darkTheme ? 'text-white' : 'text-black'}`}>ABOUT US</h3>
          <ul>
            <li>
<<<<<<< HEAD
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/contactus">Contact Us</Link>
=======
              <Link to="/home" className={darkTheme ? 'text-white hover:underline' : 'text-black hover:underline'}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/contactus" className={darkTheme ? 'text-white hover:underline' : 'text-black hover:underline'}>
                Contact Us
              </Link>
>>>>>>> 4a8fafa6f468f8ecd08f5ec6218a9537e6d0ed0f
            </li>
          </ul>
        </div>
        <div className="w-full sm:w-auto mb-4 sm:mb-0">
          <h3 className={`font-bold mb-2 ${darkTheme ? 'text-white' : 'text-black'}`}>SHOP</h3>
          <ul>
            <li className="mb-1">
<<<<<<< HEAD
              <Link to="/fragrances" className="hover:underline">
=======
              <Link to="/fragrances" className={`${darkTheme ? 'text-white hover:underline' : 'text-black hover:underline'}`}>
>>>>>>> 4a8fafa6f468f8ecd08f5ec6218a9537e6d0ed0f
                Fragrances
              </Link>
            </li>
            <li className="mb-1">
<<<<<<< HEAD
              <Link to="/makeup" className="hover:underline">
=======
              <Link to="/makeup" className={`${darkTheme ? 'text-white hover:underline' : 'text-black hover:underline'}`}>
>>>>>>> 4a8fafa6f468f8ecd08f5ec6218a9537e6d0ed0f
                Makeup
              </Link>
            </li>
            <li>
<<<<<<< HEAD
              <Link to="/skincare" className="hover:underline">
=======
              <Link to="/skincare" className={`${darkTheme ? 'text-white hover:underline' : 'text-black hover:underline'}`}>
>>>>>>> 4a8fafa6f468f8ecd08f5ec6218a9537e6d0ed0f
                Skin Care
              </Link>
            </li>
            <li>
<<<<<<< HEAD
              <Link to="/beardgang" className="hover:underline">
=======
              <Link to="/beardgang" className={`${darkTheme ? 'text-white hover:underline' : 'text-black hover:underline'}`}>
>>>>>>> 4a8fafa6f468f8ecd08f5ec6218a9537e6d0ed0f
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
