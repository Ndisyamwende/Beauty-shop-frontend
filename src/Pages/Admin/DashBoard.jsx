import React, { useState, useEffect, useContext } from "react";
import {
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
} from "react-icons/bs";
import { ThemeContext } from "../../Components/User/ThemeContext";

function Dashboard() {
  const [productsCount, setProductsCount] = useState(0);
  const [categoriesCount, setCategoriesCount] = useState(0); // Replace with actual API logic
  const [customersCount, setCustomersCount] = useState(0); // Initialize customers count
  const [latestOrders, setLatestOrders] = useState([]);
  const [dailySales, setDailySales] = useState(0);
  const [monthlySales, setMonthlySales] = useState(0);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      console.error("Token not found");
      return;
    }

    // Fetch latest orders
    fetch("http://127.0.0.1:5555/orders", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setLatestOrders(data);

        const today = new Date().toISOString().split("T")[0];
        const firstDayOfMonth = new Date(
          new Date().getFullYear(),
          new Date().getMonth(),
          1
        )
          .toISOString()
          .split("T")[0];

        let dailyTotal = 0;
        let monthlyTotal = 0;

        data.forEach((order) => {
          const orderDate = order.timestamp.split("T")[0];
          if (orderDate === today) {
            dailyTotal += order.total_amount;
          }
          if (orderDate >= firstDayOfMonth) {
            monthlyTotal += order.total_amount;
          }
        });

        setDailySales(dailyTotal);
        setMonthlySales(monthlyTotal);
      })
      .catch((error) => console.error("Error fetching orders:", error));

    // Fetch users to count customers who are users
    fetch("http://127.0.0.1:5555/user", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((users) => {
        // Filter users who are customers (assuming you have a 'role' or similar property)
        const customerUsers = users.filter((user) => user.role === "user");

        // Count customer users
        setCustomersCount(customerUsers.length);
      })
      .catch((error) => console.error("Error fetching users:", error));

    // Fetch products to count the number of products
    fetch("http://127.0.0.1:5555/product", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((products) => {
        // Count the number of products
        setProductsCount(products.length);
      })
      .catch((error) => console.error("Error fetching products:", error));
    
    //fetch categories 
fetch("http://127.0.0.1:5555/category", {
  method: "GET",
  headers: {
    Authorization: `Bearer ${token}`,
  },
})
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    // Count the number of categories
    setCategoriesCount(data.length);
  })
  .catch((error) => console.error("Error fetching categories:", error));
  }, []);

  return (

  

    <main className={`min-h-screen p-4 `}>
      <div className="flex justify-between items-center mb-5">
        <h3 className="text-xl font-bold">DASHBOARD</h3>
      </div>

      <div className="flex flex-col md:flex-row justify-between mb-5">
        <div className="bg-light-mode p-1 rounded mb-2 md:mb-0 md:mr-2 border border-solid border-dark-mode">
          <h4 className="text-medium font-bold">Total Daily Sales</h4>
          <p className="text-xl font-bold">Kshs {dailySales.toFixed(2)}</p>
        </div>
        <div className="bg-light-mode p-1 rounded border border-solid border-dark-mode">
          <h4 className="text-medium font-bold">Total Monthly Sales</h4>
          <p className="text-xl font-bold">Kshs {monthlySales.toFixed(2)}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mb-5">
        <div className="flex flex-col justify-around p-2 rounded bg-dark-mode">
          <div className="flex justify-between items-center">
            <h3 className="text-medium font-bold">PRODUCTS</h3>
            <BsFillArchiveFill className="text-xl" />
          </div>
          <h1 className="text-2xl font-bold">{productsCount}</h1>
        </div>
        <div className="flex flex-col justify-around p-2 rounded bg-dark-mode">
          <div className="flex justify-between items-center">
            <h3 className="text-medium font-bold">CATEGORIES</h3>
            <BsFillGrid3X3GapFill className="text-2xl" />
          </div>
          <h1 className="text-3xl font-bold">{categoriesCount}</h1>
        </div>
        <div className="flex flex-col justify-around p-2 rounded bg-dark-mode">
          <div className="flex justify-between items-center">
            <h3 className="text-medium font-bold">CUSTOMERS</h3>
            <BsPeopleFill className="text-xl" />
          </div>
          <h1 className="text-2xl font-bold">{customersCount}</h1>
        </div>
      </div>

      <div className="mt-5">
        <h2 className="text-xl font-bold mb-1">Latest Orders</h2>
        <div className="md:block hidden">
          <table className="min-w-full">
            <thead className="bg-dark-mode">
              <tr>
                <th className="py-2 px-4 ">Order ID</th>
                <th className="py-2 px-4 ">Date</th>
                <th className="py-2 px-4 ">Total Amount</th>
                <th className="py-2 px-4 ">Shipping Address</th>
                <th className="py-2 px-4 ">Payment Method</th>
              </tr>
            </thead>
            <tbody>
              {latestOrders.map((order) => (
                <tr key={order.id}>
                  <td className="py-2 px-4">{order.id}</td>
                  <td className="py-2 px-4">{order.timestamp}</td>
                  <td className="py-2 px-4">
                    Kshs {order.total_amount.toFixed(2)}
                  </td>
                  <td className="py-2 px-4">{order.shipping_address}</td>
                  <td className="py-2 px-4">{order.payment_method}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="md:hidden">
          {latestOrders.map((order) => (
            <div key={order.id} className="mb-4 p-4 bg-dark-mode rounded">
              <p className="font-bold">Order ID: {order.id}</p>
              <p>Date: {order.timestamp}</p>
              <p>Total Amount: Kshs {order.total_amount.toFixed(2)}</p>
              <p>Shipping Address: {order.shipping_address}</p>
              <p>Payment Method: {order.payment_method}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
    
  );
}

export default Dashboard;





