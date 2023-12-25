import React, { useEffect, useState } from 'react'
import MenuBar from '../menu bar/MenuBar'
import './ServiceAdmin.css'
import axios from 'axios'
import { FaPenToSquare } from "react-icons/fa6";
import { MdDeleteSweep } from "react-icons/md";
import { Link } from 'react-router-dom';

function ServiceList() {
    const [service , setService] =  useState([])

    useEffect(()=>{
        axios.get('http://localhost:5000/api/service')
      .then(res => {
        setService(res.data);
      })
      .catch(err => console.log(err.message));
    },[])

    const handleDelete = async (id) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this service?");
        if (confirmDelete) {
          try {
            await axios.delete(`http://localhost:5000/api/service/${id}`);
            // Update the list after deletion by refetching the updated data
            const updatedExperience = service.filter(item => item.id !== id);
            setService(updatedExperience);
          } catch (error) {
            console.error('Error deleting experience:', error);
          }
        }
      };

      
  return (
    <div className='admin'>
        <MenuBar/>
        <div className="container_experience">
            <h1>My Services</h1>
            <div className="content_experience">
                <div className='top_btn'>
                    <Link to='/dashboard-mohammed-reda091603/service_setting/new' className='new_btn'>Add Service</Link>
                </div>
                <table className='table_experience'>
                    <thead>
                        <tr>
                            <th>
                                Name
                            </th>
                            <th>
                                Description
                            </th>
                            <th>
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            service.map((service)=>(
                                <tr key={service.id}>
                                    <td>
                                        {service.name}
                                    </td>
                                    <td>
                                        {service.description}
                                    </td>
                                    <td className='action_content'>
                                        <Link to={`/dashboard-mohammed-reda091603/service_setting/update/${service.id}`} className='btn_action_u'>
                                            <FaPenToSquare />
                                        </Link>
                                        <Link className='btn_action_d' onClick={() => handleDelete(service.id)}>
                                            <MdDeleteSweep />
                                        </Link>
                                    </td>
                                </tr>
                            ))
                        }
                        
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}

export default ServiceList