import React from 'react'
import './profits.css'
import '../hero.css'


const Profits = () => {
  return (
    <div className='max-w-2xl flex flex-col  mx-auto justify-center items-center font-globalFont px-2 md:px-0'>
      <div className='flex justify-center items-center'>
        <div class='pageOption'>
          <a href='#' class='option' data-inf='photo'>
            <img src='http://farm1.staticflickr.com//447//19585243302_fae38fd86f_o.jpg'/>
          </a>
          <a href='#' class='option' data-inf='cinema'>
            <img src='https://galien.dev/static/media/avatar.067d383f2573575f6ad8.JPG'/>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Profits