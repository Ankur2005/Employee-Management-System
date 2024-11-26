
import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDash from './components/Dashboard/EmployeeDash'
import AdminDash from './components/Dashboard/AdminDash'
import { AuthContext } from './context/AuthProvider'

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const [userData,setUserData,adminData,setAdminData] = useContext(AuthContext);
  
  useEffect(()=>{
    const loggedInUser = localStorage.getItem('loggedInUser');
    if(loggedInUser)
    {
      const userData = JSON.parse(loggedInUser);
      setUser(userData.role);
      setLoggedInUserData(userData.data);
    }
  },[])
  const handleLogin = (email, password, role) => {

    // if (email == "admin@me.com" && password == "123") {
    //   setUser("admin");
    //   localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
    // }
    if(role=="admin")
    {
      const adminBhai = adminData.find((e)=>e.email == email && e.password == password);
      if(adminBhai){
        setUser("admin");
        setLoggedInUserData(adminBhai);
        localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" ,data:adminBhai}));
      }
    }
    else if (userData && role=="employee") {
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
        user == "admin" ? <AdminDash changeUser={setUser} data={loggedInUserData} /> : user == "employee" ? <EmployeeDash changeUser={setUser} data={loggedInUserData}/> : null
      }
    </>
  )
}

export default App
