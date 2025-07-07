import { useState } from 'react';

const BudgetTable = ({ budgets, searchHandler }) => {
  const [month, setMonth] = useState('');

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <div>
        <h3>General Budgets</h3>
        <input
          type="month"
          id="month"
          value={month}
          onChange={(e) => setMonth(e.target.value)}
        />
        <button onClick={() => searchHandler(month)}>Search</button>
      </div>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th>Month</th>
            <th>Category</th>
            <th>Limit</th>
          </tr>
        </thead>
        <tbody style={{ textAlign: 'center' }}>
          {budgets?.data?.map((b) => (
            <tr key={`${b.month}-${b.category}`}>
              <td>{month}</td>
              <td>{b.category}</td>
              <td>₹{b.limit}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BudgetTable;
