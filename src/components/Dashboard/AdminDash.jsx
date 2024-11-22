import React from 'react'
import Header from '../other/Header'
import CreateTask from '../other/CreateTask'
import AllTask from '../other/AllTask'

const AdminDash = () => {
  return (
    <div className='h-screen w-full p-7'>
      <Header />
      <CreateTask/>
      <AllTask/>
    </div>
  )
}

export default AdminDash
