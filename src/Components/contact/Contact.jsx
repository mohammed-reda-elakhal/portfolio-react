import React from 'react'
import './contact.css';
import {AiOutlineMail , AiOutlineWhatsApp} from 'react-icons/ai'
import {BsMessenger} from 'react-icons/bs'
import  { useRef } from 'react';
import emailjs from 'emailjs-com';


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_vzc5k78', 'template_0j5241c', form.current, 'aDAmTpfbqZdvdFq4C')
      e.target.reset();
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="option">
            <AiOutlineMail className='contact_icon'/>
            <h4>Email</h4>
            <h5>mohammedredaelakhale@gmail.com</h5>
            <a href="mailto:mohammedredaelakhale@gmail.com" target='_blank'>Send a message</a>
          </article>

          <article className="option">
            <BsMessenger className='contact_icon'/>
            <h4>Messenger</h4>
            <h5>Mohammed Reda</h5>
            <a href="https://web.facebook.com/messages/t/100027238536264" target='_blank'>Send a message</a>
          </article>

          <article className="option">
            <AiOutlineWhatsApp className='contact_icon'/>
            <h4>Whatssap</h4>
            <h5>+212 6 90 13 77 08</h5>
            <a href="https://wa.me/+212690137708" target='_blank'>Send a message</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" id="" placeholder='Your full name' required/>
          <input type="email" name='email' placeholder='Your email' required />
          <textarea name="message" rows="7" placeholder='Your message' required></textarea>
          <button className="btn btn-primary" type='submit'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact