import React, { useEffect, useState } from 'react'
import MenuBar from '../menu bar/MenuBar'
import './CategoryAdmin.css'
import axios from 'axios'
import { FaPenToSquare } from "react-icons/fa6";
import { MdDeleteSweep } from "react-icons/md";
import { Link } from 'react-router-dom';

function CategoryList() {
    const [category , setCategory] =  useState([])

    useEffect(()=>{
        axios.get('http://localhost:5000/api/category')
      .then(res => {
        setCategory(res.data);
      })
      .catch(err => console.log(err.message));
    },[])

    const handleDelete = async (id) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this service?");
        if (confirmDelete) {
          try {
            await axios.delete(`http://localhost:5000/api/category/${id}`);
            // Update the list after deletion by refetching the updated data
            const updatedExperience = category.filter(item => item.id !== id);
            setCategory(updatedExperience);
          } catch (error) {
            console.error('Error deleting experience:', error);
          }
        }
      };

  return (
    <div className='admin'>
        <MenuBar/>
        <div className="container_experience">
            <h1>Category</h1>
            <div className="content_experience">
                <div className='top_btn'>
                    <Link to='/dashboard-mohammed-reda091603/category_setting/new' className='new_btn'>Add Category</Link>
                </div>
                <table className='table_experience'>
                    <thead>
                        <tr>
                            <th>
                                Name
                            </th>
                            <th>
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            category.map((category)=>(
                                <tr key={category.id}>
                                    <td>
                                        {category.username}
                                    </td>
                                    <td className='action_content'>
                                        <Link to={`/dashboard-mohammed-reda091603/category_setting/update/${category.id}`} className='btn_action_u'>
                                            <FaPenToSquare />
                                        </Link>
                                        <Link className='btn_action_d' onClick={() => handleDelete(category.id)}>
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

export default CategoryList