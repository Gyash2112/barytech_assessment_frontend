import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const PrivateRoute = ({ children, role }) => {
  const { user } = useAuth();

  // Not logged in → redirect to login
  if (!user) return <Navigate to="/login" />;

  // Logged in but wrong role → redirect to home or unauthorized
  if (role && user.role !== role) return <Navigate to="/" />;

  return children;
};

export default PrivateRoute;
