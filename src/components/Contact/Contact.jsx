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
      <form id="form" ref={form} onSubmit={sendEmail}>
          <div class="field">
            <label for="from_name">Enter Your Name Here</label>
            <input type="text" name="from_name" id="from_name"/>
          </div>
          <div class="field">
            <label for="message">Enter Your Message Here</label>
            <input type="text" name="message" id="message"/>
          </div>
          <div class="field">
            <label for="reply_to">Enter Your MailID Here</label>
            <input type="text" name="reply_to" id="reply_to"/>
          </div>

          <input type="submit" id="button" value="Send Email"/>
        </form>
      </Container>
    </section>
  );
};

export default Contact