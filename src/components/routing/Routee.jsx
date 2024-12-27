import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from '../layout/Layout.jsx'; // Ensure this path is correct
import Home from '../cpu/Home.jsx'; // Ensure this path is correct
import Register from '../auth/Register.jsx'; // Ensure this path is correct
import Login from '../auth/Login.jsx'; // Ensure this path is correct
import ForgotPassword from '../auth/ForgotPassword.jsx'; // Ensure this path is correct

const Routee = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} /> {/* Default route for `/` */}
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
      </Route>
    </Routes>
  );
};

export default Routee;













// import React from 'react';
// import { Route, Routes } from 'react-router-dom';
// import Layout from '../layout/Layout.jsx';
// import Home from '../cpu/Home.jsx';
// import Register from '../auth/Register.jsx';
// import Login from '../auth/Login.jsx';
// import ForgotPassword from '../auth/ForgotPassword.jsx';

// const UbaidRoute = () => {
//   return (
//     <>
//       <Routes>
//         <Route path="/" element={<Layout />}>
//           <Route index element={<Home />} /> {/* Default route for `/` */}
//           <Route path="register" element={<Register />} />
//           <Route path="login" element={<Login />} />
//           <Route path="forgot-password" element={<ForgotPassword/>} />
//         </Route>
//       </Routes>
//     </>
//   );
// };

// export default UbaidRoute;
