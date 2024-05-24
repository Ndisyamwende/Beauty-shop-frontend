import React, { useState, useEffect } from 'react';
import ProductCard from './ProdctCard';
import Footer from '../../Components/User/Footer';
import Navbar from '../../Components/User/Navbar';

const MakeUp = ({ addToCart }) => {
  const [products, setProducts] = useState([]);
  const [sortCategory, setSortCategory] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      const token = localStorage.getItem('token');

      if (!token) {
        console.error('Token not found');
        return;
      }

      try {
        const response = await fetch('http://127.0.0.1:8000/product', {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchProducts();
  }, []);

  const handleSortChange = (event) => {
    setSortCategory(event.target.value);
  };

  const filteredProducts = sortCategory
    ? products.filter((product) => product.category === sortCategory)
    : products;

  return (
    <div>
      <div className="bg-[#f4f4f4] p-5">
        <Navbar />
        <div>
          <div className="flex flex-col sm:flex-row justify-between items-center mb-4">
            <h1 className="text-2xl font-bold text-[#333]">MakeUp</h1>
            <div className="flex items-center mt-2 sm:mt-0">
              <label htmlFor="category-sort" className="mr-2 text-[#333]">
                Sort by Category:
              </label>
              <select
                id="category-sort"
                value={sortCategory}
                onChange={handleSortChange}
                className="px-4 py-2 border rounded border-[#333] text-[#333] bg-[#e9e9e9]"
              >
                <option value="">All</option>
                <option value="face">Face</option>
                <option value="eyes">Eyes</option>
                <option value="lips">Lips</option>
              </select>
            </div>
            <div className="text-lg font-semibold text-[#333] mt-2 sm:mt-0">
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
