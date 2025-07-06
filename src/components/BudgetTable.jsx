import React from 'react';

const BudgetTable = ({ budgets }) => (
  <div>
    <h3>General Budgets</h3>
    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
      <thead>
        <tr>
          <th>Month</th>
          <th>Category</th>
          <th>Limit</th>
        </tr>
      </thead>
      <tbody>
        {budgets?.data?.map((b) => (
          <tr key={`${b.month}-${b.category}`}>
            <td>2025-08</td>
            <td>{b.category}</td>
            <td>₹{b.limit}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default BudgetTable;
