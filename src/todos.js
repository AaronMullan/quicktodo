import React, { useState } from 'react';

function Todos() {
  const [todos, setTodos] = useState(
    [todos]
  )
  return(
    <>
  <form>
  <input type="text" name="" id=""/>
  <input type="button" value="add todo"onClick = { setTodos }/>
    </form>
  </>
  );
};

export default Todos;
