import React, { useEffect, useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import useApi from '../../hooks/useApi';
import SummaryCard from '../../components/SummaryCard';
import TransactionForm from '../../components/TransactionForm';
import TransactionList from '../../components/TransactionList';
import Sidebar from '../../components/Sidebar';

const ChildDashboard = () => {
  const { user } = useAuth();
  const { get, post } = useApi();

  console.log(user);

  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [current, setCurrent] = useState('transactions');

  const loadTransactions = async () => {
    const res = await get(`/transaction/get-transaction?userId=${user._id}`);
    setTransactions(res.data);
    setLoading(false);
  };

  const handleAddTransaction = async (txn) => {
    await post('/transaction/add-transaction', txn);
    loadTransactions();
  };

  useEffect(() => {
    loadTransactions();
  }, []);

  const totalIncome = transactions
    .filter((t) => t.type === 'income')
    .reduce((a, c) => a + c.amount, 0);
  const totalExpense = transactions
    .filter((t) => t.type === 'expense')
    .reduce((a, c) => a + c.amount, 0);
  const balance = totalIncome - totalExpense;

  const menuItems = [{ id: 'transactions', label: 'My Transactions' }];

  return (
    <div style={{ display: 'flex' }}>
      <Sidebar current={current} setCurrent={setCurrent} menu={menuItems} />

      <div style={{ flex: 1, padding: '2rem' }}>
        <h2>Welcome, {user?.name} 👋</h2>

        {current === 'transactions' && (
          <>
            <div style={{ display: 'flex', gap: '1rem', margin: '2rem 0' }}>
              <SummaryCard label="Income" value={totalIncome} color="#28a745" />
              <SummaryCard
                label="Expenses"
                value={totalExpense}
                color="#dc3545"
              />
              <SummaryCard label="Balance" value={balance} color="#007bff" />
            </div>

            <TransactionForm onSubmit={handleAddTransaction} />
            {loading ? (
              <p>Loading...</p>
            ) : (
              <TransactionList transactions={transactions} />
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default ChildDashboard;
