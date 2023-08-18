import React, { useState } from 'react'
import './nav.css';
import {AiOutlineHome , AiOutlineUser} from 'react-icons/ai'
import {FiBook} from 'react-icons/fi'
import {RiServiceLine , RiContactsBook2Fill} from 'react-icons/ri'

const Nav = () => {
  const [active , setactive] = useState('#')

  return (
    <nav>
      <a href="#" onClick={()=>setactive('#')} className={active === '#' ? 'active' : ''}>
        <AiOutlineHome/>
      </a>
      <a href="#about" onClick={()=>setactive('#about')} className={active === '#about' ? 'active' : ''}>
        <AiOutlineUser/>
      </a>
      <a href="#experience" onClick={()=>setactive('#experience')} className={active === '#experience' ? 'active' : ''}>
        <FiBook/>
      </a>
      <a href="#services" onClick={()=>setactive('#services')} className={active === '#services' ? 'active' : ''}>
        <RiServiceLine/>
      </a>
      <a href="#contact" onClick={()=>setactive('#contact')} className={active === '#contact' ? 'active' : ''}>
        <RiContactsBook2Fill/>
      </a>
    </nav>
  )
}

export default Nav