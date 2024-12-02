import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {
  const [userData, setUserData] = useContext(AuthContext)
  console.log(userData);
  return (
    <div className='bg-white p-5 mt-5 rounded-xl shadow-lg h-80'>
      <div className='bg-gradient-to-r from-blue-500 to-teal-500 mb-2 py-2 px-4 flex justify-between rounded-lg text-white'>
        <h2 className='w-1/5'>Employee Name</h2>
        <h3 className='w-1/5'>New Task</h3>
        <h5 className='w-1/5'>Active Task</h5>
        <h5 className='w-1/5'>Completed Task</h5>
        <h5 className='w-1/5'>Failed Task</h5>
      </div>
      <div className='h-[80%] overflow-auto'>
        {userData ? userData.map((e, i) => {
          return (
            <div key={i} className='bg-gray-100 mb-2 py-2 px-4 flex justify-between rounded-lg'>
              <h2 className='text-lg font-medium w-1/5 text-gray-700'>{e.firstName}</h2>
              <h3 className='text-lg font-medium w-1/5 px-7 text-blue-600'>{e.taskNumbers.newTask}</h3>
              <h5 className='text-lg font-medium w-1/5 px-11 text-yellow-400'>{e.taskNumbers.active}</h5>
              <h5 className='text-lg font-medium w-1/5 px-12 text-green-600'>{e.taskNumbers.completed}</h5>
              <h5 className='text-lg font-medium w-1/5 px-12 text-red-600'>{e.taskNumbers.failed}</h5>
            </div>
          )
        }) : <h1>Loading....</h1>}
      </div>
    </div>
  )
}

export default AllTask
