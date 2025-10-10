// src/router/AppRouter.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Import pages from YOUR EXACT STRUCTURE
import Landing from '../pages/Landing';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Dashboard from '../pages/Dashboard';
import PostFood from '../pages/PostFood';
import ClaimFood from '../pages/ClaimFood';
import Admin from '../pages/Admin';
import NotFound from '../pages/NotFound';
import MainDashboard from '../pages/MainDashboard';

const AppRouter = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Landing />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
<Route 
  path="/main-dashboard" 
  element={
    
      <MainDashboard />
    
  } 
/>      
      {/* Protected Routes */}
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/post-food" element={<PostFood />} />
      <Route path="/claim-food" element={<ClaimFood />} />
      <Route path="/admin" element={<Admin />} />
      
      {/* 404 Catch All */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRouter;