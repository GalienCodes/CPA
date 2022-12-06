import React from 'react'
import './fqa/fqa.css'

const Jobs = () => {
  return (
    <div className='max-w-2xl flex flex-col  mx-auto justify-center items-center font-globalFont px-2 md:px-0'>
      <h2 className='text-2xl md:text-3xl text-center text-white my-8 '>Looking for job ? <br />
      CPA compannies are hiring!</h2>
      <article className='question bg-gray-800 shadow-xl'>
        <div className='flex felx-row justify-between items-center'>
          <div>
            <h2  className='text-medium font-medium text-white'>Software Developer</h2>
            <h3  className='text-gray-300 text-medium text-sm'>Amazon | <span>Posted 4days ago</span></h3>
          </div>
          <button className='text-cente bg-white py-1 px-2 text-sm font-medium rounded-3xl'>APPLY ON COMPANY SITE</button>
        </div>
      </article>
      <article className='question bg-gray-800 shadow-xl'>
        <div className='flex felx-row justify-between items-center'>
          <div>
            <h2  className='text-medium font-medium text-white'>Software Developer</h2>
            <h3  className='text-gray-300 text-medium text-sm'>Amazon | <span>Posted 4days ago</span></h3>
          </div>
          <button className='text-cente bg-white py-1 px-2 text-sm font-medium rounded-3xl'>APPLY ON COMPANY SITE</button>
        </div>
      </article>
      <article className='question bg-gray-800 shadow-xl'>
        <div className='flex felx-row justify-between items-center'>
          <div>
            <h2  className='text-medium font-medium text-white'>Software Developer</h2>
            <h3  className='text-gray-300 text-medium text-sm'>Amazon | <span>Posted 4days ago</span></h3>
          </div>
          <button className='text-cente bg-white py-1 px-2 text-sm font-medium rounded-3xl'>APPLY ON COMPANY SITE</button>
        </div>
      </article>
        <article className='question bg-gray-800 shadow-xl'>
        <div className='flex felx-row justify-between items-center'>
          <div>
            <h2  className='text-medium font-medium text-white'>Software Developer</h2>
            <h3  className='text-gray-300 text-medium text-sm'>Amazon | <span>Posted 4days ago</span></h3>
          </div>
          <button className='text-cente bg-white py-1 px-2 text-sm font-medium rounded-3xl'>APPLY ON COMPANY SITE</button>
        </div>
      </article>
      
    </div>
  )
}

export default Jobs