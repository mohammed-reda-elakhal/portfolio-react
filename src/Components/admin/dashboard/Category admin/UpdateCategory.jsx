import React, { useEffect, useState } from 'react';
import MenuBar from '../menu bar/MenuBar';
import axios from 'axios';
import {useNavigate , useParams} from 'react-router-dom'

function NewCategory() {

  const [name, setName] = useState('');
  const navigate = useNavigate();
  const {id} = useParams()


  useEffect(()=>{
    axios.get(`http://localhost:5000/api/category/${id}`)
  .then(res => {
    setName(res.data.username)
  })
  .catch(err => console.log(err.message));
},[])


  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);

    try {
      await axios.put(`http://localhost:5000/api/category/${id}`, formData);
      navigate('/dashboard-mohammed-reda091603/category_setting')

    } catch (error) {
      console.error('Error creating new experience:', error);
    }
  };

  
  return (
    <div className='admin'>
      <MenuBar />
      <div className="container_experience">
        <h1>Update Category</h1>
        <form onSubmit={handleSubmit}>
          <div className="field_items">
            <div>
              <label htmlFor="name">Name :</label>
              <input
                type="text"
                name='name'
                autoComplete="off"
                value={name}
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
