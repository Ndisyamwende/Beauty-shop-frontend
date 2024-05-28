import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../../Components/User/Footer';
import Navbar from '../../Components/User/Navbar';
import Modal from './Modal';

const Checkout = () => {
  const [customerDetails, setCustomerDetails] = useState({
    name: '',
    address: '',
    phone: ''
  });
  const [deliveryDetails, setDeliveryDetails] = useState({
    method: 'Door Delivery',
    dateRange: 'Delivery between 09 May and 25 May'
  });
  const [paymentMethod, setPaymentMethod] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [orderDetails, setOrderDetails] = useState(null);
  const [mpesaNumber, setMpesaNumber] = useState('');
  const [visaDetails, setVisaDetails] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: ''
  });
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [isEditingCustomer, setIsEditingCustomer] = useState(true);
  const [isEditingDelivery, setIsEditingDelivery] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchCartItems = () => {
      try {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        setCartItems(cart);
      } catch (error) {
        console.error("Failed to fetch cart items", error);
      }
    };

    fetchCartItems();
  }, []);

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
      setSuccessMessage('Payment of Ksh ${finalTotal} was successful!');
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
      setSuccessMessage('Payment of Ksh ${finalTotal} was successful!');
    }, 2000);
  };

  const confirmOrder = () => {
    const newOrderDetails = {
      name: customerDetails.name,
      address: customerDetails.address,
      phone: customerDetails.phone,
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

  const handleEditCustomerDetails = (e) => {
    e.preventDefault();
    setIsEditingCustomer(false);
  };

  const handleEditDeliveryDetails = (e) => {
    e.preventDefault();
    setIsEditingDelivery(false);
  };

  return (
    <div>
      <Navbar />
      <div className="bg-light-mode p-5 min-h-screen">
        <div className="max-w-5xl mx-auto bg-light-mode p-6 shadow-md rounded-lg border border-solid border-dark-mode">
          <h1 className="text-2xl font-bold mb-6 text-black">Checkout</h1>
          <div className="space-y-6">
            <div className="p-4 border border-solid border-dark-mode  rounded">
              <h2 className="text-lg font-bold mb-2">1. CUSTOMER ADDRESS</h2>
              {!isEditingCustomer ? (
                <>
                  <p>{customerDetails.name}</p>
                  <p>{customerDetails.address}</p>
                  <p>{customerDetails.phone}</p>
                  <button
                    onClick={() => setIsEditingCustomer(true)}
                    className="text-sm text-red-500 mt-2"
                  >
                    Change
                  </button>
                </>
              ) : (
                <form onSubmit={handleEditCustomerDetails}>
                  <input
                    type="text"
                    value={customerDetails.name}
                    onChange={(e) =>
                      setCustomerDetails({
                        ...customerDetails,
                        name: e.target.value,
                      })
                    }
                    placeholder="Name"
                    className="w-full px-4 py-2 border border-solid border-dark-mode rounded mb-2"
                    required
                  />
                  <input
                    type="text"
                    value={customerDetails.address}
                    onChange={(e) =>
                      setCustomerDetails({
                        ...customerDetails,
                        address: e.target.value,
                      })
                    }
                    placeholder="Address"
                    className="w-full px-4 py-2 border border-solid border-dark-mode rounded mb-2"
                    required
                  />
                  <input
                    type="text"
                    value={customerDetails.phone}
                    onChange={(e) =>
                      setCustomerDetails({
                        ...customerDetails,
                        phone: e.target.value,
                      })
                    }
                    placeholder="Phone"
                    className="w-full px-4 py-2 border border-solid border-dark-mode rounded mb-2"
                    required
                  />
                  <button
                    type="submit"
                    className="mt-2 px-4 py-2 bg-dark-mode text-white rounded"
                  >
                    Save
                  </button>
                </form>
              )}
            </div>
            <div className="p-4 border border-solid border-dark-mode rounded">
              <h2 className="text-lg font-bold mb-2">2. DELIVERY DETAILS</h2>
              {!isEditingDelivery ? (
                <>
                  <p>{deliveryDetails.method}</p>
                  <p>{deliveryDetails.dateRange}</p>
                  <button
                    onClick={() => setIsEditingDelivery(true)}
                    className="text-sm text-red-500 mt-2"
                  >
                    Change
                  </button>
                </>
              ) : (
                <form onSubmit={handleEditDeliveryDetails}>
                  <input
                    type="text"
                    value={deliveryDetails.method}
                    onChange={(e) =>
                      setDeliveryDetails({
                        ...deliveryDetails,
                        method: e.target.value,
                      })
                    }
                    placeholder="Delivery Method"
                    className="w-full px-4 py-2 border border-solid border-dark-mode rounded mb-2"
                  />
                  <input
                    type="text"
                    value={deliveryDetails.dateRange}
                    onChange={(e) =>
                      setDeliveryDetails({
                        ...deliveryDetails,
                        dateRange: e.target.value,
                      })
                    }
                    placeholder="Date Range"
                    className="w-full px-4 py-2 border border-solid border-dark-mode rounded mb-2"
                  />
                  <button
                    type="submit"
                    className="mt-2 px-4 py-2 bg-light-mode text-white rounded"
                  >
                    Save
                  </button>
                </form>
              )}
            </div>
            <div className="p-4 border border-solid border-dark-mode rounded">
              <h2 className="text-lg font-bold mb-2">3. PAYMENT METHOD</h2>
              <div className="flex space-x-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="payment"
                    value="Mpesa"
                    checked={paymentMethod === "Mpesa"}
                    onChange={handlePaymentMethodChange}
                    className="mr-2"
                  />
                  Mpesa
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="payment"
                    value="Visa card"
                    checked={paymentMethod === "Visa card"}
                    onChange={handlePaymentMethodChange}
                    className="mr-2"
                  />
                  Visa card
                </label>
              </div>
              {paymentMethod === "Mpesa" && (
                <div className="mt-4">
                  <input
                    type="text"
                    value={mpesaNumber}
                    onChange={(e) => setMpesaNumber(e.target.value)}
                    placeholder="Mpesa Number"
                    className="w-full px-4 py-2 border rounded mb-2"
                  />
                  {formErrors.mpesaNumber && (
                    <p className="text-red-500 text-sm">
                      {formErrors.mpesaNumber}
                    </p>
                  )}
                </div>
              )}
              {paymentMethod === "Visa card" && (
                <div className="mt-4 space-y-2">
                  <input
                    type="text"
                    value={visaDetails.cardNumber}
                    onChange={(e) =>
                      setVisaDetails({
                        ...visaDetails,
                        cardNumber: e.target.value,
                      })
                    }
                    placeholder="Card Number"
                    className="w-full px-4 py-2 border rounded mb-2"
                  />
                  {formErrors.cardNumber && (
                    <p className="text-red-500 text-sm">
                      {formErrors.cardNumber}
                    </p>
                  )}
                  <input
                    type="text"
                    value={visaDetails.expiryDate}
                    onChange={(e) =>
                      setVisaDetails({
                        ...visaDetails,
                        expiryDate: e.target.value,
                      })
                    }
                    placeholder="Expiry Date"
                    className="w-full px-4 py-2 border rounded mb-2"
                  />
                  {formErrors.expiryDate && (
                    <p className="text-red-500 text-sm">
                      {formErrors.expiryDate}
                    </p>
                  )}
                  <input
                    type="text"
                    value={visaDetails.cvv}
                    onChange={(e) =>
                      setVisaDetails({ ...visaDetails, cvv: e.target.value })
                    }
                    placeholder="CVV"
                    className="w-full px-4 py-2 border rounded mb-2"
                  />
                  {formErrors.cvv && (
                    <p className="text-red-500 text-sm">{formErrors.cvv}</p>
                  )}
                </div>
              )}
            </div>
          </div>
          <div className="p-4 border border-solid border-dark-mode rounded mt-6">
            <h2 className="text-lg font-bold mb-2">4. ORDER SUMMARY</h2>
            <div className="space-y-2">
              {cartItems.map((item, index) => (
                <div key={index} className="flex justify-between items-center">
                  <div className="flex items-center">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded mr-4"
                    />
                    <span>
                      {item.name} x {item.quantity}
                    </span>
                  </div>
                  <span>Ksh {item.price * item.quantity}</span>
                </div>
              ))}
              <div className="flex justify-between font-bold">
                <span>Total Amount</span>
                <span>Ksh {totalAmount}</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery Fee</span>
                <span>Ksh {deliveryFee}</span>
              </div>
              <div className="flex justify-between">
                <span>Custom Fee</span>
                <span>Ksh {customFee}</span>
              </div>
              <div className="flex justify-between font-bold">
                <span>Final Total</span>
                <span>Ksh {finalTotal}</span>
              </div>
            </div>
          </div>
          <button
            onClick={handleConfirmOrder}
            className="mt-4 px-4 py-2 bg-dark-mode text-white rounded"
            disabled={isProcessingPayment}
          >
            {isProcessingPayment ? "Processing..." : "Confirm Order"}
          </button>
        </div>
      </div>
      <Footer />
      {isModalOpen && (
        <Modal onClose={handleCloseModal} orderDetails={orderDetails} />
      )}
      {successMessage && (
        <div className="fixed inset-0 flex justify-center items-center z-50">
          <div className="bg-green-500 text-white px-6 py-4 rounded-lg text-xl font-bold">
            {successMessage}
          </div>
        </div>
      )}
    </div>
  );
 };

 export default Checkout;