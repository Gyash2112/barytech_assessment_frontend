import React, { useState } from 'react';

const categories = ['Food', 'Clothes', 'Travel', 'Miscellaneous'];

const BudgetFormModal = ({ onSubmit }) => {
  const [form, setForm] = useState({
    month: '',
    categoryBudgets: categories.map((cat) => ({ category: cat, limit: '' })),
  });

  const handleChange = (i, value) => {
    const updated = [...form.categoryBudgets];
    updated[i].limit = value;
    setForm({ ...form, categoryBudgets: updated });
  };

  const submit = () => {
    onSubmit(form);
    setForm({
      month: '',
      categoryBudgets: categories.map((cat) => ({ category: cat, limit: '' })),
    });
  };

  return (
    <div style={{ marginTop: '1rem' }}>
      <h4>Add / Update Budget</h4>
      <input
        type="month"
        value={form.month}
        onChange={(e) => setForm({ ...form, month: e.target.value })}
      />
      {form.categoryBudgets.map((cat, i) => (
        <div key={cat.category}>
          <label>{cat.category}:</label>
          <input
            type="number"
            value={cat.limit}
            onChange={(e) => handleChange(i, e.target.value)}
          />
        </div>
      ))}
      <button onClick={submit}>Submit</button>
    </div>
  );
};

export default BudgetFormModal;
