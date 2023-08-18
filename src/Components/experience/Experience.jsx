import React from 'react'
import './experience.css';
import {BsPatchCheckFill} from 'react-icons/bs'



const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skill I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience_container">

        {/*start section 1*/}
        <div className="language_programming">
          <h3>Web Developpement </h3>
         <div className="experience_content">
           
         <article className="experience_detail">
            <BsPatchCheckFill className='experience_icon'/>
            <div>
              <h4>HTML</h4>
              <small className="text-light">
                Experienced
              </small>
            </div>
          </article>

          <article className="experience_detail">
            <BsPatchCheckFill className='experience_icon'/>
            <div>
              <h4>CSS</h4>
              <small className="text-light">
                Experienced
              </small>
            </div>
          </article>

          <article className="experience_detail">
            <BsPatchCheckFill className='experience_icon'/>
            <div>
            <h4>REACT</h4>
            <small className="text-light">
              Experienced
            </small>
            </div>
          </article>

          <article className="experience_detail">
            <BsPatchCheckFill className='experience_icon'/>
            <div>
            <h4>BOOSTRAP</h4>
            <small className="text-light">
              Experienced
            </small>
            </div>
          </article>
         </div>
        </div>
        {/*start section 2 */}
        <div className="base_donnée">
          <h3>database administration</h3>
          <div className="experience_content">
          <article className="experience_detail">
            <BsPatchCheckFill className='experience_icon'/>
           <div>
           <h4>SQL SERVER</h4>
            <small className="text-light">
              Experienced
            </small>
           </div>
          </article>
          <article className="experience_detail">
            <BsPatchCheckFill className='experience_icon'/>
            <div>
            <h4>ORACLE</h4>
            <small className="text-light">
              Experienced
            </small>
            </div>
          </article>

          <article className="experience_detail">
            <BsPatchCheckFill className='experience_icon'/>
            <div>
            <h4>MY SQL</h4>
            <small className="text-light">
              Experienced
            </small>
            </div>
          </article>

          <article className="experience_detail">
            <BsPatchCheckFill className='experience_icon'/>
            <div>
            <h4>POWER BI</h4>
            <small className="text-light">
              Experienced
            </small>
            </div>
          </article>

          </div>
        </div>


         {/*start section 2 */}
         <div className="base_donnée">
          <h3>Design</h3>
          <div className="experience_content">
          <article className="experience_detail">
            <BsPatchCheckFill className='experience_icon'/>
           <div>
           <h4>Figma</h4>
            <small className="text-light">
              Experienced
            </small>
           </div>
          </article>
          <article className="experience_detail">
            <BsPatchCheckFill className='experience_icon'/>
            <div>
            <h4>Canva</h4>
            <small className="text-light">
              Experienced
            </small>
            </div>
          </article>

          <article className="experience_detail">
            <BsPatchCheckFill className='experience_icon'/>
            <div>
            <h4>Power AMC</h4>
            <small className="text-light">
              Experienced
            </small>
            </div>
          </article>

          <article className="experience_detail">
            <BsPatchCheckFill className='experience_icon'/>
            <div>
            <h4>UML Star</h4>
            <small className="text-light">
              Experienced
            </small>
            </div>
          </article>

          </div>
        </div>

         {/*start section 4 */}
         <div className="base_donnée">
          <h3>Desktop Application</h3>
          <div className="experience_content">
          <article className="experience_detail">
            <BsPatchCheckFill className='experience_icon'/>
           <div>
           <h4>C#</h4>
            <small className="text-light">
              Experienced
            </small>
           </div>
          </article>
          
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience