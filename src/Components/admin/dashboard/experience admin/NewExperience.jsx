import React, { useEffect, useState } from 'react';
import MenuBar from '../menu bar/MenuBar';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'

function NewExperience() {
  const [category, setCategory] = useState([]);
  const [name, setName] = useState('');
  const [level, setLevel] = useState('');
  const [idCategory, setIdCategory] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:5000/api/category')
      .then(res => {
        setCategory(res.data);
      })
      .catch(err => console.log(err.message));
  }, []);
  

  const handleCategoryChange = (e) => {
    setIdCategory(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("level", level);
    formData.append("categoryId", idCategory);

    try {
      await axios.post(`http://localhost:5000/api/experience`, formData);
      navigate('/dashboard-mohammed-reda091603/experience_setting')

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
              />
            </div>
            <div>
              <label htmlFor="level">Level :</label>
              <input
                type="text"
                name='level'
                autoComplete="off"
                onChange={(e) => { setLevel(e.target.value) }}
              />
            </div>
            <div>
              <label htmlFor="category">Category :</label>
              <select name='category' onChange={handleCategoryChange} value={idCategory}>
                <option value="">--Please choose an option--</option>
                {category.map(cat => (
                  <option key={cat.id} value={cat.id}>{cat.username}</option>
                ))}
              </select>
            </div>
            <button className='btn_update' type='submit'>Save</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default NewExperience;
