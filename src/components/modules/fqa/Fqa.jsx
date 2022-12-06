import React, { useState } from 'react'
import Question from './question';
import data from '../../../data'

const Fqa = () => {
  const [questions, setQuestions] = useState(data)
  return (
    <div className='max-w-lg flex flex-col  mx-auto justify-center items-center font-globalFont p-4 md:p-0'>
    <h2 className='text-2xl md:text-3xl  text-white my-8 '>FAQ</h2>
    <section className='info'>
          {questions.map((question) => {
            return (
              <Question key={question.id} {...question}></Question>
            );
          })}
        </section>
    </div>
  )
}

export default Fqa