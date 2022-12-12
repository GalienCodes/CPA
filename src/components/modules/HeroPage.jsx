import React, { useRef } from 'react'
import './hero.css';
import logo_temp from '../../assets/CPA_logo_temp.png'
import NavBar from './NavBar';
import HeroScript from './HeroScript';
import { BsChevronCompactDown } from 'react-icons/bs';


const HeroPage = () => {
  const ref = useRef(null);

  const handleClick = () => {
    ref.current?.scrollIntoView({behavior: 'smooth'});
  };
  return (
    <>
    <NavBar/>
    <div className="hero flex flex-col justify-center items-center font-globalFont">
      <img src={logo_temp} alt="hlogo-temp" className='absolute md:top-48 top-40 w-24' />
      <p className='text-gray-500 md:mt-8 mb-4 md:mb-0'>Profit for good</p>
      <h2 className='text-white text-2xl' text-2xl>moving the world's </h2>
      <h2 className='text text-2xl text-white'><span className='text-orange-300 text-2xl'>profits</span>  to where they're</h2>
      <h2 className='text-orange-300 text-2xl mb-6 md:mb-0'>needed most</h2>
      <div className='absolute bottom-1 mb-20 md:mb-0 font-bold text-3xl text-white cursor-pointer'>
        <BsChevronCompactDown  onClick={handleClick}/>
      </div>
  
    </div>
      <HeroScript ref={ref}/>
      <div ref={ref}></div>
    </>


  )
}

export default HeroPage