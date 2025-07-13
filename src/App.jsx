import { useState } from 'react'
import './App.css'
import Todo from './todo'
import TodoList from './todolist'

function App() {
  const [list, setList] = useState([])

  const addTodo = (todo) => {

    setList((prevList) => [...prevList, todo])
  }

  return (
    <>
      <div>
        <Todo onAddTodo={addTodo} />
        {list.map((todo, index) => (
          <TodoList key={index} header={todo.header} description={todo.description} />
        ))}

      </div>
    </>
  )
}

export default App
