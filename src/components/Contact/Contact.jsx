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
        <h2>Contact Me</h2>
        <Row>
          <Col lg='6' md='6'>
          <form id="form" ref={form} onSubmit={sendEmail}>
            <div className="field">
              <label for="from_name">Enter Your Name Here</label>
              <input className='write' type="text" name="from_name" id="from_name"/>
            </div>
            <div className="field">
              <label for="message">Enter Your Message Here</label>
              <input className='write' type="text" name="message" id="message"/>
            </div>
            <div className="field">
              <label for="reply_to">Enter Your MailID Here</label>
              <input className='write' type="text" name="reply_to" id="reply_to"/>
            </div>

            <input className='write' type="submit" id="button" value="Send Email"/>
          </form>
          </Col>
        </Row>
        
      </Container>
    </section>
  );
};

export default Contact