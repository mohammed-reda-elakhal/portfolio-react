import React, { useEffect, useState } from 'react'
import {BsLinkedin , BsInstagram , BsGithub} from 'react-icons/bs'
import axios from 'axios';


const Header_social = () => {
  const [user, setUser] = useState({ description: '' });

  useEffect(() => {
    axios.get('http://localhost:5000/api/user/4')
      .then(res => setUser(res.data))
      .catch(err => console.log(err.message));
  }, []);
  return (
    <div className='Header_social'>
        <a href={user.instagram} target='_blank'>
            <BsInstagram/>
        </a>
        <a href="https://github.com/mohammed-reda-elakhal"  target='_blank'>
            <BsGithub/>
        </a>
        <a href={user.linkedin}  target='_blank'>
            <BsLinkedin/>
        </a>
    </div>
  )
}

export default Header_social