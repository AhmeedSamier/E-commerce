
import React, { useEffect, useState, useCallback } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { FaStar, FaShoppingCart, FaHeart, FaMinus, FaPlus, FaRegStar, FaStarHalfAlt, FaArrowLeft } from 'react-icons/fa';
import { useCart } from '../../Context/CartContext';
import { useWishlist } from '../../Context/WishlistContext';

// خدمة جلب البيانات
const fetchProductDetails = async (id) => {
  try {
    const { data } = await axios.get(`https://fakestoreapi.com/products/${id}`);
    return data;
  } catch (error) {
    throw new Error('Failed to fetch product details');
  }
};

const fetchRelatedProducts = async (category) => {
  try {
    const { data } = await axios.get(`https://fakestoreapi.com/products/category/${category}`);
    return data;
  } catch (error) {
    throw new Error('Failed to fetch related products');
  }
};

// مكون نجوم التقييم
const RatingStars = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
  
  return (
    <div className="flex items-center">
      {[...Array(fullStars)].map((_, i) => (
        <FaStar key={`full-${i}`} className="text-yellow-500" size={16} />
      ))}
      {hasHalfStar && <FaStarHalfAlt className="text-yellow-500" size={16} />}
      {[...Array(emptyStars)].map((_, i) => (
        <FaRegStar key={`empty-${i}`} className="text-yellow-500" size={16} />
      ))}
      <span className="ml-2 text-gray-500 text-sm">({rating})</span>
    </div>
  );
};

function ProductDetails() {
  const { id } = useParams();
  const [productDetails, setProductDetails] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [notification, setNotification] = useState(null);
  const [loading, setLoading] = useState(true);
  const [relatedLoading, setRelatedLoading] = useState(false);
  const [error, setError] = useState(null);
  
  const { addToCart } = useCart();
  const { addToWishlist, wishlistItems } = useWishlist();

  // جلب تفاصيل المنتج والمنتجات ذات الصلة
  const getProductDetails = useCallback(async (id) => {
    try {
      setLoading(true);
      setError(null);
      
      const product = await fetchProductDetails(id);
      setProductDetails(product);
      
      setRelatedLoading(true);
      const related = await fetchRelatedProducts(product.category);
      const filtered = related.filter(p => p.id !== parseInt(id));
      setRelatedProducts(filtered.slice(0, 4));
    } catch (err) {
      console.error('Error:', err);
      setError(err.message || 'An error occurred while loading product details');
    } finally {
      setLoading(false);
      setRelatedLoading(false);
    }
  }, []);

  useEffect(() => {
    getProductDetails(id);
  }, [id, getProductDetails]);

  // إضافة إلى السلة
  const handleAddToCart = (product) => {
    if (product) {
      addToCart({
        ...product,
        quantity: quantity
      });
      showNotification(`${product.title} added to cart!`);
    }
  };

  // إضافة إلى المفضلة
  const handleAddToWishlist = (product) => {
    if (product) {
      addToWishlist(product);
      showNotification(`${product.title} added to wishlist!`);
    }
  };

  // التحقق إذا كان المنتج في المفضلة
  const isInWishlist = (productId) => {
    return wishlistItems.some(item => item.id === productId);
  };

  // عرض الإشعار
  const showNotification = (message) => {
    setNotification(message);
    setTimeout(() => setNotification(null), 3000);
  };

  // حالة التحميل
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading product details...</p>
        </div>
      </div>
    );
  }

  // حالة الخطأ
  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50 px-4">
        <div className="text-center max-w-md bg-white p-8 rounded-2xl shadow-lg">
          <div className="text-red-500 text-5xl mb-4">⚠️</div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Error Loading Product</h2>
          <p className="text-gray-600 mb-6">{error}</p>
          <button 
            onClick={() => getProductDetails(id)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
          >
            Retry
          </button>
          <Link 
            to="/" 
            className="ml-4 border border-gray-300 hover:bg-gray-100 text-gray-700 px-6 py-3 rounded-lg transition-colors"
          >
            Go to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      {/* إشعار الإضافة للسلة أو المفضلة */}
      {notification && (
        <div className="fixed top-4 right-4 z-50 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg animate-fadeInOut">
          {notification}
        </div>
      )}
      
      {/* زر العودة */}
      <div className="max-w-6xl mx-auto px-4 py-6">
        <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium">
          <FaArrowLeft className="mr-2" />
          Back to Products
        </Link>
      </div>

      {/* تفاصيل المنتج الرئيسية */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="bg-white rounded-2xl shadow-xl p-6 mb-12 transition-all duration-300 hover:shadow-2xl">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* الصورة الرئيسية فقط - بدون معرض */}
            <div className="w-full lg:w-1/2 flex items-center justify-center">
              {productDetails ? (
                <div className="flex items-center justify-center w-full h-96 bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8">
                  <img
                    src={productDetails.image}
                    alt={productDetails.title}
                    className="max-h-80 max-w-full object-contain transition-all duration-500 hover:scale-105"
                    loading="lazy"
                  />
                </div>
              ) : (
                <div className="h-96 bg-gradient-to-br from-gray-100 to-blue-100 rounded-2xl animate-pulse flex items-center justify-center">
                  <div className="text-gray-400">Loading image...</div>
                </div>
              )}
            </div>

            {/* تفاصيل المنتج */}
            <div className="w-full lg:w-1/2">
              {productDetails ? (
                <>
                  <div className="flex justify-between items-start mb-4">
                    <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
                      {productDetails.title}
                    </h1>
                    <div className="bg-gradient-to-r from-sky-500 to-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {productDetails.category}
                    </div>
                  </div>

                  <div className="mb-6 p-4 bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl border border-blue-100">
                    <p className="text-gray-600 text-base leading-relaxed">
                      {productDetails.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center justify-between mb-6">
                    <div>
                      <div className="text-3xl font-bold text-sky-600 mb-2">
                        ${productDetails.price.toFixed(2)}
                      </div>
                      <div className="flex items-center">
                        <RatingStars rating={productDetails.rating.rate} />
                        <span className="ml-2 text-gray-500">
                          ({productDetails.rating.count} reviews)
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* أزرار الإضافة للسلة والمفضلة */}
                  <div className="flex flex-wrap gap-4 mb-8">
                    <div className="flex items-center border border-gray-300 rounded-lg bg-white">
                      <button 
                        className="px-4 py-3 text-gray-600 hover:bg-gray-100 transition-colors"
                        onClick={() => setQuantity(q => Math.max(1, q - 1))}
                        aria-label="Decrease quantity"
                      >
                        <FaMinus size={14} />
                      </button>
                      <span className="px-4 py-3 font-medium text-gray-800">{quantity}</span>
                      <button 
                        className="px-4 py-3 text-gray-600 hover:bg-gray-100 transition-colors"
                        onClick={() => setQuantity(q => q + 1)}
                        aria-label="Increase quantity"
                      >
                        <FaPlus size={14} />
                      </button>
                    </div>
                    
                    <button 
                      className="flex-1 flex items-center justify-center bg-gradient-to-r from-sky-600 to-blue-700 hover:from-sky-700 hover:to-blue-800 text-white px-6 py-3 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                      onClick={() => handleAddToCart(productDetails)}
                      aria-label={`Add ${productDetails.title} to cart`}
                    >
                      <FaShoppingCart className="mr-2" size={18} />
                      <span className="font-medium">Add to Cart</span>
                    </button>
                    
                    <button 
                      className={`flex-1 flex items-center justify-center border ${isInWishlist(productDetails.id) ? 'border-red-500 text-red-500' : 'border-gray-300 text-gray-700'} px-6 py-3 rounded-lg transition-all hover:bg-red-50`}
                      onClick={() => handleAddToWishlist(productDetails)}
                      aria-label={`Add ${productDetails.title} to wishlist`}
                    >
                      <FaHeart className={`mr-2 ${isInWishlist(productDetails.id) ? 'text-red-500' : 'text-gray-500'}`} size={18} />
                      <span className="font-medium">
                        {isInWishlist(productDetails.id) ? 'In Wishlist' : 'Wishlist'}
                      </span>
                    </button>
                  </div>

                  {/* معلومات إضافية */}
                  <div className="pt-6 border-t border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">Product Details</h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-600">
                      <li className="flex">
                        <span className="w-32 font-medium">Category:</span>
                        <span className="capitalize">{productDetails.category}</span>
                      </li>
                      <li className="flex">
                        <span className="w-32 font-medium">Stock Status:</span>
                        <span className="text-green-600 font-medium">In Stock</span>
                      </li>
                      <li className="flex">
                        <span className="w-32 font-medium">Shipping:</span>
                        <span>Free Shipping Worldwide</span>
                      </li>
                      <li className="flex">
                        <span className="w-32 font-medium">SKU:</span>
                        <span>PRD-{id.toString().padStart(4, '0')}</span>
                      </li>
                    </ul>
                  </div>
                </>
              ) : (
                <div className="space-y-4">
                  <div className="h-8 bg-gradient-to-r from-gray-200 to-gray-300 rounded w-3/4 animate-pulse"></div>
                  <div className="h-4 bg-gradient-to-r from-gray-200 to-gray-300 rounded w-full animate-pulse"></div>
                  <div className="h-4 bg-gradient-to-r from-gray-200 to-gray-300 rounded w-5/6 animate-pulse"></div>
                  <div className="h-10 bg-gradient-to-r from-gray-200 to-gray-300 rounded w-1/3 animate-pulse"></div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* المنتجات المتعلقة */}
        <div className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Related Products</h2>
            <Link to={`/category/${productDetails?.category}`} className="text-sky-600 hover:text-sky-700 font-medium flex items-center">
              View All
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
          
          {relatedLoading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="bg-white rounded-xl shadow-lg border border-gray-100 animate-pulse">
                  <div className="h-56 bg-gray-200 rounded-t-xl"></div>
                  <div className="p-4">
                    <div className="h-5 bg-gray-200 rounded w-3/4 mb-3"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/4 mb-4"></div>
                    <div className="h-10 bg-gray-200 rounded"></div>
                  </div>
                </div>
              ))}
            </div>
          ) : relatedProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((product) => (
                <div key={product.id} className="group transform transition-transform duration-300 hover:-translate-y-1">
                  <div className="bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 border border-gray-100 group-hover:shadow-2xl group-hover:border-sky-200 h-full flex flex-col">
                    <div className="relative flex-grow">
                      <Link to={`/productDetails/${product.id}`} className="block h-full" aria-label={`View ${product.title}`}>
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
                          className={`rounded-full p-2 shadow-md transition-colors ${isInWishlist(product.id) ? 'bg-red-100 text-red-500' : 'bg-white text-gray-400 hover:text-red-500'}`}
                          onClick={() => handleAddToWishlist(product)}
                          aria-label={`Add ${product.title} to wishlist`}
                        >
                          <FaHeart className={isInWishlist(product.id) ? 'text-red-500' : ''} />
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
                        <div>
                          <span className="text-lg font-bold text-sky-600">${product.price.toFixed(2)}</span>
                        </div>
                        <RatingStars rating={product.rating.rate} />
                      </div>

                      <div className="mt-4">
                        <button 
                          className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-sky-600 to-blue-700 hover:from-sky-700 hover:to-blue-800 text-white py-3 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
                          onClick={() => handleAddToCart(product)}
                          aria-label={`Add ${product.title} to cart`}
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
          ) : (
            <div className="bg-white rounded-xl p-8 text-center">
              <p className="text-gray-500">No related products found</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;