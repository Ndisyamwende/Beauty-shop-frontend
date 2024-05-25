// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import Footer from '../../Components/User/Footer';
// import Navbar from '../../Components/User/Navbar';
// import Modal from './Modal';
// import { ThemeContext } from '../../Components/User/ThemeContext';

// const Checkout = () => {
//   const [deliveryDetails, setDeliveryDetails] = useState({
//     method: 'Door Delivery',
//     dateRange: 'Delivery between 09 May and 25 May',
//   });
//   const { darkTheme } = useContext(ThemeContext);
//   const [paymentMethod, setPaymentMethod] = useState('');
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [orderDetails, setOrderDetails] = useState(null);
//   const [mpesaNumber, setMpesaNumber] = useState('');
//   const [visaDetails, setVisaDetails] = useState({
//     cardNumber: '',
//     expiryDate: '',
//     cvv: ''
//   });
//   const [isProcessingPayment, setIsProcessingPayment] = useState(false);
//   const [formErrors, setFormErrors] = useState({});

//   const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
//   const totalAmount = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
//   const deliveryFee = 300;
//   const customFee = 50;
//   const finalTotal = totalAmount + deliveryFee + customFee;

//   const handlePaymentMethodChange = (event) => {
//     setPaymentMethod(event.target.value);
//     setFormErrors({});
//   };

//   const validateMpesa = () => {
//     const errors = {};
//     if (!mpesaNumber) {
//       errors.mpesaNumber = 'Mpesa number is required.';
//     } else if (!/^\d{10}$/.test(mpesaNumber)) {
//       errors.mpesaNumber = 'Mpesa number must be 10 digits.';
//     }
//     return errors;
//   };

//   const validateVisa = () => {
//     const errors = {};
//     if (!visaDetails.cardNumber) {
//       errors.cardNumber = 'Card number is required.';
//     } else if (!/^\d{16}$/.test(visaDetails.cardNumber)) {
//       errors.cardNumber = 'Card number must be 16 digits.';
//     }
//     if (!visaDetails.expiryDate) {
//       errors.expiryDate = 'Expiry date is required.';
//     }
//     if (!visaDetails.cvv) {
//       errors.cvv = 'CVV is required.';
//     } else if (!/^\d{3,4}$/.test(visaDetails.cvv)) {
//       errors.cvv = 'CVV must be 3 or 4 digits.';
//     }
//     return errors;
//   };

//   const handleMpesaPayment = async () => {
//     const errors = validateMpesa();
//     if (Object.keys(errors).length > 0) {
//       setFormErrors(errors);
//       return;
//     }

//     setIsProcessingPayment(true);
//     // Simulate an API call to process Mpesa payment
//     setTimeout(() => {
//       setIsProcessingPayment(false);
//       confirmOrder();
//     }, 2000);
//   };

//   const handleVisaPayment = async () => {
//     const errors = validateVisa();
//     if (Object.keys(errors).length > 0) {
//       setFormErrors(errors);
//       return;
//     }

//     setIsProcessingPayment(true);
//     // Simulate an API call to process Visa card payment
//     setTimeout(() => {
//       setIsProcessingPayment(false);
//       confirmOrder();
//     }, 2000);
//   };

//   const confirmOrder = () => {
//     // Simulate generating new order details
//     const newOrderDetails = {
//       name: 'John Doe',
//       address: '1234 Elm Street, Nairobi',
//       phone: '+254 712345678',
//       deliveryDetails: deliveryDetails,
//       paymentMethod: paymentMethod,
//       items: cartItems,
//       totalAmount: totalAmount,
//       deliveryFee: deliveryFee,
//       customFee: customFee,
//       finalTotal: finalTotal,
//     };

//     setOrderDetails(newOrderDetails);
//     setIsModalOpen(true);
//   };

//   const handleConfirmOrder = () => {
//     if (!paymentMethod) {
//       alert('Please select a payment method.');
//       return;
//     }

//     if (paymentMethod === 'Mpesa') {
//       handleMpesaPayment();
//     } else if (paymentMethod === 'Visa card') {
//       handleVisaPayment();
//     }
//   };

//   const handleCloseModal = () => {
//     setIsModalOpen(false);
//     // Reset the cart or navigate to another page if needed
//   };

//   return (
//     <div>
//       <Navbar />
//       <div className="bg-[#efe3b8] p-5 min-h-screen">
   
//         <div className="max-w-5xl mx-auto bg-yellow-100 p-6 shadow-md rounded-lg border border-gray-300">
//           <h1 className="text-2xl font-bold mb-6 text-[#a87c3b]">Checkout</h1>
//           <div className="space-y-6">
//             <div className="p-4 border border-gray-300 rounded">
//               <h2 className="text-lg font-bold mb-2">1. CUSTOMER ADDRESS</h2>
//               <p>Auto-generated after order confirmation</p>
//               <button className="text-sm text-blue-500 mt-2">Change</button>
//             </div>
//             <div className="p-4 border border-gray-300 rounded">
//               <h2 className="text-lg font-bold mb-2">2. DELIVERY DETAILS</h2>
//               <p>{deliveryDetails.method}</p>
//               <p>{deliveryDetails.dateRange}</p>
//               <button className="text-sm text-blue-500 mt-2">Change</button>
//             </div>
//             <div className="p-4 border border-gray-300 rounded">
//               <h2 className="text-lg font-bold mb-2">3. PAYMENT METHOD</h2>
//               <div className="flex space-x-4">
//                 <label className="flex items-center">
//                   <input
//                     type="radio"
//                     name="payment"
//                     value="Mpesa"
//                     checked={paymentMethod === 'Mpesa'}
//                     onChange={handlePaymentMethodChange}
//                     className="mr-2"
//                   />
//                   Mpesa
//                 </label>
//                 <label className="flex items-center">
//                   <input
//                     type="radio"
//                     name="payment"
//                     value="Visa card"
//                     checked={paymentMethod === 'Visa card'}
//                     onChange={handlePaymentMethodChange}
//                     className="mr-2"
//                   />
//                   Visa card
//                 </label>
//               </div>
//             </div>
//             {paymentMethod === 'Mpesa' && (
//               <div className="p-4 border border-gray-300 rounded">
//                 <h3 className="text-lg font-bold mb-2">Mpesa Payment</h3>
//                 <input
//                   type="text"
//                   value={mpesaNumber}
//                   onChange={(e) => setMpesaNumber(e.target.value)}
//                   placeholder="Enter your Mpesa number"
//                   className="w-full px-4 py-2 border rounded"
//                 />
//                 {formErrors.mpesaNumber && <p className="text-red-500 text-sm">{formErrors.mpesaNumber}</p>}
//                 <button
//                   onClick={handleMpesaPayment}
//                   className="mt-4 w-full py-2 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600"
//                 >
//                   Pay with Mpesa
//                 </button>
//               </div>
//             )}
//             {paymentMethod === 'Visa card' && (
//               <div className="p-4 border border-gray-300 rounded">
//                 <h3 className="text-lg font-bold mb-2">Visa Card Payment</h3>
//                 <input
//                   type="text"
//                   value={visaDetails.cardNumber}
//                   onChange={(e) => setVisaDetails({ ...visaDetails, cardNumber: e.target.value })}
//                   placeholder="Card Number"
//                   className="w-full px-4 py-2 border rounded mb-2"
//                 />
//                 {formErrors.cardNumber && <p className="text-red-500 text-sm">{formErrors.cardNumber}</p>}
//                 <input
//                   type="text"
//                   value={visaDetails.expiryDate}
//                   onChange={(e) => setVisaDetails({ ...visaDetails, expiryDate: e.target.value })}
//                   placeholder="Expiry Date"
//                   className="w-full px-4 py-2 border rounded mb-2"
//                 />
//                 {formErrors.expiryDate && <p className="text-red-500 text-sm">{formErrors.expiryDate}</p>}
//                 <input
//                   type="text"
//                   value={visaDetails.cvv}
//                   onChange={(e) => setVisaDetails({ ...visaDetails, cvv: e.target.value })}
//                   placeholder="CVV"
//                   className="w-full px-4 py-2 border rounded mb-2"
//                 />
//                 {formErrors.cvv && <p className="text-red-500 text-sm">{formErrors.cvv}</p>}
//                 <button
//                   onClick={handleVisaPayment}
//                   className="mt-4 w-full py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600"
//                 >
//                   Pay with Visa
//                 </button>
//               </div>
//             )}
//             <div className="bg-yellow-100 p-6 shadow-md rounded-lg border border-gray-300 mt-4">
//               <h3 className="font-semibold">Order Summary</h3>
//               <div className="flex justify-between mt-2">
//                 <span>Item's total ({cartItems.length})</span>
//                 <span>KSHS {totalAmount}</span>
//               </div>
//               <div className="flex justify-between mt-2">
//                 <span>Delivery Fees</span>
//                 <span>KSHS {deliveryFee}</span>
//               </div>
//               <div className="flex justify-between mt-2">
//                 <span>Custom Fee</span>
//                 <span>KSHS {customFee}</span>
//               </div>
//               <div className="flex justify-between mt-2 font-bold">
//                 <span>TOTAL</span>
//                 <span>KSHS {finalTotal}</span>
//               </div>
//               <button
//                 onClick={handleConfirmOrder}
//                 disabled={isProcessingPayment}
//                 className="mt-4 w-full py-2 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600 disabled:bg-gray-400"
//               >
//                 {isProcessingPayment ? 'Processing...' : 'CONFIRM ORDER'}
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//       <Footer />
//       <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
//         {orderDetails && (
//           <>
//             <h2 className="text-xl font-bold mb-4">Order Confirmation</h2>
//             <div>
//               <h3 className="font-semibold">Customer Address</h3>
//               <p>{orderDetails.name}</p>
//               <p>{orderDetails.address}</p>
//               <p>{orderDetails.phone}</p>
//             </div>
//             <div className="mt-4">
//               <h3 className="font-semibold">Delivery Details</h3>
//               <p>{orderDetails.deliveryDetails.method}</p>
//               <p>{orderDetails.deliveryDetails.dateRange}</p>
//             </div>
//             <div className="mt-4">
//               <h3 className="font-semibold">Payment Method</h3>
//               <p>{orderDetails.paymentMethod}</p>
//             </div>
//             <div className="mt-4">
//               <h3 className="font-semibold">Order Summary</h3>
//               <div className="flex justify-between mt-2">
//                 <span>Item's total ({orderDetails.items.length})</span>
//                 <span>KSHS {orderDetails.totalAmount}</span>
//               </div>
//               <div className="flex justify-between mt-2">
//                 <span>Delivery Fees</span>
//                 <span>KSHS {orderDetails.deliveryFee}</span>
//               </div>
//               <div className="flex justify-between mt-2">
//                 <span>Custom Fee</span>
//                 <span>KSHS {orderDetails.customFee}</span>
//               </div>
//               <div className="flex justify-between mt-2 font-bold">
//                 <span>TOTAL</span>
//                 <span>KSHS {orderDetails.finalTotal}</span>
//               </div>
//             </div>
//           </>
//         )}
//       </Modal>
//     </div>
//   );
// };

// export default Checkout;




import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../../Components/User/Footer';
import Navbar from '../../Components/User/Navbar';
import Modal from './Modal';
// import { ThemeContext } from '../../Components/User/ThemeContext';
import { ThemeContext } from '../../Components/User/ThemeContext';
const Checkout = () => {
  const { darkTheme } = useContext(ThemeContext);
  const [deliveryDetails, setDeliveryDetails] = useState({
    method: 'Door Delivery',
    dateRange: 'Delivery between 09 May and 25 May',
  });
  const [paymentMethod, setPaymentMethod] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [orderDetails, setOrderDetails] = useState(null);
  const [mpesaNumber, setMpesaNumber] = useState('');
  const [visaDetails, setVisaDetails] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
  const totalAmount = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const deliveryFee = 300;
  const customFee = 50;
  const finalTotal = totalAmount + deliveryFee + customFee;

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
    setFormErrors({});
  };

  const validateMpesa = () => {
    const errors = {};
    if (!mpesaNumber) {
      errors.mpesaNumber = 'Mpesa number is required.';
    } else if (!/^\d{10}$/.test(mpesaNumber)) {
      errors.mpesaNumber = 'Mpesa number must be 10 digits.';
    }
    return errors;
  };

  const validateVisa = () => {
    const errors = {};
    if (!visaDetails.cardNumber) {
      errors.cardNumber = 'Card number is required.';
    } else if (!/^\d{16}$/.test(visaDetails.cardNumber)) {
      errors.cardNumber = 'Card number must be 16 digits.';
    }
    if (!visaDetails.expiryDate) {
      errors.expiryDate = 'Expiry date is required.';
    }
    if (!visaDetails.cvv) {
      errors.cvv = 'CVV is required.';
    } else if (!/^\d{3,4}$/.test(visaDetails.cvv)) {
      errors.cvv = 'CVV must be 3 or 4 digits.';
    }
    return errors;
  };

  const handleMpesaPayment = async () => {
    const errors = validateMpesa();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setIsProcessingPayment(true);
    setTimeout(() => {
      setIsProcessingPayment(false);
      confirmOrder();
    }, 2000);
  };

  const handleVisaPayment = async () => {
    const errors = validateVisa();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setIsProcessingPayment(true);
    setTimeout(() => {
      setIsProcessingPayment(false);
      confirmOrder();
    }, 2000);
  };

  const confirmOrder = () => {
    const newOrderDetails = {
      name: 'John Doe',
      address: '1234 Elm Street, Nairobi',
      phone: '+254 712345678',
      deliveryDetails: deliveryDetails,
      paymentMethod: paymentMethod,
      items: cartItems,
      totalAmount: totalAmount,
      deliveryFee: deliveryFee,
      customFee: customFee,
      finalTotal: finalTotal,
    };

    setOrderDetails(newOrderDetails);
    setIsModalOpen(true);
  };

  const handleConfirmOrder = () => {
    if (!paymentMethod) {
      alert('Please select a payment method.');
      return;
    }

    if (paymentMethod === 'Mpesa') {
      handleMpesaPayment();
    } else if (paymentMethod === 'Visa card') {
      handleVisaPayment();
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={darkTheme ? 'bg-[#854A2D] text-white' : 'bg-[#efe3b8] text-black'}>
      <Navbar />
      <div className="flex justify-center p-8 min-h-screen">
        <div className="w-full max-w-5xl space-y-8">
          <div className="p-6 shadow-md rounded-lg border border-gray-300">
            <h1 className="text-2xl font-bold mb-6">Checkout</h1>
            <div className="space-y-6">
              <div className="p-4 border border-gray-300 rounded">
                <h2 className="text-lg font-bold mb-2">1. CUSTOMER ADDRESS</h2>
                <p>Auto-generated after order confirmation</p>
                <button className="text-sm text-blue-500 mt-2">Change</button>
              </div>
              <div className="p-4 border border-gray-300 rounded">
                <h2 className="text-lg font-bold mb-2">2. DELIVERY DETAILS</h2>
                <p>{deliveryDetails.method}</p>
                <p>{deliveryDetails.dateRange}</p>
                <button className="text-sm text-blue-500 mt-2">Change</button>
              </div>
              <div className="p-4 border border-gray-300 rounded">
                <h2 className="text-lg font-bold mb-2">3. PAYMENT METHOD</h2>
                <div className="flex space-x-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="payment"
                      value="Mpesa"
                      checked={paymentMethod === 'Mpesa'}
                      onChange={handlePaymentMethodChange}
                      className="mr-2 text-black"
                    />
                    Mpesa
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="payment"
                      value="Visa card"
                      checked={paymentMethod === 'Visa card'}
                      onChange={handlePaymentMethodChange}
                      className="mr-2 text-black"
                    />
                    Visa card
                  </label>
                </div>
              </div>
              {paymentMethod === 'Mpesa' && (
                <div className="p-4 border border-gray-300 rounded">
                  <h3 className="text-lg font-bold mb-2">Mpesa Payment</h3>
                  <input
                    type="text"
                    value={mpesaNumber}
                    onChange={(e) => setMpesaNumber(e.target.value)}
                    placeholder="Enter your Mpesa number"
                    className="w-full px-4 py-2 border rounded text-black"
                  />
                  {formErrors.mpesaNumber && (
                    <p className="text-red-500 text-sm">{formErrors.mpesaNumber}</p>
                  )}
                  <button
                    onClick={handleMpesaPayment}
                    className="mt-4 w-full py-2 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600"
                  >
                    Pay with Mpesa
                  </button>
                </div>
              )}
              {paymentMethod === 'Visa card' && (
                <div className="p-4 border border-gray-300 rounded">
                  <h3 className="text-lg font-bold mb-2">Visa Card Payment</h3>
                  <input
                    type="text"
                    value={visaDetails.cardNumber}
                    onChange={(e) => setVisaDetails({ ...visaDetails, cardNumber: e.target.value })}
                    placeholder="Card Number"
                    className="w-full px-4 py-2 border rounded mb-2"
                  />
                  {formErrors.cardNumber && (
                    <p className="text-red-500 text-sm">{formErrors.cardNumber}</p>
                  )}
                  <input
                    type="text"
                    value={visaDetails.expiryDate}
                    onChange={(e) => setVisaDetails({ ...visaDetails, expiryDate: e.target.value })}
                    placeholder="Expiry Date"
                    className="w-full px-4 py-2 border rounded mb-2"
                  />
                  {formErrors.expiryDate && (
                    <p className="text-red-500 text-sm">{formErrors.expiryDate}</p>
                  )}
                  <input
                    type="text"
                    value={visaDetails.cvv}
                    onChange={(e) => setVisaDetails({ ...visaDetails, cvv: e.target.value })}
                    placeholder="CVV"
                    className="w-full px-4 py-2 border rounded mb-2"
                  />
                  {formErrors.cvv && (
                    <p className="text-red-500 text-sm">{formErrors.cvv}</p>
                  )}
                  <button
                    onClick={handleVisaPayment}
                    className="mt-4 w-full py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600"
                  >
                    Pay with Visa
                  </button>
                </div>
              )}
              <div className="p-6 shadow-md rounded-lg border border-gray-300 mt-4">
                <h3 className="font-semibold">Order Summary</h3>
                <div className="flex justify-between mt-2">
                  <span>Item's total ({cartItems.length})</span>
                  <span>KSHS {totalAmount}</span>
                </div>
                <div className="flex justify-between mt-2">
                  <span>Delivery Fees</span>
                  <span>KSHS {deliveryFee}</span>
                </div>
                <div className="flex justify-between mt-2">
                  <span>Custom Fee</span>
                  <span>KSHS {customFee}</span>
                </div>
                <div className="flex justify-between mt-2 font-bold">
                  <span>TOTAL</span>
                  <span>KSHS {finalTotal}</span>
                </div>
                <button
                  onClick={handleConfirmOrder}
                  disabled={isProcessingPayment}
                  className="mt-4 w-full py-2 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600 disabled:bg-gray-400"
                >
                  {isProcessingPayment ? 'Processing...' : 'CONFIRM ORDER'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        {orderDetails && (
          <>
            <h2 className="text-xl font-bold mb-4">Order Confirmation</h2>
            <div>
              <h3 className="font-semibold">Customer Address</h3>
              <p>{orderDetails.name}</p>
              <p>{orderDetails.address}</p>
              <p>{orderDetails.phone}</p>
            </div>
            <div className="mt-4">
              <h3 className="font-semibold">Delivery Details</h3>
              <p>{orderDetails.deliveryDetails.method}</p>
              <p>{orderDetails.deliveryDetails.dateRange}</p>
            </div>
            <div className="mt-4">
              <h3 className="font-semibold">Payment Method</h3>
              <p>{orderDetails.paymentMethod}</p>
            </div>
            <div className="mt-4">
              <h3 className="font-semibold">Order Summary</h3>
              <div className="flex justify-between mt-2">
                <span>Item's total ({orderDetails.items.length})</span>
                <span>KSHS {orderDetails.totalAmount}</span>
              </div>
              <div className="flex justify-between mt-2">
                <span>Delivery Fees</span>
                <span>KSHS {orderDetails.deliveryFee}</span>
              </div>
              <div className="flex justify-between mt-2">
                <span>Custom Fee</span>
                <span>KSHS {orderDetails.customFee}</span>
              </div>
              <div className="flex justify-between mt-2 font-bold">
                <span>TOTAL</span>
                <span>KSHS {orderDetails.finalTotal}</span>
              </div>
            </div>
          </>
        )}
      </Modal>
    </div>
  );
};

export default Checkout;
