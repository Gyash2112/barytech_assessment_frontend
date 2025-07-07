const SummaryCard = ({ label, value, color }) => {
  return (
    <div
      style={{
        background: color,
        padding: '1rem',
        borderRadius: '8px',
        color: 'white',
        flex: 1,
        textAlign: 'center',
        boxShadow: '0 0 6px rgba(0,0,0,0.1)',
      }}
    >
      <h4>{label}</h4>
      <h2>₹{value}</h2>
    </div>
  );
};

export default SummaryCard;
