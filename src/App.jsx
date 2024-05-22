import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Signup from './Pages/Signup/signup';
import Login from './Pages/Login/login';
import Home from './Pages/Homepage/homepage'
// import Admin from './Pages/AdminPage.jsx/admin'
import Sidebar from './Components/Sidebar/Sidebar';
import { AdminProduct } from './Pages/AdminPage.jsx/AdminProduct';
import MyCart from './Pages/Mycart/MyCart';

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
              <MyCart />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin"
          element={
            <PrivateRoute role="admin">
              <AdminProduct/>
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;




