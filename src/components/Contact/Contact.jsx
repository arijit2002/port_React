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
          <Col lg='20'>
            <form id="form" ref={form} onSubmit={sendEmail}>
              <div className="field">
                <label for="from_name">Enter Your Name Here</label>
                <input className='write-name' type='text' name="from_name" required id="from_name"/>
              </div>
              <div className="field">
                <label for="message">Enter Your Message Here</label>
                <input className='write-message' type='text' name="message" required id="message"/>
              </div>
              <div className="field">
                <label for="reply_to">Enter Your MailID Here</label>
                <input className='write-mail' type='email' name="reply_to" required id="reply_to"/>
              </div>
              <input className='write' type="submit" id="button" value="Send"/>
            </form>
          </Col>
        </Row>
        
      </Container>
    </section>
  );
};

export default Contact