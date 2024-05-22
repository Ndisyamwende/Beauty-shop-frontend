import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MyCart = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Highlighter', price: 500, quantity: 1, image: 'https://images.unsplash.com/photo-1597764693661-c3e6fd3d40f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDV8fGhpcmxpZ2h0ZXJ8ZW58MHx8fHwxNjU3OTkxMTM5&ixlib=rb-1.2.1&q=80&w=400' },
    { id: 2, name: 'Foundation', price: 1500, quantity: 1, image: 'https://images.unsplash.com/photo-1512317347087-5b9107cd24b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGZvdW5kYXRpb258ZW58MHx8fHwxNjU3OTkxMTE1&ixlib=rb-1.2.1&q=80&w=400' },
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





  // useEffect(() => {
  //   const token = localStorage.getItem("token");

  //   if (!token) {
  //     console.error("Token not found");
  //     return;
  //   }

  //   console.log("Using token:", token);

  //   fetch("http://127.0.0.1:5500/orderitem", {
  //     method: "GET",
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //     },
  //   })
  //     .then((response) => {
  //       console.log("Response status:", response.status);
  //       console.log("Response headers:", response.headers);

  //       if (!response.ok) {
  //         throw new Error(`HTTP error! status: ${response.status}`);
  //       }
  //       return response.json();
  //     })
  //     .then((data) => {
  //       console.log("Fetched data:", data);

  //       if (data && data.users) {
  //         const filteredUsers = data.users.filter(
  //           (user) => user.role === "user"
  //         );
  //         setUsers(filteredUsers);
  //       } else {
  //         console.error("Unexpected data format:", data);
  //       }
  //     })
  //     .catch((error) => console.error("Error fetching data:", error));
  // }, []);



  return (
    <div className="flex justify-center p-8 bg-yellow-100 min-h-screen">
      <div className="w-full max-w-5xl flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-8">
        <div className="flex-1 bg-yellow-100 p-6 shadow-md rounded-lg border border-gray-300">
          <h2 className="text-xl font-bold mb-4">CART ({cartItems.length})</h2>
          <div className="space-y-4">
            {cartItems.map(item => (
              <div key={item.id} className="flex items-center p-4 bg-yellow-100 border-t border-b border-gray-300">
                <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-md mr-4" />
                <div className="flex-1">
                  <h3 className="font-semibold">{item.name.toUpperCase()}</h3>
                  <button onClick={() => removeItem(item.id)} className="text-sm text-red-500">REMOVE</button>
                </div>
                <div className="flex items-center space-x-2">
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
        </div>
      </div>
    </div>
  );
};

export default MyCart;

