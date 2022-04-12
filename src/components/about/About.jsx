import React from 'react'
import './about.css'
import { Container,Row,Col } from 'reactstrap'
import aboutImg from '../../assets/images/hero__img.png'

function About() {
  return (
      <section id="about">
          <Container>
              <Row>
                  <Col lg='12' className='mb-5'><h2>About ME</h2></Col>

                  <Col lg='4' md='3'>
                      <div className="about__btns">
                          <button className="about__btn">About Me</button>
                          <button className="about__btn">Education</button>
                          <button className="about__btn">Skills</button>
                          <button className="about__btn">Certificates</button>
                      </div>
                  </Col>

                  <Col lg='8' md='9'>
                      <div className="about__content__wrapper d-flex gap-5">
                          <div className="about__img w-25">
                              <img src={aboutImg} alt="" className='w-100' />
                          </div>
                          <div className="about__content">
                              <h2>I'm Arijit Das</h2>
                              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis itaque quasi impedit alias enim recusandae, excepturi non quis voluptatibus eligendi. Sapiente, itaque repellendus natus cum nihil odit quasi dicta dolorum.</p>

                              <div className="social__links">
                                  <h6>Connect with me!!</h6>
                                  <span><a href='https://github.com/arijit2002'><i class="ri-github-line"></i></a></span>
                                  <span><a href='https://www.linkedin.com/in/arijit-das-30140620a/'><i class="ri-linkedin-fill"></i></a></span>
                              </div>
                          </div>
                      </div>
                  </Col>
              </Row>
          </Container>
      </section>
  )
}

export default About