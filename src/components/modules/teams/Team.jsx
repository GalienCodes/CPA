import React, { useState } from 'react';
import  {BsArrowRightShort} from 'react-icons/bs';
import  {AiFillCloseCircle,AiOutlineTwitter} from 'react-icons/ai';
import Modal from 'react-modal';

const customStyles = {
  content: {
    opacity: '5100%',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
const Team = () => {
  let subtitle;

  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className='max-w-2xl flex flex-col  mx-auto justify-center items-center font-globalFont px-2 md:px-0'>
      <h2 className='text-2xl md:text-3xl  text-white my-8 '>Our Team</h2>
 
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">

        <div class="w-full bg-transparent hover:bg-gray-800 rounded-lg p-4 flex flex-col justify-center items-center" key={1}>
            <div class="mb-2 relative">
                <img class="object-center object-cover rounded-full h-36 w-36" src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" alt="dan"/>
                <div className='absolute right-3 bottom-4 bg-gray-800 text-white text-3xl p-1 rounded-full cursor-pointer'>  
                  <BsArrowRightShort onClick={openModal}/>
                </div>
                {/* modal */}
                <Modal
                  isOpen={modalIsOpen}
                  onAfterOpen={""}afterOpenModal
                  onRequestClose={closeModal}
                  style={customStyles}
                  key={1}
                  id
                >
                  <p className='flex flex-col justify-end items-end text-3xl'>
                    <AiFillCloseCircle onClick={closeModal}>close</AiFillCloseCircle>
                  </p>
                 <div className='flex md:flex-row md:w-96 flex-col gap-1   '>
                    <div className='flex flex-col w-100 w-2/2 md:w-1/2 justify-center items-center px-2'>
                      <img class="object-center object-cover rounded-lg h-56 w-100 mb-4" src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" alt="dany"/>
                      <button className='bg-gray-700 text-white px-2 p-1 rounded-2xl flex flex-row'>
                        <AiOutlineTwitter/> <span className='ml-2 uppercase text-xs'>follow on twitter</span>
                      </button>

                    </div>
                    <div className='flex flex-col  w-2/2 md:w-1/2 '>
                      <p class="text-base  text-gray-700 font-bold ">Ellie Chicago</p>
                      <p class="text-base text-gray-400 font-normal mb-2">Software Engineer</p>
                      
                        <p  className=' text-gray-400 mb-4 text-sm'>
                        Ellie  Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                          Impedit voluptas ratione quos 
                          veritatis ut eveniet 
                          </p>
                      
                    </div>
                 </div>
                </Modal>
                {/* modal */}
            </div>
            <div class="text-left">
                <p class="l text-gray-300 font-medium ">Ellie Chicago</p>
                <p class="text-sm text-gray-400 font-normal">Software Engineer</p>
            </div>
        </div>
        {/* =========================2========================== */}
     
        <div class="w-full bg-transparent hover:bg-gray-800 rounded-lg p-4 flex flex-col justify-center items-center" key={2}>
            <div class="mb-2 relative">
                <img class="object-center object-cover rounded-full h-36 w-36" src="https://bilgambuyu.com/images/profile-main1.png" alt="bilga"/>
                <div className='absolute right-3 bottom-4 bg-gray-800 text-white text-3xl p-1 rounded-full cursor-pointer'>  
                  <BsArrowRightShort onClick={openModal}/>
                </div>
                {/* modal */}
                <Modal
                  isOpen={modalIsOpen}
                  onAfterOpen={"gagaafterOpenModal"}
                  onRequestClose={closeModal}
                  style={customStyles}
                  contentLabel="Example Modal2"
                  key={2}
                >
                  <p className='flex flex-col justify-end items-end text-3xl'>
                    <AiFillCloseCircle onClick={closeModal}>close</AiFillCloseCircle>
                  </p>
                 <div className='flex md:flex-row md:w-96 flex-col gap-1   '>
                    <div className='flex flex-col w-100 w-2/2 md:w-1/2 justify-center items-center px-2'>
                      <img class="object-center object-cover rounded-lg h-56 w-100 mb-4" src="https://bilgambuyu.com/images/profile-main1.png" alt="bilga"/>
                      <button className='bg-gray-700 text-white px-2 p-1 rounded-2xl flex flex-row'>
                        <AiOutlineTwitter/> <span className='ml-2 uppercase text-xs'>follow on twitter</span>
                      </button>

                    </div>
                    <div className='flex flex-col  w-2/2 md:w-1/2 '>
                    <p class="l text-gray-300 font-medium ">Mbuyu Bilga</p>
                    <p class="text-sm text-gray-400 font-normal">It Specialist</p>
                      
                        <p  className=' text-gray-400 mb-4 text-sm'>
                          Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                          Impedit voluptas ratione quos 
                          veritatis ut eveniet 
                          </p>
                      
                    </div>
                 </div>
                </Modal>
                {/* modal */}
            </div>
            <div class="text-left">
                <p class="l text-gray-300 font-medium ">Mbuyu Bilga 1</p>
                <p class="text-sm text-gray-400 font-normal capitalize">It Specialist</p>
            </div>
        </div>
    </div>

    </div>
  )
}

export default Team