import React, { useState } from "react";
import { Link } from "react-router-dom";

function ProductCard({ product, addToCart }) {
  const [showPopup, setShowPopup] = useState(false);
  const [error, setError] = useState(null);

  const handleAddToCartClick = () => {
    setShowPopup(true);

    try {
      // Retrieve the current cart from local storage
      const cart = JSON.parse(localStorage.getItem("cart")) || [];

      // Check if the product is already in the cart
      const existingProduct = cart.find((item) => item.id === product.id);

      if (existingProduct) {
        // If the product is already in the cart, increase the quantity
        existingProduct.quantity += 1;
      } else {
        // If the product is not in the cart, add it with quantity 1
        cart.push({ ...product, quantity: 1 });
      }

      // Save the updated cart to local storage
      localStorage.setItem("cart", JSON.stringify(cart));

      // Show success popup or message
      alert("Added to cart successfully!");
    } catch (error) {
      setError("Failed to add to cart");
    }
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="p-4 bg-light-mode rounded shadow hover:shadow-lg">
      <Link to={`/products/${product.id}`} state={{ product }}>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover rounded mb-4"
        />
        <h3 className="text-xl font-bold">{product.name}</h3>
        <p className="text-medium font-medium">KSHS {product.price}</p>
      </Link>
      <button
        className="mt-2 px-4 py-2 bg-light-mode text-black rounded hover:bg-dark-mode border border-solid border-dark-mode"
        onClick={handleAddToCartClick}
      >
        Add to Cart
      </button>

      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-light-mode p-6 rounded shadow-lg max-w-sm w-full">
            {error ? (
              <p className="text-red-500">{error}</p>
            ) : (
              <>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover rounded mb-4"
                />
                <h3 className="text-xl font-semibold">{product.name}</h3>
                <p className="text-black">KSHS {product.price}</p>
                <button
                  className="mt-4 px-4 py-2 bg-dark-mode text-white rounded hover:bg-orange-950"
                  onClick={handleClosePopup}
                >
                  Confirm
                </button>
              </>
            )}
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
