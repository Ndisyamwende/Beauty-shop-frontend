import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Signup from './Authentiction/Signup';
import Login from './Authentiction/Login';
import Homepage from './Pages/User/HomePage';
import Sidebar from './Components/Admin/Sidebar';
import MyCart from './Pages/User/MyCart';
import { NewHire } from './Pages/Admin/NewHire';
import { Inventory } from './Pages/Admin/Inventory';
import { Customer } from './Pages/Admin/Customer';
import SkinCare from './Pages/User/SkinCare';
import MakeUp from './Pages/User/MakeUp';
import Beardgang from './Pages/User/Beard';
import Fragrances from './Pages/User/Fragrances';




import CheckoutForm from './Pages/User/Checkout';
import CustomerContact from './Pages/User/Contact';
import Messages from './Pages/Admin/Messages';
import ProductList from './Pages/User/MakeUp';
import Dashboard from './Pages/Admin/DashBoard';
// import SkinCare from './Pages/User/SkinCare';



const PrivateRoute = ({ children, role }) => {
  const token = localStorage.getItem('token');
  const userRole = localStorage.getItem('role');

  if (!token || userRole !== role) {
    return <Navigate to="/login" />;
  }

  return children;
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/signup" />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/home"
          element={
            <PrivateRoute role="user">
              <Homepage />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/*"
          element={
            <PrivateRoute role="admin">
              <div className="flex">
                <Sidebar />
                <div className="flex-1 p-4">
                  <Routes>
                    <Route path="dashboard" element={<Dashboard />} />
                    <Route path="inventory" element={<Inventory />} />
                    <Route path="customers" element={<Customer />} />
                    <Route path="new-hire" element={<NewHire />} />
                    <Route path="messages" element={<Messages />} />
                  </Routes>
                </div>
              </div>
            </PrivateRoute>
          }
        />
        <Route
          path="/cart"
          element={
            <PrivateRoute role="user">
              <MyCart />
            </PrivateRoute>
          }
        />
        <Route
          path="/contactus"
          element={
            <PrivateRoute role="user">
              <CustomerContact />
            </PrivateRoute>
          }
        />
        <Route
          path="/home"
          element={
            <PrivateRoute role="user">
              <Homepage />
            </PrivateRoute>
          }
        />

        <Route
          path="/makeup"
          element={
            <PrivateRoute role="user">
              <MakeUp />
            </PrivateRoute>
          }
        />

        <Route
          path="/beardgang"
          element={
            <PrivateRoute role="user">
              <Beardgang />
            </PrivateRoute>
          }
        />

        <Route
          path="/fragrances"
          element={
            <PrivateRoute role="user">
              <Fragrances />
            </PrivateRoute>
          }
        />

        <Route
          path="/skincare"
          element={
            <PrivateRoute role="user">
              <SkinCare />
            </PrivateRoute>
          }
          
        />

      </Routes>
    </Router>
  );
}

export default App;