import React, { useEffect, useState } from 'react';
import MenuBar from '../menu bar/MenuBar';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'

function NewCategory() {

  const [name, setName] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);

    try {
      await axios.post(`http://localhost:5000/api/category`, formData);
      navigate('/dashboard-mohammed-reda091603/category_setting')

    } catch (error) {
      console.error('Error creating new experience:', error);
    }
  };

  
  return (
    <div className='admin'>
      <MenuBar />
      <div className="container_experience">
        <h1>New Category</h1>
        <form onSubmit={handleSubmit}>
          <div className="field_items">
            <div>
              <label htmlFor="name">Name :</label>
              <input
                type="text"
                name='name'
                autoComplete="off"
                onChange={(e) => { setName(e.target.value) }}
              />
            </div>
            <button className='btn_update' type='submit'>Save</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default NewCategory;
