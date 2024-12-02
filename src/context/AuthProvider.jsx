import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState([]);
  const [adminData, setAdminData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const userResult = await axios.get('http://localhost:5000/users');
      const adminResult = await axios.get('http://localhost:5000/admin');
      console.log(userResult.data);
      setUserData(userResult.data);
      setAdminData(adminResult.data);
    };
    fetchData();
  }, []);

  return (
    <AuthContext.Provider value={[userData, setUserData, adminData, setAdminData]}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;