import React from 'react';

const colorMap = {
  green: '#28a745',
  yellow: '#ffc107',
  red: '#dc3545',
};

const BudgetStatusCard = ({ category, limit, spent, percentUsed, status }) => {
  return (
    <div
      style={{
        borderLeft: `6px solid ${colorMap[status]}`,
        padding: '1rem',
        marginBottom: '1rem',
        background: '#f9f9f9',
        borderRadius: '6px',
      }}
    >
      <h4>{category}</h4>
      <p>Limit: ₹{limit}</p>
      <p>Spent: ₹{spent}</p>
      <p style={{ fontWeight: 'bold', color: colorMap[status] }}>
        Usage: {percentUsed}% ({status.toUpperCase()})
      </p>
    </div>
  );
};

export default BudgetStatusCard;
