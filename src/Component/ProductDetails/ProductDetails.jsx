// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';
// import { FaStar } from 'react-icons/fa';
// import { Link } from 'react-router-dom';
// import Slider from "react-slick";


// function ProductDetails() {
//   const { id } = useParams();
//   const [productDetails, setProductDetails] = useState(null);
//   const [relatedProducts, setRelatedProducts] = useState([]);
//     var settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//   };

//   async function getProductDetails(id) {
//     try {
//       const { data } = await axios.get(`https://fakestoreapi.com/products/${id}`);
//       setProductDetails(data);
//       getRelatedProducts(data.category); // بعد ما نجيب المنتج نجيب الـ related
//     } catch (error) {
//       console.error('Error fetching product details:', error);
//     }
//   }

//   async function getRelatedProducts(category) {
//     try {
//       const { data } = await axios.get(`https://fakestoreapi.com/products/category/${category}`);
//       const filtered = data.filter((product) => product.id !== parseInt(id));
//       setRelatedProducts(filtered);
//     } catch (error) {
//       console.error('Error fetching related products:', error);
//     }
//   }

//   useEffect(() => {
//     getProductDetails(id);
//   }, [id]);

//   return (
//     <>
//       {/* ✅ تفاصيل المنتج */}
//       <div className="bg-white rounded-lg shadow-md p-6 mx-4 mt-8 max-w-6xl mx-auto">
        
//         <div className="flex flex-col md:flex-row gap-8 items-start">
//           <div className="w-full md:w-1/4">
    
//            <Slider {...settings}>
        
//            </Slider>

//             <img
//               src={productDetails?.image}
//               alt={productDetails?.title}
//               className="w-full h-auto object-contain rounded"
//             />
//           </div>

//           <div className="w-full md:w-3/4">
//             <h1 className="text-2xl font-semibold text-gray-800">
//               {productDetails?.title}
//             </h1>

//             <p className="text-gray-600 mt-4 text-base leading-relaxed font-light">
//               {productDetails?.description}
//             </p>

//             <div className="flex justify-between items-center mt-6">
//               <span className="text-blue-600 text-lg font-semibold">
//                 {productDetails?.price} EGP
//               </span>

//               <span className="flex items-center gap-1 text-yellow-500 text-base">
//                 {productDetails?.rating?.rate}
//                 <FaStar />
//               </span>
//             </div>

//             <button className="mt-6 bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md transition">
//               Add to Cart
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* ✅ المنتجات المتعلقة */}
//     <div className="flex flex-wrap px-4 pt-8 items-center">
//   {relatedProducts.map((product) => (
//     <div key={product.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 px-2 mb-6">
//       <Link to={`/ProductDetails/${product.id}`}>
//         <div className="product py-4 hover:shadow-md rounded transition bg-white">
//           <img
//             src={product.image}
//             alt={product.title}
//             className="w-full h-48 object-cover mb-2 rounded"
//           />

//           <h2 className="text-lg font-semibold text-gray-800">
//             {product.title.split(' ').slice(0, 2).join(' ')}
//           </h2>

//           <p className="text-sm text-gray-500 mt-2">
//             {product.description.slice(0, 50)}...
//           </p>

//           <div className="flex justify-between items-center mt-3">
//             <span className="text-blue-600 font-medium">{product.price} EGP</span>
//             <span className="flex items-center gap-1 text-yellow-500 text-sm">
//               {product.rating?.rate}
//               <FaStar />
//             </span>
//           </div>

//           <button className="btn bg-blue-500 text-white px-4 py-2 mt-4 rounded hover:bg-blue-600 transition w-full">
//             Add to Cart
//           </button>
//         </div>
//       </Link>
//     </div>
//   ))}
// </div>

//     </>
//   );
// }

// export default ProductDetails;






// // import React from 'react'
// // import { useParams } from 'react-router-dom'
// // import axios from 'axios';
// // import { FaStar } from 'react-icons/fa';


// // function ProductDetails() {
// //     const { id } = useParams();
// //     const[productDetails, setProductDetails] = React.useState(null);
// //     function getProductDetails(id) {
// //         // This function would typically fetch product details from an API using the id
        
// //          axios.get(`https://fakestoreapi.com/products/${id}`)
// //          .then(response => {
// //                 setProductDetails(response.data);
// //          })
// //          .catch(error => {
// //              console.error('Error fetching product details:', error);
// //          });
// //         console.log(`Fetching details for product ID: ${id}`);  
                    
// //     }
// //     React.useEffect(() => {
// //         getProductDetails(id);
// //     }, [id]);

// //   return  <>
// //     <div className="bg-white rounded-lg shadow-md p-6 mx-4 mt-8 max-w-6xl mx-auto">
// //   <div className="flex flex-col md:flex-row gap-8 items-start">
    
// //     {/* صورة المنتج */}
// //     <div className="w-full md:w-1/4">
// //       <img
// //         src={productDetails?.image}
// //         alt={productDetails?.title}
// //         className="w-full h-auto object-contain rounded"
// //       />
// //     </div>

// //     {/* تفاصيل المنتج */}
// //     <div className="w-full md:w-3/4">
// //       <h1 className="text-2xl font-semibold text-gray-800">
// //         {productDetails?.title}
// //       </h1>

// //       <p className="text-gray-600 mt-4 text-base leading-relaxed font-light">
// //         {productDetails?.description}
// //       </p>

// //       <div className="flex justify-between items-center mt-6">
// //         <span className="text-blue-600 text-lg font-semibold">
// //           {productDetails?.price} EGP
// //         </span>

// //         <span className="flex items-center gap-1 text-yellow-500 text-base">
// //           {productDetails?.rating?.rate}
// //           <FaStar />
// //         </span>
// //       </div>

// //       <button className="mt-6 bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md transition">
// //         Add to Cart
// //       </button>
// //     </div>
// //   </div>
// // </div>
    

// //     {/* تفاصيل المنتج
// //     <div className="w-full md:w-3/4">
// //       <h2 className="text-2xl font-bold text-gray-800 mb-2">
// //         {productDetails?.title}
// //       </h2>

// //       <p className="text-gray-600 text-base mb-4 leading-relaxed">
// //         {productDetails?.description}
// //       </p>

// //       <div className="flex justify-between items-center text-lg font-medium mb-4">
// //         <span className="text-blue-600">{productDetails?.price} EGP</span>
// //         <span className="flex items-center gap-1 text-yellow-500">
// //           {productDetails?.rating?.rate}
// //           <FaStar />
// //         </span>
// //       </div>

// //       <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded transition">
// //         Add to Cart
// //       </button>
// //     </div>
// //   </div>
// // </div>  */}
// //     </>
  
// // }

// // export default ProductDetails



// import React, { useEffect, useState } from 'react';
// import { useParams, Link } from 'react-router-dom';
// import axios from 'axios';
// import { FaStar } from 'react-icons/fa';
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// function ProductDetails() {
//   const { id } = useParams();
//   const [productDetails, setProductDetails] = useState(null);
//   const [relatedProducts, setRelatedProducts] = useState([]);
  
//   // إعدادات متقدمة للسلايدر
//   const sliderSettings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     arrows: true,
//     adaptiveHeight: true,
//     customPaging: i => (
//       <div className="dot-custom">
//         <img 
//           src={productDetails?.image} 
//           alt={`Thumbnail ${i+1}`} 
//           className="w-10 h-10 object-contain rounded border border-gray-200"
//         />
//       </div>
//     ),
//     responsive: [
//       {
//         breakpoint: 768,
//         settings: {
//           arrows: false,
//           dotsClass: 'slick-dots slick-thumb'
//         }
//       }
//     ]
//   };

//   async function getProductDetails(id) {
//     try {
//       const { data } = await axios.get(`https://fakestoreapi.com/products/${id}`);
//       setProductDetails(data);
//       getRelatedProducts(data.category);
//     } catch (error) {
//       console.error('Error fetching product details:', error);
//     }
//   }

//   async function getRelatedProducts(category) {
//     try {
//       const { data } = await axios.get(`https://fakestoreapi.com/products/category/${category}`);
//       const filtered = data.filter((product) => product.id !== parseInt(id));
//       setRelatedProducts(filtered.slice(0, 6)); // عرض 6 منتجات كحد أقصى
//     } catch (error) {
//       console.error('Error fetching related products:', error);
//     }
//   }

//   useEffect(() => {
//     getProductDetails(id);
//   }, [id]);
  

//   const productImages = productDetails 
//     ? [
//         productDetails.image,
//         `https://picsum.photos/500/500?product=${id}&1`,
//         `https://picsum.photos/500/500?product=${id}&2`,
//         `https://picsum.photos/500/500?product=${id}&3`
//       ]
//     : [];

//   return (
//     <>
//       {/* ✅ تفاصيل المنتج */}
      // <div className="bg-white rounded-xl shadow-lg p-6 mx-4 mt-8 max-w-6xl mx-auto">
      //   <div className="flex flex-col md:flex-row gap-8 items-start">
      //     <div className="w-full md:w-2/5">
      //       <Slider {...sliderSettings} className="product-slider">
      //         {productImages.map((img, index) => (
      //           <div key={index} className="outline-none">
      //             <div className="flex items-center justify-center h-80 md:h-96 bg-gray-50 rounded-xl p-4">
      //               <img
      //                 src={img}
      //                 alt={`${productDetails?.title} - ${index + 1}`}
      //                 className="max-h-full max-w-full object-contain"
      //                 loading="lazy"
      //               />
      //             </div>
      //           </div>
      //         ))}
      //       </Slider>
      //     </div>

      //     <div className="w-full md:w-3/5">
      //       <div className="flex justify-between items-start">
      //         <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
      //           {productDetails?.title}
      //         </h1>
              
      //         <div className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
      //           {productDetails?.category}
      //         </div>
      //       </div>

      //       <div className="mt-6 p-4 bg-gray-50 rounded-lg">
      //         <p className="text-gray-600 text-base leading-relaxed">
      //           {productDetails?.description}
      //         </p>
      //       </div>

      //       <div className="mt-8 flex flex-wrap items-center justify-between">
      //         <div>
      //           <div className="text-2xl font-bold text-blue-600">
      //             ${productDetails?.price}
      //           </div>
      //           <div className="flex items-center mt-2">
      //             <div className="flex text-yellow-500">
      //               {[...Array(5)].map((_, i) => (
      //                 <FaStar 
      //                   key={i} 
      //                   className={i < Math.floor(productDetails?.rating?.rate || 0) 
      //                     ? 'text-yellow-400' 
      //                     : 'text-gray-300'
      //                   } 
      //                 />
      //               ))}
      //             </div>
      //             <span className="ml-2 text-gray-500">
      //               ({productDetails?.rating?.count} reviews)
      //             </span>
      //           </div>
      //         </div>
              
      //         <div className="flex gap-4 mt-4 md:mt-0">
      //           <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition shadow-md hover:shadow-lg">
      //             Add to Cart
      //           </button>
      //           <button className="border border-gray-300 hover:bg-gray-50 text-gray-700 px-6 py-3 rounded-lg transition">
      //             Wishlist
      //           </button>
      //         </div>
      //       </div>

      //       <div className="mt-8 pt-6 border-t border-gray-200">
      //         <h3 className="text-lg font-semibold text-gray-800 mb-3">Product Details</h3>
      //         <ul className="grid grid-cols-2 gap-3 text-gray-600">
      //           <li className="flex">
      //             <span className="w-32 font-medium">Category:</span>
      //             <span className="capitalize">{productDetails?.category}</span>
      //           </li>
      //           <li className="flex">
      //             <span className="w-32 font-medium">Stock Status:</span>
      //             <span className="text-green-600 font-medium">In Stock</span>
      //           </li>
      //           <li className="flex">
      //             <span className="w-32 font-medium">Shipping:</span>
      //             <span>Free Shipping</span>
      //           </li>
      //           <li className="flex">
      //             <span className="w-32 font-medium">SKU:</span>
      //             <span>PRD-{id?.toString().padStart(4, '0')}</span>
      //           </li>
      //         </ul>
      //       </div>
      //     </div>
      //   </div>
      // </div>

      // {/* ✅ المنتجات المتعلقة */}
      // <div className="max-w-6xl mx-auto px-4 py-8">
      //   <h2 className="text-2xl font-bold text-gray-800 mb-6">Related Products</h2>
        
      //   <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      //     {relatedProducts.map((product) => (
      //       <div key={product.id} className="group">
      //         <Link to={`/ProductDetails/${product.id}`}>
      //           <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100">
      //             <div className="relative h-56 overflow-hidden">
      //               <img
      //                 src={product.image}
      //                 alt={product.title}
      //                 className="w-full h-full object-contain p-4 transition-transform duration-500 group-hover:scale-110"
      //               />
      //               <div className="absolute top-3 right-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
      //                 -20%
      //               </div>
      //             </div>

      //             <div className="p-4">
      //               <h3 className="font-semibold text-gray-800 group-hover:text-blue-600 transition">
      //                 {product.title.split(' ').slice(0, 4).join(' ')}
      //               </h3>
                    
      //               <div className="flex justify-between items-center mt-3">
      //                 <div>
      //                   <span className="text-lg font-bold text-blue-600">${product.price}</span>
      //                   <span className="text-sm text-gray-400 line-through ml-2">${(product.price * 1.2).toFixed(2)}</span>
      //                 </div>
      //                 <div className="flex items-center text-yellow-500">
      //                   <FaStar className="text-sm" />
      //                   <span className="text-gray-500 text-sm ml-1">{product.rating?.rate}</span>
      //                 </div>
      //               </div>

      //               <button className="mt-4 w-full bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-800 font-medium py-2 rounded-lg transition">
      //                 Add to Cart
      //               </button>
      //             </div>
      //           </div>
      //         </Link>
      //       </div>
      //     ))}
      //   </div>
      // </div>
//     </>
//   );
// }

// export default ProductDetails;




// // src/Component/ProductDetails/ProductDetails.jsx
// import React, { useEffect, useState } from 'react';
// import { useParams, Link } from 'react-router-dom';
// import axios from 'axios';
// import { FaStar, FaShoppingCart, FaHeart, FaMinus, FaPlus } from 'react-icons/fa';
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import { useCart } from '../../Context/CartContext';

// function ProductDetails() {
//   const { id } = useParams();
//   const [productDetails, setProductDetails] = useState(null);
//   const [relatedProducts, setRelatedProducts] = useState([]);
//   const [quantity, setQuantity] = useState(1);
//   const [notification, setNotification] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const { addToCart } = useCart();

//   const sliderSettings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     arrows: true,
//     adaptiveHeight: true,
//     customPaging: i => (
//       <div className="dot-custom">
//         <div className="w-12 h-12 rounded border border-gray-200 bg-gray-100 flex items-center justify-center overflow-hidden">
//           <img 
//             src={productDetails?.image} 
//             alt={`Thumbnail ${i+1}`} 
//             className="object-contain w-10 h-10"
//           />
//         </div>
//       </div>
//     ),
//     responsive: [
//       {
//         breakpoint: 768,
//         settings: {
//           arrows: false,
//           dotsClass: 'slick-dots slick-thumb'
//         }
//       }
//     ]
//   };

//   async function getProductDetails(id) {
//     try {
//       setLoading(true);
//       const { data } = await axios.get(`https://fakestoreapi.com/products/${id}`);
//       setProductDetails(data);
//       getRelatedProducts(data.category);
//     } catch (error) {
//       console.error('Error fetching product details:', error);
//     } finally {
//       setLoading(false);
//     }
//   }

//   async function getRelatedProducts(category) {
//     try {
//       const { data } = await axios.get(`https://fakestoreapi.com/products/category/${category}`);
//       const filtered = data.filter((product) => product.id !== parseInt(id));
//       setRelatedProducts(filtered.slice(0, 4)); // عرض 4 منتجات فقط
//     } catch (error) {
//       console.error('Error fetching related products:', error);
//     }
//   }

//   useEffect(() => {
//     getProductDetails(id);
//   }, [id]);

//   const productImages = productDetails 
//     ? [
//         productDetails.image,
//         `https://picsum.photos/500/500?product=${id}&1`,
//         `https://picsum.photos/500/500?product=${id}&2`,
//         `https://picsum.photos/500/500?product=${id}&3`
//       ]
//     : [];

//   const handleAddToCart = (product) => {
//     if (product) {
//       addToCart({
//         ...product,
//         quantity: quantity
//       });
//       setNotification(`${product.title} added to cart!`);
//       setTimeout(() => setNotification(null), 3000);
//     }
//   };

//   if (loading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gray-50">
//         <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* إشعار الإضافة للسلة */}
//       {notification && (
//         <div className="fixed top-4 right-4 z-50 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg animate-fadeInOut">
//           {notification}
//         </div>
//       )}
      
//       {/* ✅ تفاصيل المنتج الرئيسية */}
//       <div className="max-w-6xl mx-auto px-4 py-8">
//         <div className="bg-white rounded-2xl shadow-xl p-6 mb-12 transition-all duration-300 hover:shadow-2xl">
//           <div className="flex flex-col lg:flex-row gap-8">
//             {/* معرض الصور */}
//             <div className="w-full lg:w-1/2">
//               {productDetails ? (
//                 <Slider {...sliderSettings} className="product-slider">
//                   {productImages.map((img, index) => (
//                     <div key={index} className="outline-none">
//                       <div className="flex items-center justify-center h-80 bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-4">
//                         <img
//                           src={img}
//                           alt={`${productDetails.title} - ${index + 1}`}
//                           className="max-h-full max-w-full object-contain transition-transform duration-500 hover:scale-105"
//                           loading="lazy"
//                         />
//                       </div>
//                     </div>
//                   ))}
//                 </Slider>
//               ) : (
//                 <div className="h-80 bg-gradient-to-br from-gray-100 to-blue-100 rounded-2xl animate-pulse flex items-center justify-center">
//                   <div className="text-gray-400">Loading images...</div>
//                 </div>
//               )}
//             </div>

//             {/* تفاصيل المنتج */}
//             <div className="w-full lg:w-1/2">
//               {productDetails ? (
//                 <>
//                   <div className="flex justify-between items-start mb-4">
//                     <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
//                       {productDetails.title}
//                     </h1>
//                     <div className="bg-gradient-to-r from-sky-500 to-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
//                       {productDetails.category}
//                     </div>
//                   </div>

//                   <div className="mb-6 p-4 bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl border border-blue-100">
//                     <p className="text-gray-600 text-base leading-relaxed">
//                       {productDetails.description}
//                     </p>
//                   </div>

//                   <div className="flex flex-wrap items-center justify-between mb-6">
//                     <div>
//                       <div className="text-3xl font-bold text-sky-600 mb-2">
//                         ${productDetails.price}
//                       </div>
//                       <div className="flex items-center">
//                         <div className="flex text-yellow-500">
//                           {[...Array(5)].map((_, i) => (
//                             <FaStar 
//                               key={i} 
//                               className={i < Math.floor(productDetails.rating.rate) 
//                                 ? 'text-yellow-400' 
//                                 : 'text-gray-300'
//                               } 
//                               size={18}
//                             />
//                           ))}
//                         </div>
//                         <span className="ml-2 text-gray-500">
//                           ({productDetails.rating.count} reviews)
//                         </span>
//                       </div>
//                     </div>
//                   </div>

//                   {/* أزرار الإضافة للسلة والمفضلة */}
//                   <div className="flex flex-wrap gap-4 mb-8">
//                     <div className="flex items-center border border-gray-300 rounded-lg bg-white">
//                       <button 
//                         className="px-4 py-3 text-gray-600 hover:bg-gray-100 transition-colors"
//                         onClick={() => setQuantity(q => Math.max(1, q - 1))}
//                       >
//                         <FaMinus size={14} />
//                       </button>
//                       <span className="px-4 py-3 font-medium text-gray-800">{quantity}</span>
//                       <button 
//                         className="px-4 py-3 text-gray-600 hover:bg-gray-100 transition-colors"
//                         onClick={() => setQuantity(q => q + 1)}
//                       >
//                         <FaPlus size={14} />
//                       </button>
//                     </div>
                    
//                     <button 
//                       className="flex items-center bg-gradient-to-r from-sky-600 to-blue-700 hover:from-sky-700 hover:to-blue-800 text-white px-6 py-3 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
//                       onClick={() => handleAddToCart(productDetails)}
//                     >
//                       <FaShoppingCart className="mr-2" size={18} />
//                       <span className="font-medium">Add to Cart</span>
//                     </button>
                    
//                     <button className="flex items-center border border-gray-300 hover:bg-gray-100 text-gray-700 px-6 py-3 rounded-lg transition-all">
//                       <FaHeart className="mr-2 text-red-500" size={18} />
//                       <span className="font-medium">Wishlist</span>
//                     </button>
//                   </div>

//                   {/* معلومات إضافية */}
//                   <div className="pt-6 border-t border-gray-200">
//                     <h3 className="text-lg font-semibold text-gray-800 mb-3">Product Details</h3>
//                     <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-600">
//                       <li className="flex">
//                         <span className="w-32 font-medium">Category:</span>
//                         <span className="capitalize">{productDetails.category}</span>
//                       </li>
//                       <li className="flex">
//                         <span className="w-32 font-medium">Stock Status:</span>
//                         <span className="text-green-600 font-medium">In Stock</span>
//                       </li>
//                       <li className="flex">
//                         <span className="w-32 font-medium">Shipping:</span>
//                         <span>Free Shipping Worldwide</span>
//                       </li>
//                       <li className="flex">
//                         <span className="w-32 font-medium">SKU:</span>
//                         <span>PRD-{id.toString().padStart(4, '0')}</span>
//                       </li>
//                     </ul>
//                   </div>
//                 </>
//               ) : (
//                 <div className="space-y-4">
//                   <div className="h-8 bg-gradient-to-r from-gray-200 to-gray-300 rounded w-3/4 animate-pulse"></div>
//                   <div className="h-4 bg-gradient-to-r from-gray-200 to-gray-300 rounded w-full animate-pulse"></div>
//                   <div className="h-4 bg-gradient-to-r from-gray-200 to-gray-300 rounded w-5/6 animate-pulse"></div>
//                   <div className="h-10 bg-gradient-to-r from-gray-200 to-gray-300 rounded w-1/3 animate-pulse"></div>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>

//         {/* ✅ المنتجات المتعلقة */}
//         <div className="mb-12">
//           <div className="flex justify-between items-center mb-6">
//             <h2 className="text-2xl font-bold text-gray-800">Related Products</h2>
//             <Link to="/" className="text-sky-600 hover:text-sky-700 font-medium flex items-center">
//               View All
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
//                 <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
//               </svg>
//             </Link>
//           </div>
          
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//             {relatedProducts.map((product) => (
//               <div key={product.id} className="group">
//                 <div className="bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 border border-gray-100 group-hover:shadow-2xl group-hover:border-sky-200">
//                   <div className="relative">
//                     <Link to={`/ProductDetails/${product.id}`} className="block">
//                       <div className="relative h-56 overflow-hidden bg-gradient-to-br from-gray-50 to-blue-50">
//                         <img
//                           src={product.image}
//                           alt={product.title}
//                           className="w-full h-full object-contain p-4 transition-transform duration-500 group-hover:scale-110"
//                         />
//                       </div>
//                     </Link>
                    
//                     <div className="absolute top-3 right-3">
//                       <button className="bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors">
//                         <FaHeart className="text-gray-400 hover:text-red-500" />
//                       </button>
//                     </div>
                    
//                     <div className="absolute top-3 left-3">
//                       <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
//                         20% OFF
//                       </span>
//                     </div>
//                   </div>

//                   <div className="p-4">
//                     <Link to={`/ProductDetails/${product.id}`}>
//                       <h3 className="font-semibold text-gray-800 group-hover:text-sky-600 transition-colors line-clamp-2 mb-2">
//                         {product.title}
//                       </h3>
//                     </Link>
                    
//                     <div className="flex justify-between items-center mt-3">
//                       <div>
//                         <span className="text-lg font-bold text-sky-600">${product.price}</span>
//                         <span className="text-sm text-gray-400 line-through ml-2">${(product.price * 1.2).toFixed(2)}</span>
//                       </div>
//                       <div className="flex items-center text-yellow-500">
//                         <FaStar className="text-sm" />
//                         <span className="text-gray-500 text-sm ml-1">{product.rating?.rate}</span>
//                       </div>
//                     </div>

//                     <div className="flex gap-3 mt-4">
//                       <button 
//                         className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-sky-600 to-blue-700 hover:from-sky-700 hover:to-blue-800 text-white py-3 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
//                         onClick={() => handleAddToCart(product)}
//                       >
//                         <FaShoppingCart />
//                         <span>Add to Cart</span>
//                       </button>
                      
//                       <button className="w-12 flex items-center justify-center border border-gray-300 hover:bg-gray-100 text-gray-700 rounded-lg transition-all">
//                         <FaHeart className="text-gray-500 hover:text-red-500 transition-colors" />
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ProductDetails;
// // src/Component/ProductDetails/ProductDetails.jsx



// import React, { useEffect, useState, useCallback } from 'react';
// import { useParams, Link } from 'react-router-dom';
// import axios from 'axios';
// import { FaStar, FaShoppingCart, FaHeart, FaMinus, FaPlus, FaRegStar, FaStarHalfAlt } from 'react-icons/fa';
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import { useCart } from '../../Context/CartContext';
// import { useWishlist } from '../../Context/WishlistContext'; // سياق جديد للمفضلة

// // خدمة جلب البيانات
// const fetchProductDetails = async (id) => {
//   try {
//     const { data } = await axios.get(`https://fakestoreapi.com/products/${id}`);
//     return data;
//   } catch (error) {
//     throw new Error('Failed to fetch product details');
//   }
// };

// const fetchRelatedProducts = async (category) => {
//   try {
//     const { data } = await axios.get(`https://fakestoreapi.com/products/category/${category}`);
//     return data;
//   } catch (error) {
//     throw new Error('Failed to fetch related products');
//   }
// };

// // مكون نجوم التقييم
// const RatingStars = ({ rating }) => {
//   const fullStars = Math.floor(rating);
//   const hasHalfStar = rating % 1 >= 0.5;
//   const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
  
//   return (
//     <div className="flex items-center">
//       {[...Array(fullStars)].map((_, i) => (
//         <FaStar key={`full-${i}`} className="text-yellow-500" size={16} />
//       ))}
//       {hasHalfStar && <FaStarHalfAlt className="text-yellow-500" size={16} />}
//       {[...Array(emptyStars)].map((_, i) => (
//         <FaRegStar key={`empty-${i}`} className="text-yellow-500" size={16} />
//       ))}
//       <span className="ml-2 text-gray-500 text-sm">({rating})</span>
//     </div>
//   );
// };

// function ProductDetails() {
//   const { id } = useParams();
//   const [productDetails, setProductDetails] = useState(null);
//   const [relatedProducts, setRelatedProducts] = useState([]);
//   const [quantity, setQuantity] = useState(1);
//   const [notification, setNotification] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [relatedLoading, setRelatedLoading] = useState(false);
//   const [error, setError] = useState(null);
  
//   const { addToCart } = useCart();
//   const { addToWishlist, wishlistItems } = useWishlist(); // استخدام سياق المفضلة
  
//   // إعدادات السلايدر
//   const sliderSettings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     arrows: true,
//     adaptiveHeight: true,
//     customPaging: (i) => (
//       <div className="dot-custom">
//         <div className="w-12 h-12 rounded border border-gray-200 bg-gray-100 flex items-center justify-center overflow-hidden">
//           <img 
//             src={productDetails?.images?.[i] || productDetails?.image} 
//             alt={`Thumbnail ${i+1}`} 
//             className="object-contain w-10 h-10"
//             loading="lazy"
//           />
//         </div>
//       </div>
//     ),
//     responsive: [
//       {
//         breakpoint: 768,
//         settings: {
//           arrows: false
//         }
//       }
//     ]
//   };

//   // جلب تفاصيل المنتج والمنتجات ذات الصلة
//   const getProductDetails = useCallback(async (id) => {
//     try {
//       setLoading(true);
//       setError(null);
      
//       const product = await fetchProductDetails(id);
//       setProductDetails(product);
      
//       setRelatedLoading(true);
//       const related = await fetchRelatedProducts(product.category);
//       const filtered = related.filter(p => p.id !== parseInt(id));
//       setRelatedProducts(filtered.slice(0, 4));
//     } catch (err) {
//       console.error('Error:', err);
//       setError(err.message || 'An error occurred while loading product details');
//     } finally {
//       setLoading(false);
//       setRelatedLoading(false);
//     }
//   }, []);

//   useEffect(() => {
//     getProductDetails(id);
//   }, [id, getProductDetails]);

//   // إنشاء صور متعددة للمنتج
//   const productImages = productDetails 
//     ? [
//         productDetails.image,
//         `https://picsum.photos/500/500?product=${id}&1`,
//         `https://picsum.photos/500/500?product=${id}&2`,
//         `https://picsum.photos/500/500?product=${id}&3`
//       ]
//     : [];

//   // إضافة إلى السلة
//   const handleAddToCart = (product) => {
//     if (product) {
//       addToCart({
//         ...product,
//         quantity: quantity
//       });
//       showNotification(`${product.title} added to cart!`);
//     }
//   };

//   // إضافة إلى المفضلة
//   const handleAddToWishlist = (product) => {
//     if (product) {
//       addToWishlist(product);
//       showNotification(`${product.title} added to wishlist!`);
//     }
//   };

//   // التحقق إذا كان المنتج في المفضلة
//   const isInWishlist = (productId) => {
//     return wishlistItems.some(item => item.id === productId);
//   };

//   // عرض الإشعار
//   const showNotification = (message) => {
//     setNotification(message);
//     setTimeout(() => setNotification(null), 3000);
//   };

//   // حالة التحميل
//   if (loading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gray-50">
//         <div className="text-center">
//           <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500 mx-auto"></div>
//           <p className="mt-4 text-gray-600">Loading product details...</p>
//         </div>
//       </div>
//     );
//   }

//   // حالة الخطأ
//   if (error) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
//         <div className="text-center max-w-md">
//           <div className="text-red-500 text-5xl mb-4">⚠️</div>
//           <h2 className="text-2xl font-bold text-gray-800 mb-2">Error Loading Product</h2>
//           <p className="text-gray-600 mb-6">{error}</p>
//           <button 
//             onClick={() => getProductDetails(id)}
//             className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
//           >
//             Retry
//           </button>
//           <Link 
//             to="/" 
//             className="ml-4 border border-gray-300 hover:bg-gray-100 text-gray-700 px-6 py-3 rounded-lg transition-colors"
//           >
//             Go to Home
//           </Link>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* إشعار الإضافة للسلة أو المفضلة */}
//       {notification && (
//         <div className="fixed top-4 right-4 z-50 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg animate-fadeInOut">
//           {notification}
//         </div>
//       )}
      
//       {/* تفاصيل المنتج الرئيسية */}
//       <div className="max-w-6xl mx-auto px-4 py-8">
//         <div className="bg-white rounded-2xl shadow-xl p-6 mb-12 transition-all duration-300 hover:shadow-2xl">
//           <div className="flex flex-col lg:flex-row gap-8">
//             {/* معرض الصور */}
//             <div className="w-full lg:w-1/2">
//               {productDetails ? (
//                 <Slider {...sliderSettings} className="product-slider">
//                   {productImages.map((img, index) => (
//                     <div key={index} className="outline-none">
//                       <div className="flex items-center justify-center h-80 bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-4">
//                         <img
//                           src={img}
//                           alt={`${productDetails.title} - ${index + 1}`}
//                           className="max-h-full max-w-full object-contain transition-transform duration-500 hover:scale-105"
//                           loading="lazy"
//                         />
//                       </div>
//                     </div>
//                   ))}
//                 </Slider>
//               ) : (
//                 <div className="h-80 bg-gradient-to-br from-gray-100 to-blue-100 rounded-2xl animate-pulse flex items-center justify-center">
//                   <div className="text-gray-400">Loading images...</div>
//                 </div>
//               )}
//             </div>

//             {/* تفاصيل المنتج */}
//             <div className="w-full lg:w-1/2">
//               {productDetails ? (
//                 <>
//                   <div className="flex justify-between items-start mb-4">
//                     <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
//                       {productDetails.title}
//                     </h1>
//                     <div className="bg-gradient-to-r from-sky-500 to-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
//                       {productDetails.category}
//                     </div>
//                   </div>

//                   <div className="mb-6 p-4 bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl border border-blue-100">
//                     <p className="text-gray-600 text-base leading-relaxed">
//                       {productDetails.description}
//                     </p>
//                   </div>

//                   <div className="flex flex-wrap items-center justify-between mb-6">
//                     <div>
//                       <div className="text-3xl font-bold text-sky-600 mb-2">
//                         ${productDetails.price.toFixed(2)}
//                       </div>
//                       <div className="flex items-center">
//                         <RatingStars rating={productDetails.rating.rate} />
//                         <span className="ml-2 text-gray-500">
//                           ({productDetails.rating.count} reviews)
//                         </span>
//                       </div>
//                     </div>
//                   </div>

//                   {/* أزرار الإضافة للسلة والمفضلة */}
//                   <div className="flex flex-wrap gap-4 mb-8">
//                     <div className="flex items-center border border-gray-300 rounded-lg bg-white">
//                       <button 
//                         className="px-4 py-3 text-gray-600 hover:bg-gray-100 transition-colors"
//                         onClick={() => setQuantity(q => Math.max(1, q - 1))}
//                         aria-label="Decrease quantity"
//                       >
//                         <FaMinus size={14} />
//                       </button>
//                       <span className="px-4 py-3 font-medium text-gray-800">{quantity}</span>
//                       <button 
//                         className="px-4 py-3 text-gray-600 hover:bg-gray-100 transition-colors"
//                         onClick={() => setQuantity(q => q + 1)}
//                         aria-label="Increase quantity"
//                       >
//                         <FaPlus size={14} />
//                       </button>
//                     </div>
                    
//                     <button 
//                       className="flex items-center bg-gradient-to-r from-sky-600 to-blue-700 hover:from-sky-700 hover:to-blue-800 text-white px-6 py-3 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
//                       onClick={() => handleAddToCart(productDetails)}
//                       aria-label={`Add ${productDetails.title} to cart`}
//                     >
//                       <FaShoppingCart className="mr-2" size={18} />
//                       <span className="font-medium">Add to Cart</span>
//                     </button>
                    
//                     <button 
//                       className={`flex items-center border ${isInWishlist(productDetails.id) ? 'border-red-500 text-red-500' : 'border-gray-300 text-gray-700'} px-6 py-3 rounded-lg transition-all hover:bg-red-50`}
//                       onClick={() => handleAddToWishlist(productDetails)}
//                       aria-label={`Add ${productDetails.title} to wishlist`}
//                     >
//                       <FaHeart className={`mr-2 ${isInWishlist(productDetails.id) ? 'text-red-500' : 'text-gray-500'}`} size={18} />
//                       <span className="font-medium">
//                         {isInWishlist(productDetails.id) ? 'In Wishlist' : 'Wishlist'}
//                       </span>
//                     </button>
//                   </div>

//                   {/* معلومات إضافية */}
//                   <div className="pt-6 border-t border-gray-200">
//                     <h3 className="text-lg font-semibold text-gray-800 mb-3">Product Details</h3>
//                     <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-600">
//                       <li className="flex">
//                         <span className="w-32 font-medium">Category:</span>
//                         <span className="capitalize">{productDetails.category}</span>
//                       </li>
//                       <li className="flex">
//                         <span className="w-32 font-medium">Stock Status:</span>
//                         <span className="text-green-600 font-medium">In Stock</span>
//                       </li>
//                       <li className="flex">
//                         <span className="w-32 font-medium">Shipping:</span>
//                         <span>Free Shipping Worldwide</span>
//                       </li>
//                       <li className="flex">
//                         <span className="w-32 font-medium">SKU:</span>
//                         <span>PRD-{id.toString().padStart(4, '0')}</span>
//                       </li>
//                     </ul>
//                   </div>
//                 </>
//               ) : (
//                 <div className="space-y-4">
//                   <div className="h-8 bg-gradient-to-r from-gray-200 to-gray-300 rounded w-3/4 animate-pulse"></div>
//                   <div className="h-4 bg-gradient-to-r from-gray-200 to-gray-300 rounded w-full animate-pulse"></div>
//                   <div className="h-4 bg-gradient-to-r from-gray-200 to-gray-300 rounded w-5/6 animate-pulse"></div>
//                   <div className="h-10 bg-gradient-to-r from-gray-200 to-gray-300 rounded w-1/3 animate-pulse"></div>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>

//         {/* المنتجات المتعلقة */}
//         <div className="mb-12">
//           <div className="flex justify-between items-center mb-6">
//             <h2 className="text-2xl font-bold text-gray-800">Related Products</h2>
//             <Link to={`/category/${productDetails?.category}`} className="text-sky-600 hover:text-sky-700 font-medium flex items-center">
//               View All
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
//                 <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
//               </svg>
//             </Link>
//           </div>
          
//           {relatedLoading ? (
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//               {[...Array(4)].map((_, i) => (
//                 <div key={i} className="bg-white rounded-xl shadow-lg border border-gray-100 animate-pulse">
//                   <div className="h-56 bg-gray-200 rounded-t-xl"></div>
//                   <div className="p-4">
//                     <div className="h-5 bg-gray-200 rounded w-3/4 mb-3"></div>
//                     <div className="h-4 bg-gray-200 rounded w-1/4 mb-4"></div>
//                     <div className="h-10 bg-gray-200 rounded"></div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           ) : relatedProducts.length > 0 ? (
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//               {relatedProducts.map((product) => (
//                 <div key={product.id} className="group">
//                   <div className="bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 border border-gray-100 group-hover:shadow-2xl group-hover:border-sky-200">
//                     <div className="relative">
//                       <Link to={`/productDetails/${product.id}`} className="block" aria-label={`View ${product.title}`}>
//                         <div className="relative h-56 overflow-hidden bg-gradient-to-br from-gray-50 to-blue-50">
//                           <img
//                             src={product.image}
//                             alt={product.title}
//                             className="w-full h-full object-contain p-4 transition-transform duration-500 group-hover:scale-110"
//                             loading="lazy"
//                           />
//                         </div>
//                       </Link>
                      
//                       <div className="absolute top-3 right-3">
//                         <button 
//                           className={`rounded-full p-2 shadow-md transition-colors ${isInWishlist(product.id) ? 'bg-red-100 text-red-500' : 'bg-white text-gray-400 hover:text-red-500'}`}
//                           onClick={() => handleAddToWishlist(product)}
//                           aria-label={`Add ${product.title} to wishlist`}
//                         >
//                           <FaHeart className={isInWishlist(product.id) ? 'text-red-500' : ''} />
//                         </button>
//                       </div>
//                     </div>

//                     <div className="p-4">
//                       <Link to={`/productDetails/${product.id}`}>
//                         <h3 className="font-semibold text-gray-800 group-hover:text-sky-600 transition-colors line-clamp-2 mb-2">
//                           {product.title}
//                         </h3>
//                       </Link>
                      
//                       <div className="flex justify-between items-center mt-3">
//                         <div>
//                           <span className="text-lg font-bold text-sky-600">${product.price.toFixed(2)}</span>
//                         </div>
//                         <RatingStars rating={product.rating.rate} />
//                       </div>

//                       <div className="flex gap-3 mt-4">
//                         <button 
//                           className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-sky-600 to-blue-700 hover:from-sky-700 hover:to-blue-800 text-white py-3 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
//                           onClick={() => handleAddToCart(product)}
//                           aria-label={`Add ${product.title} to cart`}
//                         >
//                           <FaShoppingCart />
//                           <span>Add to Cart</span>
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           ) : (
//             <div className="bg-white rounded-xl p-8 text-center">
//               <p className="text-gray-500">No related products found</p>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ProductDetails;




  // import React, { useEffect, useState, useCallback } from 'react';
  // import { useParams, Link } from 'react-router-dom';
  // import axios from 'axios';
  // import { FaStar, FaShoppingCart, FaHeart, FaMinus, FaPlus, FaRegStar, FaStarHalfAlt } from 'react-icons/fa';
  // import Slider from "react-slick";
  // import "slick-carousel/slick/slick.css";
  // import "slick-carousel/slick/slick-theme.css";
  // import { useCart } from '../../Context/CartContext';
  // import { useWishlist } from '../../Context/WishlistContext';

  // // خدمة جلب البيانات
  // const fetchProductDetails = async (id) => {
  //   try {
  //     const { data } = await axios.get(`https://fakestoreapi.com/products/${id}`);
  //     return data;
  //   } catch (error) {
  //     throw new Error('Failed to fetch product details');
  //   }
  // };

  // const fetchRelatedProducts = async (category) => {
  //   try {
  //     const { data } = await axios.get(`https://fakestoreapi.com/products/category/${category}`);
  //     return data;
  //   } catch (error) {
  //     throw new Error('Failed to fetch related products');
  //   }
  // };

  // // مكون نجوم التقييم
  // const RatingStars = ({ rating }) => {
  //   const fullStars = Math.floor(rating);
  //   const hasHalfStar = rating % 1 >= 0.5;
  //   const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    
  //   return (
  //     <div className="flex items-center">
  //       {[...Array(fullStars)].map((_, i) => (
  //         <FaStar key={`full-${i}`} className="text-yellow-500" size={16} />
  //       ))}
  //       {hasHalfStar && <FaStarHalfAlt className="text-yellow-500" size={16} />}
  //       {[...Array(emptyStars)].map((_, i) => (
  //         <FaRegStar key={`empty-${i}`} className="text-yellow-500" size={16} />
  //       ))}
  //       <span className="ml-2 text-gray-500 text-sm">({rating})</span>
  //     </div>
  //   );
  // };

  // function ProductDetails() {
  //   const { id } = useParams();
  //   const [productDetails, setProductDetails] = useState(null);
  //   const [relatedProducts, setRelatedProducts] = useState([]);
  //   const [quantity, setQuantity] = useState(1);
  //   const [notification, setNotification] = useState(null);
  //   const [loading, setLoading] = useState(true);
  //   const [relatedLoading, setRelatedLoading] = useState(false);
  //   const [error, setError] = useState(null);
    
  //   const { addToCart } = useCart();
  //   const { addToWishlist, wishlistItems } = useWishlist();

  //   // إعدادات السلايدر
  //   const sliderSettings = {
  //     dots: true,
  //     infinite: true,
  //     speed: 500,
  //     slidesToShow: 1,
  //     slidesToScroll: 1,
  //     autoplay: true,
  //     autoplaySpeed: 3000,
  //     arrows: true,
  //     adaptiveHeight: true,
  //     customPaging: (i) => (
  //       <div className="dot-custom">
  //         <div className="w-12 h-12 rounded border border-gray-200 bg-gray-100 flex items-center justify-center overflow-hidden">
  //           <img 
  //             src={productDetails?.images?.[i] || productDetails?.image} 
  //             alt={`Thumbnail ${i+1}`} 
  //             className="object-contain w-10 h-10"
  //             loading="lazy"
  //           />
  //         </div>
  //       </div>
  //     ),
  //     responsive: [
  //       {
  //         breakpoint: 768,
  //         settings: {
  //           arrows: false
  //         }
  //       }
  //     ]
  //   };

  //   // جلب تفاصيل المنتج والمنتجات ذات الصلة
  //   const getProductDetails = useCallback(async (id) => {
  //     try {
  //       setLoading(true);
  //       setError(null);
        
  //       const product = await fetchProductDetails(id);
  //       setProductDetails(product);
        
  //       setRelatedLoading(true);
  //       const related = await fetchRelatedProducts(product.category);
  //       const filtered = related.filter(p => p.id !== parseInt(id));
  //       setRelatedProducts(filtered.slice(0, 4));
  //     } catch (err) {
  //       console.error('Error:', err);
  //       setError(err.message || 'An error occurred while loading product details');
  //     } finally {
  //       setLoading(false);
  //       setRelatedLoading(false);
  //     }
  //   }, []);

  //   useEffect(() => {
  //     getProductDetails(id);
  //   }, [id, getProductDetails]);

  //   // إنشاء صور متعددة للمنتج
  //   const productImages = productDetails 
  //     ? [
  //         productDetails.image,
  //         `https://picsum.photos/500/500?product=${id}&1`,
  //         `https://picsum.photos/500/500?product=${id}&2`,
  //         `https://picsum.photos/500/500?product=${id}&3`
  //       ]
  //     : [];

  //   // إضافة إلى السلة
  //   const handleAddToCart = (product) => {
  //     if (product) {
  //       addToCart({
  //         ...product,
  //         quantity: quantity
  //       });
  //       showNotification(`${product.title} added to cart!`);
  //     }
  //   };

  //   // إضافة إلى المفضلة
  //   const handleAddToWishlist = (product) => {
  //     if (product) {
  //       addToWishlist(product);
  //       showNotification(`${product.title} added to wishlist!`);
  //     }
  //   };

  //   // التحقق إذا كان المنتج في المفضلة
  //   const isInWishlist = (productId) => {
  //     return wishlistItems.some(item => item.id === productId);
  //   };

  //   // عرض الإشعار
  //   const showNotification = (message) => {
  //     setNotification(message);
  //     setTimeout(() => setNotification(null), 3000);
  //   };

  //   // حالة التحميل
  //   if (loading) {
  //     return (
  //       <div className="min-h-screen flex items-center justify-center bg-gray-50">
  //         <div className="text-center">
  //           <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500 mx-auto"></div>
  //           <p className="mt-4 text-gray-600">Loading product details...</p>
  //         </div>
  //       </div>
  //     );
  //   }

  //   // حالة الخطأ
  //   if (error) {
  //     return (
  //       <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
  //         <div className="text-center max-w-md">
  //           <div className="text-red-500 text-5xl mb-4">⚠️</div>
  //           <h2 className="text-2xl font-bold text-gray-800 mb-2">Error Loading Product</h2>
  //           <p className="text-gray-600 mb-6">{error}</p>
  //           <button 
  //             onClick={() => getProductDetails(id)}
  //             className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
  //           >
  //             Retry
  //           </button>
  //           <Link 
  //             to="/" 
  //             className="ml-4 border border-gray-300 hover:bg-gray-100 text-gray-700 px-6 py-3 rounded-lg transition-colors"
  //           >
  //             Go to Home
  //           </Link>
  //         </div>
  //       </div>
  //     );
  //   }

  //   return (
  //     <div className="min-h-screen bg-gray-50">
  //       {/* إشعار الإضافة للسلة أو المفضلة */}
  //       {notification && (
  //         <div className="fixed top-4 right-4 z-50 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg animate-fadeInOut">
  //           {notification}
  //         </div>
  //       )}
        
  //       {/* تفاصيل المنتج الرئيسية */}
  //       <div className="max-w-6xl mx-auto px-4 py-8">
  //         <div className="bg-white rounded-2xl shadow-xl p-6 mb-12 transition-all duration-300 hover:shadow-2xl">
  //           <div className="flex flex-col lg:flex-row gap-8">
  //             {/* معرض الصور */}
  //             <div className="w-full lg:w-1/2">
  //               {productDetails ? (
  //                 <Slider {...sliderSettings} className="product-slider">
  //                   {productImages.map((img, index) => (
  //                     <div key={index} className="outline-none">
  //                       <div className="flex items-center justify-center h-80 bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-4">
  //                         <img
  //                           src={img}
  //                           alt={`${productDetails.title} - ${index + 1}`}
  //                           className="max-h-full max-w-full object-contain transition-transform duration-500 hover:scale-105"
  //                           loading="lazy"
  //                         />
  //                       </div>
  //                     </div>
  //                   ))}
  //                 </Slider>
  //               ) : (
  //                 <div className="h-80 bg-gradient-to-br from-gray-100 to-blue-100 rounded-2xl animate-pulse flex items-center justify-center">
  //                   <div className="text-gray-400">Loading images...</div>
  //                 </div>
  //               )}
  //             </div>

  //             {/* تفاصيل المنتج */}
  //             <div className="w-full lg:w-1/2">
  //               {productDetails ? (
  //                 <>
  //                   <div className="flex justify-between items-start mb-4">
  //                     <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
  //                       {productDetails.title}
  //                     </h1>
  //                     <div className="bg-gradient-to-r from-sky-500 to-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
  //                       {productDetails.category}
  //                     </div>
  //                   </div>

  //                   <div className="mb-6 p-4 bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl border border-blue-100">
  //                     <p className="text-gray-600 text-base leading-relaxed">
  //                       {productDetails.description}
  //                     </p>
  //                   </div>

  //                   <div className="flex flex-wrap items-center justify-between mb-6">
  //                     <div>
  //                       <div className="text-3xl font-bold text-sky-600 mb-2">
  //                         ${productDetails.price.toFixed(2)}
  //                       </div>
  //                       <div className="flex items-center">
  //                         <RatingStars rating={productDetails.rating.rate} />
  //                         <span className="ml-2 text-gray-500">
  //                           ({productDetails.rating.count} reviews)
  //                         </span>
  //                       </div>
  //                     </div>
  //                   </div>

  //                   {/* أزرار الإضافة للسلة والمفضلة */}
  //                   <div className="flex flex-wrap gap-4 mb-8">
  //                     <div className="flex items-center border border-gray-300 rounded-lg bg-white">
  //                       <button 
  //                         className="px-4 py-3 text-gray-600 hover:bg-gray-100 transition-colors"
  //                         onClick={() => setQuantity(q => Math.max(1, q - 1))}
  //                         aria-label="Decrease quantity"
  //                       >
  //                         <FaMinus size={14} />
  //                       </button>
  //                       <span className="px-4 py-3 font-medium text-gray-800">{quantity}</span>
  //                       <button 
  //                         className="px-4 py-3 text-gray-600 hover:bg-gray-100 transition-colors"
  //                         onClick={() => setQuantity(q => q + 1)}
  //                         aria-label="Increase quantity"
  //                       >
  //                         <FaPlus size={14} />
  //                       </button>
  //                     </div>
                      
  //                     <button 
  //                       className="flex items-center bg-gradient-to-r from-sky-600 to-blue-700 hover:from-sky-700 hover:to-blue-800 text-white px-6 py-3 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
  //                       onClick={() => handleAddToCart(productDetails)}
  //                       aria-label={`Add ${productDetails.title} to cart`}
  //                     >
  //                       <FaShoppingCart className="mr-2" size={18} />
  //                       <span className="font-medium">Add to Cart</span>
  //                     </button>
                      
  //                     <button 
  //                       className={`flex items-center border ${isInWishlist(productDetails.id) ? 'border-red-500 text-red-500' : 'border-gray-300 text-gray-700'} px-6 py-3 rounded-lg transition-all hover:bg-red-50`}
  //                       onClick={() => handleAddToWishlist(productDetails)}
  //                       aria-label={`Add ${productDetails.title} to wishlist`}
  //                     >
  //                       <FaHeart className={`mr-2 ${isInWishlist(productDetails.id) ? 'text-red-500' : 'text-gray-500'}`} size={18} />
  //                       <span className="font-medium">
  //                         {isInWishlist(productDetails.id) ? 'In Wishlist' : 'Wishlist'}
  //                       </span>
  //                     </button>
  //                   </div>

  //                   {/* معلومات إضافية */}
  //                   <div className="pt-6 border-t border-gray-200">
  //                     <h3 className="text-lg font-semibold text-gray-800 mb-3">Product Details</h3>
  //                     <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-600">
  //                       <li className="flex">
  //                         <span className="w-32 font-medium">Category:</span>
  //                         <span className="capitalize">{productDetails.category}</span>
  //                       </li>
  //                       <li className="flex">
  //                         <span className="w-32 font-medium">Stock Status:</span>
  //                         <span className="text-green-600 font-medium">In Stock</span>
  //                       </li>
  //                       <li className="flex">
  //                         <span className="w-32 font-medium">Shipping:</span>
  //                         <span>Free Shipping Worldwide</span>
  //                       </li>
  //                       <li className="flex">
  //                         <span className="w-32 font-medium">SKU:</span>
  //                         <span>PRD-{id.toString().padStart(4, '0')}</span>
  //                       </li>
  //                     </ul>
  //                   </div>
  //                 </>
  //               ) : (
  //                 <div className="space-y-4">
  //                   <div className="h-8 bg-gradient-to-r from-gray-200 to-gray-300 rounded w-3/4 animate-pulse"></div>
  //                   <div className="h-4 bg-gradient-to-r from-gray-200 to-gray-300 rounded w-full animate-pulse"></div>
  //                   <div className="h-4 bg-gradient-to-r from-gray-200 to-gray-300 rounded w-5/6 animate-pulse"></div>
  //                   <div className="h-10 bg-gradient-to-r from-gray-200 to-gray-300 rounded w-1/3 animate-pulse"></div>
  //                 </div>
  //               )}
  //             </div>
  //           </div>
  //         </div>

  //         {/* المنتجات المتعلقة */}
  //         <div className="mb-12">
  //           <div className="flex justify-between items-center mb-6">
  //             <h2 className="text-2xl font-bold text-gray-800">Related Products</h2>
  //             <Link to={`/category/${productDetails?.category}`} className="text-sky-600 hover:text-sky-700 font-medium flex items-center">
  //               View All
  //               <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
  //                 <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
  //               </svg>
  //             </Link>
  //           </div>
            
  //           {relatedLoading ? (
  //             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
  //               {[...Array(4)].map((_, i) => (
  //                 <div key={i} className="bg-white rounded-xl shadow-lg border border-gray-100 animate-pulse">
  //                   <div className="h-56 bg-gray-200 rounded-t-xl"></div>
  //                   <div className="p-4">
  //                     <div className="h-5 bg-gray-200 rounded w-3/4 mb-3"></div>
  //                     <div className="h-4 bg-gray-200 rounded w-1/4 mb-4"></div>
  //                     <div className="h-10 bg-gray-200 rounded"></div>
  //                   </div>
  //                 </div>
  //               ))}
  //             </div>
  //           ) : relatedProducts.length > 0 ? (
  //             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
  //               {relatedProducts.map((product) => (
  //                 <div key={product.id} className="group">
  //                   <div className="bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 border border-gray-100 group-hover:shadow-2xl group-hover:border-sky-200">
  //                     <div className="relative">
  //                       <Link to={`/productDetails/${product.id}`} className="block" aria-label={`View ${product.title}`}>
  //                         <div className="relative h-56 overflow-hidden bg-gradient-to-br from-gray-50 to-blue-50 flex items-center justify-center">
  //                           <img
  //                             src={product.image} 
  //                             alt={product.title}
  //                             className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-110"
  //                             loading="lazy"
  //                           />
  //                         </div>
  //                       </Link>
                        
  //                       <div className="absolute top-3 right-3">
  //                         <button 
  //                           className={`rounded-full p-2 shadow-md transition-colors ${isInWishlist(product.id) ? 'bg-red-100 text-red-500' : 'bg-white text-gray-400 hover:text-red-500'}`}
  //                           onClick={() => handleAddToWishlist(product)}
  //                           aria-label={`Add ${product.title} to wishlist`}
  //                         >
  //                           <FaHeart className={isInWishlist(product.id) ? 'text-red-500' : ''} />
  //                         </button>
  //                       </div>
  //                     </div>

  //                     <div className="p-4">
  //                       <Link to={`/productDetails/${product.id}`}>
  //                         <h3 className="font-semibold text-gray-800 group-hover:text-sky-600 transition-colors line-clamp-2 mb-2">
  //                           {product.title}
  //                         </h3>
  //                       </Link>
                        
  //                       <div className="flex justify-between items-center mt-3">
  //                         <div>
  //                           <span className="text-lg font-bold text-sky-600">${product.price.toFixed(2)}</span>
  //                         </div>
  //                         <RatingStars rating={product.rating.rate} />
  //                       </div>

  //                       <div className="flex gap-3 mt-4">
  //                         <button 
  //                           className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-sky-600 to-blue-700 hover:from-sky-700 hover:to-blue-800 text-white py-3 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
  //                           onClick={() => handleAddToCart(product)}
  //                           aria-label={`Add ${product.title} to cart`}
  //                         >
  //                           <FaShoppingCart />
  //                           <span>Add to Cart</span>
  //                         </button>
  //                       </div>
  //                     </div>
  //                   </div>
  //                 </div>
  //               ))}
  //             </div>
  //           ) : (
  //             <div className="bg-white rounded-xl p-8 text-center">
  //               <p className="text-gray-500">No related products found</p>
  //             </div>
  //           )}
  //         </div>
  //       </div>
  //     </div>
  //   );
  // }

  // export default ProductDetails;




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