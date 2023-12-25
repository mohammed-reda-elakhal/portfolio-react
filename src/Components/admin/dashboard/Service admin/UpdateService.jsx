import React, { useEffect, useState } from 'react';
import MenuBar from '../menu bar/MenuBar';
import axios from 'axios';
import {useNavigate , useParams} from 'react-router-dom'

function UpdateService() {

    const {id} = useParams();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  useEffect(()=>{
    axios.get(`http://localhost:5000/api/service/${id}`)
  .then(res => {
    setName(res.data.name)
    setDescription(res.data.description)
  })
  .catch(err => console.log(err.message));
},[])

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);

    try {
      await axios.put(`http://localhost:5000/api/service/${id}`, formData);
      navigate('/dashboard-mohammed-reda091603/service_setting')

    } catch (error) {
      console.error('Error creating new experience:', error);
    }
  };

  return (
    <div className='admin'>
      <MenuBar />
      <div className="container_experience">
        <h1>New experience</h1>
        <form onSubmit={handleSubmit}>
          <div className="field_items">
            <div>
              <label htmlFor="name">Name :</label>
              <input
                type="text"
                name='name'
                autoComplete="off"
                onChange={(e) => { setName(e.target.value) }}
                value={name}
              />
            </div>
            <div>
              <label htmlFor="level">Description :</label>
              <textarea
                cols={50}
                rows={10}
                type="text"
                name='description'
                autoComplete="off"
                onChange={(e) => { setDescription(e.target.value) }}
                value={description}
              />
            </div>
            <button className='btn_update' type='submit'>Save</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default UpdateService;
