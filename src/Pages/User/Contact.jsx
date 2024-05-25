// import React, { useState } from 'react';
// import Footer from '../../Components/User/Footer';

// const CustomerContact = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [message, setMessage] = useState('');
//   const [submitted, setSubmitted] = useState(false);
//   const [error, setError] = useState(null);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const token = localStorage.getItem("token");

//       const response = await fetch('https://beautyshop-backend-1.onrender.com/contact', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `Bearer ${token}`
//         },
//         body: JSON.stringify({ name, email, message }),
//       });
//       if (response.ok) {
//         setName('');
//         setEmail('');
//         setMessage('');
//         setSubmitted(true);
//         setTimeout(() => setSubmitted(false), 3000);
//       } else {
//         const errorMessage = await response.json();
//         throw new Error(errorMessage);
//       }
//     } catch (error) {
//       setError(error.message);
//     }
//   };

//   return (
//     <div>
//       <div className="min-h-screen bg-[#f5e3b3] flex items-center justify-center">
//         <div className="bg-[#f5e3b3] flex flex-col md:flex-row items-center justify-center p-8 rounded-lg shadow-lg space-y-6 md:space-y-0 md:space-x-6">
//           <div className="w-full md:w-auto">
//             <img src="/src/assets/images/lipstck.png" alt="Lipstick" className="w-full md:w-64 md:h-64 rounded-lg object-cover" />
//           </div>
//           <div className="bg-[#f5e3b3] p-6 rounded-lg shadow-lg w-full md:w-auto">
//             <h2 className="text-[#865f3c] text-2xl font-bold mb-4 text-center">
//               Reach Out to Us Today!
//             </h2>
//             <form onSubmit={handleSubmit} className="space-y-4">
//               <div>
//                 <input
//                   type="text"
//                   placeholder="Name"
//                   value={name}
//                   onChange={(e) => setName(e.target.value)}
//                   className="w-full px-4 py-2 rounded-md bg-[#f5e3b3] border border-[#d2a774] focus:outline-none focus:ring-2 focus:ring-[#a97c50] transition-colors duration-300"
//                   autoComplete="name"
//                 />
//               </div>
//               <div>
//                 <input
//                   type="email"
//                   placeholder="Email Address"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   className="w-full px-4 py-2 rounded-md bg-[#f5e3b3] border border-[#d2a774] focus:outline-none focus:ring-2 focus:ring-[#a97c50] transition-colors duration-300"
//                   autoComplete="email"
//                 />
//               </div>
//               <div>
//                 <textarea
//                   placeholder="Message"
//                   rows="4"
//                   value={message}
//                   onChange={(e) => setMessage(e.target.value)}
//                   className="w-full px-4 py-2 rounded-md bg-[#f5e3b3] border border-[#d2a774] focus:outline-none focus:ring-2 focus:ring-[#a97c50] transition-colors duration-300"
//                   autoComplete="off"
//                 />
//               </div>
//               <button
//                 type="submit"
//                 className="w-full py-2 rounded-md bg-[#a97c50] text-white font-bold hover:bg-[#865f3c] transition-colors duration-300"
//               >
//                 {submitted ? 'Submitted!' : 'Send'}
//               </button>
//             </form>
//             {submitted && (
//               <div className="mt-4 text-[#865f3c] text-center">
//                 Thank you for your submission!
//               </div>
//             )}
//             {error && (
//               <div className="mt-4 text-red-500 text-center">
//                 {error}
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default CustomerContact;
import React, { useState } from 'react';
import Footer from '../../Components/User/Footer';
import Navbar from '../../Components/User/Navbar';

const CustomerContact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email || !message) {
      setError('All fields are required.');
      return;
    }
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(" http://127.0.0.1:5555/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ name, email, message }),
      });
      if (response.ok) {
        setName('');
        setEmail('');
        setMessage('');
        setSubmitted(true);
        setError(null);
        setTimeout(() => setSubmitted(false), 3000);
      } else {
        const errorMessage = await response.json();
        throw new Error(errorMessage);
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <Navbar/>
    <div>
      <div className="min-h-screen bg-[#f5e3b3] flex items-center justify-center">
        <div className="bg-[#f5e3b3] flex flex-col md:flex-row items-center justify-center p-8 rounded-lg shadow-lg space-y-6 md:space-y-0 md:space-x-6">
          <div className="w-full md:w-auto">
            <img src="/src/assets/Makeup/makeup3.png" alt="Lipstick" className="w-full md:w-64 md:h-64 rounded-lg object-cover" />
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
            {error && (
              <div className="mt-4 text-red-500 text-center">
                {error}
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
    </div>
  );
};

export default CustomerContact;