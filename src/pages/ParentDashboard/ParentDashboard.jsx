import React, { useEffect, useState } from 'react';
import Sidebar from '../../components/Sidebar';
import useApi from '../../hooks/useApi';
import { useAuth } from '../../context/AuthContext';
import ChildTable from '../../components/ChildTable';
import BudgetTable from '../../components/BudgetTable';
import BudgetFormModal from '../../components/BudgetFormModal';
import AddChild from '../../components/AddChild';

const ParentDashboard = () => {
  const { get, post } = useApi();
  const [current, setCurrent] = useState('dashboard');
  const [children, setChildren] = useState([]);
  const [budgets, setBudgets] = useState([]);

  const { user } = useAuth();

  const fetchData = async () => {
    const childRes = await get(`/parent/get-all-users?id=${user._id}`); // Must be restricted to children only
    setChildren(childRes.data.filter((u) => u.role === 'child'));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const searchHandler = async (month) => {
    const budgetRes = await get(
      `/parent/get-general-budget-status?month=${month}`
    );
    setBudgets(budgetRes?.data);
  };

  const handleBudgetSubmit = async (data) => {
    await post('/parent/set-general-budget', data);
    const res = await get('/parent/get-general-budget-status?month=2025-08');
    setBudgets(res?.data);
  };

  const handleViewChild = (child) => {
    alert(`View details of ${child.name}`);
    // navigate(`/parent/child/${child._id}`) in future
  };

  return (
    <div style={{ display: 'flex' }}>
      <Sidebar current={current} setCurrent={setCurrent} />
      <div style={{ flex: 1, padding: '2rem' }}>
        {current === 'dashboard' && (
          <>
            <AddChild reloadHandler={fetchData} />
            <ChildTable children={children} onView={handleViewChild} />
          </>
        )}
        {current === 'budgets' && (
          <>
            <BudgetTable budgets={budgets} searchHandler={searchHandler} />
            <BudgetFormModal onSubmit={handleBudgetSubmit} />
          </>
        )}
      </div>
    </div>
  );
};

export default ParentDashboard;
