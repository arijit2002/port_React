import React from 'react'
import { Container } from 'reactstrap'
import './header.css'


const Header = () => {
  return <header className="header">
      <Container>
        <div className="navigation d-flex align-items-center justify-content-between">
            <div className="logo"><h4>𝓐𝓻𝓲𝓳𝓲𝓽 𝓓𝓪𝓼</h4></div>
                <div className="nav__menu">
                    <ul className="nav__list">
                        <li className="nav__item"><a href="#home">Home</a></li>
                        <li className="nav__item"><a href="#about">About</a></li>
                        <li className="nav__item"><a href="#services">Services</a></li>
                        <li className="nav__item"><a href="#portfolio">Portfolio</a></li>
                        <li className="nav__item"><a href="#contact">Contact</a></li>
                    </ul>
                </div>
                <div className="nav__right d-flex align-items-center gap-4">
                    <button className="btn">Let's Talk</button>
                    <span className="mobile__menu"><i className="ri-menu-5-line"></i></span>
                </div>

            </div>
        </Container>     
  </header>
}

export default Header