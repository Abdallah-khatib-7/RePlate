// src/pages/Landing.jsx
import React from 'react';
import HeroSection from '../components/HeroSection';
import FeatureCard from '../components/FeatureCard';
import Chatbot from '../components/ChatBot';


const Landing = () => {
  

  return (
    <div>
      <HeroSection />
      
{/* Impact & Statistics Section - EYE-CATCHING */}
<section className="py-20 bg-gradient-to-br from-green-50 to-blue-50 relative overflow-hidden">
  {/* Background Elements */}
  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=2000')] bg-cover bg-center opacity-5"></div>
  <div className="absolute top-10 left-10 w-20 h-20 bg-green-200 rounded-full blur-xl opacity-30"></div>
  <div className="absolute bottom-10 right-10 w-32 h-32 bg-blue-200 rounded-full blur-xl opacity-30"></div>
  
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    
    {/* Section Header */}
    <div className="text-center mb-16">
      <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-4">
        🌟 JOIN THE MOVEMENT
      </div>
      <h2 className="text-5xl font-bold text-gray-900 mb-6">
        Turn <span className="text-green-600">Food Waste</span> into<br />
        <span className="text-blue-600">Community Meals</span>
      </h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
        Every meal saved feeds a person, reduces greenhouse gases, and supports local businesses. 
        Be part of the solution that's transforming our food system.
      </p>
    </div>

    {/* Impact Stats - VISUALLY STUNNING */}
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
      {[
        { number: '1.3B', label: 'Tons of Food Wasted Yearly', icon: '🗑️', color: 'red' },
        { number: '800M', label: 'People Go Hungry Daily', icon: '🍽️', color: 'orange' },
        { number: '8%', label: 'Global Greenhouse Gases from Food Waste', icon: '🌍', color: 'blue' },
        { number: '$1T', label: 'Economic Loss Annually', icon: '💰', color: 'purple' }
      ].map((stat, index) => (
        <div 
          key={index}
          className="bg-white rounded-2xl shadow-lg p-6 text-center transform hover:scale-105 transition-all duration-300 hover:shadow-xl border border-gray-100"
        >
          <div className={`text-3xl mb-3 ${stat.color === 'red' ? 'text-red-500' : stat.color === 'orange' ? 'text-orange-500' : stat.color === 'blue' ? 'text-blue-500' : 'text-purple-500'}`}>
            {stat.icon}
          </div>
          <div className="text-2xl font-bold text-gray-900 mb-2">{stat.number}</div>
          <div className="text-sm text-gray-600 leading-tight">{stat.label}</div>
        </div>
      ))}
    </div>

    {/* How RePlate Solves This - PERSUASIVE FLOW */}
    <div className="bg-white rounded-3xl shadow-2xl p-8 mb-16">
      <div className="text-center mb-12">
        <h3 className="text-3xl font-bold text-gray-900 mb-4">
          How <span className="text-green-600">RePlate</span> Creates Change
        </h3>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          We've built a simple, powerful platform that turns environmental challenges into community opportunities
        </p>
      </div>

      {/* Solution Steps - VISUAL JOURNEY */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {[
          {
            step: '01',
            title: 'Restaurants List Surplus',
            description: 'Local restaurants easily list their extra meals before they go to waste',
            features: ['Recover food costs', 'Reduce disposal fees', 'Build community goodwill'],
            icon: '🏪',
            color: 'from-green-500 to-green-600'
          },
          {
            step: '02',
            title: 'You Discover Amazing Deals',
            description: 'Browse available meals at 50-80% off regular prices',
            features: ['Restaurant-quality food', 'Huge savings', 'Try new cuisines'],
            icon: '🔍',
            color: 'from-blue-500 to-blue-600'
          },
          {
            step: '03',
            title: 'Together We Make Impact',
            description: 'Every meal claimed creates positive environmental and social change',
            features: ['Reduce food waste', 'Feed communities', 'Fight climate change'],
            icon: '🌍',
            color: 'from-purple-500 to-purple-600'
          }
        ].map((solution, index) => (
          <div key={index} className="group text-center">
            {/* Step Number */}
            <div className={`w-16 h-16 bg-gradient-to-r ${solution.color} rounded-2xl flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6 transform group-hover:scale-110 transition-transform duration-300`}>
              {solution.step}
            </div>
            
            {/* Icon */}
            <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
              {solution.icon}
            </div>
            
            {/* Content */}
            <h4 className="text-xl font-bold text-gray-900 mb-3">{solution.title}</h4>
            <p className="text-gray-600 mb-4 leading-relaxed">{solution.description}</p>
            
            {/* Features */}
            <ul className="space-y-2">
              {solution.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-center justify-center space-x-2 text-sm text-gray-500">
                  <span className="text-green-500">✓</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>

    {/* URGENT CALL TO ACTION - CAN'T RESIST */}
    <div className="text-center">
      <div className="bg-gradient-to-r from-green-500 to-blue-500 rounded-3xl p-12 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-white rounded-full opacity-10"></div>
        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-white rounded-full opacity-10"></div>
        
        <div className="relative z-10">
          <h3 className="text-4xl font-bold mb-4">
            Ready to Make a <span className="text-yellow-300">Real Difference</span>?
          </h3>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join thousands of food heroes already saving meals, supporting communities, and fighting climate change
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-white text-green-600 px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-transform duration-200 shadow-lg hover:shadow-xl flex items-center space-x-3">
              <span>🚀</span>
              <span>Start Saving Food Now</span>
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-green-600 transition-all duration-200 flex items-center space-x-3">
              <span>🏪</span>
              <span>List Your Restaurant</span>
            </button>
          </div>
          
          <p className="text-green-100 mt-6 text-sm">
            ⏰ <strong>Limited time:</strong> First 100 sign-ups get premium features free forever!
          </p>
        </div>
      </div>
    </div>

  </div>
</section>

{/* Social Proof Section - BUILD TRUST */}
<section className="py-16 bg-white border-t border-gray-100">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12">
      <h3 className="text-2xl font-bold text-gray-900 mb-4">
        Trusted by Food Heroes Worldwide
      </h3>
    </div>
    
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
      {['🥗 Fresh Bites', '🍕 Urban Eats', '🏪 Green Kitchen', '🌮 Taco Fiesta'].map((restaurant, index) => (
        <div key={index} className="text-center p-4">
          <div className="text-3xl mb-2">🏆</div>
          <div className="font-semibold text-gray-700">{restaurant}</div>
          <div className="text-yellow-500 text-sm">★★★★★</div>
        </div>
      ))}
    </div>
  </div>
</section>

    
      <Chatbot />
    </div>
  );
};

export default Landing;