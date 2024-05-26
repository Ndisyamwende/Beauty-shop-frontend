import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import productsData from "./productsData";
import ProductCard from "./ProductCard";

const ProductsPage = () => {
  const { categoryName } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const filteredProducts = productsData.filter(
      (product) => product.categoryName === categoryName
    );
    setProducts(filteredProducts);
  }, [categoryName]);

  return (
    <div className="bg-[#efe3b8] min-h-screen py-10">
      <h1 className="text-center font-bold text-3xl mb-10">{categoryName}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-10">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
