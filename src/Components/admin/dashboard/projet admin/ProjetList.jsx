import React, { useEffect, useState } from 'react'
import MenuBar from '../menu bar/MenuBar'
import './ProjetAdmin.css'
import axios from 'axios'
import { FaPenToSquare } from "react-icons/fa6";
import { MdDeleteSweep } from "react-icons/md";
import { Link } from 'react-router-dom';

function ProjetList() {
  const [projet , setProjet] =  useState([])

    useEffect(()=>{
        axios.get('http://localhost:5000/api/projet')
      .then(res => {
        setProjet(res.data);
      })
      .catch(err => console.log(err.message));
    },[])

    const handleDelete = async (id) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this projet?");
        if (confirmDelete) {
          try {
            await axios.delete(`http://localhost:5000/api/projet/${id}`);
            // Update the list after deletion by refetching the updated data
            const updatedExperience = projet.filter(item => item.id !== id);
            setProjet(updatedExperience);
          } catch (error) {
            console.error('Error deleting projet:', error);
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
                    <Link to='/dashboard-mohammed-reda091603/projet_setting/new' className='new_btn'>Add Projet</Link>
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
                                Picture
                            </th>
                            <th>
                                Category
                            </th>
                            <th>
                                GitHub
                            </th>
                            <th>
                                Linkedin
                            </th>
                            <th>
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            projet.map((projet)=>(
                                <tr key={projet.id}>
                                    <td>
                                        {projet.name}
                                    </td>
                                    <td>
                                        {projet.description}
                                    </td>
                                    <td className='img_projet'>
                                        {
                                          <img src={projet.url} alt="" />
                                        }
                                    </td>
                                    <td>
                                        {projet.category.username}
                                    </td>
                                    <td>
                                        {projet.github}
                                    </td>
                                    <td>
                                        {projet.linkedin}
                                    </td>
                                    <td className='action_content'>
                                        <Link to={`/dashboard-mohammed-reda091603/projet_setting/update/${projet.id}`} className='btn_action_u'>
                                            <FaPenToSquare />
                                        </Link>
                                        <Link className='btn_action_d' onClick={() => handleDelete(projet.id)}>
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

export default ProjetList