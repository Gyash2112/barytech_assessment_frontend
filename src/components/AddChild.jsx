import React, { useState } from 'react';
import useApi from '../hooks/useApi';
import { useAuth } from '../context/AuthContext';

const AddChild = ({ reloadHandler }) => {
  const { post } = useApi();
  const { user } = useAuth();

  const [form, setForm] = useState({ name: '', email: '' });

  const handleCreateChild = async () => {
    const result = await post('/parent/create-child', {
      name: form.name,
      email: form.email,
      parentId: user._id,
    });

    alert(
      `The Temporary password for child ${form.name} is: ${result.data.tempPassword}`
    );
    reloadHandler();
  };

  return (
    <div>
      <input
        name="name"
        placeholder="Enter Child Name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />
      <input
        name="email"
        placeholder="Enter Child Email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />
      <button onClick={handleCreateChild}>Create Child</button>
    </div>
  );
};

export default AddChild;
