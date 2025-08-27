// import { createContext,useState,useEffect } from "react";
// export let UserContext = createContext(null);
// export default function UserContextProvider(props) {
//     const [userLogIn, setUserLogIn] = useState(null);
//     useEffect(() => {
//         if (localStorage.getItem('token') !==null){
//             setUserLogIn(localStorage.getItem('token'));   
//         }
//     }, []);
//   return (
//     <UserContext.Provider value={{userLogIn, setUserLogIn}}>
//       {props.children}
//     </UserContext.Provider>
//   );
// }

// src/Context/UserContext1.jsx
// src/Context/UserContext1.jsx
// src/Context/UserContext1.jsx
import React, { createContext, useState, useContext, useEffect } from 'react';

// Create and export the context
export const UserContext = createContext();

// Create and export the provider
export function UserProvider({ children }) {
  const [userLogIn, setUserLogIn] = useState(null);
  
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      // In a real app, you would verify the token and fetch user data
      setUserLogIn({
        token,
        name: "User Name", 
        email: "user@example.com",
        phone: "01234567890",
        address: "123 Main St, City"
      });
    }
  }, []);

  return (
    <UserContext.Provider value={{ userLogIn, setUserLogIn }}>
      {children}
    </UserContext.Provider>
  );
}

// Create and export the custom hook
export function useUserContext() {
  return useContext(UserContext);
}