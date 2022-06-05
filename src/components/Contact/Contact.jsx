import React, { useRef } from 'react';
import { Container,Row,Col } from 'reactstrap'
import emailjs from '@emailjs/browser';
import './contact.css'

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_9b33w3e', 'template_5r6vgeh', form.current, 'HzGzeDCKI9m7C8jNz')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section className='contact' id='L52hqTSwqN=='>
      <Container>
        <Row>
          <Col lg='12' className='mb-5'><h2>Contact Me</h2></Col>
            <div className='test'>
              <div className='form-section'>
                <form id="form" ref={form} onSubmit={sendEmail}>
                  <div className="field">
                    <label for="from_name">Enter Your Name Here</label>
                    <input className='write-name' placeholder='first_name last_name' type='text' name="from_name" required id="from_name"/>
                  </div>
                  <div className="field">
                    <label for="message">Enter Your Message Here</label>
                    <input className='write-message' placeholder='message in short' type='text' name="message" required id="message"/>
                  </div>
                  <div className="field">
                    <label for="reply_to">Enter Your MailID Here</label>
                    <input className='write-mail' type='email' name="reply_to" required id="reply_to"/>
                  </div>
                  <input className='write' type="submit" id="button" value="Send"/>
                </form>
              </div>
              <div className="about__content w-75">
                <div className="social__links">
                  <h4 className='mb-3'>Connect with me!!</h4>
                  <span><a href='https://github.com/arijit2002' target='_blank' rel="noreferrer"><i class="ri-github-fill"></i></a></span>
                  <span><a href='https://www.linkedin.com/in/arijit-das-30140620a/' target='_blank' rel="noreferrer"><i class="ri-linkedin-fill"></i></a></span>
                </div>
              </div>
            </div>
             
        </Row>
      </Container>
    </section>
  );
};

export default Contact