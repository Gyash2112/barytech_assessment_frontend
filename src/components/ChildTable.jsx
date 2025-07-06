import React from 'react';

const ChildTable = ({ children, onView }) => (
  <div>
    <h3>All Children</h3>
    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {children.map((child) => (
          <tr key={child._id}>
            <td>{child.name}</td>
            <td>{child.email}</td>
            <td>
              <button onClick={() => onView(child)}>View</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default ChildTable;
