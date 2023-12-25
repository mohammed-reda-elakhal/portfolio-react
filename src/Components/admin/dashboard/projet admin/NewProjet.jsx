import React, { useEffect, useState } from 'react';
import MenuBar from '../menu bar/MenuBar';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'

function NewProjet() {
  const [category, setCategory] = useState([]);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [github, setGithub] = useState('');
  const [linkedin, setLinkedin] = useState('');
  const [file, setFile] = useState("");
  const [preview, setPreview] = useState("");
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

  const loadImage = (e) => {
    const image = e.target.files[0];
    setFile(image);
    setPreview(URL.createObjectURL(image));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", name);
    formData.append("des", description);
    formData.append("category", idCategory);
    formData.append("file", file);
    formData.append("github", github);
    formData.append("linkedin", linkedin);


    try {
      await axios.post(`http://localhost:5000/api/projet`, formData);
      navigate('/dashboard-mohammed-reda091603/projet_setting')

    } catch (error) {
      console.error('Error creating new experience:', error);
    }
  };

  return (
    <div className='admin'>
      <MenuBar />
      <div className="container_experience">
        <h1>New Projet</h1>
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
              <label htmlFor="level">Description :</label>
              <input
                type="text"
                name='description'
                autoComplete="off"
                onChange={(e) => { setDescription(e.target.value) }}
              />
            </div>
            <div>
              <label htmlFor="level">Git Hub :</label>
              <input
                type="text"
                name='github'
                autoComplete="off"
                onChange={(e) => { setGithub(e.target.value) }}
              />
            </div>
            <div>
              <label htmlFor="level">Linkedin :</label>
              <input
                type="text"
                name='linkedin'
                autoComplete="off"
                onChange={(e) => { setLinkedin(e.target.value) }}
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
            <div>
              <label htmlFor="level">Image :</label>
              <input
                type="file"
                name='image'
                autoComplete="off"
                onChange={loadImage}
              />
              {preview ? (
                    <figure className="image_uploaded">
                        <img src={preview} alt="Preview Image" />
                    </figure>
                ) : (
                    ""
                )}
            </div>
            <button className='btn_update' type='submit'>Save</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default NewProjet;
