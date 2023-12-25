import React, { useEffect, useState } from 'react';
import MenuBar from '../menu bar/MenuBar';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

function UpdateExperience() {
  const { id } = useParams();
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

    axios.get(`http://localhost:5000/api/experience/${id}`)
      .then(res => {
        setName(res.data.name);
        setLevel(res.data.level);
        setIdCategory(res.data.categoryId);
      })
      .catch(err => console.log(err.message));
  }, [id]);

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
      await axios.put(`http://localhost:5000/api/experience/${id}`, formData);
      navigate('/dashboard-mohammed-reda091603/experience_setting');
    } catch (error) {
      console.error('Error updating experience:', error);
    }
  };

  return (
    <div className='admin'>
      <MenuBar />
      <div className="container_experience">
        <h1>Update experience</h1>
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
              <label htmlFor="level">Level :</label>
              <input
                type="text"
                name='level'
                autoComplete="off"
                onChange={(e) => { setLevel(e.target.value) }}
                value={level}
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

export default UpdateExperience;
