import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import ProductManagement from './components/ProductManagement';
import UserManagement from './components/UserManagement';
import NavigationBar from './components/NavigationBar'; // Add this for NavigationBar
import Dashboard from './components/Dashboard'; // Add Dashboard page
import TransactionHistory from './components/TransactionHistory'; // Add TransactionHistory page
import ImageCarousel from './components/ImageCarousel'; // Import ImageCarousel component
import './styles.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const App = () => {
  return (                                                                                 
    <Router>
      <Routes>
        {/* Redirect / to /signup */}
        <Route path="/" element={<Navigate to="/signup" />} />

        {/* Signup Route */}
        <Route path="/signup" element={<Signup />} />

        {/* Login Route */}
        <Route path="/login" element={<Login />} />

        {/* Home Route (Dashboard) */}
        <Route
          path="/home"
          element={
            <>
              <NavigationBar /> {/* This will show navigation on Home */}
              <ImageCarousel /> {/* Add the carousel here */}
              <Dashboard />
            </>
          }
        />

        {/* Product Management Route */}
        <Route
          path="/product-management"
          element={
            <>
              <NavigationBar /> {/* This will show navigation on Product Management */}
              <ProductManagement />
            </>
          }
        />

        {/* Transaction History Route */}
        <Route
          path="/transaction-history"
          element={
            <>
              <NavigationBar /> {/* This will show navigation on Transaction History */}
              <TransactionHistory />
            </>
          }
        />

        {/* User Management Route */}
        <Route
          path="/user-management"
          element={
            <>
              <NavigationBar /> {/* This will show navigation on User Management */}
              <UserManagement />
            </>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
