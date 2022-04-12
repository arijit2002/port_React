import React from 'react'
import './hero-section.css'
import { Container,Row,Col } from 'reactstrap'
import heroImg from '../../assets/images/hero__img.png'


function HeroSection() {
  return <section>
      <Container>
          <Row>
              <Col lg='6' md='6'>
                  <div className="hero__content">
                      <p>Welcome to my Webpage</p>
                      <h5>Hi</h5>
                      <h2>I'm <span>Arijit Das</span></h2>
                      <p>I’m a BCA 2nd year student at IEM, Kolkata focusing mainly on Backend Development and Cyber Security. I'm hardworking, self-learner and I try to give my full potential in the role I am assigned with.</p>

                      <div className="hero__btns">
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
  </section>
}

export default HeroSection