import React from 'react'
import mailbox from '../../assets/mailbox_icon.png'
import  {FaGlobeAmericas,FaPhoneAlt} from 'react-icons/fa';
import  {GrMail} from 'react-icons/gr';
import Footer from './Footer';


const Contact = () => {
  return (
    <> 
      <div className='max-w-2xl flex flex-col  mx-auto justify-center items-center font-globalFont px-2 md:px-0'>
        <h2 className='text-2xl md:text-3xl  text-white my-8 '>Have some questions?</h2>
        <div className='flex flex-col md:flex-row justify-center items-center text-gray-300 mb-8 mx-4'>
          <p className='flex flex-row justify-center items-center'>
            <FaGlobeAmericas/> <span className='mx-2'>Chicago</span> 
          </p>
          <p className='flex flex-row justify-center items-center'>
            <FaPhoneAlt/> <span className='mx-2'>+256 726 006 513</span> 
          </p>
          <p className='flex flex-row justify-center items-center'>
            <GrMail/><span className='mx-2'>brad@consumerpowerinitiative.org</span>
          </p>
          </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          <img src={mailbox} alt="mailIcon" />
          <form action="#" className='flex flex-col gap-4 '>
            <input type="text" name="" id="" placeholder='Name' className='bg-gray-800 rounded-3xl border text-white'/>
            <input type="text" name="" id="" placeholder='Subject' className='bg-gray-800 rounded-3xl border text-white'/>
            <input type="text" name="" id="" placeholder='Email' className='bg-gray-800 rounded-3xl border text-white'/>
            <textarea name="" id="" cols="30" rows="3 " placeholder='Messaage' className='bg-gray-800 rounded-3xl border text-white' style={{width:"100%"}}></textarea>
            <button className='text-cente bg-white px-3 p-2 rounded-2xl '>SEND</button>
          </form>
        </div>
      </div>
      <Footer/>
    </>

  )
}

export default Contact