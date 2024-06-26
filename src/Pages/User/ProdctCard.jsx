// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// function ProductCard({ product, addToCart }) {
//   const [showPopup, setShowPopup] = useState(false);
//   const [error, setError] = useState(null);
//   const token = "your-auth-token"; // Replace with your actual token retrieval logic

//   const handleAddToCartClick = async () => {
//     setShowPopup(true);

//     try {
//       const response = await fetch("https://beautyshop-backend-1.onrender.com/orderitem", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//         body: JSON.stringify({
//           productId: product.id,
//           quantity: 1, // Assuming a quantity of 1 for simplicity
//         }),
//       });

//       if (!response.ok) {
//         throw new Error(`Error: ${response.status}`);
//       }

//       // Update the cart state or perform any other necessary actions
//       if (addToCart) {
//         addToCart(product);
//       }

//       // Show success popup or message
//       alert("Added to cart successfully!");
//     } catch (error) {
//       setError(error.message);
//     }
//   };

//   const handleClosePopup = () => {
//     setShowPopup(false);
//   };

//   return (
//     <div className="p-4 bg-light-mode rounded shadow hover:shadow-lg">
//       <Link to={{ pathname: `/products/${product.id}`, state: { product } }}>
//         <img
//           src={product.image}
//           alt={product.name}
//           className="w-full h-48 object-cover rounded mb-4"
//         />
//         <h3 className="text-lg font-bold">{product.name}</h3>
//         <p>{product.description}</p>
//         <p className="text-xl font-medium">KSHS {product.price}</p>
//       </Link>
//       <button
//         className="mt-2 px-4 py-2 bg-light-mode text-black rounded hover:bg-dark-mode order border-solid border-dark-mode"
//         onClick={handleAddToCartClick}
//       >
//         Add to Cart
//       </button>

//       {showPopup && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//           <div className="bg-light-mode p-6 rounded shadow-lg max-w-sm w-full">
//             {error ? (
//               <p className="text-red-500">{error}</p>
//             ) : (
//               <>
//                 <img
//                   src={product.image}
//                   alt={product.name}
//                   className="w-full h-48 object-cover rounded mb-4"
//                 />
//                 <h3 className="text-xl font-semibold">{product.name}</h3>
//                 <p className="text-black">KSHS {product.price}</p>
//                 <button
//                   className="mt-4 px-4 py-2 bg-dark-mode text-white rounded hover:bg-orange-950"
//                   onClick={() => {
//                     addToCart(product);
//                     handleClosePopup();
//                   }}
//                 >
//                   Confirm
//                 </button>
//               </>
//             )}
//             <button
//               className="mt-2 px-4 py-2 bg-dark-mode text-black rounded hover:bg-orange-950"
//               onClick={handleClosePopup}
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default ProductCard;




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
