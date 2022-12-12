import React, { useState } from 'react';
import Modal from 'react-modal';
import  {BsArrowRightShort} from 'react-icons/bs';
import  {AiFillCloseCircle,AiOutlineTwitter} from 'react-icons/ai';
import Footer from '../Footer';

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


const Team= () => {
const [modal1IsOpen, setModal1IsOpen] = useState(false);
const [modal2IsOpen, setModal2IsOpen] = useState(false);
const [modal3IsOpen, setModal3IsOpen] = useState(false);
// ======================================
const [modal1sIsOpen, setModal1sIsOpen] = useState(false);
const [modal2sIsOpen, setModal2sIsOpen] = useState(false);
const [modal3sIsOpen, setModal3sIsOpen] = useState(false);
// =========================================
const openModal1 = () => {
setModal1IsOpen(true);
}

const openModal2 = () => {
setModal2IsOpen(true);
}
const openModal3 = () => {
setModal3IsOpen(true);
}

const closeModal1 = () => {
setModal1IsOpen(false);
}
const closeModal2 = () => {
setModal2IsOpen(false);
}
const closeModal3 = () => {
setModal3IsOpen(false);
}
// seconde time
const openModal1s = () => {
  setModal1sIsOpen(true);
  }
  
  const openModal2s = () => {
  setModal2sIsOpen(true);
  }
  const openModal3s = () => {
  setModal3sIsOpen(true);
  }
  
  const closeModal1s = () => {
  setModal1sIsOpen(false);
  }
  const closeModal2s = () => {
  setModal2sIsOpen(false);
  }
  const closeModal3s = () => {
  setModal3sIsOpen(false);
  }

return (
  <>
  <div className='max-w-2xl flex flex-col  mx-auto justify-center items-center font-globalFont px-2 md:px-0'>
     <h2 className='text-2xl md:text-3xl  text-white my-8 '>Our Team</h2>
 
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
      <div class="w-full bg-transparent hover:bg-gray-800 rounded-lg p-4 flex flex-col justify-center items-center" key={1}>
        {/* one start */}
            <div class="mb-2 relative">
                <img class="object-center object-cover rounded-full h-36 w-36" src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" alt="dan"/>
                <div className='absolute right-3 bottom-4 bg-gray-800 text-white text-3xl p-1 rounded-full cursor-pointer'>  
                  <BsArrowRightShort onClick={openModal1}/>
                </div>
                {/* modal */}
                <Modal
                  isOpen={modal1IsOpen} onRequestClose={closeModal1}
                  style={customStyles}                >
                  <p className='flex flex-col justify-end items-end text-3xl'>
                    <AiFillCloseCircle onClick={closeModal1}>close</AiFillCloseCircle>
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
                <p class="text-gray-300 font-medium ">Ellie Chicago</p>
                <p class="text-sm text-gray-400 font-normal">Software Engineer</p>
            </div>
        </div>
        {/* one end */}

        {/* two star*/}
        <div class="w-full bg-transparent hover:bg-gray-800 rounded-lg p-4 flex flex-col justify-center items-center" key={2}>
            <div class="mb-2 relative">
                <img class="object-center object-cover rounded-full h-36 w-36" src="https://bilgambuyu.com/images/profile-main1.png" alt="bilga"/>
                <div className='absolute right-3 bottom-4 bg-gray-800 text-white text-3xl p-1 rounded-full cursor-pointer'>  
                  <BsArrowRightShort onClick={openModal2}/>
                </div>
                {/* modal */}
                <Modal
                  isOpen={modal2IsOpen}
                  onAfterOpen={"gagaafterOpenModal"}
                  onRequestClose={closeModal2}
                  style={customStyles}
                  contentLabel="Example Modal2"
                
                >
                  <p className='flex flex-col justify-end items-end text-3xl'>
                    <AiFillCloseCircle onClick={closeModal2}>close</AiFillCloseCircle>
                  </p>
                 <div className='flex md:flex-row md:w-96 flex-col gap-1   '>
                    <div className='flex flex-col w-100 w-2/2 md:w-1/2 justify-center items-center px-2'>
                      <img class="object-center object-cover rounded-lg h-56 w-100 mb-4" src="https://bilgambuyu.com/images/profile-main1.png" alt="bilga"/>
                      <button className='bg-gray-700 text-white px-2 p-1 rounded-2xl flex flex-row'>
                        <AiOutlineTwitter/> <span className='ml-2 uppercase text-xs'>follow on twitter</span>
                      </button>

                    </div>
                    <div className='flex flex-col  w-2/2 md:w-1/2 '>
                    <p class=" text-gray-700 font-bold ">Mbuyu Bilga</p>
                    <p class="text-sm text-gray-400 font-medium">It Specialist</p>
                      
                        <p  className='text-gray-500 mb-4 text-sm'>
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
                <p class="l text-gray-300 font-medium ">Mbuyu Bilga</p>
                <p class="text-sm text-gray-400 font-normal capitalize">It Specialist</p>
            </div>
        </div>
        {/* two end*/}

        {/* three start*/}
        <div class="w-full bg-transparent hover:bg-gray-800 rounded-lg p-4 flex flex-col justify-center items-center" key={2}>
            <div class="mb-2 relative">
                <img class="object-center object-cover rounded-full h-36 w-36" src="https://i.ibb.co/9N9TbN7/Nancy.jpg" alt="bilga"/>
                <div className='absolute right-3 bottom-4 bg-gray-800 text-white text-3xl p-1 rounded-full cursor-pointer'>  
                  <BsArrowRightShort onClick={openModal3}/>
                </div>
                {/* modal */}
                <Modal
                  isOpen={modal3IsOpen}
                  onAfterOpen={"gagaafterOpenModal"}
                  onRequestClose={closeModal3}
                  style={customStyles}
                  contentLabel="Example Modal2"
                
                >
                  <p className='flex flex-col justify-end items-end text-3xl'>
                    <AiFillCloseCircle onClick={closeModal3}>close</AiFillCloseCircle>
                  </p>
                 <div className='flex md:flex-row md:w-96 flex-col gap-1   '>
                    <div className='flex flex-col w-100 w-2/2 md:w-1/2 justify-center items-center px-2'>
                      <img class="object-center object-cover rounded-lg h-56 w-100 mb-4" src="https://i.ibb.co/9N9TbN7/Nancy.jpg" alt="bilga"/>
                      <button className='bg-gray-700 text-white px-2 p-1 rounded-2xl flex flex-row'>
                        <AiOutlineTwitter/> <span className='ml-2 uppercase text-xs'>follow on twitter</span>
                      </button>

                    </div>
                    <div className='flex flex-col  w-2/2 md:w-1/2 '>
                    <p class=" text-gray-700 font-semibold ">Nancy West</p>
                    <p class="text-sm text-gray-400 font-medium">Graphics Designer</p>
                      
                        <p  className=' text-gray-500 mb-4 text-sm'>
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
                <p class="l text-gray-300 font-medium ">Nancy West </p>
                <p class="text-sm text-gray-400 font-normal capitalize">Graphics Designer</p>
            </div>
        </div>
        {/* three end */}
        {/* =================================2 times=================================== */}
        <div class="w-full bg-transparent hover:bg-gray-800 rounded-lg p-4 flex flex-col justify-center items-center" key={1}>
        {/* one start */}
            <div class="mb-2 relative">
                <img class="object-center object-cover rounded-full h-36 w-36" src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" alt="dan"/>
                <div className='absolute right-3 bottom-4 bg-gray-800 text-white text-3xl p-1 rounded-full cursor-pointer'>  
                  <BsArrowRightShort onClick={openModal1s}/>
                </div>
                {/* modal */}
                <Modal
                  isOpen={modal1sIsOpen} onRequestClose={closeModal1s}
                  style={customStyles}                >
                  <p className='flex flex-col justify-end items-end text-3xl'>
                    <AiFillCloseCircle onClick={closeModal1s}>close</AiFillCloseCircle>
                  </p>
                 <div className='flex md:flex-row md:w-96 flex-col gap-1   '>
                    <div className='flex flex-col w-100 w-2/2 md:w-1/2 justify-center items-center px-2'>
                      <img class="object-center object-cover rounded-lg h-56 w-100 mb-4" src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" alt="dany"/>
                      <button className='bg-gray-700 text-white px-2 p-1 rounded-2xl flex flex-row'>
                        <AiOutlineTwitter/> <span className='ml-2 uppercase text-xs'>follow on twitter</span>
                      </button>

                    </div>
                    <div className='flex flex-col  w-2/2 md:w-1/2 '>
                      <p class="text-base  text-gray-700 font-bold ">Ellie Chicago 2</p>
                      <p class="text-base text-gray-400 font-normal mb-2">Software Engineer</p>
                      
                        <p  className=' text-gray-400 mb-4 text-sm'>
                        2Ellie  Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                          Impedit voluptas ratione quos 
                          veritatis ut eveniet 
                          </p>
                      
                    </div>
                 </div>
                </Modal>
                {/* modal */}
            </div>
            <div class="text-left">
                <p class="text-gray-300 font-medium ">Ellie Chicago2</p>
                <p class="text-sm text-gray-400 font-normal">Software Engineer</p>
            </div>
        </div>
        {/* one end */}

        {/* two star*/}
        <div class="w-full bg-transparent hover:bg-gray-800 rounded-lg p-4 flex flex-col justify-center items-center" key={2}>
            <div class="mb-2 relative">
                <img class="object-center object-cover rounded-full h-36 w-36" src="https://i.ibb.co/7k92RKV/verdotte.jpg" alt="bilga"/>
                <div className='absolute right-3 bottom-4 bg-gray-800 text-white text-3xl p-1 rounded-full cursor-pointer'>  
                  <BsArrowRightShort onClick={openModal2s}/>
                </div>
                {/* modal */}
                <Modal
                  isOpen={modal2sIsOpen}
                  onAfterOpen={"gagaafterOpenModal"}
                  onRequestClose={closeModal2s}
                  style={customStyles}
                  contentLabel="Example Modal2"
                
                >
                  <p className='flex flex-col justify-end items-end text-3xl'>
                    <AiFillCloseCircle onClick={closeModal2s}>close</AiFillCloseCircle>
                  </p>
                 <div className='flex md:flex-row md:w-96 flex-col gap-1   '>
                    <div className='flex flex-col w-100 w-2/2 md:w-1/2 justify-center items-center px-2'>
                      <img class="object-center object-cover rounded-lg h-56 w-100 mb-4" src="https://i.ibb.co/7k92RKV/verdotte.jpg" alt="bilga"/>
                      <button className='bg-gray-700 text-white px-2 p-1 rounded-2xl flex flex-row'>
                        <AiOutlineTwitter/> <span className='ml-2 uppercase text-xs'>follow on twitter</span>
                      </button>

                    </div>
                    <div className='flex flex-col  w-2/2 md:w-1/2 '>
                    <p class=" text-gray-700 font-semibold capitalize">verdotte Doc</p>
                    <p class="text-sm text-gray-400 font-medium">Blockend Developer</p>
                      
                        <p  className='text-gray-500 mb-4 text-sm'>
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
                    <p class=" text-gray-300 font-medium capitalize">verdotte Doc</p>
                    <p class="text-sm text-gray-400 font-medium">Blockend Developer</p>
                      
            </div>
        </div>
        {/* two end*/}

        {/* three start*/}
        <div class="w-full bg-transparent hover:bg-gray-800 rounded-lg p-4 flex flex-col justify-center items-center" key={2}>
            <div class="mb-2 relative">
                <img class="object-center object-cover rounded-full h-36 w-36" src="https://i.ibb.co/t4JjjFn/derick.jpg" alt="bilga"/>
                <div className='absolute right-3 bottom-4 bg-gray-800 text-white text-3xl p-1 rounded-full cursor-pointer'>  
                  <BsArrowRightShort onClick={openModal3s}/>
                </div>
                {/* modal */}
                <Modal
                  isOpen={modal3sIsOpen}
                  onAfterOpen={"gagaafterOpenModal"}
                  onRequestClose={closeModal3s}
                  style={customStyles}
                  contentLabel="Example Modal2"
                
                >
                  <p className='flex flex-col justify-end items-end text-3xl'>
                    <AiFillCloseCircle onClick={closeModal3s}>close</AiFillCloseCircle>
                  </p>
                 <div className='flex md:flex-row md:w-96 flex-col gap-1   '>
                    <div className='flex flex-col w-100 w-2/2 md:w-1/2 justify-center items-center px-2'>
                      <img class="object-center object-cover rounded-lg h-56 w-100 mb-4" src="https://i.ibb.co/t4JjjFn/derick.jpg" alt="bilga"/>
                      <button className='bg-gray-700 text-white px-2 p-1 rounded-2xl flex flex-row'>
                        <AiOutlineTwitter/> <span className='ml-2 uppercase text-xs'>follow on twitter</span>
                      </button>

                    </div>
                    <div className='flex flex-col  w-2/2 md:w-1/2 '>
                    <p class="text-gray-700 font-semibold capitalize ">Dercik Razack </p>
                    <p class="text-sm text-gray-400 font-normal capitalize">Fontend Engineer</p>
                      
                        <p  className=' text-gray-500 mb-4 text-sm'>
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
                <p class="l text-gray-300 font-medium ">Derick Razack </p>
                <p className="text-sm text-gray-400 font-medium">Fontend Engineer</p>
            </div>
        </div>
        {/* three end */}
      </div>
    </div>
    <Footer/>
  </>
);
}

export default Team;