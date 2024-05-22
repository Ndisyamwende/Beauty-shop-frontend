
import React, { useState } from 'react';
import ProductCard from './ProdctCard';
import Footer from '../../Components/User/Footer';

// Sample data for products
const products = [
  {
    id: 1,
    name: 'Product 1',
    price: 10.99,
    gender: 'male',
    image: 'https://media.istockphoto.com/id/164505409/photo/red-lipstick.jpg?s=612x612&w=0&k=20&c=dnZ2e8AC3qH8FVStYzo-3MuU1XIXk-8xy63Hm-DhXbg=',
    description: 'Description for Product 1'
  },
  {
    id: 2,
    name: 'Product 2',
    price: 15.99,
    gender: 'female',
    image: 'https://www.kumkangbeauty.com/wp-content/uploads/2019/02/338016356_949074709596735_2758375562973207605_n.jpg',
    description: 'Description for Product 2'
  },
  // Add more products as needed
];

const ProductList = ({ addToCart }) => {
  const [sortGender, setSortGender] = useState('');

  const handleSortChange = (event) => {
    setSortGender(event.target.value);
  };

  const filteredProducts = sortGender
    ? products.filter((product) => product.gender === sortGender)
    : products;

  return (
    <div>
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

    <Footer/>
    </div>
  );
};

export default ProductList;
