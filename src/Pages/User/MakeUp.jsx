import React, { useState } from "react";
import ProductCard from "./ProdctCard";
import Footer from "../../Components/User/Footer";
import Navbar from "../../Components/User/Navbar";

const products = [
  {
    id: 10,
    name: "Liquid Foundation",
    gender: "Female",
    description:
      "A lightweight foundation that offers full coverage and a natural finish.",
    price: 2700,
    quantity_available: 95,
    image: "/src/assets/Makeup/Makeup1.jpg",
    categoryId: 1,
  },
  {
    id: 11,
    name: "Matte Lipstick",
    gender: "Female",
    description:
      "A long-lasting lipstick with a matte finish available in various shades.",
    price: 1900,
    quantity_available: 120,
    image: "/src/assets/Makeup/Makeup2.jpg",
    categoryId: 1,
  },
  {
    id: 12,
    name: "Waterproof Mascara",
    gender: "Female",
    description:
      "A mascara that lengthens and volumizes lashes without smudging.",
    price: 3200,
    quantity_available: 85,
    image: "/src/assets/Makeup/Makeup3.jpg",
    categoryId: 1,
  },
  {
    id: 13,
    name: "Blush Palette",
    gender: "Female",
    description:
      "A palette with a range of blush shades for a natural, healthy glow.",
    price: 4230,
    quantity_available: 55,
    image: "/src/assets/Makeup/Makeup4.jpg",
    categoryId: 1,
  },
  {
    id: 14,
    name: "Highlighter Stick",
    gender: "Female",
    description: "A creamy highlighter that adds a radiant glow to the skin.",
    price: 2000,
    quantity_available: 70,
    image: "/src/assets/Makeup/Makeup5.jpg",
    categoryId: 1,
  },
  {
    id: 15,
    name: "Eyebrow Pencil",
    gender: "Female",
    description: "A precise pencil that shapes and defines eyebrows.",
    price: 3200,
    quantity_available: 100,
    image: "/src/assets/Makeup/Makeup6.jpg",
    categoryId: 1,
  },
  {
    id: 16,
    name: "Eyeshadow Palette",
    gender: "Female",
    description:
      "A palette with a variety of eyeshadow colors for any occasion.",
    price: 2130,
    quantity_available: 65,
    image: "/src/assets/Makeup/Makeup7.jpg",
    categoryId: 1,
  },
  {
    id: 17,
    name: "Concealer",
    gender: "Female",
    description:
      "A high-coverage concealer that hides imperfections and brightens.",
    price: 3200,
    quantity_available: 90,
    image: "/src/assets/Makeup/Makeup8.jpg",
    categoryId: 1,
  },
  {
    id: 18,
    name: "Setting Spray",
    gender: "Female",
    description: "A spray that sets makeup and keeps it in place all day.",
    price: 1899,
    quantity_available: 80,
    image: "/src/assets/Makeup/Makeup9.jpg",
    categoryId: 1,
  },
];

const MakeUp = ({ addToCart }) => {
  const [sortGender, setSortGender] = useState("");

  const handleSortChange = (event) => {
    setSortGender(event.target.value);
  };

  const filteredProducts = sortGender
    ? products.filter((product) => product.gender === sortGender)
    : products;

  return (
    <div>
      <div className="bg-[#efe3b8] p-5">
        <Navbar />
        <div>
          <div className="flex flex-col sm:flex-row justify-between items-center mb-4">
            <h1 className="text-2xl font-bold text-black">MakeUp</h1>
            <div className="flex items-center mt-2 sm:mt-0">
              <label htmlFor="gender-sort" className="mr-2 text-black">
                Sort by Gender:
              </label>
              <select
                id="gender-sort"
                value={sortGender}
                onChange={handleSortChange}
                className="px-4 py-2 border rounded border-[#a87c3b] text-black bg-[#f5e9d3]"
              >
                <option value="">All</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            <div className="text-lg font-semibold text-black mt-2 sm:mt-0">
              Showing All: {filteredProducts.length} Results
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                addToCart={addToCart}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MakeUp;
