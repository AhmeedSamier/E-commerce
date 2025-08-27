// src/pages/WishlistPage.js
import React from 'react';
//import { useWishlist } from '../Context/WishlistContext';
import { useWishlist } from "../../Context/WishlistContext";



const WishlistPage = () => {
  const { wishlistItems, removeFromWishlist } = useWishlist();

  return (
    <div className="container mx-auto py-16 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">Your Wishlist</h1>
      
      {wishlistItems.length === 0 ? (
        <p className="text-center text-gray-500">Your wishlist is empty</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {wishlistItems.map(item => (
            <div key={item.id} className="border rounded-lg p-4 shadow-md hover:shadow-lg transition">
              <div className="flex justify-center">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-48 object-contain mb-4"
                />
              </div>
              <h3 className="text-lg font-semibold mb-2">{item.name}</h3>
              <p className="text-gray-600 mb-4">${item.price}</p>
              <div className="flex justify-between">
                <button 
                  onClick={() => removeFromWishlist(item.id)}
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                >
                  Remove
                </button>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WishlistPage;