import React, { useState } from 'react';

const TodoList = ({ header, description }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked((prev) => !prev);
  };

  return (
    <div
      style={{
        position: 'relative',
        margin: '20px auto',
        padding: '20px',
        maxWidth: '600px',
        border: '1px solid #ccc',
        borderRadius: '10px',
        backgroundColor: '#ebebebff',
        boxShadow: '0 10px 10px rgba(0,0,0,0.1)',
        fontFamily: 'Segoe UI, sans-serif',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Checkbox in top-right */}
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
        style={{
          position: 'absolute',
          top: '15px',
          right: '15px',
          transform: 'scale(1.3)',
          cursor: 'pointer',
        }}
      />
      <label style={{textAlign:'left',fontSize:'17px',fontWeight:'bold'}}>Title:-</label> 
      {/* Header */}
      <h2
        style={{
          margin: '0 0 10px 0',
          padding: '10px 15px',
          borderRadius: '6px',
          border: '1.7px solid #999',
          backgroundColor: 'white',
          fontWeight: 'bold',
          fontSize: '1.5rem',
          textDecoration: isChecked ? 'line-through' : 'none',
          color: '#333',
        }}
      >
        {header}
      </h2>

      {/* Description */}
      <label style={{textAlign:'left',fontSize:'17px',fontWeight:'bold'}}>Your Todos:-</label> 
      <p
        style={{
          margin: 0,
          padding: '15px',
          borderRadius: '6px',
          border: '2px solid #ccc',
          backgroundColor: 'white',
          fontSize: '1.1rem',
          lineHeight: '1.6',
          textDecoration: isChecked ? 'line-through' : 'none',
        }}
      >
        {description}
      </p>
    </div>
  );
};

export default TodoList;
