import React from 'react'
import Become from './modules/Become'
import Fqa from './modules/fqa/Fqa'
import HeroPage from './modules/HeroPage'
import Members from './modules/Members'
import News from './modules/News'
import Profits from './modules/profits/Profits'

const LandingPage = () => {
  return (
    <>
      <HeroPage/>
      {/* <Profits/> */}
      {/* <Members/> */}
      <Become/>
      <Fqa/>
      <News/>
    </>
  )
}

export default LandingPage