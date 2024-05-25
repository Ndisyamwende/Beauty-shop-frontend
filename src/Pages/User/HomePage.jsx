import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaCartPlus } from "react-icons/fa";
import { IoMenu, IoMoonSharp } from "react-icons/io5";
import { PiSignOutBold } from "react-icons/pi";
import Footer from "../../Components/User/Footer";
import Navbar from "../../Components/User/Navbar";

function Homepage() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Simulated fetch of categories (replace with actual API call)
    const fetchedCategories = [
      { id: 1, name: "Skin Care", image: "/src/assets/images/careskin.png" },
      { id: 2, name: "Make Up", image: "/src/assets/images/makeup.png" },
      { id: 3, name: "Fragrance", image: "/src/assets/images/frag.png" },
      {
        id: 4, name: "Beard Gang", image: "/src/assets/images/Beardgang.jpg",},
    ];
    setCategories(fetchedCategories);
  }, []);

  return (
    <>
      <div className="bg-[#efe3b8] py-4">
        <Navbar />

        <section className="p-10">
          <h1 className="text-center font-bold text-3xl">
            WELCOME TO CELESTIAL SKINS
          </h1>
          <h2 className="text-center font-bold">
            Your one stop shop for glowing skin
          </h2>
          <h3>Browse products by categories</h3>
          <div className="flex flex-wrap justify-center lg:justify-between items-center mt-10 mx-4 bg-light-mode min-h-screen">
            {categories.map((category) => (
              <div
                key={category.id}
                className="flex flex-col items-center mb-4 lg:mb-0"
              >
                <Link to={`/category/${category.name}`}>
                  <img
                    src={category.image}
                    alt={category.name}
                    className="object-cover h-48 w-full"
                  />
                </Link>
                <h2 className="mt-5">{category.name}</h2>
              </div>
            ))}
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}

export default Homepage

