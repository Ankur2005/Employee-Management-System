import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {
  const authData = useContext(AuthContext);
  //console.log(authData.employees);
  return (
    <div className='bg-[#1c1c1c] p-5 mt-5 rounded h-80 '>
      <div className='bg-red-400 mb-2 py-2 px-4 flex justify-between rounded'>
            <h2 className='w-1/5'>Employee Name</h2>
            <h3 className='w-1/5'>New Task</h3>
            <h5 className='w-1/5'>Active Task</h5>
            <h5 className='w-1/5'>Completed Task</h5>
            <h5 className='w-1/5'>Failed Task</h5>
      </div>
      <div className='h-[80%] overflow-auto'>
      {
        authData.employees.map((e, i) => {
          return (
            <div key={i} className='bg-gray-800 mb-2 py-2 px-4 flex justify-between rounded'>
              <h2 className='text-lg font-medium w-1/5 '>{e.firstName}</h2>
              <h3 className='text-lg font-medium w-1/5 text-blue-600'>{e.taskNumbers.newTask}</h3>
              <h5 className='text-lg font-medium w-1/5 text-yellow-400'>{e.taskNumbers.active}</h5>
              <h5 className='text-lg font-medium w-1/5 text-green-600'>{e.taskNumbers.completed}</h5>
              <h5 className='text-lg font-medium w-1/5 text-red-600'>{e.taskNumbers.failed}</h5>
            </div>
          )
        })
      }
      </div>

    </div>
  )
}

export default AllTask
