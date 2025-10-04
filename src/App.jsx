// src/App.jsx - FIXED WITH CORRECT PATHS
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

// ✅ CORRECT IMPORTS - FOLLOWING YOUR EXACT STRUCTURE
import { AuthProvider } from './context/AuthContext';    // Correct path
import Navbar from './components/Navbar';                // Correct path  
import Footer from './components/Footer';                // Correct path
import AppRouter from './router/AppRouter';              // Correct path

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gray-50 flex flex-col">
          <Navbar />
          <main className="flex-grow">
            <AppRouter />
          
          </main>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;