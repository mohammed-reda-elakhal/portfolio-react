import React, { useEffect, useState } from 'react'
import './header.css';
import CTA from './CTA';
import Me from './../../assets/me.png'
import Header_social from './Header_social';
import axios from 'axios'

const Header = () => {
  
  const [user , setUser] = useState([]);


  useEffect(()=>{
    axios.get('http://localhost:5000/api/user/4').then( res => setUser(res.data)).catch(err => console.log(err.message))
  },[])
  return (
    <header>
          <div className="container header_container">
            <h5>Hello i'm </h5>
            <h1>{user.fullName}</h1>
            <h5 className="text-light">
              {user.workName}
            </h5>
            <CTA/>
            <Header_social></Header_social>
            <div className="me">
              <img src={Me} alt="" />
            </div>
            <a href="#contact" className='scroll_down'> Scroll Down</a>
          </div>
        
      
    </header>
  )
}

export default Header