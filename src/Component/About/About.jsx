// src/Component/About/About.jsx
import React from 'react';

function About() {
  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">About Us</h1>
      
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-6">
        <div className="flex flex-col md:flex-row items-center mb-8">
          <div className="bg-gray-200 border-2 border-dashed rounded-xl w-64 h-64 mb-4 md:mb-0 md:mr-8" />
          <div>
            <h2 className="text-2xl font-bold mb-4">Our Story</h2>
            <p className="text-gray-700">
              Founded in 2023, TimeZone has been providing high-quality products to customers worldwide. 
              Our mission is to offer the best shopping experience with a wide selection of products, 
              competitive prices, and excellent customer service.
            </p>
          </div>
        </div>
        
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Our Values</h2>
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <li className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-bold mb-2">Quality</h3>
              <p>We ensure all products meet our high-quality standards before reaching our customers.</p>
            </li>
            <li className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-bold mb-2">Customer Focus</h3>
              <p>Our customers are at the heart of everything we do. We strive to exceed expectations.</p>
            </li>
            <li className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-bold mb-2">Innovation</h3>
              <p>We continuously improve our services and offerings to stay ahead of the curve.</p>
            </li>
          </ul>
        </div>
        
        <div>
          <h2 className="text-2xl font-bold mb-4">Meet Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map(id => (
              <div key={id} className="text-center">
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-32 h-32 mx-auto mb-4" />
                <h3 className="font-bold">Team Member {id}</h3>
                <p className="text-gray-600">Position</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;