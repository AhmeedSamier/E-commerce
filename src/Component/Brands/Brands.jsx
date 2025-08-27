// src/pages/Brands.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Brands = () => {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    axios.get('https://dummyjson.com/products?limit=100')
      .then(res => {
        const uniqueBrands = [...new Set(res.data.products.map(p => p.brand))];
        setBrands(uniqueBrands);
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Brands</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {brands.map((brand, index) => (
          <Link 
            key={index} 
            to={`/brand/${brand}`}
            className="bg-gray-100 hover:bg-gray-200 transition p-4 rounded shadow text-center capitalize"
          >
            {brand}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Brands;
