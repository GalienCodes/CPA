import React from 'react'

const Contriute = () => {
  return (
    <div className='max-w-2xl flex flex-col  mx-auto justify-center items-center font-globalFont'>
      <h2 className='text-2xl md:text-3xl  text-white my-8 text-center'>Contriute to Profit for Good: <br />
      Contact CPA today!</h2>
      <p className='text-center text-gray-300 mb-8 text-medium mx-4'>As if serving the world wasn;t already enticing enough, being a member of CPA brings various benifits to you as a business owner a member of CPA brings various benifits to you as a business owner</p>

      <form action="#" className='flex flex-col gap-4 m-4'>
        <input type="text" name="" id="" placeholder='Name' className='bg-gray-800 rounded-3xl border text-white'/>
        <input type="text" name="" id="" placeholder='Subject' className='bg-gray-800 rounded-3xl border text-white'/>
        <input type="text" name="" id="" placeholder='Email' className='bg-gray-800 rounded-3xl border text-white'/>
        <textarea name="" id="" cols="30" rows="6 " placeholder='Messaage' className='bg-gray-800 rounded-3xl border text-white' style={{width:"100%"}}></textarea>
        <button className='text-cente bg-white px-3 p-2 rounded-2xl '>SEND</button>
      </form>
    </div>
  )
}

export default Contriute