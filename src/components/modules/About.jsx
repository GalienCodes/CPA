import React from 'react'
import Footer from './Footer'

const About = () => {
  return (
    <>
    <div className='max-w-2xl flex flex-col  mx-auto justify-center items-center font-globalFont bg-gray-800 px-6 shadow-2xl'>
      <h2 className='text-lg md:text-2xl  text-white my-8 uppercase font-semibold'>About CPA</h2>
      <div>
          <h2 className='text-lg md:text-xl  text-white my-4 uppercase font-semibold mx-4' >Who we are</h2>
          <p className=' text-gray-300 mb-4 text-sm mx-4'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus perspiciatis
             libero ullam expedita. Quo eligendi maiores, dolor odit consectetur atque!
             libero ullam expedita. Quo eligendi maiores, dolor odit consectetur atque
          </p>
          <h2 className='text-lg md:text-xl text-white mt-8 uppercase font-semibold  mx-4'>we're different thant the rest</h2>
          <p className=' text-gray-300 my-4 text-sm mx-4'>
            Libero ullam expedita. Quo eligendi maiores, dolor odit consectetur atque
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus perspiciatis
             libero ullam expedita. Quo eligendi maiores, dolor odit consectetur atque!
          </p>
          <p className=' text-gray-300 mb-8 text-sm mx-4'>
            Libero ullam expedita. Quo eligendi maiores, dolor odit consectetur atque
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus perspiciatis
             libero ullam expedita. Quo eligendi maiores, dolor odit consectetur atque!
          </p>
          <div className='flex flex-row justify-center items-center m-4 gap-4'>
            <button className='text-cente bg-white px-3 p-2 rounded-2xl uppercase hover:bg-gray-200 text-gray-800 hover:text-gray-900'>Join us</button>
            <button className='text-cente bg-white px-3 p-2 rounded-2xl uppercase hover:bg-gray-200 text-gray-800 hover:text-gray-900'>contact us</button>
          </div>

      </div>
    </div>
    <Footer/>
    </>
  )
}

export default About