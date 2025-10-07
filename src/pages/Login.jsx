// src/pages/Login.jsx
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
const Login = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });
  const navigate = useNavigate();

  useEffect(() => {
    setIsVisible(true);
    return () => setIsVisible(false);
  }, []);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate login process
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // For demo purposes - always succeed
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('userEmail', formData.email);
    
    setIsLoading(false);
    navigate('/main-dashboard.jsx');
  };

  const socialLogins = [
    { provider: 'google', icon: '🔍', color: 'bg-red-500 hover:bg-red-600', text: 'Google' },
    { provider: 'facebook', icon: '📘', color: 'bg-blue-500 hover:bg-blue-600', text: 'Facebook' },
    { provider: 'apple', icon: '🍎', color: 'bg-gray-800 hover:bg-gray-900', text: 'Apple' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className={`w-full max-w-md transform transition-all duration-1000 ${
        isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-10 opacity-0 scale-95'
      }`}>
        
        {/* Login Card */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          
          {/* Header Section */}
          <div className="bg-gradient-to-r from-green-500 to-blue-500 p-8 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-white opacity-10"></div>
            <div className="relative z-10">
              <Link to="/" className="inline-flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                  <span className="text-green-600 font-bold text-xl">R</span>
                </div>
                <span className="text-2xl font-bold text-white">RePlate</span>
              </Link>
              <h1 className="text-3xl font-bold text-white mb-2">Welcome Back</h1>
              <p className="text-blue-100">Sign in to your account to continue your food-saving journey</p>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute top-4 left-4 w-8 h-8 bg-white opacity-20 rounded-full animate-bounce"></div>
            <div className="absolute bottom-4 right-4 w-6 h-6 bg-white opacity-30 rounded-full animate-pulse"></div>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="p-8 space-y-6">
            
            {/* Email Input */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 flex items-center justify-between">
                <span>Email Address</span>
                <span className="text-green-600 text-xs">* Required</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="text-gray-400 text-lg">📧</span>
                </div>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 placeholder-gray-400 text-lg"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            {/* Password Input */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 flex items-center justify-between">
                <span>Password</span>
                <span className="text-green-600 text-xs">* Required</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="text-gray-400 text-lg">🔒</span>
                </div>
                <input
                  type="password"
                  name="password"
                  required
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full pl-12 pr-12 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 placeholder-gray-400 text-lg"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 transition-colors duration-200"
                >
                  👁️
                </button>
              </div>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between">
              <label className="flex items-center space-x-3 cursor-pointer group">
                <div className="relative">
                  <input 
                    type="checkbox" 
                    name="rememberMe"
                    checked={formData.rememberMe}
                    onChange={handleInputChange}
                    className="w-5 h-5 text-green-600 rounded focus:ring-green-500 border-gray-300" 
                  />
                </div>
                <span className="text-sm text-gray-600 group-hover:text-gray-800 transition-colors duration-200">
                  Remember me
                </span>
              </label>
              <Link 
                to="/forgot-password" 
                className="text-sm text-green-600 hover:text-green-700 font-medium transition-colors duration-200"
              >
                Forgot password?
              </Link>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-green-500 to-blue-500 text-white py-4 rounded-xl font-semibold text-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:transform-none relative overflow-hidden group"
            >
              <span className="relative z-10">
                {isLoading ? 'Signing In...' : 'Sign In'}
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Loading Animation */}
              {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                </div>
              )}
            </button>

            {/* Divider */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-3 bg-white text-gray-500">Or continue with</span>
              </div>
            </div>

            {/* Social Login Buttons */}
            <div className="grid grid-cols-3 gap-3">
              {socialLogins.map((social, index) => (
                <button
                  key={social.provider}
                  type="button"
                  className={`flex items-center justify-center space-x-2 py-3 rounded-xl text-white font-medium transition-all duration-300 transform hover:scale-105 ${social.color} ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                  style={{ transitionDelay: `${200 + index * 100}ms` }}
                >
                  <span className="text-lg">{social.icon}</span>
                  <span className="hidden sm:inline">{social.text}</span>
                </button>
              ))}
            </div>

            {/* Sign Up Link */}
            <div className="text-center pt-4">
              <p className="text-gray-600">
                Don't have an account?{' '}
                <Link 
                  to="/register" 
                  className="text-green-600 hover:text-green-700 font-semibold transition-colors duration-200 underline"
                >
                  Sign up for free
                </Link>
              </p>
            </div>

          </form>

          {/* Demo Credentials Notice */}
          <div className="bg-green-50 border-t border-green-200 p-4 text-center">
            <p className="text-sm text-green-700">
              <span className="font-semibold">Demo:</span> Use any email and password to login
            </p>
          </div>
        </div>

        {/* Benefits Section */}
        <div className={`mt-8 text-center transform transition-all duration-500 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-gray-600">
            <div className="flex items-center justify-center space-x-2">
              <span>🍽️</span>
              <span>Save on delicious meals</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <span>🌍</span>
              <span>Reduce food waste</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <span>❤️</span>
              <span>Support local businesses</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Login;