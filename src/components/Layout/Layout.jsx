import React, { Fragment } from 'react'
import About from '../about/About'
import Header from '../Header/Header'
import HeroSection from '../hero-section/HeroSection'

const Layout = () => {
  return <Fragment>
      <Header/>
      <HeroSection/>
      <About/>
  </Fragment>
}

export default Layout