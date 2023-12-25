import React, { useEffect, useState } from 'react';
import './about.css';
import Me from './../../assets/me-about.png';
import { FaAward, FaUserAlt, FaFolderOpen } from 'react-icons/fa';
import axios from 'axios';

const About = () => {
  const [user, setUser] = useState({ description: '' });

  useEffect(() => {
    axios.get('http://localhost:5000/api/user/4')
      .then(res => setUser(res.data))
      .catch(err => console.log(err.message));
  }, [user.description]);

  const userDescription = user.description;

  const paragraphs = userDescription.split('\n');

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
          {paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
          <a href="#contact" className='btn btn-primary'>Let's talk</a>
        </div>
      </div>
    </section>
  );
};

export default About;
