import React from 'react'
import './header.css';
import CTA from './CTA';
import Me from './../../assets/me.png'
import Header_social from './Header_social';

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello i'm </h5>
        <h1>Mohammed Reda Elakhal</h1>
        <h5 className="text-light">
          Software Developper
        </h5>
        <CTA/>
        <Header_social></Header_social>
        <div className="me">
          <img src={Me} alt="" />
        </div>
        <a href="#contact" className='scroll_down'> Scroll Down</a>
        
      </div>
    </header>
  )
}

export default Header