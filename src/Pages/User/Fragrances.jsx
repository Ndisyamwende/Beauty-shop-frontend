import React, { useState } from 'react';
import ProductCard from './ProdctCard';
import Footer from '../../Components/User/Footer';
import Navbar from '../../Components/User/Navbar';

const products = [
  {
    id: 1,
    name: 'Eau de Parfum',
    price: 5000,
    gender: 'female',
    image: '/src/assets/images/eau_de_parfum.png',
    description: 'A sophisticated fragrance for women.'
  },
  {
    id: 2,
    name: 'Eau de Toilette',
    price: 3000,
    gender: 'male',
    image: '/src/assets/images/eau_de_toilette.png',
    description: 'A refreshing fragrance for men.'
  },
  {
    id: 3,
    name: 'Cologne',
    price: 2000,
    gender: 'male',
    image: '/src/assets/images/cologne.png',
    description: 'A light and fresh scent for men.'
  },
  {
    id: 4,
    name: 'Perfume Oil',
    price: 7000,
    gender: 'female',
    image: '/src/assets/images/perfume_oil.png',
    description: 'A long-lasting fragrance oil for women.'
  },
];

const Fragrances = ({ addToCart }) => {
  const [sortGender, setSortGender] = useState('');

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
          <div className='flex flex-col sm:flex-row justify-between items-center mb-4'>
            <h1 className='text-2xl font-bold text-[#a87c3b]'>Fragrances</h1>
            <div className='flex items-center mt-2 sm:mt-0'>
              <label htmlFor='gender-sort' className='mr-2 text-[#a87c3b]'>Sort by Gender:</label>
              <select
                id='gender-sort'
                value={sortGender}
                onChange={handleSortChange}
                className='px-4 py-2 border rounded border-[#a87c3b] text-[#a87c3b] bg-[#f5e9d3]'
              >
                <option value=''>All</option>
                <option value='male'>Male</option>
                <option value='female'>Female</option>
              </select>
            </div>
            <div className='text-lg font-semibold text-[#a87c3b] mt-2 sm:mt-0'>
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
      </div>
      <Footer />
    </div>
  );
};

export default Fragrances;
