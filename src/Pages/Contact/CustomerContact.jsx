import React, { useState } from 'react';


const CustomerContact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://your-flask-api-url.com/contact', {
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
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 max-w-md mx-auto">
      <h2 className="text-black dark:text-white text-2xl font-bold mb-6 text-center">
        Get in Touch!
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 rounded-md bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-600 dark:focus:ring-indigo-400 transition-colors duration-300"
            autoComplete="name"
          />
        </div>
        <div>
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 rounded-md bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-600 dark:focus:ring-indigo-400 transition-colors duration-300"
            autoComplete="email"
          />
        </div>
        <div>
          <textarea
            placeholder="Message"
            rows="4"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full px-4 py-2 rounded-md bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-600 dark:focus:ring-indigo-400 transition-colors duration-300"
            autoComplete="off"
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 rounded-md bg-blue-500 text-white font-bold hover:bg-blue-600 transition-colors duration-300 transform hover:scale-105"
        >
          {submitted ? 'Submitted!' : 'Submit'}
        </button>
      </form>
      {submitted && (
        <div className="mt-4 text-black dark:text-white text-center animate-bounce">
          Thank you for your submission!
        </div>
      )}
    </div>
  );
};

export default CustomerContact;
