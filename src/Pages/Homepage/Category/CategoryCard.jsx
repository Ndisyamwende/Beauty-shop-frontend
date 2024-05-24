import React, { useState } from 'react';

function CategoryCard({ item, addToCart }) {
  const [showPopup, setShowPopup] = useState(false);

  const handleAddToCartClick = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="p-4 bg-white rounded shadow hover:shadow-lg">
      <img src={item.image} alt={item.title} className="w-full h-48 object-cover rounded mb-4" />
      <h3 className="text-lg font-semibold">{item.title}</h3>
      <p className="text-gray-700">{item.description}</p>
      <button
        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        onClick={handleAddToCartClick}
      >
        Add to Cart
      </button>

      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-lg max-w-sm w-full">
            <img src={item.image} alt={item.title} className="w-full h-48 object-cover rounded mb-4" />
            <h3 className="text-xl font-semibold">{item.title}</h3>
            <p className="text-gray-700">{item.description}</p>
            <button
              className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
              onClick={() => {
                addToCart(item);
                handleClosePopup();
              }}
            >
              Add to Cart
            </button>
            <button
              className="mt-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
              onClick={handleClosePopup}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CategoryCard;
