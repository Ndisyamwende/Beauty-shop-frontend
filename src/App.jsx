import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Signup from './Pages/Signup/signup';
import Login from './Pages/Login/login';
import Home from './Pages/Homepage/homepage'
import Admin from './Pages/AdminPage.jsx/admin'
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
          path="/home"
          element={
            <PrivateRoute role="user">
              <Home />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin"
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




// import React from 'react';
// import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
// import Signup from './Pages/Signup/signup';
// import Login from './Pages/Login/login';
// import Home from './Pages/Homepage/homepage';
// import Admin from './Pages/AdminPage.jsx/admin';
// // import ForgotPasswordRequest from './Pages/ForgotPassword/ForgotPasswordRequest';
// import ForgotPasswordRequest from './Pages/Request PasswordReset';
// // import ResetPassword from './Pages/ForgotPassword/ResetPassword';
// import ResetPassword from './Pages/ResetPassword';
// import './App.css';

// const PrivateRoute = ({ children, role }) => {
//   const token = localStorage.getItem('token');
//   const userRole = localStorage.getItem('role');

//   if (!token || userRole !== role) {
//     return <Navigate to="/login" />;
//   }

//   return children;
// };

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Navigate to="/signup" />} />
//         <Route path="/signup" element={<Signup />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/forgot-password" element={<ForgotPasswordRequest />} />
//         <Route path="/reset-password" element={<ResetPassword />} />
//         <Route
//           path="/home"
//           element={
//             <PrivateRoute role="user">
//               <Home />
//             </PrivateRoute>
//           }
//         />
//         <Route
//           path="/admin"
//           element={
//             <PrivateRoute role="admin">
//               <Admin />
//             </PrivateRoute>
//           }
//         />
//       </Routes>
//     </Router>
//   );
// }

// export default App;



