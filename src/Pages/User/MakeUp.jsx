import React, { useState, useEffect } from 'react';
import ProductCard from './ProdctCard';
import Footer from '../../Components/User/Footer';
import Navbar from '../../Components/User/Navbar';

const MakeUp = ({ addToCart }) => {
  const [products, setProducts] = useState([]);
  const [sortGender, setSortGender] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      const token = localStorage.getItem('token');

      if (!token) {
        console.error('Token not found');
        return;
      }

      try {
        const response = await fetch('https://beautyshop-backend-1.onrender.com/product', {
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
    setSortGender(event.target.value);
  };

  const filteredProducts = sortGender
    ? products.filter((product) => product.category === sortGender)
    : products;

  return (
    <div>
      <Navbar />
      <div>
        <div className='flex justify-between items-center mb-4'>
          <h1 className='text-2xl font-bold'>Make Up List</h1>
          <div className='flex items-center'>
            <label htmlFor='gender-sort' className='mr-2'>Sort by Gender:</label>
            <select
              id='gender-sort'
              value={sortGender}
              onChange={handleSortChange}
              className='px-4 py-2 border rounded'
            >
              <option value=''>All</option>
              <option value='male'>Male</option>
              <option value='female'>Female</option>
            </select>
          </div>
          <div className='text-lg font-semibold'>
            Showing All: {filteredProducts.length} Results
          </div>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              addToCart={addToCart}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MakeUp;

