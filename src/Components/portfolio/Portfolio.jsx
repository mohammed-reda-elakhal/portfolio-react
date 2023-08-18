import React from 'react'
import './portfolio.css';
import IMG1 from '../../assets/portfolio_ecrant.png'

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
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="portfolio portfolio_container">
        {
          data.map(({id,image,title,github})=>{
            return(
              <article key={id} className='portfolio_item'>
                <div className="portfolio_img">
                  <img src={image} alt="" />
                </div>
                <h3>{title}</h3>
                <a href={github} className='btn' target='_blanck'>Github</a>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio