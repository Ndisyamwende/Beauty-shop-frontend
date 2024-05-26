import React, { useState } from 'react';
import axios from 'axios';

const ForgotPasswordRequest = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleRequestReset = async () => {
    try {
      const response = await axios.post(
        " http://127.0.0.1:5555/request-reset",
        { email }
      );
      setMessage(response.data.success ? 'Reset link sent to your email.' : response.data.error);
    } catch (error) {
      setMessage(error.response?.data?.error || 'Error sending reset link.');
    }
  };

  return (
    <div className="bg-[#efe3b8] flex justify-center items-center min-h-screen p-4">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Forgot Password</h2>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        {message && <div className="text-red-500 mb-4">{message}</div>}
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={handleRequestReset}
        >
          Request Reset Link
        </button>
      </div>
    </div>
  );
};

export default ForgotPasswordRequest;
