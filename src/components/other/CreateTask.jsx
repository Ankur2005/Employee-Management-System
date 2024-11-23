import React, { useState } from 'react'

const CreateTask = () => {
  const [taskTitle,setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskDate,setTaskDate] = useState("");
  const [assignTo,setAssignTo] = useState("");
  const [category,setCategory] = useState("");
  
  const [newTask,setNewTask] = useState({});


  const submitHandler = (e)=>{
    e.preventDefault();
    setNewTask({taskTitle,taskDescription,taskDate,category,assignTo,active:false,newTask:true,failed:false,completed:false});
    const data = JSON.parse(localStorage.getItem('employees'));
    data.forEach((e)=>{
      if(assignTo == e.firstName){
        e.tasks.push(newTask);
      console.log(e);}
      
    })
    localStorage.setItem("employees",JSON.stringify(data));
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
              <input value={taskTitle} onChange={(e)=>{
                setTaskTitle(e.target.value)
              }} className='text-black' type="text" placeholder='Do something' />
            </div>
            
            <div>
              <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
              <input value={taskDate} onChange={(e)=>{
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
              <textarea value={taskDescription} onChange={(e)=>{
                setTaskDescription(e.target.value)
              }} className="w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400" name=" " id=""></textarea>
              <button onClick={submitHandler} className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full'>Create Task</button>
            </div>
          
        </form>
      </div>
  )
}

export default CreateTask
