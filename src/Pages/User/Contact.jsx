import React, { useState } from 'react';
import Footer from '../../Components/User/Footer';

const CustomerContact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://127.0.0.1:5000/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      });
      if (response.ok) {
        setName('');
        setEmail('');
        setMessage('');
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 3000);
      } else {
        console.error('Failed to submit form:', response.statusText);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div>
      <div className="min-h-screen bg-[#f5e3b3] flex items-center justify-center">
        <div className="bg-[#f5e3b3] flex flex-col md:flex-row items-center justify-center p-8 rounded-lg shadow-lg space-y-6 md:space-y-0 md:space-x-6">
          <div className="w-full md:w-auto">
            <img src="/src/assets/images/lipstck.png" alt="Lipstick" className="w-full md:w-64 md:h-64 rounded-lg object-cover" />
          </div>
          <div className="bg-[#f5e3b3] p-6 rounded-lg shadow-lg w-full md:w-auto">
            <h2 className="text-[#865f3c] text-2xl font-bold mb-4 text-center">
              Reach Out to Us Today!
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2 rounded-md bg-[#f5e3b3] border border-[#d2a774] focus:outline-none focus:ring-2 focus:ring-[#a97c50] transition-colors duration-300"
                  autoComplete="name"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 rounded-md bg-[#f5e3b3] border border-[#d2a774] focus:outline-none focus:ring-2 focus:ring-[#a97c50] transition-colors duration-300"
                  autoComplete="email"
                />
              </div>
              <div>
                <textarea
                  placeholder="Message"
                  rows="4"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-2 rounded-md bg-[#f5e3b3] border border-[#d2a774] focus:outline-none focus:ring-2 focus:ring-[#a97c50] transition-colors duration-300"
                  autoComplete="off"
                />
              </div>
              <button
                type="submit"
                className="w-full py-2 rounded-md bg-[#a97c50] text-white font-bold hover:bg-[#865f3c] transition-colors duration-300"
              >
                {submitted ? 'Submitted!' : 'Send'}
              </button>
            </form>
            {submitted && (
              <div className="mt-4 text-[#865f3c] text-center">
                Thank you for your submission!
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CustomerContact;