import React, { useState } from 'react';

function Todos() {
  const [todos, setTodos] = useState(
    ['body moving','great balls of fire', 'hello darkness']
  )
  const [value, setValue] = useState()
  const handleSubmit = e => {
    e.preventDefault();
    addTodo(value)
    console.log(todos)
  }
  
  const addTodo = (todo) => {
    const newTodos = [...todos, todo]
    setTodos(newTodos)
  }
  const deleteTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
}

  return(
    <>
    <ul>
    {todos.map((element, index) => 
    <li key={index}>{element}
    <button onClick={() => deleteTodo(index)}>delete</button>
    </li>
    )
     }
    </ul>
  <form onSubmit={handleSubmit}>
  <input 
    type="text" 
    name="" 
    id="" 
    value={value}
    onChange={e => setValue(e.target.value)}
    />
    <input type="submit" value="Submit" />

    </form>
  </>
  );
};

export default Todos;
