// // src/App.jsx
// import './App.css';
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import Layout from './Component/Layout/Layout';
// import Products from './Component/Products/Products';
// import Home from './Component/Home/Home';
// import Cart from './Component/Cart/Cart';
// import Brands from './Component/Brands/Brands';
// import Categories from './Component/Categories/Categories';
// import ProductDetails from './Component/ProductDetails/ProductDetails';
// import Login from './Component/Login/Login';
// import Register from './Component/Register/Register';
// import NotFound from './Component/NotFound/NotFound';
// import CounterContextProvider from './Context/UserContext';
// import UserContextProvider from './Context/UserContext1';

// import { CartProvider } from './Context/CartContext'; // استيراد CartProvider
// import Checkout from './Component/Checkout/Checkout'; // استيراد Checkout
// import About from './Component/About/About'; // استيراد About
// import Profile from './Component/Profile/Profile'; // استيراد Profile



// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children: [
//       { index: true, element: <Home /> },
//       { path: 'Products', element: <Products /> },
//       { path: 'cart', element: <Cart /> },
//       { path: 'Checkout', element: <Checkout /> },
//       { path: 'about', element: <About /> },
//       { path: 'brands', element: <Brands /> },
//       { path: 'categories', element: <Categories /> },
//       { path: 'productDetails/:id', element: <ProductDetails /> },
//       { path: 'profile', element: <Profile /> },
//       { path: 'login', element: <Login /> },
//       { path: 'register', element: <Register /> },
//       { path: '*', element: <NotFound /> }
//     ]
//   }
// ]);

// function App() {
//   return (
//     <UserContextProvider>
//       <CounterContextProvider>
//         <CartProvider> {/* تضمين CartProvider */}
//           <RouterProvider router={router} />
//         </CartProvider>
//       </CounterContextProvider>
//     </UserContextProvider>
//   );
// }

// export default App;

// src/App.jsx
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Component/Layout/Layout';
import Products from './Component/Products/Products';
import Home from './Component/Home/Home';
import Cart from './Component/Cart/Cart';
import Brands from './Component/Brands/Brands';
import Categories from './Component/Categories/Categories';
import ProductDetails from './Component/ProductDetails/ProductDetails';
import Login from './Component/Login/Login';
import Register from './Component/Register/Register';
import NotFound from './Component/NotFound/NotFound';
import { CartProvider } from './Context/CartContext';
//import ScrollToTop from './Component/ScrollToTop';
import { UserProvider } from './Context/UserContext1'; // Renamed to UserProvider
import Checkout from './Component/Checkout/Checkout';
import About from './Component/About/About';
import Profile from './Component/Profile/Profile';
import { WishlistProvider } from './Context/WishlistContext'; // Import WishlistProvider
import WishlistPage from './Component/Cart/WishlistPage'; // Import WishlistPage

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'Products', element: <Products /> },
      { path: 'cart', element: <Cart /> },
      { path: 'Checkout', element: <Checkout /> },
      { path: 'about', element: <About /> },
      { path: 'brands', element: <Brands /> },
      { path: 'categories', element: <Categories /> },
      { path: 'WishlistPage', element: <WishlistPage /> },
      { path: 'productDetails/:id', element: <ProductDetails /> },
      { path: 'profile', element: <Profile /> },
      { path: 'login', element: <Login /> },
      { path: 'register', element: <Register /> },
      { path: '*', element: <NotFound /> }
    ]
  }
]);

function App() {
  return (
    <UserProvider> {/* Fixed to use UserProvider */}
      <CartProvider>
        <WishlistProvider>
        {/* //  //<ScrollToTop /> */}
          <RouterProvider router={router} />
        </WishlistProvider>
      </CartProvider>
    </UserProvider>
  );
}

export default App;
