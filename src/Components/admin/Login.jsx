import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './login.css'

function Login() {
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/login', credentials);
      if (response.data.status === 'Success') {
        // Store the token in localStorage
        localStorage.setItem('token', response.data.token);
        navigate('/dashboard-mohammed-reda091603');
      } else {
        alert('Invalid credentials');
      }
    } catch (error) {
      console.error(error);
      alert('An error occurred while logging in');
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  return (
    <div className='body'>
        <div className='box'>
            <form onSubmit={handleSubmit}>
                <h2>Sing in</h2>
                <div className='input_box'>
                    <input
                        type="email"
                        name="email"
                        autoComplete="off"
                        value={credentials.email} // Added value attribute for controlled input
                        onChange={handleInputChange}
                        required = "required"
                    />
                    <span>email</span>
                    <i></i>
                </div>
                <div className='input_box'>
                    <input
                        type="password"
                        name="password"
                        autoComplete="off"
                        value={credentials.password} // Added value attribute for controlled input
                        onChange={handleInputChange}
                        required = "required"
                    />
                    <span>password</span>
                    <i></i>
                </div>
                <input className='btn_login' type='submit' value='Log in' />
            </form>
        </div>
    </div>
  );
}

export default Login;
