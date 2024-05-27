<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
=======
import React, { useState, useContext } from 'react';
>>>>>>> 4a8fafa6f468f8ecd08f5ec6218a9537e6d0ed0f
import ProductCard from './ProdctCard';
import Footer from '../../Components/User/Footer';
import Navbar from '../../Components/User/Navbar';
import { ThemeContext } from '../../Components/User/ThemeContext';

<<<<<<< HEAD
const SkinCare = ({ addToCart }) => {
  const [products, setProducts] = useState([]);
  const [sortGender, setSortGender] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      console.error("Token not found");
      return;
    }

    console.log("Using token:", token);

    const fetchProducts = async () => {
      try {
        const response = await fetch("http://127.0.0.1:5555/product", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await response.json();
        const filteredProducts = data.filter(
          (product) => product.id >= 13 && product.id <= 22
        );
        setProducts(filteredProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);
=======
const products = [
  {
    id: 1,
    name: "Hydrating Face Cream",
    gender: "Unisex",
    description:
      "A nourishing cream that provides deep hydration and smooths skin texture.",
    price: 3500,
    quantity_available: 100,
    image: "/src/assets/Skincare/skincare1.jpg",
    categoryId: 1,
  },
  {
    id: 2,
    name: "Revitalizing Serum",
    gender: "Unisex",
    description:
      "An anti-aging serum that reduces the appearance of fine lines and wrinkles.",
    price: 4500,
    quantity_available: 50,
    image: "/src/assets/Skincare/skincare2.jpg",
    categoryId: 1,
  },
  {
    id: 3,
    name: "Purifying Cleanser",
    gender: "Unisex",
    description:
      "A gentle cleanser that removes impurities and refreshes the skin.",
    price: 4300,
    quantity_available: 75,
    image: "/src/assets/Skincare/skincare3.jpg",
    categoryId: 1,
  },
  {
    id: 4,
    name: "Soothing Toner",
    gender: "Unisex",
    description:
      "A calming toner that balances the skin's pH and reduces redness.",
    price: 2000,
    quantity_available: 80,
    image: "/src/assets/Skincare/skincare4.jpg",
    categoryId: 1,
  },
  {
    id: 5,
    name: "Brightening Eye Cream",
    gender: "Unisex",
    description:
      "An eye cream that brightens dark circles and reduces puffiness.",
    price: 5000,
    quantity_available: 60,
    image: "/src/assets/Skincare/skincare5.jpg",
    categoryId: 1,
  },
  {
    id: 6,
    name: "Exfoliating Scrub",
    gender: "Unisex",
    description: "A scrub that exfoliates dead skin cells and unclogs pores.",
    price: 2030,
    quantity_available: 90,
    image: "/src/assets/Skincare/skincare6.jpg",
    categoryId: 1,
  },
  {
    id: 7,
    name: "Hydrating Face Mask",
    gender: "Unisex",
    description: "A face mask that deeply hydrates and revitalizes the skin.",
    price: 2304,
    quantity_available: 70,
    image: "/src/assets/Skincare/skincare7.jpg",
    categoryId: 1,
  },
  {
    id: 8,
    name: "Anti-Aging Cream",
    gender: "Unisex",
    description:
      "A cream that reduces signs of aging and improves skin elasticity.",
    price: 3200,
    quantity_available: 40,
    image: "/src/assets/Skincare/skincare8.jpg",
    categoryId: 1,
  },
  {
    id: 9,
    name: "Moisturizing Lotion",
    gender: "Unisex",
    description: "A lightweight lotion that provides long-lasting moisture.",
    price: 1700,
    quantity_available: 110,
    image: "/src/assets/Skincare/skincare9.jpg",
    categoryId: 1,
  },
];

const SkinCare = ({ addToCart }) => {
  const { darkTheme } = useContext(ThemeContext);
  const [sortGender, setSortGender] = useState('');
>>>>>>> 4a8fafa6f468f8ecd08f5ec6218a9537e6d0ed0f

  const handleSortChange = (event) => {
    setSortGender(event.target.value);
  };

  const filteredProducts = sortGender
    ? products.filter(
        (product) => product.gender.toLowerCase() === sortGender.toLowerCase()
      )
    : products;

  return (
    <div>
<<<<<<< HEAD
      <div className="bg-[#efe3b8] p-5">
        <Navbar />
        <div>
          <div className="flex flex-col sm:flex-row justify-between items-center mb-4">
            <h1 className="text-2xl font-bold text-black">SkinCare</h1>
            
=======
     <div className={darkTheme ? 'bg-[#A6603A] text-white' : 'bg-[#efe3b8] text-[#3A1C0E]'}>
      <Navbar />
        <div>
          <div className="flex flex-col sm:flex-row justify-between items-center mb-4">
            <h1 className="text-2xl font-bold text-black">SkinCare</h1>
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
>>>>>>> 4a8fafa6f468f8ecd08f5ec6218a9537e6d0ed0f
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

export default SkinCare;