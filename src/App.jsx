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



import './App.css';

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
          path="/mycart"
          element={
            <PrivateRoute role="user">
              <Home />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/*"
          element={
            <PrivateRoute role="admin">
              <Admin />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
    );
}

export default App;




