// src/components/Logo.jsx
import React from 'react';

export const Logo = ({ className = "w-8 h-8" }) => {
  return (
    <svg 
      className={className}
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Plate Circle */}
      <circle cx="50" cy="50" r="45" fill="white" stroke="#10B981" strokeWidth="3"/>
      
      {/* Recycle Symbol */}
      <path 
        d="M35 40 L50 30 L65 40 L60 50 L70 55 L65 65 L50 70 L35 65 L40 55 L30 50 Z" 
        fill="#10B981"
      />
      
      {/* Food Dots */}
      <circle cx="40" cy="45" r="3" fill="#FBBF24"/>
      <circle cx="50" cy="40" r="3" fill="#EF4444"/>
      <circle cx="60" cy="45" r="3" fill="#3B82F6"/>
    </svg>
  );
};

export const LogoWithText = ({ className = "w-32" }) => {
  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      <Logo className="w-10 h-10" />
      <span className="text-2xl font-bold text-gray-900">RePlate</span>
    </div>
  );
};