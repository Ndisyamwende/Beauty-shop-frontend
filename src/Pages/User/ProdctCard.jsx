import React, { useState } from "react";
import { Link } from "react-router-dom";

function ProductCard({ product, addToCart }) {
  const [showPopup, setShowPopup] = useState(false);

  const handleAddToCartClick = async () => {
    setShowPopup(true);

    try {
      const response = await fetch("https://beautyshop-backend-1.onrender.com/orderitem", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          productId: product.id,
          quantity: 1, // Assuming a quantity of 1 for simplicity
        }),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      // Update the cart state or perform any other necessary actions
      if (addToCart) {
        addToCart(product);
      }

      // Show success popup or message
      alert("Added to cart successfully!");
    } catch (error) {
      setError(error.message);
    }
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="p-4 bg-white rounded shadow hover:shadow-lg">
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded mb-4" />
      <h3 className="text-lg font-semibold">{product.name}</h3>
      <p className="text-gray-700">{product.description}</p>
      <button
        className="mt-2 px-4 py-2 bg-light-mode text-black rounded hover:bg-dark-mode order border-solid border-dark-mode"
        onClick={handleAddToCartClick}
      >
        Add to Cart
      </button>

      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-lg max-w-sm w-full">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded mb-4" />
            <h3 className="text-xl font-semibold">{product.name}</h3>
            <p className="text-gray-700">{product.description}</p>
            <button
              className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
              onClick={() => {
                addToCart(product);
                handleClosePopup();
              }}
            >
              Add to Cart
            </button>
            <button
              className="mt-2 px-4 py-2 bg-dark-mode text-black rounded hover:bg-orange-950"
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