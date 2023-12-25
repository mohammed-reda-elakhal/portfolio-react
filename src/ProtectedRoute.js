// ProtectedRoute.jsx
import React from 'react';
import { Route, Navigate } from 'react-router-dom';

function ProtectedRoute({ element: Component, ...props }) {
  const isAuthenticated = localStorage.getItem('token');
  
  return isAuthenticated ? (
    <Route {...props} element={<Component />} />
  ) : (
    <Navigate to="/login-mohammed-reda091603" />
  );
}

export default ProtectedRoute;
