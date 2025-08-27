// src/Component/Footer/Footer.jsx
import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaApple, FaGooglePlay, FaCcVisa, FaCcMastercard, FaCcAmex, FaCcPaypal, FaShieldAlt, FaUndo, FaAward } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-slate-900 to-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Store Information */}
          <div>
            <h3 className="text-xl font-bold mb-6 border-b-2 border-sky-500 pb-2 inline-block">ShopEase</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Your ultimate shopping destination with top brands, competitive prices, and exceptional customer service.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="social-icon bg-blue-600 hover:bg-blue-700 p-3 rounded-full transition-all duration-300 hover:-translate-y-1">
                <FaFacebookF className="text-white text-lg" />
              </a>
              <a href="#" className="social-icon bg-blue-400 hover:bg-blue-500 p-3 rounded-full transition-all duration-300 hover:-translate-y-1">
                <FaTwitter className="text-white text-lg" />
              </a>
              <a href="#" className="social-icon bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 p-3 rounded-full transition-all duration-300 hover:-translate-y-1">
                <FaInstagram className="text-white text-lg" />
              </a>
              <a href="#" className="social-icon bg-red-600 hover:bg-red-700 p-3 rounded-full transition-all duration-300 hover:-translate-y-1">
                <FaYoutube className="text-white text-lg" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 border-b-2 border-sky-500 pb-2 inline-block">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#" className="footer-link text-gray-300 hover:text-white transition-colors duration-200 relative pb-1 inline-block after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-sky-500 after:left-0 after:bottom-0 after:transition-all after:duration-300 hover:after:w-full">Home</a></li>
              <li><a href="#" className="footer-link text-gray-300 hover:text-white transition-colors duration-200 relative pb-1 inline-block after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-sky-500 after:left-0 after:bottom-0 after:transition-all after:duration-300 hover:after:w-full">New Arrivals</a></li>
              <li><a href="#" className="footer-link text-gray-300 hover:text-white transition-colors duration-200 relative pb-1 inline-block after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-sky-500 after:left-0 after:bottom-0 after:transition-all after:duration-300 hover:after:w-full">Special Offers</a></li>
              <li><a href="#" className="footer-link text-gray-300 hover:text-white transition-colors duration-200 relative pb-1 inline-block after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-sky-500 after:left-0 after:bottom-0 after:transition-all after:duration-300 hover:after:w-full">About Us</a></li>
              <li><a href="#" className="footer-link text-gray-300 hover:text-white transition-colors duration-200 relative pb-1 inline-block after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-sky-500 after:left-0 after:bottom-0 after:transition-all after:duration-300 hover:after:w-full">Contact Us</a></li>
              <li><a href="#" className="footer-link text-gray-300 hover:text-white transition-colors duration-200 relative pb-1 inline-block after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-sky-500 after:left-0 after:bottom-0 after:transition-all after:duration-300 hover:after:w-full">Blog</a></li>
            </ul>
          </div>
          
          {/* Categories */}
          <div>
            <h3 className="text-xl font-bold mb-6 border-b-2 border-sky-500 pb-2 inline-block">Categories</h3>
            <ul className="space-y-3">
              <li><a href="#" className="footer-link text-gray-300 hover:text-white transition-colors duration-200 relative pb-1 inline-block after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-sky-500 after:left-0 after:bottom-0 after:transition-all after:duration-300 hover:after:w-full">Electronics</a></li>
              <li><a href="#" className="footer-link text-gray-300 hover:text-white transition-colors duration-200 relative pb-1 inline-block after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-sky-500 after:left-0 after:bottom-0 after:transition-all after:duration-300 hover:after:w-full">Fashion & Clothing</a></li>
              <li><a href="#" className="footer-link text-gray-300 hover:text-white transition-colors duration-200 relative pb-1 inline-block after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-sky-500 after:left-0 after:bottom-0 after:transition-all after:duration-300 hover:after:w-full">Home & Furniture</a></li>
              <li><a href="#" className="footer-link text-gray-300 hover:text-white transition-colors duration-200 relative pb-1 inline-block after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-sky-500 after:left-0 after:bottom-0 after:transition-all after:duration-300 hover:after:w-full">Mobile & Accessories</a></li>
              <li><a href="#" className="footer-link text-gray-300 hover:text-white transition-colors duration-200 relative pb-1 inline-block after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-sky-500 after:left-0 after:bottom-0 after:transition-all after:duration-300 hover:after:w-full">Home Appliances</a></li>
              <li><a href="#" className="footer-link text-gray-300 hover:text-white transition-colors duration-200 relative pb-1 inline-block after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-sky-500 after:left-0 after:bottom-0 after:transition-all after:duration-300 hover:after:w-full">Sports & Outdoors</a></li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-6 border-b-2 border-sky-500 pb-2 inline-block">Newsletter</h3>
            <p className="text-gray-300 mb-4">
              Subscribe to our newsletter for updates on new products and special offers
            </p>
            <div className="flex mb-6">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="px-4 py-3 w-full rounded-l-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-sky-300"
              />
              <button className="bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-700 hover:to-blue-700 text-white px-6 py-3 rounded-r-lg font-medium transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg">
                Subscribe
              </button>
            </div>
            
            <div className="mb-6">
              <h4 className="font-bold mb-3">Mobile App</h4>
              <div className="flex space-x-3">
                <a href="#" className="bg-black text-white px-4 py-2 rounded-lg flex items-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <FaApple className="text-2xl mr-2" />
                  <div>
                    <div className="text-xs">Download on the</div>
                    <div className="font-bold">App Store</div>
                  </div>
                </a>
                <a href="#" className="bg-black text-white px-4 py-2 rounded-lg flex items-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <FaGooglePlay className="text-xl mr-2" />
                  <div>
                    <div className="text-xs">Get it on</div>
                    <div className="font-bold">Google Play</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Payment & Trust Section */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <h3 className="text-lg font-bold mb-6 text-center">Accepted Payment Methods</h3>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="bg-white rounded-lg p-2 shadow-md">
              <FaCcVisa className="text-3xl text-blue-900" />
            </div>
            <div className="bg-white rounded-lg p-2 shadow-md">
              <FaCcMastercard className="text-3xl text-red-700" />
            </div>
            <div className="bg-white rounded-lg p-2 shadow-md">
              <FaCcAmex className="text-3xl text-blue-500" />
            </div>
            <div className="bg-white rounded-lg p-2 shadow-md">
              <FaCcPaypal className="text-3xl text-blue-700" />
            </div>
            <div className="bg-white rounded-lg p-2 shadow-md">
              <FaApple className="text-3xl" />
            </div>
            <div className="bg-white rounded-lg p-2 shadow-md">
              <FaGooglePlay className="text-3xl text-green-700" />
            </div>
          </div>
          
          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <div className="trust-badge bg-white rounded-lg p-3 flex items-center animate-pulse">
              <FaShieldAlt className="text-2xl text-green-500 mr-2" />
              <div>
                <div className="font-bold text-gray-800">Secure Checkout</div>
                <div className="text-xs text-gray-600">256-bit SSL encryption</div>
              </div>
            </div>
            <div className="trust-badge bg-white rounded-lg p-3 flex items-center animate-pulse">
              <FaUndo className="text-2xl text-blue-500 mr-2" />
              <div>
                <div className="font-bold text-gray-800">Easy Returns</div>
                <div className="text-xs text-gray-600">30-day money back</div>
              </div>
            </div>
            <div className="trust-badge bg-white rounded-lg p-3 flex items-center animate-pulse">
              <FaAward className="text-2xl text-yellow-500 mr-2" />
              <div>
                <div className="font-bold text-gray-800">Authentic Products</div>
                <div className="text-xs text-gray-600">Guaranteed genuine</div>
              </div>
            </div>
          </div>
          
          {/* Copyright */}
          <div className="text-center text-gray-400 pt-6 border-t border-gray-800">
            <p>&copy; {new Date().getFullYear()} ShopEase. All rights reserved.</p>
            <div className="mt-2 flex flex-wrap justify-center gap-4 text-sm">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Refund Policy</a>
              <a href="#" className="hover:text-white transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;