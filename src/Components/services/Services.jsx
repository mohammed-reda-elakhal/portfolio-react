import React from 'react'
import './services.css';
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services_container">
        <article className="service">
          <div className="service_head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service_list">
            <li>
              <BiCheck className="service_list-icon"/>
              <p>User Interface (UI) Design : creating visually appealing and interactive user interfaces for websites, web applications, mobile</p>
            </li>
            <li>
              <BiCheck className="service_list-icon"/>
              <p>Icon Design : designing custom icons and icon sets.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon"/>
              <p>Presentation Design : create visually engaging presentations and pitch decks by combining design elements, text, and imagery.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon"/>
              <p>collaboration features are also useful for facilitating remote workshops, design critiques</p>
            </li>
          </ul>
        </article>
        {/*End UI/UX*/}

        <article className="service">
          <div className="service_head">
            <h3>Web Developement </h3>
          </div>
          <ul className="service_list">
            <li>
              <BiCheck className="service_list-icon"/>
              <p>Website Development Build custom websites from scratch</p>
            </li>
            <li>
              <BiCheck className="service_list-icon"/>
              <p>Responsive Design: Ensure that websites are optimized for various devices and screen sizes</p>
            </li>
            <li>
              <BiCheck className="service_list-icon"/>
              <p>Utilize frontend frameworks like React to build dynamic and interactive user interfaces for web applications.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon"/>
              <p> Work closely with UI/UX designers to implement their designs accurately and efficiently</p>
            </li>
          </ul>
        </article>
        {/*web developement*/}

        <article className="service">
          <div className="service_head">
            <h3>Desktop Application</h3>
          </div>
          <ul className="service_list">
            <li>
              <BiCheck className="service_list-icon"/>
              <p>Custom Desktop Application Development</p>
            </li>
            <li>
              <BiCheck className="service_list-icon"/>
              <p>Develop database-driven applications using C# and SQL Server</p>
            </li>
            <li>
              <BiCheck className="service_list-icon"/>
              <p>Build applications to track and manage inventory, orders, and stock levels</p>
            </li>
            <li>
              <BiCheck className="service_list-icon"/>
              <p>Develop applications for organizing, storing, and retrieving documents</p>
            </li>
            <li>
              <BiCheck className="service_list-icon"/>
              <p>Design applications for medical practices, clinics, and hospitals to manage patient records</p>
            </li>
          </ul>
        </article>
        {/*End desktop application*/}

        <article className="service">
          <div className="service_head">
            <h3>Services Socials Media</h3>
          </div>
          <ul className="service_list">
            <li>
              <BiCheck className="service_list-icon"/>
              <p>Facebook Services :  Followers , Likes , Views , Comments </p>
            </li>
            <li>
              <BiCheck className="service_list-icon"/>
              <p>Instagram Services :  Followers , Likes , Views , Comments </p>
            </li>
            <li>
              <BiCheck className="service_list-icon"/>
              <p>TikTok Services :  Followers , Likes , Views , Comments </p>
            </li>
            <li>
              <BiCheck className="service_list-icon"/>
              <p>Threads Services :  Followers , Likes , Views </p>
            </li>
            <li>
              <BiCheck className="service_list-icon"/>
              <p>Twitter Services :  Followers , Likes , Views </p>
            </li>
          </ul>
        </article>
        {/*Service Socials media*/}

        
        <article className="service">
          <div className="service_head">
            <h3>Services Google Maps</h3>
          </div>
          <ul className="service_list">
            <li>
              <BiCheck className="service_list-icon"/>
              <p>Add you business in Google Maps</p>
            </li>
            <li>
              <BiCheck className="service_list-icon"/>
              <p>Reviews with custom comments for more trafic</p>
            </li>
            <li>
              <BiCheck className="service_list-icon"/>
              <p>Responsive informations for google maps</p>
            </li>
          </ul>
        </article>
        {/*Service Socials media*/}
      </div>
    </section>
  )
}

export default Services