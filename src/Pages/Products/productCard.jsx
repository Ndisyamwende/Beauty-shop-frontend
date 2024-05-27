import React from "react";
<<<<<<< HEAD
import { useHistory } from "react-router-dom";

const ProductCard = ({ product }) => {
  const history = useHistory();

  const handleClick = () => {
    history.push(`/products/${product.id}`);
  };

  return (
    <div
      className="bg-white p-4 rounded shadow-md flex flex-col justify-between h-full cursor-pointer"
      onClick={handleClick}
    >
=======

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white p-4 rounded shadow-md flex flex-col justify-between h-full">
>>>>>>> 4a8fafa6f468f8ecd08f5ec6218a9537e6d0ed0f
      <img
        src={product.image}
        alt={product.name}
        className="object-cover h-48 w-full mb-4"
      />
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">{product.name}</h2>
        <p className="text-gray-900 font-semibold">
          Kshs {product.price.toFixed(2)}
        </p>
      </div>
      <button className="bg-dark-mode text-white py-2 rounded mt-auto">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
