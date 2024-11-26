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
    <div className='p-5 bg-[#1c1c1c] mt-7 rounded'>
        <form className='flex flex-wrap w-full items-start justify-between'>
          <div className='w-1/2'>
            <div>
              <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
              <input value={title} onChange={(e)=>{
                setTaskTitle(e.target.value)
              }} className='text-black' type="text" placeholder='Do something' />
            </div>
            
            <div>
              <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
              <input value={date} onChange={(e)=>{
                setTaskDate(e.target.value)
              }} className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px]' type="date" />
            </div>
            <div>
              <h3 className='text-sm text-gray-300 mb-0.5'>Assign to</h3>
              <input value={assignTo} onChange={(e)=>{
                setAssignTo(e.target.value)
              }} className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px]' type="text" placeholder='employee Name' />
            </div>
            <div>
              <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
              <input value={category} onChange={(e)=>{
                setCategory(e.target.value)
              }} className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px]' type="text" placeholder='design,dev' />
            </div>
          </div>
          <div className='w-2/5 flex flex-col items-start'>
              <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
              <textarea value={description} onChange={(e)=>{
                setTaskDescription(e.target.value)
              }} className="w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400" name=" " id=""></textarea>
              <button onClick={submitHandler} className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full'>Create Task</button>
            </div>
          
        </form>
      </div>
  )
}

export default CreateTask
