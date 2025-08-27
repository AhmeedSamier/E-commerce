// import React, { useContext , createContext,useState } from 'react'
// import logo from "../../assets/images/logo.png";
// import { NavLink, useNavigation } from 'react-router-dom';
// import { FaFacebook } from 'react-icons/fa';
// import { FaInstagram } from 'react-icons/fa';
// import { FaTwitter } from 'react-icons/fa';
// import { FaLinkedin } from 'react-icons/fa';
// import { CounterContext } from '../../Context/UserContext';
// import { UserContext } from '../../Context/UserContext1';


// function Navbar() {
//   let {counter, userName} = useContext(CounterContext);
//   let navigation = useNavigation();
//   let {userLogIn , setUserLogIn} = useContext(UserContext);
//   function handleLogout() {
//     localStorage.removeItem('token');   
//     setUserLogIn(null);
//     navigation.navigate('/Login');
//   }
  
//   return (
//     <>
//     <nav className="bg-sky-600 fixed top-0 left-0 right-0 z-50 shadow-md">
//   <div className="container  mx-auto px-6 py-2 flex justify-between items-center">
//     {/* Logo */}
//     <img src={logo} alt="timezone" className="w-24" />

//     {/* Links */}
//     <ul className="flex items-center gap-6">
//         {
//           userLogIn !== null ?<>
//              <li><NavLink to="/" className="text-white text-lg hover:text-yellow-300 transition">Home</NavLink></li>
//              <li><NavLink to="/about" className="text-white text-lg hover:text-yellow-300 transition">About</NavLink></li>
//             <li><NavLink to="/cart" className="text-white text-lg hover:text-yellow-300 transition">Cart</NavLink></li>
//             <li><NavLink to="/categories" className="text-white text-lg hover:text-yellow-300 transition">Categories</NavLink></li>
//             <li><NavLink to="/brands" className="text-white text-lg hover:text-yellow-300 transition">Brands</NavLink></li>
//             <li><NavLink to="/Products" className="text-white text-lg hover:text-yellow-300 transition">Products</NavLink></li>
//           </>:null
//         }
//     </ul>

//     {/* Social and User Actions */}
//     <ul className="flex items-center gap-6">
//       {
//         userLogIn == null ?<>
//         <li><NavLink to="/login" className="text-white text-lg hover:text-yellow-300 transition">Login</NavLink></li>
//         <li><NavLink to="/register" className="text-white text-lg hover:text-yellow-300 transition">Register</NavLink></li>
//         </> :  <li><button onClick={handleLogout} className="text-white text-lg hover:text-yellow-300 transition">Logout</button></li>
//       }

      
//       <li className="text-white text-lg hover:text-yellow-300 transition flex items-center">
//         <FaFacebook className="mx-1 fa-md" />
//         <FaTwitter className="mx-1 fa-md" />
//         <FaInstagram className="mx-1 fa-md" />
//         <FaLinkedin className="mx-1 fa-md" />
//       </li>
//        <li className="text-white text-lg hover:text-yellow-300 transition">
//         <span className="font-bold"> {counter}</span></li>
//     </ul>
//   </div>
// </nav>
                


    
//     </>
//   )
// }

// export default Navbar





// src/Component/Navbar/Navbar.jsx
// import React, { useContext } from 'react';
// import logo from "../../assets/images/logo.png";
// import { NavLink, useNavigate } from 'react-router-dom';
// import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaShoppingCart } from 'react-icons/fa';
// import { useCart } from '../../Context/CartContext'; // استيراد useCart
// import { UserContext } from '../../Context/UserContext1';
// import Checkout from "../Checkout/Checkout";
// import Products from '../Products/Products';
// import Profile from '../Profile/Profile';


// function Navbar() {
//   const { counter } = useCart(); // استخدام counter من CartContext
//   const navigate = useNavigate();
//   const { userLogIn, setUserLogIn } = useContext(UserContext);

//   function handleLogout() {
//     localStorage.removeItem('token');
//     setUserLogIn(null);
//     navigate('/login');
//   }

//   return (
//     <>
//       <nav className="bg-sky-600 fixed top-0 left-0 right-0 z-50 shadow-md">
//         <div className="container mx-auto px-6 py-2 flex justify-between items-center">
//           {/* Logo */}
//           <NavLink to="/">
//             <img src={logo} alt="timezone" className="w-24" />
//           </NavLink>

//           {/* Links */}
//           <ul className="flex items-center gap-6">
//             <li><NavLink to="/" className="text-white text-lg hover:text-yellow-300 transition">Home</NavLink></li>
//             <li><NavLink to="/about" className="text-white text-lg hover:text-yellow-300 transition">About</NavLink></li>
//             <li><NavLink to="/categories" className="text-white text-lg hover:text-yellow-300 transition">Categories</NavLink></li>
//             <li><NavLink to="/brands" className="text-white text-lg hover:text-yellow-300 transition">Brands</NavLink></li>
//             <li><NavLink to="/Checkout" className="text-white text-lg hover:text-yellow-300 transition">Checkout</NavLink></li>
//             <li><NavLink to="/products" className="text-white text-lg hover:text-yellow-300 transition">Products</NavLink></li>
//           </ul>

//           {/* Social and User Actions */}
//           <ul className="flex items-center gap-6">
//             {
//               userLogIn == null ? (
//                 <>
//                   <li><NavLink to="/login" className="text-white text-lg hover:text-yellow-300 transition">Login</NavLink></li>
//                   <li><NavLink to="/register" className="text-white text-lg hover:text-yellow-300 transition">Register</NavLink></li>
//                   <li>
//                <NavLink to="/profile" className="text-white text-lg hover:text-yellow-300 transition">
//                 Profile
//                </NavLink>
//                 </li>
//                 </>
//               ) : (
//                 <li>
//                   <button onClick={handleLogout} className="text-white text-lg hover:text-yellow-300 transition">Logout</button>
//                 </li>
//               )
//             }

//             <li className="text-white text-lg hover:text-yellow-300 transition flex items-center">
//               <FaFacebook className="mx-1 fa-md" />
//               <FaTwitter className="mx-1 fa-md" />
//               <FaInstagram className="mx-1 fa-md" />
//               <FaLinkedin className="mx-1 fa-md" />
//             </li>
            
//             {/* سلة التسوق مع العداد */}
//             <li className="relative">
//               <NavLink to="/cart" className="flex items-center text-white text-lg hover:text-yellow-300 transition">
//                 <FaShoppingCart className="text-2xl" />
//                 {counter > 0 && (
//                   <span className="absolute -top-2 -right-2 bg-amber-400 text-sky-800 font-bold rounded-full w-6 h-6 flex items-center justify-center text-xs">
//                     {counter}
//                   </span>
//                 )}
//               </NavLink>
//             </li>
//           </ul>
//         </div>
//       </nav>
//     </>
//   );
// }

// export default Navbar;



// import React, { useContext, useState } from 'react';
// import logo from "../../assets/images/logo.png";
// import { NavLink, useNavigate } from 'react-router-dom';
// import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa';
// import { useCart } from '../../Context/CartContext';
// //import { UserContext } from '../../Context/UserContext1';
// import { useUserContext } from '../../Context/UserContext1'; // Import the hook




// function Navbar() {
//   const { counter } = useCart();
//   const navigate = useNavigate();
// //  const { userLogIn, setUserLogIn } = useContext(UserContext);
//     const { userLogIn, setUserLogIn } = useUserContext(); // Use the hook

//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   function handleLogout() {
//     localStorage.removeItem('token');
//     setUserLogIn(null);
//     navigate('/login');
//     setIsMenuOpen(false);
//   }

//   const closeMenu = () => setIsMenuOpen(false);

//   return (
//     <>
//       <nav className="bg-sky-600 fixed top-0 left-0 right-0 z-50 shadow-md">
//         <div className="container mx-auto px-4 py-2 flex justify-between items-center">
//           {/* Logo and Hamburger Menu */}
//           <div className="flex items-center">
//             <button 
//               className="text-white mr-4 md:hidden"
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//             >
//               {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
//             </button>
//             <NavLink to="/" onClick={closeMenu}>
//               <img src={logo} alt="timezone" className="w-24" />
//             </NavLink>
//           </div>

//           {/* Desktop Navigation Links */}
//           <div className="hidden md:flex flex-1 justify-center">
//             <ul className="flex items-center gap-4 lg:gap-6">
//               <li><NavLink to="/" className="text-white text-lg hover:text-yellow-300 transition">Home</NavLink></li>
//               <li><NavLink to="/about" className="text-white text-lg hover:text-yellow-300 transition">About</NavLink></li>
//               <li><NavLink to="/categories" className="text-white text-lg hover:text-yellow-300 transition">Categories</NavLink></li>
//               <li><NavLink to="/brands" className="text-white text-lg hover:text-yellow-300 transition">Brands</NavLink></li>
//               <li><NavLink to="/Checkout" className="text-white text-lg hover:text-yellow-300 transition">Checkout</NavLink></li>
//               <li><NavLink to="/products" className="text-white text-lg hover:text-yellow-300 transition">Products</NavLink></li>
//             </ul>
//           </div>

//           {/* Desktop User Actions */}
//           <div className="hidden md:flex items-center gap-4 lg:gap-6">
//             <div className="flex text-white text-lg">
//               <a href="#" className="mx-1 hover:text-yellow-300 transition"><FaFacebook /></a>
//               <a href="#" className="mx-1 hover:text-yellow-300 transition"><FaTwitter /></a>
//               <a href="#" className="mx-1 hover:text-yellow-300 transition"><FaInstagram /></a>
//               <a href="#" className="mx-1 hover:text-yellow-300 transition"><FaLinkedin /></a>
//             </div>
            
//             {
//               userLogIn == null ? (
//                 <div className="flex items-center gap-4">
//                   <NavLink to="/login" className="text-white text-lg hover:text-yellow-300 transition">Login</NavLink>
//                   <NavLink to="/register" className="text-white text-lg hover:text-yellow-300 transition">Register</NavLink>
//                   <NavLink to="/profile" className="text-white text-lg hover:text-yellow-300 transition">Profile</NavLink>
//                 </div>
//               ) : (
//                 <button onClick={handleLogout} className="text-white text-lg hover:text-yellow-300 transition">Logout</button>
//               )
//             }
            
//             <div className="relative">
//               <NavLink to="/cart" className="flex items-center text-white text-lg hover:text-yellow-300 transition">
//                 <FaShoppingCart className="text-2xl" />
//                 {counter > 0 && (
//                   <span className="absolute -top-2 -right-2 bg-amber-400 text-sky-800 font-bold rounded-full w-6 h-6 flex items-center justify-center text-xs">
//                     {counter}
//                   </span>
//                 )}
//               </NavLink>
//             </div>
//           </div>

//           {/* Mobile Cart Icon (always visible) */}
//           <div className="md:hidden relative">
//             <NavLink to="/cart" className="flex items-center text-white text-lg hover:text-yellow-300 transition">
//               <FaShoppingCart className="text-2xl" />
//               {counter > 0 && (
//                 <span className="absolute -top-2 -right-2 bg-amber-400 text-sky-800 font-bold rounded-full w-6 h-6 flex items-center justify-center text-xs">
//                   {counter}
//                 </span>
//               )}
//             </NavLink>
//           </div>
//         </div>

//         {/* Mobile Navigation Menu */}
//         {isMenuOpen && (
//           <div className="md:hidden bg-sky-600">
//             <ul className="py-4 px-6 space-y-4">
//               <li><NavLink to="/" onClick={closeMenu} className="block text-white text-lg hover:text-yellow-300 transition">Home</NavLink></li>
//               <li><NavLink to="/about" onClick={closeMenu} className="block text-white text-lg hover:text-yellow-300 transition">About</NavLink></li>
//               <li><NavLink to="/categories" onClick={closeMenu} className="block text-white text-lg hover:text-yellow-300 transition">Categories</NavLink></li>
//               <li><NavLink to="/brands" onClick={closeMenu} className="block text-white text-lg hover:text-yellow-300 transition">Brands</NavLink></li>
//               <li><NavLink to="/Checkout" onClick={closeMenu} className="block text-white text-lg hover:text-yellow-300 transition">Checkout</NavLink></li>
//               <li><NavLink to="/products" onClick={closeMenu} className="block text-white text-lg hover:text-yellow-300 transition">Products</NavLink></li>
              
//               {/* Social Icons in Mobile Menu */}
//               <li className="flex justify-center pt-4">
//                 <div className="flex text-white text-xl">
//                   <a href="#" className="mx-3 hover:text-yellow-300 transition"><FaFacebook /></a>
//                   <a href="#" className="mx-3 hover:text-yellow-300 transition"><FaTwitter /></a>
//                   <a href="#" className="mx-3 hover:text-yellow-300 transition"><FaInstagram /></a>
//                   <a href="#" className="mx-3 hover:text-yellow-300 transition"><FaLinkedin /></a>
//                 </div>
//               </li>
              
//               {/* User Actions in Mobile Menu */}
//               <li className="pt-4 border-t border-sky-500">
//                 {userLogIn == null ? (
//                   <div className="flex flex-col gap-3">
//                     <NavLink to="/login" onClick={closeMenu} className="text-white text-lg hover:text-yellow-300 transition text-center py-2 bg-sky-700 rounded">Login</NavLink>
//                     <NavLink to="/register" onClick={closeMenu} className="text-white text-lg hover:text-yellow-300 transition text-center py-2 bg-sky-700 rounded">Register</NavLink>
//                     <NavLink to="/profile" onClick={closeMenu} className="text-white text-lg hover:text-yellow-300 transition text-center py-2 bg-sky-700 rounded">Profile</NavLink>
//                   </div>
//                 ) : (
//                   <button 
//                     onClick={handleLogout} 
//                     className="w-full text-white text-lg hover:text-yellow-300 transition text-center py-2 bg-sky-700 rounded"
//                   >
//                     Logout
//                   </button>
//                 )}
//               </li>
//             </ul>
//           </div>
//         )}
//       </nav>
      
//       {/* Spacer to prevent content from being hidden under fixed navbar */}
//       <div className="h-16"></div>
//     </>
//   );
// }

// export default Navbar;



// import React, { useEffect, useState } from 'react';
// import logo from "../../assets/images/logo.png";
// import { NavLink, useNavigate, useLocation } from 'react-router-dom';
// import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa';
// import { useCart } from '../../Context/CartContext';
// import { useUserContext } from '../../Context/UserContext1';

// function Navbar() {
//   const { counter } = useCart();
//   const navigate = useNavigate();
//   const location = useLocation(); // Add this to track route changes
//   const { userLogIn, setUserLogIn } = useUserContext();
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isLoggedIn, setIsLoggedIn] = useState(!!userLogIn); // Local state to track login status

//   // Update login status when userLogIn changes
//   useEffect(() => {
//     setIsLoggedIn(!!userLogIn);
//   }, [userLogIn]);

//   // Close menu when route changes
//   useEffect(() => {
//     setIsMenuOpen(false);
//   }, [location.pathname]);

//   function handleLogout() {
//     localStorage.removeItem('token');
//     setUserLogIn(null);
//     setIsLoggedIn(false); // Update local state
//     navigate('/login');
//   }

//   const closeMenu = () => setIsMenuOpen(false);

//   return (
//     <>
//       <nav className="bg-sky-600 fixed top-0 left-0 right-0 z-50 shadow-md">
//         <div className="container mx-auto px-4 py-2 flex justify-between items-center">
//           {/* Logo and Hamburger Menu */}
//           <div className="flex items-center">
//             <button 
//               className="text-white mr-4 md:hidden"
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//             >
//               {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
//             </button>
//             <NavLink to="/" onClick={closeMenu}>
//               <img src={logo} alt="timezone" className="w-24" />
//             </NavLink>
//           </div>

//           {/* Desktop Navigation Links */}
//           <div className="hidden md:flex flex-1 justify-center">
//             <ul className="flex items-center gap-4 lg:gap-6">
//               <li><NavLink to="/" className="text-white text-lg hover:text-yellow-300 transition">Home</NavLink></li>
//               <li><NavLink to="/about" className="text-white text-lg hover:text-yellow-300 transition">About</NavLink></li>
//               <li><NavLink to="/categories" className="text-white text-lg hover:text-yellow-300 transition">Categories</NavLink></li>
//               <li><NavLink to="/brands" className="text-white text-lg hover:text-yellow-300 transition">Brands</NavLink></li>
//               <li><NavLink to="/Checkout" className="text-white text-lg hover:text-yellow-300 transition">Checkout</NavLink></li>
//               <li><NavLink to="/products" className="text-white text-lg hover:text-yellow-300 transition">Products</NavLink></li>
//             </ul>
//           </div>

//           {/* Desktop User Actions */}
//           <div className="hidden md:flex items-center gap-4 lg:gap-6">
//             <div className="flex text-white text-lg">
//               <a href="#" className="mx-1 hover:text-yellow-300 transition"><FaFacebook /></a>
//               <a href="#" className="mx-1 hover:text-yellow-300 transition"><FaTwitter /></a>
//               <a href="#" className="mx-1 hover:text-yellow-300 transition"><FaInstagram /></a>
//               <a href="#" className="mx-1 hover:text-yellow-300 transition"><FaLinkedin /></a>
//             </div>
            
//             {!isLoggedIn ? (
//               <div className="flex items-center gap-4">
//                 <NavLink to="/login" className="text-white text-lg hover:text-yellow-300 transition">Login</NavLink>
//                 <NavLink to="/register" className="text-white text-lg hover:text-yellow-300 transition">Register</NavLink>
//               </div>
//             ) : (
//               <div className="flex items-center gap-4">
//                 <NavLink to="/profile" className="text-white text-lg hover:text-yellow-300 transition">Profile</NavLink>
//                 <button onClick={handleLogout} className="text-white text-lg hover:text-yellow-300 transition">Logout</button>
//               </div>
//             )}
            
//             <div className="relative">
//               <NavLink to="/cart" className="flex items-center text-white text-lg hover:text-yellow-300 transition">
//                 <FaShoppingCart className="text-2xl" />
//                 {counter > 0 && (
//                   <span className="absolute -top-2 -right-2 bg-amber-400 text-sky-800 font-bold rounded-full w-6 h-6 flex items-center justify-center text-xs">
//                     {counter}
//                   </span>
//                 )}
//               </NavLink>
//             </div>
//           </div>

//           {/* Mobile Cart Icon (always visible) */}
//           <div className="md:hidden relative">
//             <NavLink to="/cart" className="flex items-center text-white text-lg hover:text-yellow-300 transition">
//               <FaShoppingCart className="text-2xl" />
//               {counter > 0 && (
//                 <span className="absolute -top-2 -right-2 bg-amber-400 text-sky-800 font-bold rounded-full w-6 h-6 flex items-center justify-center text-xs">
//                   {counter}
//                 </span>
//               )}
//             </NavLink>
//           </div>
//         </div>

//         {/* Mobile Navigation Menu */}
//         {isMenuOpen && (
//           <div className="md:hidden bg-sky-600">
//             <ul className="py-4 px-6 space-y-4">
//               <li><NavLink to="/" onClick={closeMenu} className="block text-white text-lg hover:text-yellow-300 transition">Home</NavLink></li>
//               <li><NavLink to="/about" onClick={closeMenu} className="block text-white text-lg hover:text-yellow-300 transition">About</NavLink></li>
//               <li><NavLink to="/categories" onClick={closeMenu} className="block text-white text-lg hover:text-yellow-300 transition">Categories</NavLink></li>
//               <li><NavLink to="/brands" onClick={closeMenu} className="block text-white text-lg hover:text-yellow-300 transition">Brands</NavLink></li>
//               <li><NavLink to="/Checkout" onClick={closeMenu} className="block text-white text-lg hover:text-yellow-300 transition">Checkout</NavLink></li>
//               <li><NavLink to="/products" onClick={closeMenu} className="block text-white text-lg hover:text-yellow-300 transition">Products</NavLink></li>
              
//               {/* Social Icons in Mobile Menu */}
//               <li className="flex justify-center pt-4">
//                 <div className="flex text-white text-xl">
//                   <a href="#" className="mx-3 hover:text-yellow-300 transition"><FaFacebook /></a>
//                   <a href="#" className="mx-3 hover:text-yellow-300 transition"><FaTwitter /></a>
//                   <a href="#" className="mx-3 hover:text-yellow-300 transition"><FaInstagram /></a>
//                   <a href="#" className="mx-3 hover:text-yellow-300 transition"><FaLinkedin /></a>
//                 </div>
//               </li>
              
//               {/* User Actions in Mobile Menu */}
//               <li className="pt-4 border-t border-sky-500">
//                 {!isLoggedIn ? (
//                   <div className="flex flex-col gap-3">
//                     <NavLink to="/login" onClick={closeMenu} className="text-white text-lg hover:text-yellow-300 transition text-center py-2 bg-sky-700 rounded">Login</NavLink>
//                     <NavLink to="/register" onClick={closeMenu} className="text-white text-lg hover:text-yellow-300 transition text-center py-2 bg-sky-700 rounded">Register</NavLink>
//                   </div>
//                 ) : (
//                   <div className="flex flex-col gap-3">
//                     <NavLink to="/profile" onClick={closeMenu} className="text-white text-lg hover:text-yellow-300 transition text-center py-2 bg-sky-700 rounded">Profile</NavLink>
//                     <button 
//                       onClick={handleLogout} 
//                       className="w-full text-white text-lg hover:text-yellow-300 transition text-center py-2 bg-sky-700 rounded"
//                     >
//                       Logout
//                     </button>
//                   </div>
//                 )}
//               </li>
//             </ul>
//           </div>
//         )}
//       </nav>
      
//       {/* Spacer to prevent content from being hidden under fixed navbar */}
//       <div className="h-16"></div>
//     </>
//   );
// }

// export default Navbar;
import React, { useEffect, useState } from 'react';
import logo from "../../assets/images/logo.png";
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaShoppingCart, FaBars, FaTimes, FaHeart } from 'react-icons/fa'; // تم إضافة FaHeart
import { useCart } from '../../Context/CartContext';
import { useUserContext } from '../../Context/UserContext1';
import { useWishlist } from '../../Context/WishlistContext'; // استيراد سياق المفضلة


function Navbar() {
  const { counter } = useCart();
  const navigate = useNavigate();
  const location = useLocation();
  const { userLogIn, setUserLogIn } = useUserContext();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(!!userLogIn);
  
  // الحصول على عناصر المفضلة
  const { wishlistItems } = useWishlist();
  const wishlistCount = wishlistItems.length;

  useEffect(() => {
    setIsLoggedIn(!!userLogIn);
  }, [userLogIn]);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  function handleLogout() {
    localStorage.removeItem('token');
    setUserLogIn(null);
    setIsLoggedIn(false);
    navigate('/login');
  }

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <nav className="bg-sky-600 fixed top-0 left-0 right-0 z-50 shadow-md">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
          {/* Logo and Hamburger Menu */}
          <div className="flex items-center">
            <button 
              className="text-white mr-4 md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
            <NavLink to="/" onClick={closeMenu}>
              <img src={logo} alt="timezone" className="w-24" />
            </NavLink>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex flex-1 justify-center">
            <ul className="flex items-center gap-4 lg:gap-6">
              <li><NavLink to="/" className="text-white text-lg hover:text-yellow-300 transition">Home</NavLink></li>
              <li><NavLink to="/about" className="text-white text-lg hover:text-yellow-300 transition">About</NavLink></li>
              <li><NavLink to="/categories" className="text-white text-lg hover:text-yellow-300 transition">Categories</NavLink></li>
              <li><NavLink to="/brands" className="text-white text-lg hover:text-yellow-300 transition">Brands</NavLink></li>
              <li><NavLink to="/Checkout" className="text-white text-lg hover:text-yellow-300 transition">Checkout</NavLink></li>
              <li><NavLink to="/products" className="text-white text-lg hover:text-yellow-300 transition">Products</NavLink></li>
            </ul>
          </div>

          {/* Desktop User Actions */}
          <div className="hidden md:flex items-center gap-4 lg:gap-6">
            <div className="flex text-white text-lg">
              <a href="#" className="mx-1 hover:text-yellow-300 transition"><FaFacebook /></a>
              <a href="#" className="mx-1 hover:text-yellow-300 transition"><FaTwitter /></a>
              <a href="#" className="mx-1 hover:text-yellow-300 transition"><FaInstagram /></a>
              <a href="#" className="mx-1 hover:text-yellow-300 transition"><FaLinkedin /></a>
            </div>
            
            {!isLoggedIn ? (
              <div className="flex items-center gap-4">
                <NavLink to="/login" className="text-white text-lg hover:text-yellow-300 transition">Login</NavLink>
                <NavLink to="/register" className="text-white text-lg hover:text-yellow-300 transition">Register</NavLink>
              </div>
            ) : (
              <div className="flex items-center gap-4">
                <NavLink to="/profile" className="text-white text-lg hover:text-yellow-300 transition">Profile</NavLink>
                <button onClick={handleLogout} className="text-white text-lg hover:text-yellow-300 transition">Logout</button>
              </div>
            )}
            
            {/* Wishlist Icon for Desktop */}
            <div className="relative">
              <NavLink to="/WishlistPage" className="flex items-center text-white text-lg hover:text-yellow-300 transition">
                <FaHeart className="text-2xl" />
                {wishlistCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-amber-400 text-sky-800 font-bold rounded-full w-6 h-6 flex items-center justify-center text-xs">
                    {wishlistCount}
                  </span>
                )}
              </NavLink>
            </div>
            
            {/* Cart Icon for Desktop */}
            <div className="relative">
              <NavLink to="/cart" className="flex items-center text-white text-lg hover:text-yellow-300 transition">
                <FaShoppingCart className="text-2xl" />
                {counter > 0 && (
                  <span className="absolute -top-2 -right-2 bg-amber-400 text-sky-800 font-bold rounded-full w-6 h-6 flex items-center justify-center text-xs">
                    {counter}
                  </span>
                )}
              </NavLink>
            </div>
          </div>

          {/* Mobile Icons (Cart and Wishlist) */}
          <div className="md:hidden flex items-center gap-4">
            {/* Wishlist Icon for Mobile */}
            <div className="relative">
              <NavLink to="/wishlist" className="flex items-center text-white text-lg hover:text-yellow-300 transition">
                <FaHeart className="text-2xl" />
                {wishlistCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-amber-400 text-sky-800 font-bold rounded-full w-6 h-6 flex items-center justify-center text-xs">
                    {wishlistCount}
                  </span>
                )}
              </NavLink>
            </div>
            
            {/* Cart Icon for Mobile */}
            <div className="relative">
              <NavLink to="/cart" className="flex items-center text-white text-lg hover:text-yellow-300 transition">
                <FaShoppingCart className="text-2xl" />
                {counter > 0 && (
                  <span className="absolute -top-2 -right-2 bg-amber-400 text-sky-800 font-bold rounded-full w-6 h-6 flex items-center justify-center text-xs">
                    {counter}
                  </span>
                )}
              </NavLink>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-sky-600">
            <ul className="py-4 px-6 space-y-4">
              <li><NavLink to="/" onClick={closeMenu} className="block text-white text-lg hover:text-yellow-300 transition">Home</NavLink></li>
              <li><NavLink to="/about" onClick={closeMenu} className="block text-white text-lg hover:text-yellow-300 transition">About</NavLink></li>
              <li><NavLink to="/categories" onClick={closeMenu} className="block text-white text-lg hover:text-yellow-300 transition">Categories</NavLink></li>
              <li><NavLink to="/brands" onClick={closeMenu} className="block text-white text-lg hover:text-yellow-300 transition">Brands</NavLink></li>
              <li><NavLink to="/Checkout" onClick={closeMenu} className="block text-white text-lg hover:text-yellow-300 transition">Checkout</NavLink></li>
              <li><NavLink to="/products" onClick={closeMenu} className="block text-white text-lg hover:text-yellow-300 transition">Products</NavLink></li>
              
              {/* Social Icons in Mobile Menu */}
              <li className="flex justify-center pt-4">
                <div className="flex text-white text-xl">
                  <a href="#" className="mx-3 hover:text-yellow-300 transition"><FaFacebook /></a>
                  <a href="#" className="mx-3 hover:text-yellow-300 transition"><FaTwitter /></a>
                  <a href="#" className="mx-3 hover:text-yellow-300 transition"><FaInstagram /></a>
                  <a href="#" className="mx-3 hover:text-yellow-300 transition"><FaLinkedin /></a>
                </div>
              </li>
              
              {/* User Actions in Mobile Menu */}
              <li className="pt-4 border-t border-sky-500">
                {!isLoggedIn ? (
                  <div className="flex flex-col gap-3">
                    <NavLink to="/login" onClick={closeMenu} className="text-white text-lg hover:text-yellow-300 transition text-center py-2 bg-sky-700 rounded">Login</NavLink>
                    <NavLink to="/register" onClick={closeMenu} className="text-white text-lg hover:text-yellow-300 transition text-center py-2 bg-sky-700 rounded">Register</NavLink>
                  </div>
                ) : (
                  <div className="flex flex-col gap-3">
                    <NavLink to="/profile" onClick={closeMenu} className="text-white text-lg hover:text-yellow-300 transition text-center py-2 bg-sky-700 rounded">Profile</NavLink>
                    <button 
                      onClick={handleLogout} 
                      className="w-full text-white text-lg hover:text-yellow-300 transition text-center py-2 bg-sky-700 rounded"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </li>
            </ul>
          </div>
        )}
      </nav>
      
      {/* Spacer to prevent content from being hidden under fixed navbar */}
      <div className="h-16"></div>
    </>
  );
}

export default Navbar;