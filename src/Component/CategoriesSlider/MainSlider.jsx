import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

function MainSlider() {
  // إعدادات السلايدر المحسنة
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    fade: true,
    pauseOnHover: true,
    adaptiveHeight: true,
    cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    appendDots: dots => (
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10">
        <ul className="flex space-x-2">{dots}</ul>
      </div>
    ),
    customPaging: i => (
      <div className="w-3 h-3 rounded-full bg-white bg-opacity-50 transition-all duration-300 hover:bg-opacity-100"></div>
    )
  };

  // الأسهم المخصصة
  function NextArrow(props) {
    const { onClick } = props;
    return (
      <button 
        onClick={onClick}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white bg-opacity-70 rounded-full p-3 hover:bg-opacity-100 transition-all duration-300 shadow-lg"
        aria-label="Next slide"
      >
        <FaChevronRight className="text-gray-800 text-xl" />
      </button>
    );
  }

  function PrevArrow(props) {
    const { onClick } = props;
    return (
      <button 
        onClick={onClick}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white bg-opacity-70 rounded-full p-3 hover:bg-opacity-100 transition-all duration-300 shadow-lg"
        aria-label="Previous slide"
      >
        <FaChevronLeft className="text-gray-800 text-xl" />
      </button>
    );
  }

  // بيانات السلايدر مع صور من مصادر موثوقة
  const slides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    title: "Latest Electronics Offers",
    subtitle: "Up to 50% discount on the latest devices",
    buttonText: "Shop Now"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1999&q=80",
    title: "Luxury Watches Collection",
    subtitle: "Elegant designs for every occasion",
    buttonText: "Discover Collection"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1780&q=80",
    title: "Sports Shoes Deals",
    subtitle: "High-quality athletic shoes at great prices",
    buttonText: "Browse Shoes"
  }
];

  return (
    <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] rounded-b-xl overflow-hidden shadow-xl">
      <Slider {...settings} className="main-slider">
        {slides.map((slide) => (
          <div key={slide.id} className="relative">
            <div 
              className="w-full h-[400px] md:h-[500px] lg:h-[600px] bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30"></div>
              
              <div className="absolute left-10 md:left-20 top-1/2 transform -translate-y-1/2 text-white max-w-lg">
                <h2 className="text-3xl md:text-5xl font-bold mb-4 animate-fadeIn">
                  {slide.title}
                </h2>
                <p className="text-xl mb-8 text-gray-200 animate-fadeIn delay-100">
                  {slide.subtitle}
                </p>
                <button 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-medium transition-all transform hover:scale-105 shadow-lg animate-fadeIn delay-200"
                >
                  {slide.buttonText}
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default MainSlider;