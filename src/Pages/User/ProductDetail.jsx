import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProductDetail = () => {
  const { id } = useParams(); // Get the product ID from the URL
  const [product, setProduct] = useState(null);
  const [mainImage, setMainImage] = useState("");
  const [error, setError] = useState(null);
  const [quantity] = useState(1); // Assuming you want to add 1 item to the bag by default

  useEffect(() => {
    // Fetch product details from the backend
    const fetchProductDetails = async () => {
      try {
        const response = await axios.get(
          ` http://127.0.0.1:5555/products/${id}`
        );
        setProduct(response.data);
        setMainImage(response.data.image); // Set the main image to the product image
      } catch (err) {
        setError("Failed to fetch product details");
      }
    };

    fetchProductDetails();
  }, [id]);

  const handleImageClick = (src) => {
    setMainImage(src);
  };

  const handleAddToBag = async () => {
    try {
      await axios.post("https://beautyshop-backend-1.onrender.com/orderitem", {
        productId: id,
        quantity,
      });
      alert("Added to bag successfully!");
    } catch (err) {
      setError("Failed to add to bag");
    }
  };

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <section className="flex justify-center items-center min-h-screen bg-light-mode p-4">
      <div className="container mx-auto flex flex-col md:flex-row">
        <div className="left flex-1 p-4">
          <div className="main_image">
            <img src={mainImage} alt={product.name} className="w-full h-auto" />
          </div>
          <div className="option flex mt-4">
            <img
              src={product.image}
              alt=""
              className="w-16 h-16 p-2 cursor-pointer"
              onClick={() => handleImageClick(product.image)}
            />
            {/* Add more images here similarly */}
          </div>
        </div>
        <div className="right flex-1 p-8">
          <h3 className="text-2xl text-black mb-4">{product.name}</h3>
          <h4 className="text-black-600 mb-4">
            <small>kshs</small>
            {product.price}
          </h4>
          <p className="text-black mb-8">{product.description}</p>
          <button
            className="w-full py-2 bg-dark-mode text-black rounded-full mt-8"
            onClick={handleAddToBag}
          >
            Add to Bag
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
