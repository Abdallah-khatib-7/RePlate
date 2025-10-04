// src/pages/Contact.jsx
import React, { useState, useEffect } from 'react';
const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    inquiryType: 'general'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    return () => setIsVisible(false);
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    alert('Thank you for your message! We\'ll get back to you within 24 hours.');
    setFormData({ name: '', email: '', subject: '', message: '', inquiryType: 'general' });
    setIsSubmitting(false);
  };

  const contactMethods = [
    {
      icon: '📧',
      title: 'Email Us',
      description: 'Send us an email anytime',
      details: 'hello@replate.com',
      action: 'mailto:hello@replate.com'
    },
    {
      icon: '📞',
      title: 'Call Us',
      description: 'Mon-Fri from 9am to 6pm',
      details: '+1 (555) 123-REPLATE',
      action: 'tel:+15551237753'
    },
    {
      icon: '💬',
      title: 'Live Chat',
      description: 'Get instant help',
      details: 'Start chatting now',
      action: '#chat'
    },
    {
      icon: '📍',
      title: 'Visit Us',
      description: 'Come say hello',
      details: '123 Green Street, Eco City',
      action: 'https://maps.google.com'
    }
  ];

  const faqs = [
    {
      question: 'How do I become a restaurant partner?',
      answer: 'Simply sign up as a restaurant partner on our platform, complete the verification process, and start listing your surplus food.'
    },
    {
      question: 'Is there a cost to use RePlate?',
      answer: 'For food recipients, the platform is completely free. Restaurant partners pay a small commission on successful food listings.'
    },
    {
      question: 'How do I claim food?',
      answer: 'Browse available meals in your area, select the items you want, and follow the pickup instructions provided by the restaurant.'
    },
    {
      question: 'What types of food can be listed?',
      answer: 'We accept all types of surplus food that is safe for consumption, including prepared meals, baked goods, and fresh ingredients.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`py-12 text-center transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h1 className="text-5xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              Get In Touch
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              We'd love to hear from you. Whether you have questions about our platform, 
              want to become a partner, or just want to say hello - we're here to help!
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8">
            
            {/* Contact Methods */}
            <div className={`space-y-6 transform transition-all duration-500 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}>
              <h2 className="text-3xl font-bold text-gray-900">Let's Connect</h2>
              <p className="text-gray-600 leading-relaxed">
                Choose the most convenient way to reach out to our team. We're always happy to help!
              </p>

              {contactMethods.map((method, index) => (
                <a
                  key={index}
                  href={method.action}
                  className={`flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                  }`}
                  style={{ transitionDelay: `${300 + index * 100}ms` }}
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl flex items-center justify-center text-white text-xl group-hover:scale-110 transition-transform duration-300">
                    {method.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 text-lg mb-1">{method.title}</h3>
                    <p className="text-gray-600 text-sm mb-2">{method.description}</p>
                    <p className="text-green-600 font-semibold">{method.details}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* FAQ Section */}
            <div className={`transform transition-all duration-500 delay-600 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Quick Answers</h3>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div 
                    key={index}
                    className={`bg-white rounded-xl p-4 shadow-md transform transition-all duration-300 delay-${700 + index * 100} ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}
                  >
                    <h4 className="font-semibold text-gray-900 mb-2">{faq.question}</h4>
                    <p className="text-gray-600 text-sm">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className={`bg-white rounded-3xl shadow-2xl p-8 transform transition-all duration-500 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Send us a Message</h2>
              <p className="text-gray-600 mb-8">Fill out the form below and we'll get back to you as soon as possible.</p>

              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Name and Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                {/* Inquiry Type and Subject */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Inquiry Type *
                    </label>
                    <select
                      name="inquiryType"
                      value={formData.inquiryType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                    >
                      <option value="general">General Inquiry</option>
                      <option value="partnership">Partnership</option>
                      <option value="support">Technical Support</option>
                      <option value="feedback">Feedback</option>
                      <option value="media">Media Inquiry</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                      placeholder="What is this regarding?"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 resize-none"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-green-500 to-blue-500 text-white py-4 rounded-xl font-semibold text-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:transform-none relative overflow-hidden group"
                >
                  <span className="relative z-10">
                    {isSubmitting ? 'Sending Message...' : 'Send Message'}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Loading Animation */}
                  {isSubmitting && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    </div>
                  )}
                </button>

                {/* Privacy Note */}
                <p className="text-center text-gray-500 text-sm">
                  By submitting this form, you agree to our privacy policy. We'll never share your information with third parties.
                </p>

              </form>
            </div>

            {/* Social Links */}
            <div className={`mt-8 text-center transform transition-all duration-500 delay-800 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              <p className="text-gray-600 mb-4">Follow us on social media</p>
              <div className="flex justify-center space-x-6">
                {['📘', '🐦', '📸', '💼'].map((icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="w-12 h-12 bg-white rounded-xl shadow-lg flex items-center justify-center text-xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-110"
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;