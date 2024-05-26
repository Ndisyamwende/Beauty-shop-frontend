import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../../Components/User/Footer";
import Navbar from "../../Components/User/Navbar";

const MyCart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchCartItems = () => {
      try {
        // Retrieve the cart items from local storage
        const cart = JSON.parse(localStorage.getItem("cart")) || [];
        setCartItems(cart);
      } catch (error) {
        setError("Failed to fetch cart items");
      } finally {
        setLoading(false);
      }
    };

    fetchCartItems();
  }, []);

  const incrementQuantity = (id) => {
    const updatedCartItems = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCartItems(updatedCartItems);
    localStorage.setItem("cart", JSON.stringify(updatedCartItems));
  };

  const decrementQuantity = (id) => {
    const updatedCartItems = cartItems.map((item) =>
      item.id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setCartItems(updatedCartItems);
    localStorage.setItem("cart", JSON.stringify(updatedCartItems));
  };

  const removeItem = (id) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCartItems);
    localStorage.setItem("cart", JSON.stringify(updatedCartItems));
  };

  const totalAmount = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleCheckout = () => {
    navigate("/checkout");
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <Navbar />
      <div className="flex justify-center p-8 bg-light-mode min-h-screen">
        <div className="w-full max-w-5xl flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-8">
          <div className="flex-1 bg-light-mode p-6 shadow-md rounded-lg border border-solid border-dark-mode">
            <h2 className="text-xl font-bold mb-4">
              CART ({cartItems.length})
            </h2>
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col sm:flex-row items-center p-4 bg-light-mode border border-solid border-dark-mode"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded-md mr-4 mb-4 sm:mb-0"
                  />
                  <div className="flex-1 mb-4 sm:mb-0">
                    <h3 className="font-semibold">{item.name.toUpperCase()}</h3>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-sm text-red-500"
                    >
                      REMOVE
                    </button>
                  </div>
                  <div className="flex items-center space-x-2 mb-4 sm:mb-0">
                    <button
                      onClick={() => decrementQuantity(item.id)}
                      className="px-2 py-1 bg-light-mode border border-solid border-dark-mode"
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => incrementQuantity(item.id)}
                      className="px-2 py-1 bg-light-mode border border-solid border-dark-mode"
                    >
                      +
                    </button>
                  </div>
                  <div className="ml-4">
                    <span className="font-bold">
                      KSHS {item.price * item.quantity}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full lg:w-1/3 bg-light-mode p-6 shadow-md rounded-lg border border-solid border-dark-mode">
            <h3 className="font-semibold">CART SUMMARY</h3>
            <div className="flex justify-between mt-2">
              <span>Subtotal</span>
              <span>KSHS {totalAmount}</span>
            </div>
            <p className="text-sm text-gray-500 mt-2">
              Delivery fees not yet added
            </p>

            <button
              onClick={handleCheckout}
              className="mt-4 w-full py-2 bg-dark-mode text-white font-semibold rounded-md hover:bg-orange-950"
            >
              CHECKOUT (KSHS {totalAmount})
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MyCart;
