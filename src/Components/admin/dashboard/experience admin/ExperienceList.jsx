import React, { useEffect, useState } from 'react'
import MenuBar from '../menu bar/MenuBar'
import './ExperienceAdmin.css'
import axios from 'axios'
import { FaPenToSquare } from "react-icons/fa6";
import { MdDeleteSweep } from "react-icons/md";
import { Link } from 'react-router-dom';

function ExperienceList() {
    const [experience , setExperience] =  useState([])

    useEffect(()=>{
        axios.get('http://localhost:5000/api/experience')
      .then(res => {
        setExperience(res.data);
      })
      .catch(err => console.log(err.message));
    },[])

    
    const handleDelete = async (id) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this experience?");
        if (confirmDelete) {
          try {
            await axios.delete(`http://localhost:5000/api/service/${id}`);
            // Update the list after deletion by refetching the updated data
            const updatedExperience = experience.filter(item => item.id !== id);
            setExperience(updatedExperience);
          } catch (error) {
            console.error('Error deleting experience:', error);
          }
        }
      };

  return (
    <div className='admin'>
        <MenuBar/>
        <div className="container_experience">
            <h1>My Experiences</h1>
            <div className="content_experience">
                <div className='top_btn'>
                    <Link to='/dashboard-mohammed-reda091603/experience_setting/new' className='new_btn'>Add Experience</Link>
                </div>
                <table className='table_experience'>
                    <thead>
                        <tr>
                            <th>
                                Name
                            </th>
                            <th>
                                level
                            </th>
                            <th>
                                Category
                            </th>
                            <th>
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            experience.map((experience)=>(
                                <tr key={experience.id}>
                                    <td>
                                        {experience.name}
                                    </td>
                                    <td>
                                        {experience.level}
                                    </td>
                                    <td>
                                        {experience.category.username}
                                    </td>
                                    <td className='action_content'>
                                        <Link to={`/dashboard-mohammed-reda091603/experience_setting/update/${experience.id}`} className='btn_action_u'>
                                            <FaPenToSquare />
                                        </Link>
                                        <Link className='btn_action_d' onClick={() => handleDelete(experience.id)}>
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

export default ExperienceList