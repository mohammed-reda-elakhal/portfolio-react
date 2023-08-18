import React from 'react'
import './footer.css';
import {BsFacebook , BsInstagram} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer >
      <a href="#" className="footer_logo">BLACK SCRIPT</a>

      <ul className="permalink">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer_socials">
        <a href="https://www.facebook.com/profile.php?id=100027238536264&mibextid=LQQJ4d"><BsFacebook/></a>
        <a href="https://instagram.com/mohammed_reda_69?igshid=OGQ5ZDc2ODk2ZA=="><BsInstagram/></a>
      </div>

      <div className="footer_copy">
        <small>&copy; MOHAMMED REDA ELAKHAL .</small>
      </div>
    </footer>
  )
}

export default Footer