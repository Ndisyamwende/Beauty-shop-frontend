import React, { useState, useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe('pk_test_51PIE6CGwAixrrcctF0PcBxOS3Erqp1lImrnHBrL1hZFIbvpaCdcJmvrRkM6c0v4Jzpp2tAjomgqStmig5VyswNVY001SWEGJLb');

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [billingPostalZipcode, setBillingPostalZipcode] = useState('');
  const [customerName, setCustomerName] = useState('Anna Koko');
  const [customerAddress, setCustomerAddress] = useState('Ngong Plaza | Nairobi - CBD, Ngong Plaza');
  const [customerCity, setCustomerCity] = useState('');
  const [deliveryInstructions, setDeliveryInstructions] = useState('Delivery between 09 May and 25 May');
  const [phoneNumber, setPhoneNumber] = useState('+254 728956222');
  const [mpesaAmount, setMpesaAmount] = useState('');

  const [deliveryAddress, setDeliveryAddress] = useState('Door Delivery');
  const [deliveryCity, setDeliveryCity] = useState('');
  const [deliveryState, setDeliveryState] = useState('');

  const [orderItems, setOrderItems] = useState([]);
  const [deliveryFee, setDeliveryFee] = useState(300);
  const [customerFee, setCustomerFee] = useState(50);
  const [orderTotal, setOrderTotal] = useState(0);
  const [orderSummaryFetched, setOrderSummaryFetched] = useState(false);

  const [showCustomerAddressModal, setShowCustomerAddressModal] = useState(false);
  const [showDeliveryDetailsModal, setShowDeliveryDetailsModal] = useState(false);
  const [showPaymentSuccessPopup, setShowPaymentSuccessPopup] = useState(false);
  const [showMpesaModal, setShowMpesaModal] = useState(false);
  const [showCardModal, setShowCardModal] = useState(false);

  useEffect(() => {
    const fetchOrderItems = async () => {
      const fetchedOrderItems = [
        { name: 'Product 1', price: 1200.00 },
        { name: 'Product 2', price: 800.00 },
      ];

      setOrderItems(fetchedOrderItems);
      updateOrderTotal(fetchedOrderItems, deliveryFee, customerFee, mpesaAmount);
      setOrderSummaryFetched(true);
    };

    fetchOrderItems();
  }, [mpesaAmount]);

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
    if (event.target.value === 'mpesa') {
      setShowMpesaModal(true);
    } else if (event.target.value === 'card') {
      setShowCardModal(true);
    }
    updateOrderTotal(orderItems, deliveryFee, customerFee, event.target.value === 'mpesa' ? mpesaAmount : null);
  };

  const handleMpesaAmountChange = (e) => {
    const amount = parseFloat(e.target.value);
    setMpesaAmount(amount);
    updateOrderTotal(orderItems, deliveryFee, customerFee, amount);
  };

  const handleCheckout = async (event) => {
    event.preventDefault();

    const customerDetails = {
      name: customerName,
      address: customerAddress,
      city: customerCity,
      deliveryInstructions: deliveryInstructions,
      billingPostalZipcode: billingPostalZipcode,
    };

    if (paymentMethod === 'card') {
      if (!stripe || !elements) return;
      const cardElement = elements.getElement(CardElement);
      const { error, paymentMethod: paymentMethodResult } = await stripe.createPaymentMethod({
        type: 'card',
        card: cardElement,
        billing_details: {
          name: customerName,
          address: {
            postal_code: billingPostalZipcode,
          },
        },
      });

      if (error) {
        console.error(error);
      } else {
        console.log('Card payment successful:', paymentMethodResult);
        setShowPaymentSuccessPopup(true);
      }
    } else if (paymentMethod === 'mpesa') {
      const response = await fetch('https://beautyshop-backend-1.onrender.com/payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          phoneNumber,
          amount: orderTotal,
          customerDetails,
        }),
      });

      const responseData = await response.json();
      console.log('M-Pesa payment response:', responseData);
      setShowPaymentSuccessPopup(true);
    }
  };

  const handleCustomerAddressSave = () => {
    setShowCustomerAddressModal(false);
    updateOrderTotal(orderItems, deliveryFee, customerFee, mpesaAmount);
  };

  const handleDeliveryDetailsSave = () => {
    setShowDeliveryDetailsModal(false);
    updateOrderTotal(orderItems, deliveryFee, customerFee, mpesaAmount);
  };

  const updateOrderTotal = (items, deliveryFee, customerFee, mpesaAmount = null) => {
    const itemsTotal = items.reduce((acc, item) => acc + item.price, 0);
    const totalAmount = itemsTotal + deliveryFee + customerFee;
    if (paymentMethod === 'mpesa' && mpesaAmount !== null) {
      setOrderTotal(totalAmount + mpesaAmount);
    } else {
      setOrderTotal(totalAmount);
    }
  };

  return (
    <div className="flex justify-center p-8 bg-yellow-100 min-h-screen">
      <div className="w-full max-w-5xl flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-8">
        <div className="flex-1 bg-yellow-100 p-6 shadow-md rounded-lg border border-gray-300">
          <h2 className="text-xl font-bold mb-4">ORDER CONFIRMATION</h2>
          <div className="space-y-4">
            <div className="flex items-center p-4 bg-yellow-100 border-t border-b border-gray-300">
              <div className="flex-1">
                <h3 className="font-semibold">Customer Address</h3>
                <p>{customerName}<br />
                {customerAddress} | {phoneNumber}</p>
              </div>
              <button onClick={() => setShowCustomerAddressModal(true)} className="text-blue-500">Change</button>
            </div>
            <div className="flex items-center p-4 bg-yellow-100 border-t border-b border-gray-300">
              <div className="flex-1">
                <h3 className="font-semibold">Delivery Details</h3>
                <p>{deliveryAddress}<br />
                {deliveryInstructions}</p>
              </div>
              <button onClick={() => setShowDeliveryDetailsModal(true)} className="text-blue-500">Change</button>
            </div>
            <div className="flex items-center p-4 bg-yellow-100 border-t border-b border-gray-300">
              <div className="flex-1">
                <h3 className="font-semibold">Payment Method</h3>
                <div className="flex items-center space-x-4 mt-2">
                  <div>
                    <input type="radio" id="mpesa" name="payment" value="mpesa" checked={paymentMethod === 'mpesa'} onChange={handlePaymentMethodChange} className="mr-2" />
                    <label htmlFor="mpesa">Mpesa</label>
                  </div>
                  <div>
                    <input type="radio" id="visa" name="payment" value="card" checked={paymentMethod === 'card'} onChange={handlePaymentMethodChange} className="mr-2" />
                    <label htmlFor="visa">Visa card</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/3 bg-yellow-100 p-6 shadow-md rounded-lg border border-gray-300">
          <h3 className="font-semibold">ORDER SUMMARY</h3>
          {orderSummaryFetched && (
            <>
              <ul className="mb-2">
                {orderItems.map((item, index) => (
                  <li key={index} className="flex justify-between">
                    <span>{item.name}</span>
                    <span>KSHS {item.price}</span>
                  </li>
                ))}
              </ul>
              <div className="flex justify-between mb-2">
                <span>Subtotal</span>
                <span>KSHS {orderItems.reduce((acc, item) => acc + item.price, 0)}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Delivery Fee</span>
                <span>KSHS {deliveryFee}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Customer Fee</span>
                <span>KSHS {customerFee}</span>
              </div>
              <div className="flex justify-between font-bold">
                <span>Total</span>
                <span>KSHS {orderTotal}</span>
              </div>
              <button onClick={handleCheckout} className="w-full mt-4 bg-blue-500 text-white p-2 rounded">Place Order</button>
            </>
          )}
        </div>
      </div>

      {showCustomerAddressModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-4">Edit Customer Address</h2>
            <input type="text" value={customerName} onChange={(e) => setCustomerName(e.target.value)} className="block w-full mb-2 p-2 border border-gray-300 rounded" placeholder="Name" />
            <input type="text" value={customerAddress} onChange={(e) => setCustomerAddress(e.target.value)} className="block w-full mb-2 p-2 border border-gray-300 rounded" placeholder="Address" />
            <input type="text" value={customerCity} onChange={(e) => setCustomerCity(e.target.value)} className="block w-full mb-2 p-2 border border-gray-300 rounded" placeholder="City" />
            <input type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} className="block w-full mb-2 p-2 border border-gray-300 rounded" placeholder="Phone Number" />
            <button onClick={handleCustomerAddressSave} className="bg-blue-500 text-white p-2 rounded">Save</button>
          </div>
        </div>
      )}

      {showDeliveryDetailsModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-4">Edit Delivery Details</h2>
            <input type="text" value={deliveryAddress} onChange={(e) => setDeliveryAddress(e.target.value)} className="block w-full mb-2 p-2 border border-gray-300 rounded" placeholder="Delivery Address" />
            <input type="text" value={deliveryCity} onChange={(e) => setDeliveryCity(e.target.value)} className="block w-full mb-2 p-2 border border-gray-300 rounded" placeholder="City" />
            <input type="text" value={deliveryState} onChange={(e) => setDeliveryState(e.target.value)} className="block w-full mb-2 p-2 border border-gray-300 rounded" placeholder="State" />
            <textarea value={deliveryInstructions} onChange={(e) => setDeliveryInstructions(e.target.value)} className="block w-full mb-2 p-2 border border-gray-300 rounded" placeholder="Delivery Instructions"></textarea>
            <button onClick={handleDeliveryDetailsSave} className="bg-blue-500 text-white p-2 rounded">Save</button>
          </div>
        </div>
      )}

      {showPaymentSuccessPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-4">Payment Successful</h2>
            <p>Your order has been placed successfully!</p>
            <button onClick={() => setShowPaymentSuccessPopup(false)} className="bg-blue-500 text-white p-2 rounded mt-4">Close</button>
          </div>
        </div>
      )}

      {showMpesaModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-4">M-Pesa Payment</h2>
            <input type="number" value={mpesaAmount} onChange={handleMpesaAmountChange} className="block w-full mb-2 p-2 border border-gray-300 rounded" placeholder="Enter M-Pesa amount" />
            <button onClick={() => setShowMpesaModal(false)} className="bg-blue-500 text-white p-2 rounded">Confirm</button>
          </div>
        </div>
      )}

      {showCardModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-4">Card Payment</h2>
            <CardElement className="block w-full mb-2 p-2 border border-gray-300 rounded" />
            <input type="text" value={billingPostalZipcode} onChange={(e) => setBillingPostalZipcode(e.target.value)} className="block w-full mb-2 p-2 border border-gray-300 rounded" placeholder="Billing Postal Zipcode" />
            <button onClick={() => setShowCardModal(false)} className="bg-blue-500 text-white p-2 rounded">Confirm</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CheckoutForm

  // <Elements stripe={stripePromise}>
  //   <CheckoutForm />
  // </Elements>

