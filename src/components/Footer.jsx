// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand Column */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">R</span>
              </div>
              <span className="text-xl font-bold">RePlate</span>
            </Link>
            <p className="text-gray-400 text-sm mb-4">
              Reducing food waste, one meal at a time. Join our mission to feed communities and protect our planet.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                📘
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                🐦
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                📸
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors duration-200">Home</Link></li>
              <li><Link to="/claim-food" className="text-gray-400 hover:text-white transition-colors duration-200">Find Food</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors duration-200">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors duration-200">Contact</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">How It Works</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">FAQ</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Support</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link to="/terms" className="text-gray-400 hover:text-white transition-colors duration-200">Terms Of Service</Link></li>
              <li><Link to="/privacy" className="text-gray-400 hover:text-white transition-colors duration-200">Privacy Policy</Link></li>
              <li><Link to="/Cookies" className="text-gray-400 hover:text-white transition-colors duration-200">Cookies Policy</Link></li>
            </ul>
          </div>

        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 RePlate. All rights reserved. Made with ❤️ for a better world.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;