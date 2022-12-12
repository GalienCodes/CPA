import React, { useState } from 'react';
import people from './data';
import './index.css'
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';
const SinglePartner = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];
  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  };
  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };
  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };


  return (
    <div className='max-w-2xl flex flex-col  mx-auto justify-center items-center font-globalFont mb-8 px-4 md:px-0'>
      <h2 className='text-2xl md:text-3xl  text-white my-10 '>Meet some of our members</h2>
      <article className='review'>
        <div className="container-box">
          <div className='img-container flex-item-left'>
            <img src={image} alt={name} className='person-img' />
          </div>
          <div className='info flex-item-right'>
            <h3 className='company'>BOAS</h3>
            <p className='details'>{text}</p>
          </div>
        </div>
          <div className='button-container '>
            <button className='prev-btn  bg-gray-700 p-2 rounded-3xl shadow-2xl' onClick={prevPerson}>
              <FaChevronLeft />
            </button>
            <button className='next-btn  bg-gray-700 p-2 rounded-3xl shadow-2xl' onClick={nextPerson}>
              <FaChevronRight />
            </button>
          </div>
      </article>
    </div>
  );
};

export default SinglePartner;