import React from 'react'

const Home = () => {
  return (
    <div className='flex flex-col justify-center items-center h-screen'>
    <div className='text-3xl font-bold text-gray-800'   >
        <div>MINI TASK BOARD</div>
    </div>

    <div className='flex flex-col justify-center items-center mt-10 gap-2'>
        <input  type="text" className='border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500' placeholder="Add a new task..." />
        <button className='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600'>Add Task</button>
    </div>

    <div className='flex gap-2 mt-4'>
        <button className='bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600'>completed</button>

        <button className='bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600'>delete</button>
        <button className='bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600'>edit</button>  

    </div>



    </div>
  )
}

export default Home