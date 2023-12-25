import React, { useEffect, useState } from 'react';
import './services.css';
import { BiCheck } from 'react-icons/bi';
import axios from 'axios';

const Services = () => {
  const [service, setService] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/service')
      .then(res => {
        setService(res.data);
      })
      .catch(err => console.log(err.message));
  }, []);

  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services_container">
        {service.map((serviceItem) => (
          <article className="service" key={serviceItem.id}>
            <div className="service_head">
              <h3>{serviceItem.name}</h3>
            </div>
            <ul className="service_list">
              {serviceItem.description && serviceItem.description.split('\n').map((paragraph, index) => (
                <li key={index}>
                  <BiCheck className="service_list-icon" />
                  <p>{paragraph}</p>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Services;
