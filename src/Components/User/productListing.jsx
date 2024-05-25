import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function CategoryPage({ match }) {
  const { categoryId } = match.params;

  // Simulated product data for demonstration
  const products = [
    { id: 1, name: "highlighter", image: "/path/to/product1.jpg" },
    { id: 2, name: "foundation", image: "/path/to/product2.jpg" },
    // Add more products here
  ];

  return (
    <div>
      <Navbar />
      <h1> {category.name} </h1>
      <div className="grid grid-cols-2 gap-4">
        {products.map((product) => (
          <div key={product.id} className="p-4 border border-gray-300">
            <img
              src={product.image}
              alt={product.name}
              className="max-w-full h-auto"
            />
            <p className="mt-2">{product.name}</p>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default CategoryPage;
