import React from 'react';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded shadow-lg w-full max-w-md">
        {children}
        <button onClick={onClose} className="mt-4 w-full py-2 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600">
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;