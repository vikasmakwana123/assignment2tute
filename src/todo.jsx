import React, { useState } from 'react';

const Todo = ({ onAddTodo }) => {
  const [header, setHeader] = useState('');
  const [description, setDescription] = useState('');

  const handleAdd = (e) => {
    e.preventDefault(); // Prevent default form behavior
    if (header.trim() === '' || description.trim() === '') {
      window.alert('Please fill in both the header and description.');
    } else {
      onAddTodo({ header, description });
      setHeader('');
      setDescription('');
      window.alert('Todo added successfully!');
    }
  };

  return (
    <form
      onSubmit={handleAdd}
      style={{ padding: '10px', display: 'flex', flexDirection: 'column', gap: '10px' }}
    >
      <h1>Add your Todo</h1>
      <input
        type="text"
        value={header}
        onChange={(e) => setHeader(e.target.value)}
        placeholder="Enter your todo Header"
        className="todo_input"
        required // ✅ HTML5 required attribute
      />
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Enter your todo Description"
        className="todo_input"
        required // ✅ HTML5 required attribute
      />
      <button
        type="submit"
        style={{ backgroundColor: '#272fc7aa', color: 'whitesmoke' }}
      >
        Add Todo
      </button>
    </form>
  );
};

export default Todo;
