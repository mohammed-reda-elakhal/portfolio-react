import React, { useEffect, useState } from 'react'
import './portfolio.css';
import IMG1 from '../../assets/portfolio_ecrant.png'
import axios from 'axios'

import { BsGithub } from 'react-icons/bs';

const data = [
  {
    id:1 ,
    image : IMG1 ,
    title : "Resposive Portfolio With React",
    BsGithub : 'www.github.com'
  },
 
]
const Portfolio = () => {

  const [projet , setProjet ] = useState([])

  useEffect(()=>{
    axios.get('http://localhost:5000/api/projet')
    .then( res => setProjet(res.data))
    .catch(err => console.log(err))
},[])

  useEffect(()=>{

  },[])
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="portfolio portfolio_container">
        {
          projet.map((projet)=>{
            return(
              <article key={projet.id} className='portfolio_item'>
                <h4 className='title_projet'>{projet.category.username}</h4>
                <div className="portfolio_img">
                  <img src={projet.url} alt="" />
                </div>
                <h3>{projet.name}</h3>
                <p className='des_projet'>{projet.description}</p>
                <a href={projet.github} className='btn' target='_blanck'  rel="noreferrer" >Github</a>
                <a href={projet.github} className='btn' target='_blanck'  rel="noreferrer" >Linkedin</a>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio