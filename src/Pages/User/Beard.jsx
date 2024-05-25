import React, { useState } from "react";
import ProductCard from "./ProdctCard";
import Footer from "../../Components/User/Footer";
import Navbar from "../../Components/User/Navbar";

const products = [
  {
    id: 28,
    name: "Beard Oil",
    gender: "Male",
    description:
      "A nourishing beard oil that softens and conditions facial hair.",
    price: 2500,
    quantity_available: 100,
    image: "/src/assets/Beardgang/beard1.jpg",
    categoryId: 4,
  },
  {
    id: 29,
    name: "Beard Balm",
    gender: "Male",
    description: "A styling balm that tames and shapes your beard.",
    price: 2200,
    quantity_available: 80,
    image: "/src/assets/Beardgang/beard2.jpg",
    categoryId: 4,
  },
  {
    id: 30,
    name: "Beard Wash",
    gender: "Male",
    description: "A gentle wash that cleanses and refreshes your beard.",
    price: 1800,
    quantity_available: 90,
    image: "/src/assets/Beardgang/beard3.jpg",
    categoryId: 4,
  },
  {
    id: 31,
    name: "Beard Conditioner",
    gender: "Male",
    description: "A conditioner that hydrates and detangles beard hair.",
    price: 2000,
    quantity_available: 70,
    image: "/src/assets/Beardgang/beard4.jpg",
    categoryId: 4,
  },
  {
    id: 32,
    name: "Beard Comb",
    gender: "Male",
    description: "A wooden comb designed specifically for beards.",
    price: 1200,
    quantity_available: 150,
    image: "/src/assets/Beardgang/beard5.jpg",
    categoryId: 4,
  },
  {
    id: 33,
    name: "Beard Brush",
    gender: "Male",
    description:
      "A boar bristle brush that evenly distributes oils through your beard.",
    price: 1500,
    quantity_available: 120,
    image: "/src/assets/Beardgang/beard6.jpg",
    categoryId: 4,
  },
  {
    id: 34,
    name: "Beard Growth Serum",
    gender: "Male",
    description: "A serum that promotes healthy beard growth.",
    price: 2800,
    quantity_available: 60,
    image: "/src/assets/Beardgang/beard7.jpg",
    categoryId: 4,
  },
  {
    id: 35,
    name: "Beard Scissors",
    gender: "Male",
    description: "Precision scissors for trimming your beard.",
    price: 1900,
    quantity_available: 110,
    image: "/src/assets/Beardgang/beard8.jpg",
    categoryId: 4,
  },
  {
    id: 36,
    name: "Beard Shaping Tool",
    gender: "Male",
    description: "A tool that helps shape and style your beard.",
    price: 1400,
    quantity_available: 130,
    image: "/src/assets/Beardgang/beard9.jpg",
    categoryId: 4,
  },
];

const Beardgang = ({ addToCart }) => {
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

export default Beardgang;