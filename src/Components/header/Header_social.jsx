import React from 'react'
import {BsLinkedin , BsInstagram , BsGithub} from 'react-icons/bs'


const Header_social = () => {
  return (
    <div className='Header_social'>
        <a href="www.instagram.com" target='_blank'>
            <BsInstagram/>
        </a>
        <a href="www.github.com"  target='_blank'>
            <BsGithub/>
        </a>
        <a href="www.linkedin.com"  target='_blank'>
            <BsLinkedin/>
        </a>
    </div>
  )
}

export default Header_social