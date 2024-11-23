import React, { useState } from 'react'
import { setLocalStorage } from '../../utils/localStorage'

const Header = ({changeUser,data}) => {
  // const [username,setUsername] = useState("");
  // if(!data)
  // {
  //   setUsername('Admin');
  // }
  // else
  // setUsername(data.firstName);
  const logout = ()=>{
    localStorage.setItem('loggedInUser',"");
    //window.location.reload();
    changeUser("");
  }
  return (
    <div className='flex items-end justify-between'>
      <h1 className='text-2xl font-medium'>Hello <br/> <span className='text-3xl font-semibold'>{data?.firstName} 🙌</span> </h1>
      <button onClick={logout} className='bg-red-500 text-lg font-medium text-white px-5 py-2 rounded-sm'>Logout</button>
    </div>
  )
}

export default Header
