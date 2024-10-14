import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"
import { useState } from 'react';

function App() { //Function name always capitalized
  const [todos, setTodos] = useState(["Go to gym"]);

  function handleAddTodo(newTodo){
    const newTodoList = [...todos, newTodo]
    setTodos(newTodoList);
  }

  return (
    <>
      < TodoInput handleAddTodo={handleAddTodo}/>
      < TodoList todos={todos}/>

      {/* It returns JSx; JS is run inside curly braces just like this comment */}
    </>
  )
}

export default App
