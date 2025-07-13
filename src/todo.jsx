import React, { useState } from 'react'

const Todo = ({ onAddTodo }) => {
  const [header, setHeader] = useState('')
  const [description, setDescription] = useState('')

  const handleAdd = () => {
    if (header.trim() === '' || description.trim() === '') {
      window.alert('Please fill in both the header and description.')
    } else {
      onAddTodo({ header, description })
      setHeader('')
      setDescription('')
      window.alert('Todo added successfully!')
    }
  }

  return (
    <div style={{ padding: '10px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <h1>Add your Todo</h1>
      <input
        type="text"
        value={header}
        onChange={(e) => setHeader(e.target.value)}
        placeholder="Enter your todo Header"
        className="todo_input"
      />
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Enter your todo Description"
        className="todo_input"
      />
      <button
        style={{ backgroundColor: '#272fc7aa', color: 'whitesmoke' }}
        onClick={handleAdd}
      >
        Add Todo
      </button>
    </div>
  )
}

export default Todo
