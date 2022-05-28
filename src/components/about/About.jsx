import React,{ useState } from 'react'
import './about.css'
import { Container,Row,Col } from 'reactstrap'
import aboutImg from '../../assets/images/hero__img.png'
import Education  from './Education'
import Skills from './Skills'

function About() {
    const [aboutFilter,setAboutFilter]=useState('ABOUT')

  return (
      <section id="about">
          <Container>
              <Row>
                  <Col lg='12' className='mb-5'><h2>About Me</h2></Col>
                  <Col lg='4' md='3'>
                      <div className="about__btns d-flex flex-column align-items-center">
                          <button className="about__btn about__btn-active" onClick={()=>setAboutFilter('ABOUT')}>About Me</button>
                          <button className="about__btn" onClick={()=>setAboutFilter('EDUCATION')}>Education</button>
                          <button className="about__btn" onClick={()=>setAboutFilter('SKILLS')}>Skills</button>
                          <button className="about__btn">Certificates</button>
                      </div>
                  </Col>

                  <Col lg='8' md='9'>
                      {
                          aboutFilter === 'ABOUT' && (<div className='about__content__wrapper d-flex gap-5'>
                              <div className="about__img w-25">
                              <img src={aboutImg} alt="" className='w-100' />
                          </div>
                            
                          <div className="about__content w-75">
                              <h2>I'm Arijit Das</h2>
                              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis itaque quasi impedit alias enim recusandae, excepturi non quis voluptatibus eligendi. Sapiente, itaque repellendus natus cum nihil odit quasi dicta dolorum.</p>

                              <div className="social__links">
                                  <h6 className='mb-3'>Connect with me!!</h6>
                                  <span><a href='https://github.com/arijit2002' target='_blank' rel="noreferrer"><i class="ri-github-fill"></i></a></span>
                                  <span><a href='https://www.linkedin.com/in/arijit-das-30140620a/' target='_blank' rel="noreferrer"><i class="ri-linkedin-fill"></i></a></span>
                              </div>
                          </div>
                          </div>
                          )}
                      {
                          aboutFilter === 'EDUCATION' && <Education/>
                      }
                      {
                          aboutFilter === 'SKILLS' && <Skills/>
                      }
                  </Col>
              </Row>
          </Container>
      </section>
  )
}

export default About