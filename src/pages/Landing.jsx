// src/pages/Landing.jsx
import React from 'react';
import HeroSection from '../components/HeroSection';
import FeatureCard from '../components/FeatureCard';

const Landing = () => {
  const features = [
    {
      icon: '🍽️',
      title: 'List Surplus Food',
      description: 'Restaurants and cafes can easily list their surplus meals before they go to waste.',
      color: 'green'
    },
    {
      icon: '🛒',
      title: 'Claim Meals',
      description: 'Browse available meals in your area and claim them with a single click.',
      color: 'blue'
    },
    {
      icon: '🌍',
      title: 'Reduce Waste',
      description: 'Join the movement to reduce food waste and help the environment.',
      color: 'purple'
    },
    {
      icon: '❤️',
      title: 'Help Communities',
      description: 'Provide meals to those in need while supporting local businesses.',
      color: 'orange'
    }
  ];

  return (
    <div>
      <HeroSection />
      
      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How RePlate Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Simple steps to make a big impact on food waste and community hunger
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                color={feature.color}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-500 to-blue-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Join thousands of restaurants and individuals fighting food waste together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-green-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
              Get Started Free
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-green-600 transition-all duration-200">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;