
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