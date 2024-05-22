import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../../Components/User/Footer';
import { Link } from 'react-router-dom';
import CheckoutForm from './Checkout';

const MyCart = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Highlighter', price: 500, quantity: 1, image: 'https://images.unsplash.com/photo-1557205465-f3762edea6d3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFrZXVwJTIwZm91bmRhdGlvbnxlbnwwfHwwfHx8MA%3D%3D' },
    { id: 2, name: 'Foundation', price: 1500, quantity: 1, image: 'https://images.unsplash.com/photo-1547887538-047f814bfb64?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  ]);

  const navigate = useNavigate();

  const incrementQuantity = (id) => {
    setCartItems(cartItems.map(item => item.id === id ? { ...item, quantity: item.quantity + 1 } : item));
  };

  const decrementQuantity = (id) => {
    setCartItems(cartItems.map(item => item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item));
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const totalAmount = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleCheckout = () => {
    navigate('/checkout');
  };

  return (
    <div>
      <div className="flex justify-center p-8 bg-yellow-100 min-h-screen">
        <div className="w-full max-w-5xl flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-8">
          <div className="flex-1 bg-yellow-100 p-6 shadow-md rounded-lg border border-gray-300">
            <h2 className="text-xl font-bold mb-4">CART ({cartItems.length})</h2>
            <div className="space-y-4">
              {cartItems.map(item => (
                <div key={item.id} className="flex flex-col sm:flex-row items-center p-4 bg-yellow-100 border-t border-b border-gray-300">
                  <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-md mr-4 mb-4 sm:mb-0" />
                  <div className="flex-1 mb-4 sm:mb-0">
                    <h3 className="font-semibold">{item.name.toUpperCase()}</h3>
                    <button onClick={() => removeItem(item.id)} className="text-sm text-red-500">REMOVE</button>
                  </div>
                  <div className="flex items-center space-x-2 mb-4 sm:mb-0">
                    <button onClick={() => decrementQuantity(item.id)} className="px-2 py-1 bg-gray-200 border border-gray-400 rounded">-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => incrementQuantity(item.id)} className="px-2 py-1 bg-gray-200 border border-gray-400 rounded">+</button>
                  </div>
                  <div className="ml-4">
                    <span className="font-bold">KSHS {item.price * item.quantity}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full lg:w-1/3 bg-yellow-100 p-6 shadow-md rounded-lg border border-gray-300">
            <h3 className="font-semibold">CART SUMMARY</h3>
            <div className="flex justify-between mt-2">
              <span>Subtotal</span>
              <span>KSHS {totalAmount}</span>
            </div>
            <p className="text-sm text-gray-500 mt-2">Delivery fees not yet added</p>
           
            <button 
              onClick={handleCheckout}
              className="mt-4 w-full py-2 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600">
              CHECKOUT (KSHS {totalAmount})
            </button>
            
{/*    */}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MyCart;
