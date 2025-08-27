

// src/Component/Auth/Register.jsx
import React, { useContext, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate, Link } from 'react-router-dom';
import { useUserContext } from '../../Context/UserContext1';
import { 
  FaEye, FaEyeSlash, FaSpinner, FaCheck, 
  FaUser, FaLock, FaPhone, FaEnvelope 
} from 'react-icons/fa';

function Register() {
  const { setUserLogIn } = useUserContext();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [success, setSuccess] = useState(false);

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, 'Name must be at least 3 characters')
      .required('Name is required'),
    phone: Yup.string()
      .matches(/^01[0125][0-9]{8}$/, 'Phone number is not valid')
      .required('Phone is required'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
      .matches(/[0-9]/, 'Password must contain at least one number')
      .required('Password is required'),
    rePassword: Yup.string()
      .oneOf([Yup.ref('password')], 'Passwords must match')
      .required('Confirm password is required'),
  });

  async function handleRegister(formValues) {
    setLoading(true);
    setApiError('');
    setSuccess(false);

    try {
      // Simulated API call
      setTimeout(() => {
        const userData = {
          token: 'mock_token_123456789',
          name: formValues.name,
          email: formValues.email,
          phone: formValues.phone,
          address: "123 Main St, City"
        };
        
        localStorage.setItem('token', userData.token);
        setUserLogIn(userData);
        setSuccess(true);
        
        setTimeout(() => {
          navigate('/');
        }, 2000);
      }, 1500);
    } catch (error) {
      console.error('Registration failed:', error);
      setApiError('Something went wrong during registration');
    } finally {
      setLoading(false);
    }
  }

  const formik = useFormik({
    initialValues: {
      name: '',
      phone: '',
      email: '',
      password: '',
      rePassword: '',
    },
    validationSchema,
    onSubmit: handleRegister,
  });

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gray-50">
      <div className="w-full max-w-4xl bg-white rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row">
        {/* Left side - E-commerce Benefits */}
        <div className="md:w-2/5 bg-gradient-to-br from-blue-600 to-indigo-800 p-8 text-white flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-4">Welcome to StyleMart</h2>
          <p className="mb-6 text-blue-100">
            Create your account to unlock exclusive shopping benefits and personalized experiences.
          </p>
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="bg-blue-500 rounded-full p-2 mt-1 mr-3">
                <FaCheck size={14} />
              </div>
              <div>
                <h4 className="font-semibold">Express Checkout</h4>
                <p className="text-sm text-blue-100">Save your details for faster purchases</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-blue-500 rounded-full p-2 mt-1 mr-3">
                <FaCheck size={14} />
              </div>
              <div>
                <h4 className="font-semibold">Wishlist & Tracking</h4>
                <p className="text-sm text-blue-100">Save favorites and track orders</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-blue-500 rounded-full p-2 mt-1 mr-3">
                <FaCheck size={14} />
              </div>
              <div>
                <h4 className="font-semibold">Member-only Deals</h4>
                <p className="text-sm text-blue-100">Get exclusive discounts and early access</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-blue-500 rounded-full p-2 mt-1 mr-3">
                <FaCheck size={14} />
              </div>
              <div>
                <h4 className="font-semibold">Personalized Recommendations</h4>
                <p className="text-sm text-blue-100">Discover products tailored for you</p>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p className="text-blue-200">Already shopping with us?</p>
            <Link 
              to="/login" 
              className="inline-block mt-2 px-6 py-2 bg-white/20 hover:bg-white/30 rounded-full font-medium transition-colors"
            >
              Sign In Now
            </Link>
          </div>
        </div>
        
        {/* Right side - Registration Form */}
        <div className="w-full md:w-3/5 p-8">
          <div className="text-center mb-8">
            <div className="mx-auto bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
              <FaLock className="text-blue-600 text-xl" />
            </div>
            <h1 className="text-2xl font-bold text-gray-800">Create Your Account</h1>
            <p className="text-gray-500 mt-1">Join thousands of happy shoppers</p>
          </div>
          
          {success ? (
            <div className="text-center py-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
                <FaCheck className="text-green-600 text-3xl" />
              </div>
              <h3 className="text-xl font-bold text-green-600 mb-2">Account Created!</h3>
              <p className="text-gray-600 mb-4">Welcome to our shopping community</p>
              <div className="text-sm text-gray-500">
                Redirecting to homepage in <span className="font-mono">2</span> seconds...
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
              
              <form onSubmit={formik.handleSubmit} className="space-y-4">
                {/* Name Field */}
                <div className="relative">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaUser className="text-gray-400" />
                    </div>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.name}
                      className={`w-full pl-10 pr-4 py-3 rounded-lg border ${
                        formik.touched.name && formik.errors.name
                          ? 'border-red-500'
                          : 'border-gray-300'
                      } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition`}
                      placeholder="John Smith"
                    />
                  </div>
                  {formik.touched.name && formik.errors.name && (
                    <p className="text-red-500 text-sm mt-1">{formik.errors.name}</p>
                  )}
                </div>
                
                {/* Phone Field */}
                <div className="relative">
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaPhone className="text-gray-400" />
                    </div>
                    <input
                      id="phone"
                      type="tel"
                      name="phone"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.phone}
                      className={`w-full pl-10 pr-4 py-3 rounded-lg border ${
                        formik.touched.phone && formik.errors.phone
                          ? 'border-red-500'
                          : 'border-gray-300'
                      } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition`}
                      placeholder="01X XXXXXXXX"
                    />
                  </div>
                  {formik.touched.phone && formik.errors.phone && (
                    <p className="text-red-500 text-sm mt-1">{formik.errors.phone}</p>
                  )}
                </div>
                
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
                      placeholder="you@example.com"
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
                
                {/* Confirm Password Field */}
                <div className="relative">
                  <label htmlFor="rePassword" className="block text-sm font-medium text-gray-700 mb-1">
                    Confirm Password
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaLock className="text-gray-400" />
                    </div>
                    <input
                      id="rePassword"
                      type={showConfirmPassword ? "text" : "password"}
                      name="rePassword"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.rePassword}
                      className={`w-full pl-10 pr-10 py-3 rounded-lg border ${
                        formik.touched.rePassword && formik.errors.rePassword
                          ? 'border-red-500'
                          : 'border-gray-300'
                      } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition`}
                      placeholder="••••••"
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-blue-600"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    >
                      {showConfirmPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
                    </button>
                  </div>
                  {formik.touched.rePassword && formik.errors.rePassword && (
                    <p className="text-red-500 text-sm mt-1">{formik.errors.rePassword}</p>
                  )}
                </div>
                
                {/* Terms Agreement */}
                <div className="flex items-start mt-4">
                  <div className="flex items-center h-5 mt-0.5">
                    <input
                      id="terms"
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="terms" className="text-gray-700">
                      I agree to StyleMart's <a href="#" className="text-blue-600 hover:underline">Terms of Service</a> and{' '}
                      <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a>
                    </label>
                  </div>
                </div>
                
                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full flex justify-center items-center py-3 px-4 rounded-lg text-white font-medium mt-6 transition-all ${
                    loading
                      ? 'bg-blue-400 cursor-not-allowed'
                      : 'bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 shadow-md hover:shadow-lg'
                  }`}
                >
                  {loading ? (
                    <>
                      <FaSpinner className="animate-spin mr-2" />
                      Creating Account...
                    </>
                  ) : (
                    'Create Account'
                  )}
                </button>
              </form>
              
              <div className="mt-6 text-center text-sm text-gray-500">
                <p>By creating an account, you agree to our</p>
                <p>
                  <a href="#" className="text-blue-600 hover:underline">Return Policy</a> •{' '}
                  <a href="#" className="text-blue-600 hover:underline">Shipping Policy</a> •{' '}
                  <a href="#" className="text-blue-600 hover:underline">Cookie Policy</a>
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Register;