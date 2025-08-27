
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaStar, FaHeart, FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useCart } from '../../Context/CartContext';
import { useWishlist } from '../../Context/WishlistContext';
import { toast } from 'react-toastify';

function RecentProducts() {
  const [recentProducts, setRecentProducts] = useState([]);
  const { addToCart, isInCart } = useCart();
  const { addToWishlist, isInWishlist } = useWishlist();

  function getRecentProducts() {
    axios
      .get('https://fakestoreapi.com/products')
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

  const handleAddToCart = (product) => {
    addToCart(product);
    toast.success(`${product.title} added to Cart 🛒`);
  };

  const handleAddToWishlist = (product) => {
    addToWishlist(product);
    toast.info(`${product.title} added to Wishlist ❤️`);
  };

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-3xl font-bold text-center mb-8">Featured Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {recentProducts.map((product) => (
          <div
            key={product.id}
            className="group transform transition-transform duration-300 hover:-translate-y-1"
          >
            <div className="bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 border border-gray-100 group-hover:shadow-2xl group-hover:border-sky-200 h-full flex flex-col">
              
              <div className="relative flex-grow">
                <Link to={`/productDetails/${product.id}`} className="block h-full">
                  <div className="relative h-56 overflow-hidden bg-gradient-to-br from-gray-50 to-blue-50 flex items-center justify-center p-4">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="max-h-48 max-w-full object-contain transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                </Link>

                <div className="absolute top-3 right-3">
                  <button
                    className={`rounded-full p-2 shadow-md transition-colors ${
                      isInWishlist && isInWishlist(product.id)
                        ? 'bg-red-100 text-red-500'
                        : 'bg-white text-gray-400 hover:text-red-500'
                    }`}
                    onClick={() => handleAddToWishlist(product)}
                  >
                    <FaHeart
                      className={isInWishlist && isInWishlist(product.id) ? 'text-red-500' : ''}
                    />
                  </button>
                </div>
              </div>

              <div className="p-4 flex flex-col flex-grow">
                <Link to={`/productDetails/${product.id}`} className="flex-grow">
                  <h3 className="font-semibold text-gray-800 group-hover:text-sky-600 transition-colors line-clamp-2 mb-2">
                    {product.title}
                  </h3>
                </Link>

                <div className="flex justify-between items-center mt-3">
                  <span className="text-lg font-bold text-sky-600">
                    ${product.price.toFixed(2)}
                  </span>
                  <span className="flex items-center gap-1 text-sm text-gray-500">
                    {product.rating.rate} <FaStar className="text-yellow-500" />
                  </span>
                </div>

                <div className="mt-4">
                  <button
                    className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-sky-600 to-blue-700 hover:from-sky-700 hover:to-blue-800 text-white py-3 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
                    onClick={() => handleAddToCart(product)}
                  >
                    <FaShoppingCart />
                    <span>Add to Cart</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecentProducts;

