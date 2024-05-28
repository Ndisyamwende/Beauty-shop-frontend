// import React, { useContext, useState } from 'react';
// import ProductCard from './ProdctCard';
// import Footer from '../../Components/User/Footer';
// import Navbar from '../../Components/User/Navbar';
// import { ThemeContext } from '../../Components/User/ThemeContext';

// const products = [

//   {
//         id: 19,
//         name: "Citrus Bloom Perfume",
//         gender: "Female",
//         description: "A refreshing perfume with notes of citrus and floral blooms.",
//         price: 4900,
//         quantity_available: 50,
//         image: "/src/assets/Fragrances/frag1.jpg",
//         categoryId: 3,
//       },
//       {
//         id: 20,
//         name: "Woody Spice Cologne",
//         gender: "Male",
//         description:
//           "A cologne with a blend of woody and spicy notes for a masculine scent.",
//         price: 5400,
//         quantity_available: 45,
//         image: "/src/assets/Fragrances/frag2.jpg",
//         categoryId: 3,
//       },
//       {
//         id: 21,
//         name: "Vanilla Blossom Perfume",
//         gender: "Female",
//         description: "A sweet and warm perfume with hints of vanilla and blossom.",
//         price: 5900,
//         quantity_available: 40,
//         image: "/src/assets/Fragrances/frag3.jpg",
//         categoryId: 3,
//       },
//       {
//         id: 22,
//         name: "Ocean Breeze Cologne",
//         gender: "Male",
//         description: "A fresh and aquatic cologne inspired by the ocean breeze.",
//         price: 5200,
//         quantity_available: 60,
//         image: "/src/assets/Fragrances/frag4.jpg",
//         categoryId: 3,
//       },
//       {
//         id: 23,
//         name: "Lavender Dream Perfume",
//         gender: "Female",
//         description: "A calming perfume with a blend of lavender and floral notes.",
//         price: 4700,
//         quantity_available: 55,
//         image: "/src/assets/Fragrances/frag5.jpg",
//         categoryId: 3,
//       },
//       {
//         id: 24,
//         name: "Amber Noir Cologne",
//         gender: "Male",
//         description: "A rich and deep cologne with notes of amber and musk.",
//         price: 5700,
//         quantity_available: 50,
//         image: "/src/assets/Fragrances/frag6.jpg",
//         categoryId: 3,
//       },
//       {
//         id: 25,
//         name: "Rose Petal Perfume",
//         gender: "Female",
//         description: "A delicate perfume with the essence of fresh rose petals.",
//         price: 4800,
//         quantity_available: 70,
//         image: "/src/assets/Fragrances/frag7.jpg",
//         categoryId: 3,
//       },
//       {
//         id: 26,
//         name: "Cedarwood Cologne",
//         gender: "Male",
//         description: "A bold cologne with the earthy scent of cedarwood.",
//         price: 5300,
//         quantity_available: 65,
//         image: "/src/assets/Fragrances/frag8.jpg",
//         categoryId: 3,
//       },
//       {
//         id: 27,
//         name: "Peony Bliss Perfume",
//         gender: "Female",
//         description: "A floral perfume with the fresh scent of peony blossoms.",
//         price: 5100,
//         quantity_available: 55,
//         image: "/src/assets/Fragrances/frag9.jpg",
//         categoryId: 3,
//       },
 
// ];

// const Fragrances = ({ addToCart }) => {
//   const { darkTheme } = useContext(ThemeContext);
//   const [sortGender, setSortGender] = useState('');

//   const handleSortChange = (event) => {
//     setSortGender(event.target.value);
//   };

//   const filteredProducts = sortGender
//     ? products.filter((product) => product.gender === sortGender)
//     : products;

//   return (
//     <div className={darkTheme ? 'bg-[#A6603A] text-white' : 'bg-[#efe3b8] text-[#3A1C0E]'}>
//       <Navbar />
//       <div className="p-5">
//         <div className='flex flex-col sm:flex-row justify-between items-center mb-4'>
//           <h1 className='text-2xl font-bold text-[#a87c3b]'>Fragrances</h1>
//           <div className='flex items-center mt-2 sm:mt-0'>
//             <label htmlFor='gender-sort' className='mr-2 text-[#a87c3b]'>Sort by Gender:</label>
//             <select
//               id='gender-sort'
//               value={sortGender}
//               onChange={handleSortChange}
//               className={`px-4 py-2 border rounded border-[#a87c3b] text-[#a87c3b] ${darkTheme ? 'bg-gray-700 text-white' : 'bg-[#f5e9d3] text-[#a87c3b]'}`}
//             >
//               <option value=''>All</option>
//               <option value='male'>Male</option>
//               <option value='female'>Female</option>
//             </select>
//           </div>
//           <div className='text-lg font-semibold text-[#a87c3b] mt-2 sm:mt-0'>
//             Showing All: {filteredProducts.length} Results
//           </div>
//         </div>
//         <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
//           {filteredProducts.map((product) => (
//             <ProductCard
//               key={product.id}
//               product={product}
//               addToCart={addToCart}
//             />
//           ))}
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default Fragrances;

import React, { useContext, useState } from 'react';
import ProductCard from './ProdctCard';
import Footer from '../../Components/User/Footer';
import Navbar from '../../Components/User/Navbar';
import { ThemeContext } from '../../Components/User/ThemeContext';

const products = [
  {
    id: 19,
    name: "Citrus Bloom Perfume",
    gender: "Female",
    description: "A refreshing perfume with notes of citrus and floral blooms.",
    price: 4900,
    quantity_available: 50,
    image: "https://images.unsplash.com/photo-1613521140785-e85e427f8002?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    categoryId: 3,
  },
  {
    id: 20,
    name: "Woody Spice Cologne",
    gender: "Male",
    description: "A cologne with a blend of woody and spicy notes for a masculine scent.",
    price: 5400,
    quantity_available: 45,
    image: "https://images.unsplash.com/photo-1624811742200-69166e7b7bcc?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    categoryId: 3,
  },
  {
    id: 21,
    name: "Vanilla Blossom Perfume",
    gender: "Female",
    description: "A sweet and warm perfume with hints of vanilla and blossom.",
    price: 5900,
    quantity_available: 40,
    image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    categoryId: 3,
  },
  {
    id: 22,
    name: "Ocean Breeze Cologne",
    gender: "Male",
    description: "A fresh and aquatic cologne inspired by the ocean breeze.",
    price: 5200,
    quantity_available: 60,
    image: "https://images.unsplash.com/photo-1615108395437-df128ad79e80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    categoryId: 3,
  },
  {
    id: 23,
    name: "Lavender Dream Perfume",
    gender: "Female",
    description: "A calming perfume with a blend of lavender and floral notes.",
    price: 4700,
    quantity_available: 55,
    image: "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    categoryId: 3,
  },
  {
    id: 24,
    name: "Amber Noir Cologne",
    gender: "Male",
    description: "A rich and deep cologne with notes of amber and musk.",
    price: 5700,
    quantity_available: 50,
    image: "https://images.unsplash.com/photo-1543422655-ac1c6ca993ed?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    categoryId: 3,
  },
  {
    id: 25,
    name: "Rose Petal Perfume",
    gender: "Female",
    description: "A delicate perfume with the essence of fresh rose petals.",
    price: 4800,
    quantity_available: 70,
    image: "https://images.unsplash.com/photo-1586025978898-43130390c617?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    categoryId: 3,
  },
  {
    id: 26,
    name: "Cedarwood Cologne",
    gender: "Male",
    description: "A bold cologne with the earthy scent of cedarwood.",
    price: 5300,
    quantity_available: 65,
    image: "https://images.unsplash.com/photo-1589493676751-8f4a014d95e5?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    categoryId: 3,
  },
  {
    id: 27,
    name: "Peony Bliss Perfume",
    gender: "Female",
    description: "A floral perfume with the fresh scent of peony blossoms.",
    price: 5100,
    quantity_available: 55,
    image: "https://images.unsplash.com/photo-1571206508927-2ef3026ada5d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    categoryId: 3,
  },
];

const Fragrances = ({ addToCart }) => {
  const { darkTheme } = useContext(ThemeContext);
  const [sortGender, setSortGender] = useState('');

  const handleSortChange = (event) => {
    setSortGender(event.target.value);
  };

  const filteredProducts = sortGender
    ? products.filter((product) => product.gender.toLowerCase() === sortGender.toLowerCase())
    : products;

  return (
    <div className={darkTheme ? 'bg-[#A6603A] text-white' : 'bg-[#efe3b8] text-[#3A1C0E]'}>
      <Navbar />
      <div className="p-5">
        <div className='flex flex-col sm:flex-row justify-between items-center mb-4'>
          <h1 className='text-2xl font-bold text-[#a87c3b]'>Fragrances</h1>
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

export default Fragrances;
