
// src/CategoriesAndBrands.js
import React, { useState, useEffect } from 'react';

const CategoriesAndBrands = () => {
  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState('categories');

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        
        // Fetch categories
        const categoriesResponse = await fetch('https://fakestoreapi.com/products/categories');
        const categoriesData = await categoriesResponse.json();
        setCategories(categoriesData);
        
        // Fetch products to extract brands
        const productsResponse = await fetch('https://fakestoreapi.com/products');
        const productsData = await productsResponse.json();
        
        // Extract unique brands
        const brandSet = new Set();
        productsData.forEach(product => {
          // Some products don't have a brand, so we use a placeholder
          const brand = product.brand || 'Unknown Brand';
          brandSet.add(brand);
        });
        
        setBrands(Array.from(brandSet));
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch data. Please try again.');
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Images for categories
  const categoryImages = {
    "electronics": "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
    "jewelery": "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
    "men's clothing": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    "women's clothing": "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg"
  };

  // Icons for brands (using emojis)
  const brandIcons = {
    "Apple": "🍎",
    "Samsung": "📱",
    "Nike": "👟",
    "Adidas": "👕",
    "Sony": "📺",
    "Dell": "💻",
    "HP": "🖨️",
    "Microsoft": "🪟",
    "Oppo": "📱",
    "Louis Philippe": "👔",
    "Cannon": "📷",
    "Mi": "📱",
    "Unknown Brand": "🏷️"
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
          <strong className="font-bold">Error! </strong>
          <span className="block sm:inline">{error}</span>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl font-sans">
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-800 mb-4">E-Commerce Store</h1>
        <p className="text-lg text-blue-600 max-w-2xl mx-auto">
          Discover the latest categories and brands we offer at competitive prices and guaranteed quality.
        </p>
      </header>

      <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-12">
        <div className="flex border-b border-gray-200">
          <button 
            onClick={() => setActiveTab('categories')}
            className={`flex-1 py-4 px-6 text-center font-medium text-lg transition-all duration-300 ${
              activeTab === 'categories' 
                ? 'bg-gradient-to-r from-blue-600 to-indigo-700 text-white' 
                : 'text-gray-600 hover:bg-blue-50'
            }`}
          >
            Categories
          </button>
          <button 
            onClick={() => setActiveTab('brands')}
            className={`flex-1 py-4 px-6 text-center font-medium text-lg transition-all duration-300 ${
              activeTab === 'brands' 
                ? 'bg-gradient-to-r from-blue-600 to-indigo-700 text-white' 
                : 'text-gray-600 hover:bg-blue-50'
            }`}
          >
            Brands
          </button>
        </div>

        <div className="p-6">
          {activeTab === 'categories' && (
            <div>
              <h2 className="text-2xl font-bold text-blue-800 mb-6 text-center">Browse by Category</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {categories.map(category => (
                  <div 
                    key={category} 
                    className="group bg-white rounded-xl shadow-md overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border border-blue-100"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={categoryImages[category] || "https://via.placeholder.com/300x200?text=Category+Image"} 
                        alt={category} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 to-transparent"></div>
                    </div>
                    
                    <div className="p-5">
                      <h3 className="text-xl font-bold text-blue-800 mb-2 capitalize">
                        {category}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        Discover the latest products in this category at competitive prices.
                      </p>
                      <button className="w-full py-2 bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-lg hover:from-blue-700 hover:to-indigo-800 transition-all duration-300 font-medium">
                        Browse Category
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'brands' && (
            <div>
              <h2 className="text-2xl font-bold text-blue-800 mb-6 text-center">Our Brands</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {brands.map(brand => (
                  <div 
                    key={brand} 
                    className="bg-white rounded-xl shadow-md p-6 border border-blue-100 transform transition-all duration-300 hover:shadow-xl hover:-translate-y-2 flex flex-col items-center"
                  >
                    <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center mb-4 text-3xl">
                      {brandIcons[brand] || "🏷️"}
                    </div>
                    
                    <h3 className="text-xl font-bold text-blue-800 mb-2 text-center">{brand}</h3>
                    
                    <div className="mt-4 flex justify-center space-x-2">
                      {[...Array(5)].map((_, i) => (
                        <svg 
                          key={i} 
                          className="w-5 h-5 text-yellow-400" 
                          fill="currentColor" 
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    
                    <p className="text-gray-500 text-sm mt-2 text-center">(4.8 Rating)</p>
                    
                    <button className="mt-4 w-full py-2 bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-lg hover:from-blue-700 hover:to-indigo-800 transition-colors duration-300 font-medium">
                      Browse Products
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <footer className="text-center text-blue-700 py-6 border-t border-blue-200">
        <p>All Rights Reserved © 2023 E-Commerce Store</p>
      </footer>
    </div>
  );
};

export default CategoriesAndBrands;