import React from 'react'
import './about.css';
import Me from './../../assets/me-about.jpg'
import {FaAward , FaUserAlt , FaFolderOpen} from 'react-icons/fa'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_img">
            <img src={Me} alt="" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <div className="about_card">
              <FaAward className='about_icon'/>
              <h5>Eperience</h5>
              <small>3+ mounts working</small>
            </div>

            <div className="about_card">
              <FaUserAlt className='about_icon'/>
              <h5>Client</h5>
              <small>5+ Worldwide</small>
            </div>

            <div className="about_card">
              <FaFolderOpen className='about_icon'/>
              <h5>Projects</h5>
              <small>3+ Completes</small>
            </div>

          </div>
          <p>Welcome to my portfolio! I'm Mohammed Reda Elakhal, a dedicated and driven individual with a passion for the world of information technology. Armed with a comprehensive two-year diploma in Computer Engineering with a specialization in database administration, I am currently a student at EST Fes. My journey in the realm of technology has equipped me with a deep understanding of database systems and their intricate management. Through my academic pursuits and practical experiences, I have honed the skills necessary to navigate the complexities of the digital landscape. Join me as I showcase my proficiency in database administration and my commitment to pushing the boundaries of what's possible in the world of IT.</p>
          <a href="#contact" className='btn btn-primary'>Let's talk</a>
        </div>
      </div>
    </section>
  )
}

export default About