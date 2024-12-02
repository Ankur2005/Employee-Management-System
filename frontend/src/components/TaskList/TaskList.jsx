import React from 'react'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'
import NewTask from './NewTask'

const TaskList = ({ data }) => {
  return (
    <div id="tasklist" className='h-[55%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap w-full py-5 mt-10'>
      {data.tasks.map((e, i) => {
        if (e.active) {
          return <FailedTask key={i} data={e} />
        }
        if (e.newTask) {
          return <NewTask key={i} data={e} />
        }
        if (e.completed) {
          return <CompleteTask key={i} data={e} />
        }
        if (e.failed) {
          return <FailedTask key={i} data={e} />
        }
        return null;
      })}
    </div>
  )
}

export default TaskList
