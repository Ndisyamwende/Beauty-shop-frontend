<<<<<<< HEAD
import React from "react";
=======
import React from 'react';
>>>>>>> 4a8fafa6f468f8ecd08f5ec6218a9537e6d0ed0f

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded shadow-lg w-full max-w-md">
        {children}
<<<<<<< HEAD
        <button
          onClick={onClose}
          className="mt-4 w-full py-2 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600"
        >
=======
        <button onClick={onClose} className="mt-4 w-full py-2 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600">
>>>>>>> 4a8fafa6f468f8ecd08f5ec6218a9537e6d0ed0f
          Close
        </button>
      </div>
    </div>
  );
};

<<<<<<< HEAD
export default Modal;
=======
export default Modal;
>>>>>>> 4a8fafa6f468f8ecd08f5ec6218a9537e6d0ed0f
