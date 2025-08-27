
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Component/Layout/Layout';
import Products from './Component/Products/Products';
import Home from './Component/Home/Home';
import Cart from './Component/Cart/Cart';
import Brands from './Component/Brands/Brands';
import Categories from './Component/Categories/BrandsAndCategoriesPage';
import ProductDetails from './Component/ProductDetails/ProductDetails';
import Login from './Component/Login/Login';
import Register from './Component/Register/Register';
//import NotFound from './Component/NotFound/Notfound';


import { CartProvider } from './Context/CartContext';
//import ScrollToTop from './Component/ScrollToTop';
import { UserProvider } from './Context/UserContext1'; // Renamed to UserProvider
import Checkout from './Component/Checkout/Checkout';
import About from './Component/About/About';
import Profile from './Component/Profile/Profile';
import { WishlistProvider } from './Context/WishlistContext'; // Import WishlistProvider
import WishlistPage from './Component/Cart/WishlistPage'; // Import WishlistPage
import { ToastContainer } from 'react-toastify';
import Notfound from './Component/NotFound/NotFound';

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
      { path: '*', element: <Notfound /> }
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
           <ToastContainer position="top-right" autoClose={2000} theme="colored" />
        </WishlistProvider>
      </CartProvider>
    </UserProvider>
    
  );
}

export default App;
