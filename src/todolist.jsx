const TodoList = ({ header, description }) => {
  return (
    <div
      style={{
        position: 'relative',
        margin: '10px 0',
        padding: '10px',
        border: '1px solid black',
        borderRadius: '5px',
        backgroundColor: '#f9f9f9',
      }}
    >
      {/* Checkbox in top-right */}
      <input
        type="checkbox"
        style={{
          position: 'absolute',
          top: '10px',
          right: '10px',
          transform: 'scale(1.5)',
          cursor: 'pointer',
        }}
      />

      {/* Header and Description */}
      <h2
        style={{
          border: '1px solid black',
          backgroundColor: 'beige',
          padding: '10px',
          borderRadius: '5px',
          margin: 0,
        }}
      >
        {header}
      </h2>
      <p
        style={{
          border: '1px solid black',
          backgroundColor: '#faffd2e3',
          padding: '20px',
          borderRadius: '5px',
          marginTop: '10px',
        }}
      >
        {description}
      </p>
    </div>
  );
};

export default TodoList;
