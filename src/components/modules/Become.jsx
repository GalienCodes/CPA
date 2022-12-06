import React from 'react'
import fund from '../../assets/money_icon.png'

const Become = () => {
  return (
    <div className='max-w-2xl flex flex-col  mx-auto justify-center items-center font-globalFont px-2 md:px-0'>
      <h2 className='text-2xl md:text-3xl  text-white my-8 '>Become a member of CPA</h2>
      <p className='text-center text-gray-300 mb-8 text-lg mx-4'>As if serving the world wasn;t already enticing enough, being a member of CPA brings various benifits to you as a business owner</p>
      <div>
        <div className='flex flex-row gap-4 justify-center items-center mb-2 m-4'>
          <img src={fund} alt="fund" />
          <div>
            <h3 className='text-lg font-medium text-white'>Fundraising</h3>
            <p className='text-gray-300 text-medium text-sm'>Lorem, ipsum dolor sit amet
               consectetur adipisicing elit. Exercitationem ex id sit ratione non aspernatur!</p>
          </div>
        </div>
        <div className='flex flex-row gap-4 justify-center items-center mb-4 m-2'>
          <img src={fund} alt="fund" />
          <div>
            <h3 className='text-lg font-medium text-white'>Fundraising</h3>
            <p className='text-gray-300 text-medium text-sm'>Lorem, ipsum dolor sit amet
               consectetur adipisicing elit. Exercitationem ex id sit ratione non aspernatur!</p>
          </div>
        </div>
        <div className='flex flex-row gap-4 justify-center items-center mb-6 m-2'>
          <img src={fund} alt="fund" />
          <div>
            <h3 className='text-lg font-medium text-white'>Fundraising</h3>
            <p className='text-gray-300 text-medium text-sm'>Lorem, ipsum dolor sit amet
               consectetur adipisicing elit. Exercitationem ex id sit ratione non aspernatur!</p>
          </div>
        </div>
        <div className='flex flex-row gap-4 justify-center items-center mb-8 m-4'>
          <img src={fund} alt="fund" />
          <div>
            <h3 className='text-lg font-medium text-white'>Fundraising</h3>
            <p className='text-gray-300 text-medium text-sm'>Lorem, ipsum dolor sit amet
               consectetur adipisicing elit. Exercitationem ex id sit ratione non aspernatur!</p>
          </div>
        </div>
      </div>
        <button className='text-cente bg-white px-3 p-2 rounded-2xl '>SIGN UP</button>

    </div>
  )
}

export default Become