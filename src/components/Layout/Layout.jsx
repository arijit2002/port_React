import React, { Fragment } from 'react'
import About from '../about/About'
import Header from '../Header/Header'
import HeroSection from '../hero-section/HeroSection'
import Portfolio from '../Portfolio/Portfolio'
import Contact from '../Contact/Contact'

const Layout = () => {
  return <Fragment>
      <Header/>
      <HeroSection/>
      <About/>
      <Portfolio/>
      <Contact/>
  </Fragment>
}

export default Layout