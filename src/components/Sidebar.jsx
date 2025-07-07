import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const CHILD_SIDEBAR_CONFIG = [
  { id: 1, name: 'Dashboard' },
  { id: 2, name: 'Transactions' },
];

const PARENT_SIDEBAR_CONFIG = [
  { id: 1, name: 'Dashboard' },
  { id: 2, name: 'Budgets' },
];

const Sidebar = ({ current, setCurrent }) => {
  const menu = ['dashboard', 'budgets'];

  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const renderParentSidebar = () => (
    <>
      <h3>Parent Panel</h3>
      {menu.map((item) => (
        <div
          key={item}
          onClick={() => setCurrent(item)}
          style={{
            marginTop: '1rem',
            padding: '0.5rem',
            backgroundColor: current === item ? '#007bff' : 'transparent',
            color: current === item ? '#fff' : '#000',
            cursor: 'pointer',
            borderRadius: '4px',
          }}
        >
          {item === 'dashboard' ? 'Dashboard' : 'Budgets'}
        </div>
      ))}
    </>
  );

  const renderChildSidebar = () => <h3>Child Panel</h3>;

  return (
    <div
      style={{
        width: '200px',
        height: '100vh',
        borderRight: '1px solid #ccc',
        padding: '1rem',
        backgroundColor: '#f8f9fa',
      }}
    >
      {user.role === 'parent' ? renderParentSidebar() : renderChildSidebar()}

      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Sidebar;
