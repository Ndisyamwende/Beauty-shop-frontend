import React, { useContext, useState } from 'react';
import ProductCard from './ProdctCard';
import Footer from '../../Components/User/Footer';
import Navbar from '../../Components/User/Navbar';
// import { ThemeContext } from '../../contexts/ThemeContext';
import { ThemeContext } from '../../Components/User/ThemeContext';

const products = [
  {
    id: 1,
    name: 'Moisturizer',
    price: 500,
    gender: 'female',
    image: '/src/assets/images/muisturizers.png',
    description: 'Moiturize your skin.'
  },
  {
    id: 2,
    name: 'serum',
    price: 1000,
    gender: 'female',
    image: '/src/assets/images/serum.png',
    description: 'Perfect your skin with serum.'
  },
  {
    id: 3,
    name: 'Sunscreen',
    price: 1500,
    gender: 'female',
    image: '/src/assets/images/sunscreen.png',
    description: 'Protect you skin from the uv sunlight with sunscreen.'
  },
  {
    id: 4,
    name: 'Cleanser',
    price: 700,
    gender: 'female',
    image: '/src/assets/images/cleansers.png',
    description: 'Add a rosy tint to your cheeks with our cleanser.'
  },
  
];

const SkinCare = ({ addToCart }) => {
  const { darkTheme } = useContext(ThemeContext);
  const [sortGender, setSortGender] = useState('');

  const handleSortChange = (event) => {
    setSortGender(event.target.value);
  };

  const filteredProducts = sortGender
    ? products.filter((product) => product.gender === sortGender)
    : products;

  return (
    <div className={darkTheme ? 'bg-gray-900 text-white' : 'bg-[#efe3b8] text-black'}>
      <Navbar />
      <div className="p-5">
        <div className='flex flex-col sm:flex-row justify-between items-center mb-4'>
          <h1 className='text-2xl font-bold text-[#a87c3b]'>SkinCare</h1>
          <div className='flex items-center mt-2 sm:mt-0'>
            <label htmlFor='gender-sort' className='mr-2 text-[#a87c3b]'>Sort by Gender:</label>
            <select
              id='gender-sort'
              value={sortGender}
              onChange={handleSortChange}
              className={`px-4 py-2 border rounded border-[#a87c3b] text-[#a87c3b] ${darkTheme ? 'bg-gray-700 text-white' : 'bg-[#f5e9d3] text-[#a87c3b]'}`}
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
      <Footer />
    </div>
  );
};

export default SkinCare;




