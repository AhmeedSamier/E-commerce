// import React, { useContext,useState } from 'react';
// import { useFormik } from 'formik';
// import * as Yup from 'yup';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import { UserContext } from '../../Context/UserContext1';

// function Login() {
//   const { setUserLogIn } = useContext(UserContext);
//   const navigate = useNavigate();
//   const [loading, setLoading] = useState(false);
//   const [apiError, setApiError] = useState('');

//   const validationSchema = Yup.object({
//     email: Yup.string()
//       .email('Invalid email address')
//       .required('Email is required'),

//     password: Yup.string()
//       .min(6, 'Password must be at least 6 characters')
//       .required('Password is required'),
//   });

//   // async function handleLogin(formValues) {

//   //    axios.post('http://localhost:5173/register', formValues)  
//   //   .then((Response) => {
//   //     if (Response.data.status === 'success') {
//   //      localStorage.setItem('token', Response.data.token);
//   //      setUserLogIn(Response.data.token);

//   //       navigate('/');
//   //     }
//   //     console.log(Response.data.message);
//   //     })
//   //   .catch((error) => {
//   //     console.error( error);
//   //   })
//   // }
//    async function handleLogin(formValues) {
//     setLoading(true);
//     setApiError('');

//     try {
//       const response = await axios.post( `https://ecommerce.routemisr.com/api/v1/auth/signin`, formValues);
//       if (response.data.status === 'success') {
//         localStorage.setItem('token', response.data.token);
//         setUserLogIn(response.data.token);
//         navigate('/');
//       } else {
//         setApiError(response.data.message || 'Login failed');
//       }
//     } catch (error) {
//       setApiError(error.response?.data?.message || 'Something went wrong');
//     } finally {
//       setLoading(false);
//     }
//   }

//   const formik = useFormik({
//     initialValues: {
//       email: '',
//       password: '',
//     },
//     validationSchema,
//     onSubmit: handleLogin,
//   });

//   return (
//     <div className="py-10 px-6 max-w-xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-md">
//       <h2 className="text-3xl font-bold mb-6 text-center text-gray-800 dark:text-white">
//         Login to Your Account
//       </h2>

//       {apiError && (
//         <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded mb-4 text-center">
//           {apiError}
//         </div>
//       )}

//       <form onSubmit={formik.handleSubmit} className="space-y-6">

//         {/* Email */}
//         <div className="relative z-0 w-full mb-6 group">
//           <input
//             id="email"
//             type="email"
//             name="email"
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//             value={formik.values.email}
//             className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 
//               border-gray-300 appearance-none dark:text-white dark:border-gray-600 
//               dark:focus:border-blue-500 focus:outline-none focus:ring-0 
//               focus:border-blue-600 peer"
//             placeholder=" "
//           />
//           <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 
//             transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 
//             peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
//             Email
//           </label>
//           {formik.touched.email && formik.errors.email && (
//             <p className="text-red-500 text-sm mt-1">{formik.errors.email}</p>
//           )}
//         </div>

//         {/* Password */}
//         <div className="relative z-0 w-full mb-8 group">
//           <input
//             id="password"
//             type="password"
//             name="password"
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//             value={formik.values.password}
//             className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 
//               border-gray-300 appearance-none dark:text-white dark:border-gray-600 
//               dark:focus:border-blue-500 focus:outline-none focus:ring-0 
//               focus:border-blue-600 peer"
//             placeholder=" "
//           />
//           <label htmlFor="password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 
//             transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 
//             peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
//             Password
//           </label>
//           {formik.touched.password && formik.errors.password && (
//             <p className="text-red-500 text-sm mt-1">{formik.errors.password}</p>
//           )}
//         </div>
//         <div className="flex items-center justify-between mb-6">
//           <button
//             type="submit"
//             disabled={loading}
//             className={`w-full ${
//               loading ? "bg-blue-400" : "bg-blue-600 hover:bg-blue-700"
//             } text-white font-medium py-2.5 rounded-lg transition-colors duration-300`}
//           >
//             {loading ? "Logging in..." : "Login"}
//           </button>
//           <p className='text-white font-medium py-2.5 rounded-lg transition-colors duration-300'>
//             didn't have an account?{" "}
//             <span
//               className="text-white-600 cursor-pointer  "
//               onClick={() => navigate("/register")}
//             >
//               Register Now
//             </span>
//           </p>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default Login;








// import React, { useContext, useState } from 'react';
// import { useFormik } from 'formik';
// import * as Yup from 'yup';
// import axios from 'axios';
// import { useNavigate, Link } from 'react-router-dom';
// import { UserContext } from '../../Context/UserContext1';
// import { FaEye, FaEyeSlash, FaSpinner, FaCheck, FaEnvelope, FaLock, FaArrowRight } from 'react-icons/fa';

// function Login() {
//   const { setUserLogIn } = useContext(UserContext);
//   const navigate = useNavigate();
//   const [loading, setLoading] = useState(false);
//   const [apiError, setApiError] = useState('');
//   const [showPassword, setShowPassword] = useState(false);
//   const [success, setSuccess] = useState(false);

//   const validationSchema = Yup.object({
//     email: Yup.string()
//       .email('Invalid email address')
//       .required('Email is required'),
//     password: Yup.string()
//       .min(6, 'Password must be at least 6 characters')
//       .required('Password is required'),
//   });

//   async function handleLogin(formValues) {
//     setLoading(true);
//     setApiError('');
//     setSuccess(false);

//     try {
//       const response = await axios.post(
//         `https://ecommerce.routemisr.com/api/v1/auth/signin`,
//         formValues
//       );

//       if (response.data.status === 'success') {
//         localStorage.setItem('token', response.data.token);
//         setUserLogIn(response.data.token);
//         setSuccess(true);
//         setTimeout(() => {
//           navigate('/');
//         }, 1500);
//       } else {
//         setApiError(response.data.message || 'Login failed');
//       }
//     } catch (error) {
//       setApiError(error.response?.data?.message || 'Something went wrong');
//     } finally {
//       setLoading(false);
//     }
//   }

//   const formik = useFormik({
//     initialValues: {
//       email: '',
//       password: '',
//     },
//     validationSchema,
//     onSubmit: handleLogin,
//   });

//   return (
//     <div className="min-h-screen flex items-center justify-center p-4 bg-gray-50">
//       <div className="w-full max-w-4xl bg-white rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row">
//         {/* Left side - E-commerce Benefits */}
//         <div className="md:w-2/5 bg-gradient-to-br from-blue-600 to-indigo-800 p-8 text-white flex flex-col justify-center">
//           <h2 className="text-3xl font-bold mb-4">Welcome Back to StyleMart</h2>
//           <p className="mb-6 text-blue-100">
//             Login to access your personalized shopping experience, wishlist, and order history.
//           </p>
//           <div className="space-y-4">
//             <div className="flex items-start">
//               <div className="bg-blue-500 rounded-full p-2 mt-1 mr-3">
//                 <FaCheck size={14} />
//               </div>
//               <div>
//                 <h4 className="font-semibold">Track Your Orders</h4>
//                 <p className="text-sm text-blue-100">See your purchase history and order status</p>
//               </div>
//             </div>
//             <div className="flex items-start">
//               <div className="bg-blue-500 rounded-full p-2 mt-1 mr-3">
//                 <FaCheck size={14} />
//               </div>
//               <div>
//                 <h4 className="font-semibold">Wishlist Access</h4>
//                 <p className="text-sm text-blue-100">Pick up where you left off with your saved items</p>
//               </div>
//             </div>
//             <div className="flex items-start">
//               <div className="bg-blue-500 rounded-full p-2 mt-1 mr-3">
//                 <FaCheck size={14} />
//               </div>
//               <div>
//                 <h4 className="font-semibold">Personalized Offers</h4>
//                 <p className="text-sm text-blue-100">Get deals tailored to your preferences</p>
//               </div>
//             </div>
//             <div className="flex items-start">
//               <div className="bg-blue-500 rounded-full p-2 mt-1 mr-3">
//                 <FaCheck size={14} />
//               </div>
//               <div>
//                 <h4 className="font-semibold">Faster Checkout</h4>
//                 <p className="text-sm text-blue-100">Save time with stored payment methods</p>
//               </div>
//             </div>
//           </div>
//           <div className="mt-8 text-center">
//             <p className="text-blue-200">New to StyleMart?</p>
//             <Link 
//               to="/register" 
//               className="inline-flex items-center mt-2 px-6 py-2 bg-white/20 hover:bg-white/30 rounded-full font-medium transition-colors"
//             >
//               Create Account <FaArrowRight className="ml-2" size={12} />
//             </Link>
//           </div>
//         </div>
        
//         {/* Right side - Login Form */}
//         <div className="w-full md:w-3/5 p-8">
//           <div className="text-center mb-8">
//             <div className="mx-auto bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
//               <FaLock className="text-blue-600 text-xl" />
//             </div>
//             <h1 className="text-2xl font-bold text-gray-800">Sign In to Your Account</h1>
//             <p className="text-gray-500 mt-1">Welcome back! Please enter your details</p>
//           </div>
          
//           {success ? (
//             <div className="text-center py-6">
//               <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
//                 <FaCheck className="text-green-600 text-3xl" />
//               </div>
//               <h3 className="text-xl font-bold text-green-600 mb-2">Login Successful!</h3>
//               <p className="text-gray-600 mb-4">Redirecting to your account dashboard...</p>
//               <div className="flex justify-center">
//                 <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
//               </div>
//             </div>
//           ) : (
//             <>
//               {apiError && (
//                 <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6 flex items-start">
//                   <div className="mr-2 mt-0.5">⚠️</div>
//                   <div>{apiError}</div>
//                 </div>
//               )}
              
//               <form onSubmit={formik.handleSubmit} className="space-y-6">
//                 {/* Email Field */}
//                 <div className="relative">
//                   <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
//                     Email Address
//                   </label>
//                   <div className="relative">
//                     <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                       <FaEnvelope className="text-gray-400" />
//                     </div>
//                     <input
//                       id="email"
//                       type="email"
//                       name="email"
//                       onChange={formik.handleChange}
//                       onBlur={formik.handleBlur}
//                       value={formik.values.email}
//                       className={`w-full pl-10 pr-4 py-3 rounded-lg border ${
//                         formik.touched.email && formik.errors.email
//                           ? 'border-red-500'
//                           : 'border-gray-300'
//                       } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition`}
//                       placeholder="your@email.com"
//                     />
//                   </div>
//                   {formik.touched.email && formik.errors.email && (
//                     <p className="text-red-500 text-sm mt-1">{formik.errors.email}</p>
//                   )}
//                 </div>
                
//                 {/* Password Field */}
//                 <div className="relative">
//                   <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
//                     Password
//                   </label>
//                   <div className="relative">
//                     <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                       <FaLock className="text-gray-400" />
//                     </div>
//                     <input
//                       id="password"
//                       type={showPassword ? "text" : "password"}
//                       name="password"
//                       onChange={formik.handleChange}
//                       onBlur={formik.handleBlur}
//                       value={formik.values.password}
//                       className={`w-full pl-10 pr-10 py-3 rounded-lg border ${
//                         formik.touched.password && formik.errors.password
//                           ? 'border-red-500'
//                           : 'border-gray-300'
//                       } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition`}
//                       placeholder="••••••"
//                     />
//                     <button
//                       type="button"
//                       className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-blue-600"
//                       onClick={() => setShowPassword(!showPassword)}
//                     >
//                       {showPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
//                     </button>
//                   </div>
//                   {formik.touched.password && formik.errors.password && (
//                     <p className="text-red-500 text-sm mt-1">{formik.errors.password}</p>
//                   )}
//                 </div>
                
//                 {/* Remember Me & Forgot Password */}
//                 <div className="flex items-center justify-between">
//                   <div className="flex items-center">
//                     <input
//                       id="remember"
//                       type="checkbox"
//                       className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
//                     />
//                     <label htmlFor="remember" className="ml-2 text-sm text-gray-700">
//                       Remember me
//                     </label>
//                   </div>
//                   <Link 
//                     to="/forgot-password" 
//                     className="text-sm text-blue-600 hover:underline"
//                   >
//                     Forgot password?
//                   </Link>
//                 </div>
                
//                 {/* Submit Button */}
//                 <button
//                   type="submit"
//                   disabled={loading}
//                   className={`w-full flex justify-center items-center py-3 px-4 rounded-lg text-white font-medium transition-all ${
//                     loading
//                       ? 'bg-blue-400 cursor-not-allowed'
//                       : 'bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 shadow-md hover:shadow-lg'
//                   }`}
//                 >
//                   {loading ? (
//                     <>
//                       <FaSpinner className="animate-spin mr-2" />
//                       Signing In...
//                     </>
//                   ) : (
//                     'Sign In'
//                   )}
//                 </button>
                
//                 {/* Social Login */}
//                 <div className="relative flex items-center py-4">
//                   <div className="flex-grow border-t border-gray-300"></div>
//                   <span className="flex-shrink mx-4 text-gray-500 text-sm">Or continue with</span>
//                   <div className="flex-grow border-t border-gray-300"></div>
//                 </div>
                
//                 <div className="grid grid-cols-2 gap-3">
//                   <button
//                     type="button"
//                     className="flex items-center justify-center py-2.5 px-4 rounded-lg border border-gray-300 hover:bg-gray-50 transition"
//                   >
//                     <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
//                       <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"></path>
//                       <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"></path>
//                       <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"></path>
//                       <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"></path>
//                     </svg>
//                     Google
//                   </button>
//                   <button
//                     type="button"
//                     className="flex items-center justify-center py-2.5 px-4 rounded-lg border border-gray-300 hover:bg-gray-50 transition"
//                   >
//                     <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="#1877F2">
//                       <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12z"></path>
//                     </svg>
//                     Facebook
//                   </button>
//                 </div>
//               </form>
              
//               <div className="mt-6 text-center text-sm text-gray-500">
//                 <p>By signing in, you agree to our</p>
//                 <p>
//                   <a href="#" className="text-blue-600 hover:underline">Terms of Service</a> •{' '}
//                   <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a>
//                 </p>
//               </div>
//             </>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Login;


// src/Component/Auth/Login.jsx
import React, { useContext, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate, Link } from 'react-router-dom';
import { useUserContext } from '../../Context/UserContext1';
import { 
  FaEye, FaEyeSlash, FaSpinner, FaCheck, 
  FaEnvelope, FaLock, FaArrowRight 
} from 'react-icons/fa';

function Login() {
  const { setUserLogIn } = useUserContext();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [success, setSuccess] = useState(false);

  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
  });

  async function handleLogin(formValues) {
    setLoading(true);
    setApiError('');
    setSuccess(false);

    try {
      // Simulated API call
      setTimeout(() => {
        const userData = {
          token: 'mock_token_123456789',
          name: "John Doe",
          email: formValues.email,
          phone: "01234567890",
          address: "123 Main St, City"
        };
        
        localStorage.setItem('token', userData.token);
        setUserLogIn(userData);
        setSuccess(true);
        
        setTimeout(() => {
          navigate('/');
        }, 1500);
      }, 1500);
    } catch (error) {
      setApiError('Something went wrong');
    } finally {
      setLoading(false);
    }
  }

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: handleLogin,
  });

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gray-50">
      <div className="w-full max-w-4xl bg-white rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row">
        {/* Left side - E-commerce Benefits */}
        <div className="md:w-2/5 bg-gradient-to-br from-blue-600 to-indigo-800 p-8 text-white flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-4">Welcome Back to StyleMart</h2>
          <p className="mb-6 text-blue-100">
            Login to access your personalized shopping experience, wishlist, and order history.
          </p>
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="bg-blue-500 rounded-full p-2 mt-1 mr-3">
                <FaCheck size={14} />
              </div>
              <div>
                <h4 className="font-semibold">Track Your Orders</h4>
                <p className="text-sm text-blue-100">See your purchase history and order status</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-blue-500 rounded-full p-2 mt-1 mr-3">
                <FaCheck size={14} />
              </div>
              <div>
                <h4 className="font-semibold">Wishlist Access</h4>
                <p className="text-sm text-blue-100">Pick up where you left off with your saved items</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-blue-500 rounded-full p-2 mt-1 mr-3">
                <FaCheck size={14} />
              </div>
              <div>
                <h4 className="font-semibold">Personalized Offers</h4>
                <p className="text-sm text-blue-100">Get deals tailored to your preferences</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-blue-500 rounded-full p-2 mt-1 mr-3">
                <FaCheck size={14} />
              </div>
              <div>
                <h4 className="font-semibold">Faster Checkout</h4>
                <p className="text-sm text-blue-100">Save time with stored payment methods</p>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p className="text-blue-200">New to StyleMart?</p>
            <Link 
              to="/register" 
              className="inline-flex items-center mt-2 px-6 py-2 bg-white/20 hover:bg-white/30 rounded-full font-medium transition-colors"
            >
              Create Account <FaArrowRight className="ml-2" size={12} />
            </Link>
          </div>
        </div>
        
        {/* Right side - Login Form */}
        <div className="w-full md:w-3/5 p-8">
          <div className="text-center mb-8">
            <div className="mx-auto bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
              <FaLock className="text-blue-600 text-xl" />
            </div>
            <h1 className="text-2xl font-bold text-gray-800">Sign In to Your Account</h1>
            <p className="text-gray-500 mt-1">Welcome back! Please enter your details</p>
          </div>
          
          {success ? (
            <div className="text-center py-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
                <FaCheck className="text-green-600 text-3xl" />
              </div>
              <h3 className="text-xl font-bold text-green-600 mb-2">Login Successful!</h3>
              <p className="text-gray-600 mb-4">Redirecting to your account dashboard...</p>
              <div className="flex justify-center">
                <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
              </div>
            </div>
          ) : (
            <>
              {apiError && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6 flex items-start">
                  <div className="mr-2 mt-0.5">⚠️</div>
                  <div>{apiError}</div>
                </div>
              )}
              
              <form onSubmit={formik.handleSubmit} className="space-y-6">
                {/* Email Field */}
                <div className="relative">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaEnvelope className="text-gray-400" />
                    </div>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.email}
                      className={`w-full pl-10 pr-4 py-3 rounded-lg border ${
                        formik.touched.email && formik.errors.email
                          ? 'border-red-500'
                          : 'border-gray-300'
                      } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition`}
                      placeholder="your@email.com"
                    />
                  </div>
                  {formik.touched.email && formik.errors.email && (
                    <p className="text-red-500 text-sm mt-1">{formik.errors.email}</p>
                  )}
                </div>
                
                {/* Password Field */}
                <div className="relative">
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                    Password
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaLock className="text-gray-400" />
                    </div>
                    <input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      name="password"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.password}
                      className={`w-full pl-10 pr-10 py-3 rounded-lg border ${
                        formik.touched.password && formik.errors.password
                          ? 'border-red-500'
                          : 'border-gray-300'
                      } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition`}
                      placeholder="••••••"
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-blue-600"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
                    </button>
                  </div>
                  {formik.touched.password && formik.errors.password && (
                    <p className="text-red-500 text-sm mt-1">{formik.errors.password}</p>
                  )}
                </div>
                
                {/* Remember Me & Forgot Password */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      id="remember"
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <label htmlFor="remember" className="ml-2 text-sm text-gray-700">
                      Remember me
                    </label>
                  </div>
                  <Link 
                    to="/forgot-password" 
                    className="text-sm text-blue-600 hover:underline"
                  >
                    Forgot password?
                  </Link>
                </div>
                
                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full flex justify-center items-center py-3 px-4 rounded-lg text-white font-medium transition-all ${
                    loading
                      ? 'bg-blue-400 cursor-not-allowed'
                      : 'bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 shadow-md hover:shadow-lg'
                  }`}
                >
                  {loading ? (
                    <>
                      <FaSpinner className="animate-spin mr-2" />
                      Signing In...
                    </>
                  ) : (
                    'Sign In'
                  )}
                </button>
              </form>
              
              <div className="mt-6 text-center text-sm text-gray-500">
                <p>By signing in, you agree to our</p>
                <p>
                  <a href="#" className="text-blue-600 hover:underline">Terms of Service</a> •{' '}
                  <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a>
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Login;