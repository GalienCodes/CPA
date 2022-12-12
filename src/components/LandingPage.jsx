
import React from 'react'
import About from './modules/About'
import Become from './modules/Become'
import Contact from './modules/Contact'
import Contriute from './modules/Contriute'
import Footer from './modules/Footer'
import Fqa from './modules/fqa/Fqa'
import HeroPage from './modules/HeroPage'
import Jobs from './modules/Jobs'
import SinglePartner from './modules/members/SinglePartner'
import News from './modules/News'
import Profits from './modules/profits/Profits'
import Team from './modules/Team'


const LandingPage = () => {
  return (
    <>
      <HeroPage/>
      {/* <Profits/> */}
      {/* <SinglePartner/> */}
      {/* <Become/> */}
      {/* <Fqa/> */}
      {/* <News/> */}
      {/* <Jobs/> */}
      {/* <Contriute/> */}
      <Team/>
      <About/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default LandingPage
