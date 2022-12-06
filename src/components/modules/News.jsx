import React from 'react'

const News = () => {
  return (
    <div className='max-w-2xl flex flex-col m-4 mx-auto justify-center items-center font-globalFont'>
      <h2 className='text-2xl md:text-3xl  text-white my-8 '>Recent News</h2>
      <div class="flex flex-wrap mx-2 md:m-0">
      <div class="w-full sm:w-1/2 md:w-1/3 flex flex-col p-3">
        <div className='bg-gray-800  rounded-lg shadow-lg overflow-hidden flex-1 flex flex-col'>
          <img src="https://images.unsplash.com/photo-1523978591478-c753949ff840?w=900" alt=".." />
          <p className='text-gray-400 text-sm md:text-xs text-center p-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
        <div class="w-full sm:w-1/2 md:w-1/3 flex flex-col p-3">
          <div className='bg-gray-800  rounded-lg shadow-lg overflow-hidden flex-1 flex flex-col'>
            <img src="https://images.unsplash.com/photo-1523978591478-c753949ff840?w=900" alt=".." />
            <p className='text-gray-400 text-sm md:text-xs text-center p-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          </div>
      </div>
      <div class="w-full sm:w-1/2 md:w-1/3 flex flex-col p-3">
        <div className='bg-gray-800  rounded-lg shadow-lg overflow-hidden flex-1 flex flex-col'>
          <img src="https://images.unsplash.com/photo-1523978591478-c753949ff840?w=900" alt=".." />
          <p className='text-gray-400 text-sm md:text-xs text-center p-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
      
      </div>
    </div>
  )
}

export default News