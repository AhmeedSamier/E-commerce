import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from 'react-router-dom';

const CategoriesSlider = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // إعدادات السلايدر
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const getCategories = () => {
    setLoading(true);
    setError(null);
    
    axios.get('https://ecommerce.routemisr.com/api/v1/categories')
      .then((response) => {
        // تأكد من بنية البيانات الصحيحة
        if (response.data && Array.isArray(response.data.data)) {
          setCategories(response.data.data);
        } else {
          throw new Error('Invalid API response structure');
        }
      })
      .catch((error) => { 
        console.error('Error fetching categories:', error);
        setError('Failed to load categories. Please try again later.');
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    getCategories();
  }, []);

  const handleNavigate = (category) => {
    navigate(`/products/category/${category.name.toLowerCase().replace(/\s+/g, '-')}`);
  };

  // عرض حالة التحميل
  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  // عرض حالة الخطأ
  if (error) {
    return (
      <div className="bg-white rounded-lg shadow-md p-6 mx-4 mt-8 max-w-6xl ">
        <h2 className="text-2xl font-bold mb-4">Categories</h2>
        <div className="text-center py-10">
          <p className="text-red-500 text-lg mb-4">{error}</p>
          <button 
            onClick={getCategories}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl shadow-lg p-6 mx-4 my-8 max-w-6xl ">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            Time Zone Category
          </span>
        </h2>
        <button 
          onClick={() => navigate('/categories')}
          className="text-blue-600 hover:text-blue-800 font-medium flex items-center"
        >
          View All
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      </div>

      <Slider {...settings}>
        {categories.map((category) => (
          <div
            key={category._id}
            onClick={() => handleNavigate(category)}
            className="cursor-pointer px-2 group"
          >
            <div className="rounded-xl overflow-hidden shadow-lg bg-white hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-1">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              <div className="p-4 text-center">
                <h3 className="text-xl font-bold capitalize text-gray-800 mb-1">
                  {category.name}
                </h3>
                <p className="text-sm text-gray-500">Explore our {category.name} collection</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CategoriesSlider;