import React, { useState, useEffect } from "react";
<<<<<<< HEAD
import { useParams } from "react-router-dom"; // Import useParams
=======
import { useParams } from "react-router-dom";
>>>>>>> 4a8fafa6f468f8ecd08f5ec6218a9537e6d0ed0f
import axios from "axios";

const ProductDetail = () => {
  const { id } = useParams(); // Get the product ID from the URL
  const [product, setProduct] = useState(null);
  const [mainImage, setMainImage] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch product details from the backend
    const fetchProductDetails = async () => {
      try {
        const response = await axios.get(
<<<<<<< HEAD
          `http://127.0.0.1:5500/products/${id}`
=======
          `https://beautyshop-backend-1.onrender.com/products/${id}`
>>>>>>> 4a8fafa6f468f8ecd08f5ec6218a9537e6d0ed0f
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

<<<<<<< HEAD
  const handleAddToCart = async () => {
    try {
      await axios.post("http://127.0.0.1:5500/orderitem", {
        productId: id,
        quantity: 1, // Assuming you always add one product at a time
      });
      alert("Added to cart successfully!");
    } catch (err) {
      setError("Failed to add to cart");
    }
  };

  const handleGoBack = () => {
    window.history.back(); // Navigate back to the previous page
  };

=======
  const handleAddToBag = async () => {
    try {
      await axios.post("http://127.0.0.1:8000/orderitem", {
        productId: id,
        quantity,
      });
      alert("Added to bag successfully!");
    } catch (err) {
      setError("Failed to add to bag");
    }
  };

>>>>>>> 4a8fafa6f468f8ecd08f5ec6218a9537e6d0ed0f
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
<<<<<<< HEAD
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
          <button
            className="w-full py-2 bg-gray-400 text-black rounded-full mt-4"
            onClick={handleGoBack}
          >
            Go Back
=======
            onClick={handleAddToBag}
          >
            Add to Bag
>>>>>>> 4a8fafa6f468f8ecd08f5ec6218a9537e6d0ed0f
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
