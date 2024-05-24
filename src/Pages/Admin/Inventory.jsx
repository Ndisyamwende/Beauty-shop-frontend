import { useState, useEffect } from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import Modal from "react-modal";

Modal.setAppElement("#root");

export const Inventory = () => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("All");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newProduct, setNewProduct] = useState({
    image: "",
    name: "",
    gender: "",
    price: "",
    quantity_available: "",
    description: "",
  });

  useEffect(() => {
    const fetchProducts = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        console.error("Token not found");
        return;
      }

      try {
        const response = await fetch("https://beautyshop-backend-1.onrender.com/product", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! s: ${response.status}`);
        }

        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchProducts();
  }, []);

  const handleAddProduct = () => {
    setIsModalOpen(true);
  };

  const handleSaveProduct = async (event) => {
    event.preventDefault();
    const token = localStorage.getItem("token");

    try {
      const response = await fetch("https://beautyshop-backend-1.onrender.com/product", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(newProduct),
      });

      if (response.ok) {
        setIsModalOpen(false);
        const data = await response.json();
        setProducts((prevProducts) => [...prevProducts, data]);
      } else {
        console.error(`Error: ${response.status}`);
      }
    } catch (error) {
      console.error("Error saving product:", error);
    }
  };

  const handleDeleteProduct = async (id) => {
    const token = localStorage.getItem("token");

    try {
      const response = await fetch(`https://beautyshop-backend-1.onrender.com/product/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      setProducts(products.filter((product) => product.id !== id));
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  const handleEditProduct = async (id, updatedProduct) => {
    const token = localStorage.getItem("token");

    try {
      const response = await fetch(`https://beautyshop-backend-1.onrender.com/product/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(updatedProduct),
      });

      if (response.ok) {
        setProducts(products.map((p) => (p.id === id ? updatedProduct : p)));
      } else {
        console.error(`Error: ${response.status}`);
      }
    } catch (error) {
      console.error("Error editing product:", error);
    }
  };

  return (
    <div className="bg-light-mode min-h-screen p-4">
      <h1 className="text-Heading font-bold text-2xl text-center py-3">INVENTORY</h1>
      <div className="flex justify-between items-center mb-4">
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="bg-dark-mode text-black p-3 rounded-3xl font-bold"
        >
          <option value="" disabled>
            Category
          </option>
          <option value="All">All</option>
          <option value="Makeup">Makeup</option>
          <option value="Skin care">Skin care</option>
          <option value="Fragrances">Fragrances</option>
        </select>
        <button
          onClick={handleAddProduct}
          className="bg-dark-mode text-black p-3 rounded-3xl font-bold ml-auto"
        >
          ADD NEW PRODUCT
        </button>
      </div>
      <div className="hidden md:block">
        <table className="w-full mx-auto text-left text-Heading">
          <thead className="text-[18px] font-body bg-secondary text-black">
            <tr className="border-[6px] border-dark-mode bg-dark-mode">
              <th className="p-[10px]">Image</th>
              <th className="p-[10px]">Name</th>
              <th className="p-[10px]">Gender</th>
              <th className="p-[10px]">Price</th>
              <th className="p-[10px]">Description</th>
              <th className="p-[10px]">Quantity Available</th>
              <th className="p-[10px]">Action</th>
            </tr>
          </thead>
          <tbody className="text-[16px] font-normal text-Heading">
            {products.map((product) => (
              <tr key={product.id} className="bg-white dark:bg-variant1-dark border-[6px]">
                <td className="p-[10px] capitalize">
                  <img src={product.image} alt={product.name} height={50} width={50} />
                </td>
                <td className="p-[10px] capitalize">{product.name}</td>
                <td className="p-[10px]">{product.gender}</td>
                <td className="p-[10px]">{product.price}</td>
                <td className="p-[10px]">{product.description}</td>
                <td className="p-[10px]">{product.quantity_available}</td>
                <td className="p-[10px] flex gap-2">
                  <button onClick={() => handleEditProduct(product.id, product)}>
                    <FaEdit className="text-blue-500" />
                  </button>
                  <button onClick={() => handleDeleteProduct(product.id)}>
                    <FaTrashAlt className="text-red-500" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        contentLabel="Add Product"
        className="fixed inset-0 flex items-center justify-center z-50"
        overlayClassName="fixed inset-0 bg-black bg-opacity-75"
      >
        <div className="rounded-lg p-8 max-w-lg w-full bg-white">
          <h2 className="text-2xl font-bold mb-4">Add New Product</h2>
          <form onSubmit={handleSaveProduct}>
            <input
              type="text"
              placeholder="Image URL"
              value={newProduct.image}
              onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
              className="block w-full mb-2 p-2 border rounded"
            />
            <input
              type="text"
              placeholder="Name"
              value={newProduct.name}
              onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
              className="block w-full mb-2 p-2 border rounded"
            />
            <input
              type="text"
              placeholder="Gender"
              value={newProduct.gender}
              onChange={(e) => setNewProduct({ ...newProduct, gender: e.target.value })}
              className="block w-full mb-2 p-2 border rounded"
            />
            <input
              type="number"
              placeholder="Price"
              value={newProduct.price}
              onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
              className="block w-full mb-2 p-2 border rounded"
            />
            <input
              type="text"
              placeholder="Description"
              value={newProduct.description}
              onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
              className="block w-full mb-2 p-2 border rounded"
            />
            <input
              type="number"
              placeholder="Quantity Available"
              value={newProduct.quantity_available}
              onChange={(e) => setNewProduct({ ...newProduct, quantity_available: e.target.value })}
              className="block w-full mb-2 p-2 border rounded"
            />
            <button type="submit" className="bg-blue-500 text-white p-2 rounded-md mt-4">
              Save
            </button>
          </form>
        </div>
      </Modal>
    </div>
  );
};
