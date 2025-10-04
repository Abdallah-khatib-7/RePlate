// src/App.jsx
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';  // YOUR STRUCTURE
import Navbar from './components/Navbar';              // YOUR STRUCTURE
import Footer from './components/Footer';              // YOUR STRUCTURE
import AppRouter from './router/AppRouter';            // YOUR STRUCTURE

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