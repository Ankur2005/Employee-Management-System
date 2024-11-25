
import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDash from './components/Dashboard/EmployeeDash'
import AdminDash from './components/Dashboard/AdminDash'
import { AuthContext } from './context/AuthProvider'
import { setLocalStorage } from './utils/localStorage'

const App = () => {
  const [user, setUser] = useState(null);
  const [loggenInUserData, setLoggedInUserData] = useState(null);
  const [userData,setUserData] = useContext(AuthContext);

  useEffect(()=>{
    const loggedInUser = localStorage.getItem('loggedInUser');
    if(loggedInUser)
    {
      const userData = JSON.parse(loggedInUser);
      setUser(userData.role);
      setLoggedInUserData(userData.data);
    }
  },[])

  const handleLogin = (email, password) => {

    if (email == "admin@me.com" && password == "123") {
      setUser("admin");
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
    }
    else if (userData) {
      const employee = userData.find((e) => e.email == email && e.password == password);
      if (employee) {
        setUser("employee");
        setLoggedInUserData(employee);
        localStorage.setItem("loggedInUser", JSON.stringify({ role: "employee" ,data:employee}));
      }
    }
    else {
      alert("Invalid credentials!!");
    }
  }
  return (
    <>
      {
        !user ? <Login handleLogin={handleLogin} /> : ""
      }
      {
        user == "admin" ? <AdminDash changeUser={setUser} data={loggenInUserData} /> : user == "employee" ? <EmployeeDash changeUser={setUser} data={loggenInUserData}/> : null
      }
    </>
  )
}

export default App
