import React from 'react'

const CompleteTask = ({data}) => {
    return (
        <div className='flex-shrink-0 h-full w-[300px] p-5 bg-gradient-to-r from-green-400 via-blue-500 to-teal-500 rounded-xl shadow-lg'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 text-sm px-3 py-1 rounded text-white font-bold'>{data.category}</h3>
                <h4 className='text-sm text-white italic'>{data.date}</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold text-white'>{data.title}</h2>
            <p className="text-sm mt-2 text-white">{data.description}</p>
            <div className='flex justify-between mt-4'>
                <button className='bg-green-500 py-2 px-4 text-sm rounded-full shadow-lg hover:bg-green-600 transition duration-300 font-semibold text-white'>Mark as completed</button>
                <button className='bg-red-500 py-2 px-4 text-sm rounded-full shadow-lg hover:bg-red-600 transition duration-300 font-semibold text-white'>Mark as failed</button>
            </div>
            <div className='mt-2'>
                <button className='w-full bg-blue-500 py-2 text-sm rounded-full shadow-lg hover:bg-blue-600 transition duration-300 font-semibold text-white'>Completed</button>
            </div>
        </div>
    )
}

export default CompleteTask
