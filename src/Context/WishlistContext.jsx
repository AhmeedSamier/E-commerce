import React, { createContext, useState, useContext } from 'react';

const WishlistContext = createContext();

export function useWishlist() {
  return useContext(WishlistContext);
}

export function WishlistProvider({ children }) {
  const [wishlistItems, setWishlistItems] = useState([]);

  const addToWishlist = (product) => {
    setWishlistItems(prevItems => {
      // التحقق إذا كان المنتج موجود بالفعل
      const isItemInWishlist = prevItems.some(item => item.id === product.id);
      
      if (isItemInWishlist) {
        // إزالة المنتج إذا كان موجوداً
        return prevItems.filter(item => item.id !== product.id);
      } else {
        // إضافة المنتج إذا لم يكن موجوداً
        return [...prevItems, product];
      }
    });
  };

  const value = {
    wishlistItems,
    addToWishlist
  };

  return (
    <WishlistContext.Provider value={value}>
      {children}
    </WishlistContext.Provider>
  );
}