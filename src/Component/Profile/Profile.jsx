// src/Component/Profile/Profile.jsx
import React, { useContext, useState } from 'react';
import { UserContext } from '../../Context/UserContext1';

function Profile() {
  const { userLogIn, setUserLogIn } = useContext(UserContext);
  const [formData, setFormData] = useState({
    name: userLogIn?.name || '',
    email: userLogIn?.email || '',
    phone: userLogIn?.phone || '',
    address: userLogIn?.address || ''
  });
  const [editMode, setEditMode] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // في الواقع العملي، هنا ستكون عملية تحديث البيانات في الخادم
    setUserLogIn({ ...userLogIn, ...formData });
    setSuccessMessage('Profile updated successfully!');
    setEditMode(false);
    setTimeout(() => setSuccessMessage(''), 3000);
  };

  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">Your Profile</h1>
      
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6">
        {successMessage && (
          <div className="bg-green-100 text-green-700 p-3 rounded-md mb-4">
            {successMessage}
          </div>
        )}
        
        {!editMode ? (
          <div>
            <div className="flex items-center mb-6">
              <div className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center text-2xl font-bold text-gray-400">
                {userLogIn?.name?.charAt(0) || 'U'}
              </div>
              <div className="ml-4">
                <h2 className="text-xl font-bold">{userLogIn?.name}</h2>
                <p className="text-gray-600">{userLogIn?.email}</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-bold">Phone</h3>
                <p>{userLogIn?.phone || 'Not provided'}</p>
              </div>
              
              <div>
                <h3 className="font-bold">Address</h3>
                <p>{userLogIn?.address || 'Not provided'}</p>
              </div>
            </div>
            
            <button 
              onClick={() => setEditMode(true)}
              className="mt-8 bg-sky-600 hover:bg-sky-700 text-white px-6 py-2 rounded-md font-medium"
            >
              Edit Profile
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block mb-2 font-medium">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md"
                required
              />
            </div>
            
            <div className="mb-4">
              <label className="block mb-2 font-medium">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md"
                required
                disabled
              />
            </div>
            
            <div className="mb-4">
              <label className="block mb-2 font-medium">Phone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md"
              />
            </div>
            
            <div className="mb-4">
              <label className="block mb-2 font-medium">Address</label>
              <textarea
                name="address"
                value={formData.address}
                onChange={handleChange}
                rows="3"
                className="w-full p-3 border border-gray-300 rounded-md"
              ></textarea>
            </div>
            
            <div className="flex gap-4">
              <button 
                type="submit"
                className="bg-sky-600 hover:bg-sky-700 text-white px-6 py-2 rounded-md font-medium"
              >
                Save Changes
              </button>
              <button 
                type="button"
                onClick={() => setEditMode(false)}
                className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-2 rounded-md font-medium"
              >
                Cancel
              </button>
            </div>
          </form>
        )}
      </div>
      
      <div className="max-w-2xl mx-auto mt-8 bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-bold mb-4">Order History</h2>
        <p className="text-gray-600">You haven't placed any orders yet.</p>
      </div>
    </div>
  );
}

export default Profile;
