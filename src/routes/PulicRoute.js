import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const PublicRoute = ({ children }) => {
  const { user } = useAuth();

  if (user) {
    return (
      <Navigate
        to={user.role === 'parent' ? '/parent-dashboard' : '/child-dashboard'}
      />
    );
  }

  return children;
};

export default PublicRoute;
