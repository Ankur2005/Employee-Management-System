import React from 'react'
import Header from '../other/Header'
import CreateTask from '../other/CreateTask'
import AllTask from '../other/AllTask'

const AdminDash = ({changeUser,data}) => {
  return (
    <div className='h-full w-full'>
      <Header changeUser={changeUser} data={data} />
      <CreateTask data={data}/>
      <AllTask data={data}/>
    </div>
  )
}

export default AdminDash
