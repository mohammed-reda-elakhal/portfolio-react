import React, { useEffect, useState } from 'react'
import './HomeAdmin.css'
import MenuBar from '../menu bar/MenuBar'
import { FaBookBookmark } from "react-icons/fa6";
import { RiCustomerService2Line } from "react-icons/ri";
import { GoProjectSymlink } from "react-icons/go";
import axios from 'axios'
import me from '../../../../assets/me.png'
import { Link } from 'react-router-dom';

function HomeAdmin() {

    const [experienceCount, setExperienceCount] = useState(0);
    const [projetCount, setProjetCount] = useState(0);
    const [serviceCount, setServiceCount] = useState(0);

    useEffect(() => {
        axios.get('http://localhost:5000/api/experienceCount')
          .then(response => {
            const { count } = response.data; // Extract 'count' from the response object
            setExperienceCount(count); // Set 'experienceCount' state with the count value
          })
          .catch(error => {
            console.log(error);
          });
      }, []);

      useEffect(() => {
        axios.get('http://localhost:5000/api/projetCount')
          .then(response => {
            const { count } = response.data; // Extract 'count' from the response object
            setProjetCount(count); // Set 'experienceCount' state with the count value
          })
          .catch(error => {
            console.log(error);
          });
      }, []);
      useEffect(() => {
        axios.get('http://localhost:5000/api/serviceCount')
          .then(response => {
            const { count } = response.data; // Extract 'count' from the response object
            setServiceCount(count); // Set 'experienceCount' state with the count value
          })
          .catch(error => {
            console.log(error);
          });
      }, []);

  return (
    <div className='admin'>
        <MenuBar/>
        <div className='container_home'>
            <div className='header_home'>
                <Link to='/dashboard-mohammed-reda091603/experience_setting' className="item_box">
                    <div className='icon_home'>
                        <FaBookBookmark className='icon'/>
                    </div>
                    <div className='content'>
                        <h3>Experiences</h3>
                        <p>{experienceCount}</p>
                    </div>
                </Link>
                <div className="item_box">
                    <div className='icon_home'>
                        <RiCustomerService2Line className='icon'/>
                    </div>
                    <div className='content'>
                        <h3>Services</h3>
                        <p>{serviceCount}</p>
                    </div>
                </div>
                <div className="item_box">
                    <div  className='icon_home'>
                        <GoProjectSymlink className='icon'/>
                    </div>
                    
                    <div className='content'>
                        <h3>Projets</h3>
                        <p>{projetCount}</p>
                    </div>
                </div>
            </div>
            <div className='img_home'>
                <img src={me} alt="picture" />
            </div>
        </div>
    </div>
  )
}

export default HomeAdmin