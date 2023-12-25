import React, { useState , useEffect } from 'react'
import MenuBar from '../menu bar/MenuBar'
import './AboutAdmin.css'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

function AboutAdmin() {

  const navigate = useNavigate();
  const [usern , setUser] = useState("");
  const [fullname , setFullname] = useState("");
  const [workname , setWorkname] = useState("");
  const [description , setDescription] = useState("");
  const [facebook , setFacebook] = useState("");
  const [instagram , setInstagram] = useState("");
  const [whatsap , setWhatsap] = useState("");
  const [linkedin , setLinkedin] = useState("");

  
  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/user/4');
      setUser(response.data.username);
      setFullname(response.data.fullName);
      setWorkname(response.data.workName);
      setDescription(response.data.description);
      setFacebook(response.data.facebook);
      setInstagram(response.data.instagram);
      setWhatsap(response.data.whatsap);
      setLinkedin(response.data.linkedin);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("usern",usern);
    formData.append("fullname",fullname);
    formData.append("workname",workname);
    formData.append("description",description);
    formData.append("facebook",facebook);
    formData.append("instagram",instagram);
    formData.append("whatsap",whatsap);
    formData.append("linkedin",linkedin);
    try {
      await axios.put(`http://localhost:5000/api/user/4`, formData);
      window.location.reload();

    } catch (error) {
      console.error('Error updating user data:', error);
    }
  };

  return (
    <div className='admin'>
      <MenuBar/>
      <div className='container_about'>
        <form onSubmit={handleSubmit}>
          <h1>My Infromation</h1>
          <div className="field_items">
            <div>
              <label htmlFor="username">Username :</label>
              <input 
                type="text" 
                name='username'
                autoComplete="off"
                value={usern}
                onChange={(e)=>{setUser(e.target.value)}}
              />
            </div>
            <div>
              <label htmlFor="fullName">Full Name :</label>
              <input 
                type="text" 
                name='fullName'
                autoComplete="off"
                value={fullname}
                onChange={(e)=>{setFullname(e.target.value)}}
              />
            </div>
            <div>
              <label htmlFor="workName">Work Name :</label>
              <input 
                type="text" 
                name='workName'
                autoComplete="off"
                value={workname}
                onChange={(e)=>{setWorkname(e.target.value)}}
              />
            </div>
            <div>
              <label htmlFor="description">Description :</label>
              <textarea 
                type="text" 
                name='description'
                autoComplete="off"
                cols={40}
                rows={10}
                value={description}
                onChange={(e)=>{setDescription(e.target.value)}}
              />
            </div>
            <div>
              <label htmlFor="facebook">Facebook :</label>
              <input 
                type="text" 
                name='facebook'
                autoComplete="off"
                value={facebook}
                onChange={(e)=>{setFacebook(e.target.value)}}
              />
            </div>
            <div>
              <label htmlFor="instagram">Instagram :</label>
              <input 
                type="text" 
                name='instagram'
                autoComplete="off"
                value={instagram}
                onChange={(e)=>{setInstagram(e.target.value)}}
              />
            </div>
            <div>
              <label htmlFor="linkedin">Linkedin :</label>
              <input 
                type="text" 
                name='linkedin'
                autoComplete="off"
                value={linkedin}
                onChange={(e)=>{setLinkedin(e.target.value)}}
              />
            </div>
            <div>
              <label htmlFor="whatssap">Whatssap :</label>
              <input 
                type="text" 
                name='whatssap'
                autoComplete="off"
                value={whatsap}
                onChange={(e)=>{setWhatsap(e.target.value)}}
              />
            </div>
          </div>
          <button className='btn_update' type='sumbit'>Update</button>
        </form>
      </div>
    </div>
  )
}

export default AboutAdmin