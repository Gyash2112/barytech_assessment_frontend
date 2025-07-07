const TransactionList = ({ transactions }) => (
  <div>
    <h4>Recent Transactions</h4>
    <table style={{ width: '100%', marginTop: '1rem' }}>
      <thead>
        <tr>
          <th>Title</th>
          <th>Amount</th>
          <th>Category</th>
          <th>Type</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((txn) => (
          <tr key={txn._id}>
            <td>{txn.title}</td>
            <td>₹{txn.amount}</td>
            <td>{txn.category}</td>
            <td>{txn.type}</td>
            <td>{new Date(txn.date).toLocaleDateString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default TransactionList;
