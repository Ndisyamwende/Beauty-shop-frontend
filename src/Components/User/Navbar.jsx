import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaCartPlus, FaUser } from "react-icons/fa";
import { IoMoonSharp } from "react-icons/io5";
import { PiSignOutBold } from "react-icons/pi";

const Navbar = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };

  const handleUserIconClick = () => {
    // Fetch current user details using user id
    // For demonstration, we'll just use placeholders
    setEmail("user@example.com");
    setPassword("password");
    setShowModal(true);
  };

  const handleSaveChanges = () => {
    // Implement API call to save changes
    // For now, we'll just close the modal
    setShowModal(false);
  };

  return (
    <div className="bg-[#efe3b8] py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between">
        <div className="flex items-center w-full lg:w-auto mb-4 lg:mb-0">
          <img src="/src/assets/logo.png" alt="Logo" className="h-10 w-auto" />
        </div>

        <div className="relative flex-grow flex justify-center w-full lg:w-auto">
          <div
            className={`relative w-full max-w-lg ${
              showSearch ? "block" : "hidden"
            } lg:block`}
          >
            <input
              className="w-full h-[40px] bg-[#efe3b8] rounded-[15px] border border-solid border-black pl-10 pr-4 [font-family:'Inter-Regular',Helvetica] font-normal text-black text-[12px]"
              placeholder="Search for beauty Brands and Products"
            />
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black text-lg" />
          </div>
          {!showSearch && (
            <FaSearch
              className="lg:hidden text-black text-2xl cursor-pointer"
              onClick={toggleSearch}
            />
          )}
        </div>

        <div className="flex space-x-4 items-center mt-4 lg:mt-0">
          <FaUser
            className="text-black cursor-pointer text-2xl"
            onClick={handleUserIconClick}
          />
          <Link to="/cart" className="text-black cursor-pointer text-2xl">
            <FaCartPlus />
          </Link>
          <Link to="/mode" className="text-black cursor-pointer text-2xl">
            <IoMoonSharp />
          </Link>
          <Link to="/login" className="text-black cursor-pointer text-2xl">
            <PiSignOutBold />
          </Link>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-8">
            <h2 className="text-2xl mb-4">Change Personal Details</h2>
            <div className="mb-4">
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div className="flex justify-end space-x-4">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 bg-gray-500 text-white rounded"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveChanges}
                className="px-4 py-2 bg-blue-500 text-white rounded"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;

// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { FaSearch, FaCartPlus } from "react-icons/fa";
// import { IoMenu, IoMoonSharp } from "react-icons/io5";
// import { PiSignOutBold } from "react-icons/pi";

// const Navbar = () => {
//   const [showSearch, setShowSearch] = useState(false);

//   const toggleSearch = () => {
//     setShowSearch(!showSearch);
//   };

//   return (
//     <div className="bg-[#efe3b8] py-4">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between">
//         <div className="flex items-center w-full lg:w-auto mb-4 lg:mb-0">
//           <img src="/src/assets/logo.png" alt="Logo" className="h-10 w-auto" />
//         </div>

//         <div className="relative flex-grow flex justify-center w-full lg:w-auto">
//           <div
//             className={`relative w-full max-w-lg ${
//               showSearch ? "block" : "hidden"
//             } lg:block`}
//           >
//             <input
//               className="w-full h-[40px] bg-[#efe3b8] rounded-[15px] border border-solid border-black pl-10 pr-4 [font-family:'Inter-Regular',Helvetica] font-normal text-black text-[12px]"
//               placeholder="Search for beauty Brands and Products"
//             />
//             <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black text-lg" />
//           </div>
//           {!showSearch && (
//             <FaSearch
//               className="lg:hidden text-black text-2xl cursor-pointer"
//               onClick={toggleSearch}
//             />
//           )}
//         </div>

//         <div className="flex space-x-4 items-center mt-4 lg:mt-0">
//           <Link to="/menu" className="text-black cursor-pointer text-2xl">
//             <IoMenu />
//           </Link>
//           <Link to="/cart" className="text-black cursor-pointer text-2xl">
//             <FaCartPlus />
//           </Link>
//           <Link to="/mode" className="text-black cursor-pointer text-2xl">
//             <IoMoonSharp />
//           </Link>
//           <Link to="/login" className="text-black cursor-pointer text-2xl">
//             <PiSignOutBold />
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;
