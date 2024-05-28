import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Footer from "../../Components/User/Footer";
import Navbar from "../../Components/User/Navbar";

function Homepage() {
  const [categories, setCategories] = useState([]);
  const [currentId, setCurrentId] = useState(0);

  useEffect(() => {
    const fetchedCategories = [
      { id: 1, name: "Skin Care", image: "/src/assets/icons/Skincareicon.png" },
      { id: 2, name: "Make Up", image: "/src/assets/icons/makeupicon.png" },
      {
        id: 3,
        name: "Fragrance",
        image: "/src/assets/icons/Fragrancesicon.png",
      },
      {
        id: 4,
        name: "Beard Gang",
        image: "/src/assets/icons/Beardgangicon.jpg",
      },
    ];
    setCategories(fetchedCategories);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevId) => (prevId + 1) % categories.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? categories.length - 1 : prevIndex - 1
    );
  };

  return (
    <>
      <div className="bg-light-mode py-4">
        <Navbar />

        <section className="">
          <h1 className="font-bold text-center text-4xl mt-4">
            WELCOME TO CELESTIAL SKINS
          </h1>
          <h2 className=" text-center text-xl">
            The one stop shop for glowing skin
          </h2>
          <h3>Browse by categories</h3>
          <div className="flex flex-wrap justify-center lg:justify-between items-center mt-5 mx-4">
            <div className="flex flex-col items-center mb-4 lg:mb-0">
              <Link to="/skincare">
                <img
                  src="/src/assets/icons/Skincareicon.png"
                  alt="Skin Care"
                  className="max-w-full h-80 w-60 p-4 rounded shadow-md flex flex-col justify-between  cursor-pointer"
                />
              </Link>
              <h2 className="mt-5">Skin Care</h2>
            </div>
            <div className="flex flex-col items-center mb-4 lg:mb-0">
              <Link to="/makeup">
                <img
                  src="/src/assets/icons/makeupicon.png"
                  alt="Make Up"
                  className="max-w-full h-80 w-60 p-4 rounded shadow-md flex flex-col justify-between cursor-pointer"
                />
              </Link>
              <h2 className="mt-7">Make Up</h2>
            </div>
            <div className="flex flex-col items-center">
              <Link to="/fragrances">
                <img
                  src="/src/assets/icons/Fragrancesicon.png"
                  alt="Fragrance"
                  className="max-w-full h-80 w-60 p-4 rounded shadow-md flex flex-col justify-between cursor-pointer"
                />
              </Link>
              <h2 className="mt-7">Fragrance</h2>
            </div>
            <div className="flex flex-col items-center">
              <Link to="/beardgang">
                <img
                  src="/src/assets/icons/Beardgangicon.jpg"
                  alt="beardgang"
                  className="max-w-full h-50 w-60 p-4 rounded shadow-md flex flex-col justify-between cursor-pointer"
                />
              </Link>
              <h2 className="mt-7">Beard Gang</h2>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}

export default Homepage;