import React,{useEffect, useRef} from 'react'
import './hero-section.css'
import { Container,Row,Col } from 'reactstrap'
import heroImg from '../../assets/images/hero__img.png'
import { init } from 'ityped'


function HeroSection() {
    const textRef=useRef()
    useEffect(()=>{
        init(textRef.current,{
            backDelay:1500,
            showCursor:true,
            strings:[
                'Arijit Das',
                'a Coder',
                'a Backend Web Developer',
                'a Cyber Security Enthusiast',
            ]
        })
    })
  return (
  <section className='hero__section' id='home'>
      <Container>
          <Row>
              <Col lg='6' md='6'>
                  <div className="hero__content">
                      <p className='mb-3'><h3>Welcome to my Webpage</h3></p>
                      <h2 className='hero__title'>I'm <span ref={textRef}></span></h2>
                      <p>I’m a BCA 2nd year student at IEM, Kolkata focusing mainly on Backend Development and Cyber Security. I'm hardworking, self-learner and I try to give my full potential in the role I am assigned with.</p>
                      <div className="hero__btns d-flex align-items-center-gap-4">
                          <button className="btn">Contact</button>
                      </div>
                  </div>
              </Col>
              <Col lg='6' md='6'>
                  <div className="hero__img">
                      <img src={heroImg} alt=''/>
                  </div>
              </Col>
          </Row>
      </Container>
  </section>)
}

export default HeroSection