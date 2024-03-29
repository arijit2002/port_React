import React,{useEffect, useRef} from 'react'
import './hero-section.css'
import { Container,Row,Col } from 'reactstrap'
import heroImg from '../../assets/images/profile1.jpg'
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
  <section className='hero__section' id='nT2gMD=='>
      <Container>
          <Row>
              <Col lg='6' md='6'>
                  <div className="hero__content">
                      <h3><p className='mb-3'>Welcome to my Webpage</p></h3>
                      <h2 className='hero__title'>I'm <span ref={textRef}></span></h2>
                      <p>I’m a BCA 2nd year student at IEM, Kolkata focusing mainly on Backend Development and Cyber Security. </p>
                      <div className="hero__btns d-flex align-items-center-gap-4">
                          <button className="btn"><a href='#L52hqTSwqN==' className='btn'>Contact</a></button>
                      </div>
                  </div>
              </Col>
              <Col lg='6' md='6'>
                  <div className='text-pic'>
                      <div className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa non quas distinctio ducimus? Cum, non repudiandae corrupti, inventore illum nesciunt maxime eum at laborum quia magnam aliquid natus, in quas.</div>
                    <div className="hero__img">
                        <img src={heroImg} alt=''/>
                    </div>
                  </div>
                  
              </Col>
          </Row>
      </Container>
  </section>)
}

export default HeroSection