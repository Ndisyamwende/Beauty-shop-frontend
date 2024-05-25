import React, { useState } from "react";

function ProductCard({ product, addToCart }) {
  const [showPopup, setShowPopup] = useState(false);

  const handleAddToCartClick = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="p-4 bg-light-mode rounded shadow hover:shadow-lg">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover rounded mb-4"
      />
      <h3 className="text-lg font-semibold">{product.name}</h3>
      <p className="text-black">{product.price}</p>
      <button
        className="mt-2 px-1 py-1 bg-light-mode text-black rounded hover:bg-dark-mode border border-solid border-black"
        onClick={handleAddToCartClick}
      >
        Add to Cart
      </button>

      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-light-mode p-6 rounded shadow-lg max-w-sm w-full">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover rounded mb-4"
            />
            <h3 className="text-xl font-semibold">{product.name}</h3>
            <p className="text-black">{product.price}</p>
            <button
              className="mt-4 px-4 py-2 bg-dark-mode text-white rounded hover:bg-orange-950"
              onClick={() => {
                addToCart(product);
                handleClosePopup();
              }}
            >
              Add to Cart
            </button>
            <button
              className="mt-2 px-4 py-2 ml-4 bg-dark-mode text-black rounded hover:bg-orange-950"
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

export default ProductCard;
