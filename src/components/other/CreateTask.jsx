import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider';

const CreateTask = () => {
  const [userData,setUserData] = useContext(AuthContext);


  const [title,setTaskTitle] = useState("");
  const [description, setTaskDescription] = useState("");
  const [date,setTaskDate] = useState("");
  const [assignTo,setAssignTo] = useState("");
  const [category,setCategory] = useState("");

  const submitHandler = (e)=>{
    e.preventDefault();
    const task = {
      title,
      description,
      date,
      category,
      active: false,
      newTask: true,
      failed: false,
      completed: false,
    };
  
    const data = userData.map((ele)=>{
      if(assignTo==ele.firstName)
      {
        return {
          ...ele,tasks:[...ele.tasks,task]
        }
      }
      return ele;
    })
    setUserData(data)
    
    localStorage.setItem('employees',JSON.stringify(data));
    

    setTaskDate("");
    setTaskDescription("");
    setTaskTitle("");
    setAssignTo("");
    setCategory("");
  }
  return (
    <div className='flex h-screen w-screen items-center justify-center bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600 '>
      <div className='bg-white p-10 rounded-xl shadow-lg w-full max-w-md'>
        <h2 className='text-2xl font-bold mb-5 text-center text-gray-700'>Create Task</h2>
        <form className='flex flex-col' onSubmit={submitHandler}>
          <input
            value={title}
            onChange={(e) => setTaskTitle(e.target.value)}
            required
            className='outline-none bg-gray-100 border-2 border-gray-300 text-lg py-2 px-4 rounded-lg mb-4 placeholder-gray-500 text-gray-700'
            type="text"
            placeholder='Task Title'
          />
          <textarea
            value={description}
            onChange={(e) => setTaskDescription(e.target.value)}
            required
            className='outline-none bg-gray-100 border-2 border-gray-300 text-lg py-2 px-4 rounded-lg mb-4 placeholder-gray-500 text-gray-700'
            placeholder='Task Description'
            rows="4"
          />
          <input
            value={date}
            onChange={(e) => setTaskDate(e.target.value)}
            required
            className='outline-none bg-gray-100 border-2 border-gray-300 text-lg py-2 px-4 rounded-lg mb-4 placeholder-gray-500 text-gray-700'
            type="date"
          />
          <input
            value={assignTo}
            onChange={(e) => setAssignTo(e.target.value)}
            required
            className='outline-none bg-gray-100 border-2 border-gray-300 text-lg py-2 px-4 rounded-lg mb-4 placeholder-gray-500 text-gray-700'
            type="text"
            placeholder='Assign To'
          />
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
            className='outline-none bg-gray-100 border-2 border-gray-300 text-lg py-2 px-4 rounded-lg mb-4 text-gray-700'
          >
            <option value="" disabled>Select Category</option>
            <option value="work">Work</option>
            <option value="personal">Personal</option>
            <option value="other">Other</option>
          </select>
          <button
            type="submit"
            className='bg-emerald-600 text-white text-lg py-2 px-6 rounded-lg hover:bg-emerald-700 transition duration-300'
          >
            Create Task
          </button>
        </form>
      </div>
    </div>
  )
}

export default CreateTask
