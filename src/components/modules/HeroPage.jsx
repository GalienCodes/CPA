import React from 'react'
import './hero.css';
import herogblobe from '../../assets/globe_background.png'
import logo_temp from '../../assets/CPA_logo_temp.png'
import NavBar from './NavBar';


const HeroPage = () => {
  return (
    <><NavBar/>
    {/* <div className="hero flex flex-col justify-center items-center font-globalFont"> */}
      {/* <img src={herogblobe} alt="hero-globe" className='max-w-4xl ' /> */}
      {/* <img src={logo_temp} alt="hlogo-temp" className='absolute top-40 w-24' />
      <p className='text-gray-500 mt-8'>Profit for good</p>
      <h2 className='text-white text-2xl' text-2xl>moving the world's </h2>
      <h2 className='text text-2xl text-white'><span className='text-orange-300 text-2xl'>profits</span>  to where they're</h2>
      <h2 className='text-orange-300 text-2xl'>needed most</h2>
    </div> */}
    </>


  )
}

export default HeroPage