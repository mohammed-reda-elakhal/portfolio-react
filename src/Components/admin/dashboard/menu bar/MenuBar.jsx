import React, { useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { IoIosHome } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { FaBookBookmark } from "react-icons/fa6";
import { RiCustomerService2Line } from "react-icons/ri";
import { HiOutlineUserGroup } from "react-icons/hi";
import { GoProjectSymlink } from "react-icons/go";
import me from './../../../../assets/me-about.png'
import './menuBar.css'


function MenuBar() {

    const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      // Clear the token from localStorage
      localStorage.removeItem('token');
      // Call the backend logout endpoint
      await axios.post('http://localhost:5000/api/logout');
      navigate('/login-mohammed-reda091603');
    } catch (error) {
      console.error(error);
      alert('An error occurred while logging out');
    }
  };
  return (
    <div className='menu_bar'>
        <div className="header_bar">
            <img src={me} alt="" />
            <div>
                <h3>MOHAMMED REDA</h3>
                <p>FULL STACK</p>
            </div>
        </div>
        <div className="main_bar">
            <Link to='/dashboard-mohammed-reda091603' className="item">
                <IoIosHome />
                <span>Home</span>
            </Link>
            <Link to='/dashboard-mohammed-reda091603/about_setting' className="item">
                <FaUser />
                <span>About me</span>
            </Link>
            <Link to='/dashboard-mohammed-reda091603/experience_setting' className="item">
                <FaBookBookmark />
                <span>experience</span>
            </Link>
            <Link to='/dashboard-mohammed-reda091603/service_setting' className="item">
                <RiCustomerService2Line />
                <span>service</span>
            </Link>
            <Link to='/dashboard-mohammed-reda091603/projet_setting' className="item">
                <GoProjectSymlink />
                <span>projets</span>
            </Link>
            <Link to='/dashboard-mohammed-reda091603/category_setting' className="item">
                <HiOutlineUserGroup />
                <span>Category</span>
            </Link>
            
        </div>
        <button className='logout_btn' onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default MenuBar