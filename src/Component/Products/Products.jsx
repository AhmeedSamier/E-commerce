// src/Component/Products/Products.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaSearch, FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useCart } from '../../Context/CartContext';

function Products() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [categories, setCategories] = useState([]);
  const { addToCart } = useCart();

  useEffect(() => {
    // جلب المنتجات
    axios.get('https://fakestoreapi.com/products')
      .then(response => {
        setProducts(response.data);
        setFilteredProducts(response.data);
      });
    
    // جلب الفئات
    axios.get('https://fakestoreapi.com/products/categories')
      .then(response => {
        setCategories(response.data);
      });
  }, []);

  // تصفية المنتجات
  useEffect(() => {
    let result = products;
    
    // تصفية حسب البحث
    if (searchTerm) {
      result = result.filter(product => 
        product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // تصفية حسب الفئة
    if (categoryFilter !== 'all') {
      result = result.filter(product => product.category === categoryFilter);
    }
    
    // تصفية حسب السعر
    result = result.filter(product => 
      product.price >= priceRange[0] && product.price <= priceRange[1]
    );
    
    setFilteredProducts(result);
  }, [searchTerm, categoryFilter, priceRange, products]);

  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">Our Products</h1>
      
      {/* شريط البحث والتصفية */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="md:col-span-2">
          <div className="relative">
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full p-3 pl-10 border border-gray-300 rounded-md"
            />
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>
        
        <div>
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md"
          >
            <option value="all">All Categories</option>
            {categories.map(category => (
              <option key={category} value={category}>
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </option>
            ))}
          </select>
        </div>
        
        <div>
          <select
            onChange={(e) => setPriceRange(e.target.value === 'low' ? [0, 50] : 
              e.target.value === 'medium' ? [50, 200] : [200, 1000])}
            className="w-full p-3 border border-gray-300 rounded-md"
          >
            <option value="">Price Range</option>
            <option value="low">Low ($0 - $50)</option>
            <option value="medium">Medium ($50 - $200)</option>
            <option value="high">High ($200+)</option>
          </select>
        </div>
      </div>
      
      {/* قائمة المنتجات */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
            <Link to={`/productDetails/${product.id}`}>
              <div className="p-4">
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="w-full h-48 object-contain"
                />
                <h2 className="text-lg font-semibold mt-4 h-14 overflow-hidden">
                  {product.title}
                </h2>
                <p className="text-sm text-gray-500 mt-2 h-12 overflow-hidden">
                  {product.description.slice(0, 50)}...
                </p>
              </div>
            </Link>
            
            <div className="p-4 border-t border-gray-100">
              <div className="flex justify-between items-center mb-3">
                <span className="text-lg font-bold text-blue-600">${product.price}</span>
                <span className="flex items-center gap-1">
                  {product.rating.rate}
                  <FaStar className="text-yellow-500" />
                </span>
              </div>
              
              <button 
                onClick={(e) => {
                  e.preventDefault();
                  addToCart(product);
                }}
                className="w-full bg-sky-600 hover:bg-sky-700 text-white py-2 rounded-md transition flex items-center justify-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                </svg>
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;

