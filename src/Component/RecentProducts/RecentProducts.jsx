// src/Component/RecentProducts/RecentProducts.jsx
import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useCart } from '../../Context/CartContext'; // استيراد useCart

function RecentProducts() {
    const [recentProducts, setRecentProducts] = useState([]);
    const { addToCart } = useCart(); // استيراد addToCart

    function getRecentProducts() 
    {
        axios.get('https://fakestoreapi.com/products')   
        .then(response => {
            setRecentProducts(response.data);
        })
        .catch(error => {
            console.error('Error fetching products:', error);
        });
    }

    useEffect(() => {
        getRecentProducts();    
    }, []);

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-3xl font-bold text-center mb-8">Featured Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {recentProducts.map((product) => (
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

export default RecentProducts;