import React from 'react';
import { useNavigate } from 'react-router-dom';
import SearchBar from '../Components/Searchbar'; // Import the SearchBar component
import Footer from '../Components/Footer'; // Import the Footer component

const Homepage = () => {
  const navigate = useNavigate();

  return (
    
    <div className="bg-gray-100 min-h-screen p-6" >
      <SearchBar className="mb-6" />
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        <div
          className="bg-yellow-200 rounded overflow-hidden shadow-md cursor-pointer"
          onClick={() => navigate('/skincare')}
        >
          
          <img src="path/to/skin-care.jpg" alt="Skin care" className="w-full h-48 object-cover" />
          <h2 className="text-xl font-bold p-4 text-center">Skincare</h2>
        </div>
        <div
          className="bg-yellow-200 rounded overflow-hidden shadow-md cursor-pointer"
          onClick={() => navigate('/makeup')}
        >
          <img src="path/to/makeup.jpg" alt="Makeup" className="w-full h-48 object-cover" />
          <h2 className="text-xl font-bold p-4 text-center">Makeup</h2>
        </div>
        <div
          className="bg-yellow-200 rounded overflow-hidden shadow-md cursor-pointer"
          onClick={() => navigate('/fragrances')}
        >
          <img src="path/to/fragrances.jpg" alt="Fragrances" className="w-full h-48 object-cover" />
          <h2 className="text-xl font-bold p-4 text-center">Fragrances</h2>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Homepage;
