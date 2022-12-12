import React, { useState } from 'react';
import  {BsArrowRightShort} from 'react-icons/bs';

const Team = () => {
  const [showDialog, setShowDialog] = useState(false);
  return (
    <div className='max-w-2xl flex flex-col  mx-auto justify-center items-center font-globalFont px-2 md:px-0'>
      <h2 className='text-2xl md:text-3xl  text-white my-8 '>Our Team</h2>
 
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
      
        <div class="w-full bg-transparent hover:bg-gray-800 rounded-lg p-4 flex flex-col justify-center items-center">
            <div class="mb-2 relative">
                <img class="object-center object-cover rounded-full h-36 w-36" src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" alt="photo"/>
                <div className='absolute right-3 bottom-4 bg-gray-800 text-white text-3xl p-1 rounded-full cursor-pointer'>  
                  <BsArrowRightShort onClick={() => setShowDialog(!showDialog)}/>
                </div>
            </div>
            <div class="text-left">
                <p class="l text-gray-300 font-medium ">Dany Bailey</p>
                <p class="text-sm text-gray-400 font-normal">Software Engineer</p>
            </div>
        </div>
        <div class="w-full bg-transparent hover:bg-gray-800 rounded-lg p-4 flex flex-col justify-center items-center">
            <div class="mb-2">
                <img class="object-center object-cover rounded-full h-36 w-36" src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" alt="photo"/>
            </div>
            <div class="text-left">
                <p class="l text-gray-700 font-medium ">Dany Bailey</p>
                <p class="text-sm text-gray-400 font-normal">Software Engineer</p>
            </div>
        </div>
        <div class="w-full bg-transparent hover:bg-gray-800 rounded-lg p-4 flex flex-col justify-center items-center">
            <div class="mb-2">
                <img class="object-center object-cover rounded-full h-36 w-36" src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" alt="photo"/>
            </div>
            <div class="text-left">
                <p class="l text-gray-700 font-medium ">Dany Bailey</p>
                <p class="text-sm text-gray-400 font-normal">Software Engineer</p>
            </div>
        </div>
         <div class="w-full bg-transparent hover:bg-gray-800 rounded-lg p-4 flex flex-col justify-center items-center">
            <div class="mb-2">
                <img class="object-center object-cover rounded-full h-36 w-36" src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" alt="photo"/>
            </div>
            <div class="text-left">
                <p class="l text-gray-700 font-medium ">Dany Bailey</p>
                <p class="text-sm text-gray-400 font-normal">Software Engineer</p>
            </div>
        </div>
        <div class="w-full bg-transparent hover:bg-gray-800 rounded-lg p-4 flex flex-col justify-center items-center">
            <div class="mb-2">
                <img class="object-center object-cover rounded-full h-36 w-36" src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" alt="photo"/>
            </div>
            <div class="text-left">
                <p class="l text-gray-700 font-medium ">Dany Bailey</p>
                <p class="text-sm text-gray-400 font-normal">Software Engineer</p>
            </div>
        </div>
        <div class="w-full bg-transparent hover:bg-gray-800 rounded-lg p-4 flex flex-col justify-center items-center">
            <div class="mb-2">
                <img class="object-center object-cover rounded-full h-36 w-36" src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" alt="photo"/>

            </div>
            <div class="text-left">
                <p class="l text-gray-700 font-medium ">Dany Bailey</p>
                <p class="text-sm text-gray-400 font-normal">Software Engineer</p>
            </div>
        </div>
    </div>

    </div>
  )
}

export default Team