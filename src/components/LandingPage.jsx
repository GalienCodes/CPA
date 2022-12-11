
import React from 'react'
import Become from './modules/Become'
import Contriute from './modules/Contriute'
import Footer from './modules/Footer'
import Fqa from './modules/fqa/Fqa'
import HeroPage from './modules/HeroPage'
import Jobs from './modules/Jobs'
import SinglePartner from './modules/members/SinglePartner'
import News from './modules/News'
import Profits from './modules/profits/Profits'

const LandingPage = () => {
  return (
    <>
      <HeroPage/>
      <SinglePartner/>
      <Become/>
      <Fqa/>
      <News/>
      <Jobs/>
      <Contriute/>
      <Footer/>
    </>
  )
}

export default LandingPage
