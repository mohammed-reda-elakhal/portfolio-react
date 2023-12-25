import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Login from './Components/admin/Login.jsx';
import HomeAdmin from './Components/admin/dashboard/Home/HomeAdmin.jsx';
import AboutAdmin from './Components/admin/dashboard/about admin/AboutAdmin.jsx';
import ExperienceList from './Components/admin/dashboard/experience admin/ExperienceList.jsx';
import NewExperience from './Components/admin/dashboard/experience admin/NewExperience.jsx';
import UpdateExperience from './Components/admin/dashboard/experience admin/UpdateExperience.jsx';
import ServiceList from './Components/admin/dashboard/Service admin/ServiceList.jsx';
import NewService from './Components/admin/dashboard/Service admin/NewService.jsx';
import UpdateService from './Components/admin/dashboard/Service admin/UpdateService.jsx';
import ProjetList from './Components/admin/dashboard/projet admin/ProjetList.jsx';
import NewProjet from './Components/admin/dashboard/projet admin/NewProjet.jsx';
import UpdateProjet from './Components/admin/dashboard/projet admin/UpdateProjet.jsx';
import CategoryList from './Components/admin/dashboard/Category admin/CategoryList.jsx'
import NewCategory from './Components/admin/dashboard/Category admin/NewCategory.jsx';
import UpdateCategory from './Components/admin/dashboard/Category admin/UpdateCategory.jsx';

const Root = () => {
  const isAuthenticated = !!localStorage.getItem('token'); // Check if token exists

  useEffect(() => {
    const handleUrlChange = () => {
      window.location.reload(); // Reload the page on URL change
    };

    window.addEventListener('popstate', handleUrlChange);

    return () => {
      window.removeEventListener('popstate', handleUrlChange);
    };
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        {/* If authenticated, redirect to Dashboard, else redirect to Login */}

        {isAuthenticated ? (
          <Route path="/dashboard-mohammed-reda091603" element={<HomeAdmin />}  />
          
        ) : (
          <Route path="/login-mohammed-reda091603" element={<Login />} />
        )}

        {isAuthenticated ? (
          <Route path="/dashboard-mohammed-reda091603/about_setting" element={<AboutAdmin/>} />
          
        ) : (
          <Route path="/login-mohammed-reda091603" element={<Login />} />
        )}
        
        {isAuthenticated ? (
          <Route path="/dashboard-mohammed-reda091603/experience_setting" element={<ExperienceList/>} />
          
        ) : (
          <Route path="/login-mohammed-reda091603" element={<Login />} />
        )}

        {isAuthenticated ? (
          <Route path="/dashboard-mohammed-reda091603/experience_setting/new" element={<NewExperience/>} />
          
        ) : (
          <Route path="/login-mohammed-reda091603" element={<Login />} />
        )}

        {isAuthenticated ? (
          <Route path="/dashboard-mohammed-reda091603/experience_setting/update/:id" element={<UpdateExperience/>} />
          
        ) : (
          <Route path="/login-mohammed-reda091603" element={<Login />} />
        )}

        {isAuthenticated ? (
          <Route path="/dashboard-mohammed-reda091603/service_setting" element={<ServiceList/>} />
          
        ) : (
          <Route path="/login-mohammed-reda091603" element={<Login />} />
        )}

        {isAuthenticated ? (
          <Route path="/dashboard-mohammed-reda091603/service_setting/new" element={<NewService/>} />
          
        ) : (
          <Route path="/login-mohammed-reda091603" element={<Login />} />
        )}

        {isAuthenticated ? (
          <Route path="/dashboard-mohammed-reda091603/service_setting/update/:id" element={<UpdateService/>} />
          
        ) : (
          <Route path="/login-mohammed-reda091603" element={<Login />} />
        )}
        {isAuthenticated ? (
          <Route path="/dashboard-mohammed-reda091603/projet_setting" element={<ProjetList/>} />
          
        ) : (
          <Route path="/login-mohammed-reda091603" element={<Login />} />
        )}
        {isAuthenticated ? (
          <Route path="/dashboard-mohammed-reda091603/projet_setting/new" element={<NewProjet/>} />
          
        ) : (
          <Route path="/login-mohammed-reda091603" element={<Login />} />
        )}
        {isAuthenticated ? (
          <Route path="/dashboard-mohammed-reda091603/projet_setting/update/:id" element={<UpdateProjet />} />
          
        ) : (
          <Route path="/login-mohammed-reda091603" element={<Login />} />
        )}
        {isAuthenticated ? (
          <Route path="/dashboard-mohammed-reda091603/category_setting" element={<CategoryList />} />
          
        ) : (
          <Route path="/login-mohammed-reda091603" element={<Login />} />
        )}
        {isAuthenticated ? (
          <Route path="/dashboard-mohammed-reda091603/category_setting/new" element={<NewCategory />} />
          
        ) : (
          <Route path="/login-mohammed-reda091603" element={<Login />} />
        )}
        {isAuthenticated ? (
          <Route path="/dashboard-mohammed-reda091603/category_setting/update/:id" element={<UpdateCategory />} />
          
        ) : (
          <Route path="/login-mohammed-reda091603" element={<Login />} />
        )}
      </Routes>
    </BrowserRouter>
  );
};

ReactDOM.render(<Root />, document.getElementById('root'));
