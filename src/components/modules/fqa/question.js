import React, { useState } from 'react';
import { FiChevronUp, FiChevronDown } from 'react-icons/fi';
import  './fqa.css';
const Question = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <article className='question bg-gray-800 shadow-xl'>
      <header>
        <h4 className='text-medium font-medium text-white'>{title}</h4>
        <button className='btn text-gray-800 font-bold' onClick={() => setShowInfo(!showInfo)}>
          {showInfo ? <FiChevronUp /> : <FiChevronDown />}
        </button>
      </header>
      {showInfo && <p className='text-gray-400 text-medium text-sm'>{info}</p>}
    </article>
  );
};

export default Question;