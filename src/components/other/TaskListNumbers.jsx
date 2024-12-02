import React, { useContext, useEffect, useMemo } from 'react'
import { AuthContext } from '../../context/AuthProvider';

const TaskListNumbers = ({data}) => {
    const [userData, setUserData] = useContext(AuthContext)

    const taskNumbers = useMemo(() => {
        const counts = { active: 0, newTask: 0, completed: 0, failed: 0 }
        data.tasks.forEach((task) => {
            if (task.active) counts.active++
            if (task.newTask) counts.newTask++
            if (task.completed) counts.completed++
            if (task.failed) counts.failed++
        })
        return counts
    }, [data.tasks])

    useEffect(() => {
        setUserData({ ...data, taskNumbers })
    }, [data, taskNumbers, setUserData])

  return (
    <div className='flex mt-10 justify-between gap-5 screen'>
        <div className='rounded-xl w-[45%] py-6 px-9 bg-[#71c2de]'>
            <h2 className='text-3xl font-semibold text-black'>{taskNumbers.newTask}</h2>
            <h3 className='text-xl font-medium text-black'>New Task</h3>
        </div>
        <div className='rounded-xl w-[45%] py-6 px-9 bg-[#1d5bab]'>
            <h2 className='text-3xl font-semibold'>{taskNumbers.active}</h2>
            <h3 className='text-xl font-medium'>Active Task</h3>
        </div>
        <div className='rounded-xl w-[45%] py-6 px-9 bg-[#32CD32]'>
            <h2 className='text-3xl font-semibold text-black'>{taskNumbers.completed}</h2>
            <h3 className='text-xl font-medium text-black'>Completed Task</h3>
        </div>
        <div className='rounded-xl w-[45%] py-6 px-9 bg-[#FF4500]'>
            <h2 className='text-3xl font-semibold'>{taskNumbers.failed}</h2>
            <h3 className='text-xl font-medium'>Failed Task</h3>
        </div>
    </div>
  )
}

export default TaskListNumbers
